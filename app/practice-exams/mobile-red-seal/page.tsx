import ExamInterface from './ExamInterface';

export const metadata = {
  title: 'Red Seal Mobile Crane Operator Practice Exam | lilfoot',
  description:
    'Prepare for your Red Seal Mobile Crane Operator certification with this interactive practice exam. Test your knowledge with real-world questions based on the official exam format.',
};

export default function MobileRedSealExamPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Red Seal Practice Exam (Mobile)
        </h1>
        <p className="max-w-3xl text-gray-400">
          Prepare for your Red Seal Mobile Crane Operator certification with
          this interactive practice exam. This sample exam includes 10 questions
          that simulate the format and content of the official Red Seal
          certification test to help you assess your readiness.
        </p>
      </div>

      <ExamInterface />

      <div className="mt-12 border-t border-gray-800 pt-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          About the Red Seal Mobile Crane Operator Certification
        </h2>
        <div className="max-w-3xl space-y-4 text-gray-400">
          <p>
            The Red Seal certification is a nationally recognized standard for
            mobile crane operators in Canada. Achieving this certification
            demonstrates that you possess the knowledge and skills required to
            operate mobile cranes safely and efficiently across all Canadian
            provinces and territories.
          </p>
          <p>
            The official exam consists of approximately 100-120 multiple-choice
            questions that assess your knowledge in five main areas: Common
            Occupational Skills, Crane Preparation, Crane Assembly and Setup,
            Hoisting Operations, and Rigging. A minimum score of 70% is
            typically required to pass the examination.
          </p>
          <p>
            This sample practice exam is designed to give you a taste of what to
            expect on the actual certification test. For comprehensive
            preparation, we recommend studying all relevant materials and
            gaining sufficient practical experience before attempting the
            official Red Seal certification exam.
          </p>
          <p>
            For more information about the Red Seal program and official
            certification requirements, visit the
            <a
              href="https://www.red-seal.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-highlight hover:underline"
            >
              Red Seal website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
