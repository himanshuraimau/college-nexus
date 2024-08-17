import { fetchSubjects } from '@/utils/fetchSubjects';
import SubjectCard from '@/components/SubjectCard';

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
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Filtered Resources</h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSubjects.length > 0 ? (
                        filteredSubjects.map((subject: Subject, idx: number) => (
                            <SubjectCard key={idx} subject={subject} />
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-full">No resources found for the selected criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubjectPage;