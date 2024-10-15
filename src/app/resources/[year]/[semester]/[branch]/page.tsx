import FilteredSubjects from '@/components/FilteredSubjects';
import { fetchSubjects } from '@/lib/fetchSubjects';


interface Resource {
    notes: Record<string, string>;
    question_bank: Record<string, string>;
    pyqs: {
        internals: Record<string, string>;
        final_exam: string;
    };
}

interface Subject {
    year: number;
    semester: number;
    subject: string;
    branch: string;
    resources: Resource;
}

async function getSubjects(year: string, semester: string, branch: string) {
    const subjects = await fetchSubjects(); 
    const yearInt = parseInt(year, 10);
    const semesterInt = parseInt(semester, 10);

    return subjects.filter((subject: Subject) =>
        subject.year === yearInt &&
        subject.semester === semesterInt &&
        subject.branch === branch
    );
}

const SubjectPage = async ({ params }: { params: { year: string, semester: string, branch: string } }) => {
    const { year, semester, branch } = params;
    const filteredSubjects = await getSubjects(year, semester, branch);

    return (
        <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <h1 className="text-4xl font-bold text-center mb-8">Filtered Resources</h1>
                <FilteredSubjects subjects={filteredSubjects} />
            </div>
        </div>
    );
};

export default SubjectPage;
