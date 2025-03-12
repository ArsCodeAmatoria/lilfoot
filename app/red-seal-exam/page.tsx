import ExamInterface from './ExamInterface';

export const metadata = {
  title: 'Red Seal Tower Crane Operator Practice Exam | Littlefoot',
  description: 'Prepare for your Red Seal Tower Crane Operator certification with this interactive practice exam. Test your knowledge with real-world questions based on the official exam format.'
};

export default function RedSealExamPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Red Seal Practice Exam (Tower)</h1>
        <p className="text-gray-400 max-w-3xl">
          Prepare for your Red Seal Tower Crane Operator certification with this interactive practice exam.
          This exam simulates the format and content of the official Red Seal certification test to help you
          assess your readiness and identify areas for improvement.
        </p>
      </div>
      
      <ExamInterface />
      
      <div className="mt-12 pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">About the Red Seal Tower Crane Operator Certification</h2>
        <div className="text-gray-400 space-y-4 max-w-3xl">
          <p>
            The Red Seal certification is a nationally recognized standard for tower crane operators in Canada.
            Achieving this certification demonstrates that you possess the knowledge and skills required to operate
            tower cranes safely and efficiently across all Canadian provinces and territories.
          </p>
          <p>
            The official exam consists of approximately 120 multiple-choice questions that assess your knowledge in
            four main blocks: Common Occupational Skills, Hoisting Fundamentals, Rigging, and Crane Applications.
            A minimum score of 70% is typically required to pass the examination.
          </p>
          <p>
            This practice exam is designed to help you prepare for the official test by providing realistic questions
            and immediate feedback on your performance. It is recommended to study all relevant materials and gain
            sufficient practical experience before attempting the actual Red Seal certification exam.
          </p>
          <p>
            For more information about the Red Seal program and official certification requirements, visit the
            <a href="https://www.red-seal.ca" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline ml-1">
              Red Seal website
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
} 