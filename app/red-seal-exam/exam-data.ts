// Red Seal Tower Crane Practice Exam Questions
// Based on exam content from https://www.red-seal.ca/eng/trades/456_tower_crane_operator/.2x.1m_cs.shtml

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct answer in options array
  explanation: string;
  category: string;
}

export const examQuestions: Question[] = [
  // Block A: Common Occupational Skills (28% of exam)
  {
    id: 1,
    question: "When inspecting a tower crane before operation, what is the primary purpose of checking the slewing ring bolts?",
    options: [
      "To ensure the tower sections are connected properly",
      "To verify the security of the connections between the slewing mechanism and tower",
      "To check the lubrication of the slewing mechanism",
      "To confirm the torque setting on the jib connection"
    ],
    correctAnswer: 1,
    explanation: "Slewing ring bolts connect the rotating superstructure to the tower. Loose bolts can lead to catastrophic failure, so checking their security is vital for safe operation.",
    category: "Common Occupational Skills"
  },
  {
    id: 2,
    question: "According to safety regulations, what is the minimum distance that tower cranes must maintain from high-voltage power lines rated at 750V-75kV?",
    options: [
      "3 meters (10 feet)",
      "4.6 meters (15 feet)",
      "7 meters (23 feet)",
      "10 meters (33 feet)"
    ],
    correctAnswer: 1,
    explanation: "Safety regulations typically require a minimum distance of 4.6 meters (15 feet) from power lines rated at 750V-75kV. This distance increases with higher voltage lines.",
    category: "Common Occupational Skills"
  },
  {
    id: 3,
    question: "Which document should contain information about the maximum allowable wind speed for tower crane operation?",
    options: [
      "Site safety manual",
      "Operator's daily log",
      "Manufacturer's specifications",
      "Weather forecast"
    ],
    correctAnswer: 2,
    explanation: "The manufacturer's specifications provide critical information about operating limits including maximum allowable wind speeds for safe crane operation.",
    category: "Common Occupational Skills"
  },
  {
    id: 4,
    question: "Which of the following is NOT typically included in a tower crane pre-operational inspection?",
    options: [
      "Checking hydraulic fluid levels",
      "Testing limit switches",
      "Calibrating the load moment indicator",
      "Verifying counterweight installation"
    ],
    correctAnswer: 2,
    explanation: "While checking fluid levels, limit switches, and counterweight installation are part of daily pre-operational inspections, calibrating the load moment indicator is typically performed during scheduled maintenance by qualified technicians.",
    category: "Common Occupational Skills"
  },
  
  // Block B: Hoisting Fundamentals (26% of exam)
  {
    id: 5,
    question: "What effect does doubling the fall of line in a reeving system have on the lifting capacity?",
    options: [
      "It doubles the lifting capacity",
      "It halves the lifting capacity",
      "It has no effect on lifting capacity",
      "It quadruples the lifting capacity"
    ],
    correctAnswer: 0,
    explanation: "Doubling the fall of line in a reeving system doubles the lifting capacity by distributing the load weight across more lines, but it also reduces hoisting speed by half.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 6,
    question: "What is the purpose of a load moment indicator on a tower crane?",
    options: [
      "To indicate the direction of the wind",
      "To measure the speed of hoisting",
      "To alert the operator when approaching maximum rated capacity",
      "To control the slewing speed automatically"
    ],
    correctAnswer: 2,
    explanation: "A load moment indicator (LMI) monitors the crane's load relative to its rated capacity, alerting the operator when approaching maximum limits to prevent overloading and tipping.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 7,
    question: "What condition would cause a trolley brake to fail on a tower crane?",
    options: [
      "Low hydraulic fluid level",
      "Excessive electrical resistance",
      "Worn brake pads or linings",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Trolley brake failure can be caused by any of these conditions: low hydraulic fluid affecting brake pressure, electrical resistance affecting engagement, or worn brake components reducing stopping power.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 8,
    question: "When calculating the total load weight, which of the following must be included?",
    options: [
      "Weight of the load only",
      "Weight of the load and rigging equipment",
      "Weight of the load, rigging equipment, and hook block",
      "Weight of the load, rigging equipment, hook block, and counterweights"
    ],
    correctAnswer: 2,
    explanation: "The total load weight must include the weight of the load itself, all rigging equipment (slings, shackles, etc.), and the hook block or headache ball used for lifting.",
    category: "Hoisting Fundamentals"
  },
  
  // Block C: Rigging (24% of exam)
  {
    id: 9,
    question: "What is the minimum safety factor for wire rope slings used in tower crane operations according to most standards?",
    options: [
      "3:1",
      "5:1",
      "7:1",
      "10:1"
    ],
    correctAnswer: 1,
    explanation: "Most standards require a minimum safety factor of 5:1 for wire rope slings, meaning the breaking strength must be at least five times the intended working load.",
    category: "Rigging"
  },
  {
    id: 10,
    question: "When a wire rope is bent around a sheave, where does the most stress occur?",
    options: [
      "At the outer fibers of the rope",
      "At the inner fibers of the rope",
      "Evenly throughout the rope",
      "At the core of the rope"
    ],
    correctAnswer: 0,
    explanation: "When a wire rope bends around a sheave, the outer fibers experience the most stress as they must stretch further around the curve than the inner fibers.",
    category: "Rigging"
  },
  {
    id: 11,
    question: "What is the primary purpose of using a tag line when lifting loads with a tower crane?",
    options: [
      "To increase the crane's lifting capacity",
      "To help guide the load and prevent rotation or swinging",
      "To provide electrical grounding for the load",
      "To allow for more precise measurement of the load weight"
    ],
    correctAnswer: 1,
    explanation: "Tag lines are used to control and guide the load during lifting operations, helping to prevent unwanted rotation or swinging and providing a means to position the load without hands-on contact.",
    category: "Rigging"
  },
  {
    id: 12,
    question: "When using multiple slings in a lifting operation, at what angle does the rated capacity of the slings begin to decrease significantly?",
    options: [
      "Below 90 degrees",
      "Below 60 degrees",
      "Below 45 degrees",
      "Below 30 degrees"
    ],
    correctAnswer: 1,
    explanation: "When sling angles decrease below 60 degrees from horizontal, the tension in the slings increases significantly, reducing their effective rated capacity.",
    category: "Rigging"
  },
  
  // Block D: Crane Applications (22% of exam)
  {
    id: 13,
    question: "When lifting a load with a tower crane in windy conditions, what is the primary concern?",
    options: [
      "Increased fuel consumption",
      "Reduced visibility",
      "Increased load radius due to load drift",
      "Shorter operating hours"
    ],
    correctAnswer: 2,
    explanation: "In windy conditions, the load can drift horizontally, effectively increasing the load radius. This increased radius reduces the crane's capacity and may cause overloading conditions.",
    category: "Crane Applications"
  },
  {
    id: 14,
    question: "In a tower crane 'blind lift', what is the most critical safety procedure?",
    options: [
      "Using the crane's cameras",
      "Having a designated signal person with clear communication to the operator",
      "Increasing the crane's capacity by 10%",
      "Moving the load as quickly as possible"
    ],
    correctAnswer: 1,
    explanation: "For blind lifts where the operator cannot see the load, a designated signal person with reliable communication (typically radio) is essential for safe operation.",
    category: "Crane Applications"
  },
  {
    id: 15,
    question: "When operating a tower crane near an airport, what additional requirement typically applies?",
    options: [
      "Special paint on the crane",
      "Aviation warning lights on the crane structure",
      "Reduced lifting capacity",
      "Daily inspection by airport personnel"
    ],
    correctAnswer: 1,
    explanation: "Tower cranes operating near airports must have aviation warning lights installed at the highest points to make them visible to aircraft, per aviation authority requirements.",
    category: "Crane Applications"
  },
  {
    id: 16,
    question: "When operating a tower crane in freezing conditions, which component requires the most attention before operation?",
    options: [
      "Counterweights",
      "Hoisting mechanism and brakes",
      "Operator's cabin heater",
      "Warning horn"
    ],
    correctAnswer: 1,
    explanation: "Freezing conditions can affect the proper functioning of hoisting mechanisms and brakes due to ice formation or thickened lubricants, making them critical to check before operation.",
    category: "Crane Applications"
  },
  
  // Additional questions
  {
    id: 17,
    question: "What information must be included on a tower crane's load chart?",
    options: [
      "Operator's name and certification number",
      "Maximum radius, height, and corresponding loads",
      "Manufacturing date and serial number only",
      "Maintenance schedule and history"
    ],
    correctAnswer: 1,
    explanation: "A tower crane load chart must include the maximum operational radius, lifting height, and corresponding maximum allowable loads at various configurations.",
    category: "Common Occupational Skills"
  },
  {
    id: 18,
    question: "What would be the approximate weight of a concrete bucket containing 1 cubic meter of concrete?",
    options: [
      "1,000 kg (2,200 lbs)",
      "2,400 kg (5,300 lbs)",
      "3,600 kg (7,900 lbs)",
      "5,000 kg (11,000 lbs)"
    ],
    correctAnswer: 1,
    explanation: "Concrete weighs approximately 2,400 kg per cubic meter (150 lbs per cubic foot), so a bucket containing 1 cubic meter would weigh approximately 2,400 kg plus the weight of the bucket itself.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 19,
    question: "Which of the following wire rope defects requires immediate removal from service?",
    options: [
      "Surface rust",
      "Minor kinking",
      "Broken wires exceeding 10% in one lay length",
      "Slight flattening"
    ],
    correctAnswer: 2,
    explanation: "Wire rope with broken wires exceeding 10% in one lay length represents a serious safety hazard and must be immediately removed from service according to safety standards.",
    category: "Rigging"
  },
  {
    id: 20,
    question: "In a climbing tower crane operation, what is the purpose of the climbing frame?",
    options: [
      "To support the operator's cabin",
      "To provide access for maintenance personnel",
      "To enable the crane to increase its height by adding tower sections",
      "To stabilize the jib during high winds"
    ],
    correctAnswer: 2,
    explanation: "The climbing frame is used during the process of increasing a tower crane's height. It temporarily supports the upper crane sections while a new tower section is installed underneath.",
    category: "Crane Applications"
  }
];

// Categories distribution based on Red Seal exam breakdown
export const categories = [
  { name: "Common Occupational Skills", percentage: 28 },
  { name: "Hoisting Fundamentals", percentage: 26 },
  { name: "Rigging", percentage: 24 },
  { name: "Crane Applications", percentage: 22 }
]; 