import ExamInterface from './ExamInterface';

export const metadata = {
  title: 'Red Seal Tower Crane Operator Practice Exam | lilfoot',
  description:
    'Prepare for your Red Seal Tower Crane Operator certification with this interactive practice exam. Test your knowledge with 10 randomly selected questions based on the official exam format.',
};

export default function RedSealExamPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Red Seal Practice Exam (Tower)
        </h1>
        <p className="max-w-3xl text-gray-400">
          Prepare for your Red Seal Tower Crane Operator certification with this
          interactive practice exam. This exam simulates the format and content
          of the official Red Seal certification test with 10 randomly selected
          questions to help you assess your readiness and identify areas for
          improvement.
        </p>
      </div>

      <ExamInterface />

      <div className="mt-12 border-t border-gray-800 pt-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          About the Red Seal Tower Crane Operator Certification
        </h2>
        <div className="max-w-3xl space-y-4 text-gray-400">
          <p>
            The Red Seal certification is a nationally recognized standard for
            tower crane operators in Canada. Achieving this certification
            demonstrates that you possess the knowledge and skills required to
            operate tower cranes safely and efficiently across all Canadian
            provinces and territories.
          </p>
          <p>
            The official exam consists of approximately 120 multiple-choice
            questions that assess your knowledge in four main blocks: Common
            Occupational Skills, Hoisting Fundamentals, Rigging, and Crane
            Applications. A minimum score of 70% is typically required to pass
            the examination.
          </p>
          <p>
            This practice exam offers 10 randomly selected questions from our
            question bank, providing realistic scenarios and immediate feedback
            on your performance. Each time you take the exam, you'll get a
            different set of questions, allowing you to practice with varied
            content. It is recommended to study all relevant materials and gain
            sufficient practical experience before attempting the actual Red
            Seal certification exam.
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
