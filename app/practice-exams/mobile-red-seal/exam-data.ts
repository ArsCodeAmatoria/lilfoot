// Red Seal Mobile Crane Operator Practice Exam Questions
// Sample questions for mobile crane operation

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct answer in options array
  explanation: string;
  category: string;
}

// Define the categories for the exam
export const categories = [
  'Common Occupational Skills',
  'Crane Preparation',
  'Crane Assembly and Setup',
  'Hoisting Operations',
  'Rigging',
];

export const examQuestions: Question[] = [
  // Question 1
  {
    id: 1,
    question: 'What is the primary purpose of outriggers on a mobile crane?',
    options: [
      "To increase the crane's maximum lifting capacity",
      'To provide stability and prevent tipping during lifting operations',
      'To allow the crane to travel on highways',
      'To reduce ground pressure during transportation',
    ],
    correctAnswer: 1,
    explanation:
      "Outriggers extend from the crane and make contact with the ground to provide stability during lifting operations. They prevent the crane from tipping by increasing the machine's footprint and distributing the load over a wider area.",
    category: 'Crane Preparation',
  },

  // Question 2
  {
    id: 2,
    question:
      'When inspecting wire rope on a mobile crane, which of the following would be cause for immediate rejection?',
    options: [
      'Minor surface rust',
      'Three randomly distributed broken wires in one rope lay',
      'Six or more broken wires in one rope lay',
      'Normal wear on the outer wires',
    ],
    correctAnswer: 2,
    explanation:
      "According to ASME B30.5, six or more broken wires in one rope lay is cause for immediate replacement of the wire rope. This level of damage significantly compromises the rope's strength and creates a serious safety hazard.",
    category: 'Common Occupational Skills',
  },

  // Question 3
  {
    id: 3,
    question:
      "What information is critical to check on a mobile crane's load chart before starting a lift?",
    options: [
      "The crane's serial number and manufacturing date",
      "The operator's certification details",
      'The boom length, radius, and counterweight configuration',
      "The crane's color and model name",
    ],
    correctAnswer: 2,
    explanation:
      "Before any lift, the operator must verify the boom length, operating radius, and counterweight configuration on the load chart to determine the crane's capacity for the specific setup. These factors directly affect the maximum allowable load the crane can safely handle.",
    category: 'Hoisting Operations',
  },

  // Question 4
  {
    id: 4,
    question:
      'What is the purpose of a pre-operational inspection on a mobile crane?',
    options: [
      "To document the crane's value for insurance purposes",
      'To identify potential defects or safety concerns before operation',
      "To determine the crane's fuel efficiency",
      "To calculate the crane's depreciation value",
    ],
    correctAnswer: 1,
    explanation:
      'Pre-operational inspections are performed to identify any mechanical issues, fluid leaks, damaged components, or safety concerns before the crane is operated. This helps prevent accidents, equipment damage, and ensures compliance with safety regulations.',
    category: 'Common Occupational Skills',
  },

  // Question 5
  {
    id: 5,
    question:
      'What is the correct procedure for setting up a mobile crane on soft or uneven ground?',
    options: [
      'Operate with reduced capacity to account for the ground conditions',
      'Use outrigger pads or mats to distribute the load and create a level surface',
      'Avoid using outriggers completely on soft ground',
      'Add extra counterweight to compensate for the uneven surface',
    ],
    correctAnswer: 1,
    explanation:
      "When setting up on soft or uneven ground, outrigger pads or mats should be used to distribute the crane's weight over a larger area, preventing the outriggers from sinking and ensuring stability. The setup must also create a level working surface for safe operation.",
    category: 'Crane Assembly and Setup',
  },

  // Question 6
  {
    id: 6,
    question:
      'What action should be taken if the anti-two-block warning system on a mobile crane malfunctions?',
    options: [
      'Disable the system to continue operations',
      'Use hand signals to watch for two-blocking',
      'Discontinue crane operations until the system is repaired',
      'Operate with reduced loads only',
    ],
    correctAnswer: 2,
    explanation:
      'If the anti-two-block warning system malfunctions, operations must be discontinued until the system is repaired. This critical safety device prevents the hook block from contacting the boom tip, which could cause serious damage to the hoist rope and potentially dangerous load drops.',
    category: 'Hoisting Operations',
  },

  // Question 7
  {
    id: 7,
    question:
      'When calculating the total load on a mobile crane, which of the following must be included?',
    options: [
      'Only the weight of the object being lifted',
      'The weight of the load, rigging equipment, and lifting devices',
      'The weight of the load minus the weight of the crane',
      "Only the manufacturer's rated capacity",
    ],
    correctAnswer: 1,
    explanation:
      'The total load includes the weight of the object being lifted plus all rigging equipment (slings, shackles, spreader beams, etc.) and any lifting devices attached to the hook. Failing to account for the weight of rigging can lead to overloading the crane.',
    category: 'Rigging',
  },

  // Question 8
  {
    id: 8,
    question:
      'What is the main purpose of a load moment indicator (LMI) on a mobile crane?',
    options: [
      'To calculate the cost of operating the crane',
      "To warn the operator when approaching the crane's capacity limits",
      'To automatically adjust the counterweight position',
      "To control the crane's hydraulic system",
    ],
    correctAnswer: 1,
    explanation:
      "The load moment indicator (LMI) continuously monitors the crane's load, boom angle, and radius to calculate the percentage of rated capacity being used. It warns the operator when approaching or exceeding the crane's safe working limits, helping prevent tip-over accidents.",
    category: 'Hoisting Operations',
  },

  // Question 9
  {
    id: 9,
    question:
      'What is the primary consideration when determining travel routes for a mobile crane on a job site?',
    options: [
      'The shortest possible route',
      'Ground conditions, overhead obstacles, and underground hazards',
      'The most scenic route for the operator',
      'The route with the most shade',
    ],
    correctAnswer: 1,
    explanation:
      "When planning travel routes, the primary considerations are ground conditions (to ensure the surface can support the crane's weight), overhead obstacles (power lines, structures), and underground hazards (utilities, voids). These factors help prevent accidents and equipment damage during crane movement.",
    category: 'Crane Preparation',
  },

  // Question 10
  {
    id: 10,
    question:
      'According to regulations, what is the minimum approach distance for a mobile crane operating near energized power lines rated at 50kV?',
    options: [
      '3 meters (10 feet)',
      '4.6 meters (15 feet)',
      '6 meters (20 feet)',
      '7.6 meters (25 feet)',
    ],
    correctAnswer: 1,
    explanation:
      'For power lines rated at 50kV, the minimum safe approach distance is typically 4.6 meters (15 feet) according to OSHA and most jurisdictional regulations. This distance helps prevent electrical arcing between the power line and the crane, which can cause electrocution and serious injuries.',
    category: 'Crane Assembly and Setup',
  },
];
