import FilteredSubjects from '@/components/FilteredSubjects'
import { fetchSubjects } from '@/lib/fetchSubjects'

interface Resource {
    notes: Record<string, string>
    question_bank: Record<string, string>
    pyqs: {
        internals: Record<string, string>
        final_exam: string
    }
}

interface Subject {
    year: number
    semester: number
    subject: string
    branch: string
    resources: Resource
}

async function getSubjects(year: string, semester: string, branch: string) {
    const subjects = await fetchSubjects()
    const yearInt = parseInt(year, 10)
    const semesterInt = parseInt(semester, 10)

    return subjects.filter((subject: Subject) =>
        subject.year === yearInt &&
        subject.semester === semesterInt &&
        subject.branch === branch
    )
}

const SubjectPage = async ({ params }: { params: { year: string, semester: string, branch: string } }) => {
    const { year, semester, branch } = params
    const filteredSubjects = await getSubjects(year, semester, branch)

    return (
        <div className="min-h-screen pt-8 relative overflow-hidden ">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-5"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--hero-text-gradient-from)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-64 h-64 bg-[var(--hero-text-gradient-to)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-64 h-64 bg-[var(--hero-text-gradient-from)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
                <h1 className="text-4xl font-black text-center mb-16">
                    <span className="relative">
                        <span className="absolute -inset-1 bg-[var(--resources-gradient-from)]/50 blur-xl rounded-lg"></span>
                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[var(--resources-gradient-from)] to-[var(--resources-gradient-to)]">
                            Filtered Resources
                        </span>
                    </span>
                </h1>
                <FilteredSubjects subjects={filteredSubjects} />
            </div>
        </div>
    )
}

export default SubjectPage