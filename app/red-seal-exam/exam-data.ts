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
  },
  
  // New questions start here (from id 21)
  {
    id: 21,
    question: "While operating a crane and receiving directions from a designated signaller, what must you do if the directions given become unclear or the signaller is no longer visible?",
    options: [
      "Continue operating until you are signalled to do otherwise",
      "Stop all functions and wait until communication is re-established",
      "Ask another worker if it's OK to continue",
      "Proceed at a slow and safe speed"
    ],
    correctAnswer: 1,
    explanation: "If signals become unclear or the signaller is no longer visible, you must stop all crane functions immediately and wait until proper communication is re-established. This is a critical safety protocol to prevent accidents.",
    category: "Common Occupational Skills"
  },
  {
    id: 22,
    question: "Who has the authority to give the stop signal at any time during a crane lift?",
    options: [
      "Only the designated signaller",
      "The site supervisor or project manager",
      "Anyone",
      "A WorkSafeBC representative"
    ],
    correctAnswer: 2,
    explanation: "Anyone has the authority to give the stop signal during a crane lift if they observe a safety concern. This universal safety principle ensures that operations can be halted immediately if a hazard is spotted by any worker.",
    category: "Common Occupational Skills"
  },
  {
    id: 23,
    question: "Is it safe to use grade 70 carrier chain for hoisting?",
    options: [
      "Yes",
      "No"
    ],
    correctAnswer: 1,
    explanation: "No, it is not safe to use grade 70 carrier chain for hoisting. Only alloy steel chain specifically designed and rated for hoisting (typically grade 80 or higher) should be used for lifting operations.",
    category: "Rigging"
  },
  {
    id: 24,
    question: "When must a pre-operational inspection of a crane be done?",
    options: [
      "At the start of the day",
      "Annually",
      "At the start of each shift",
      "Weekly"
    ],
    correctAnswer: 2,
    explanation: "A pre-operational inspection must be performed at the start of each shift before the crane is put into service, as conditions may have changed since the previous use.",
    category: "Common Occupational Skills"
  },
  {
    id: 25,
    question: "What must an operator look for when assigned to operate a new crane?",
    options: [
      "The annual inspection decal from an engineering firm",
      "Ensuring a manual is available",
      "Inspecting the previous entries of the logbook",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "When assigned to a new crane, the operator must check all of these items: the inspection decal confirming certification, that an operations manual is available, and review the logbook to understand the crane's history and any recent issues.",
    category: "Common Occupational Skills"
  },
  {
    id: 26,
    question: "What is the decimal version of 5'7\"?",
    options: [
      "5.7'",
      "5.70'",
      "5.58'",
      "5.058'"
    ],
    correctAnswer: 2,
    explanation: "5'7\" equals 5.58' because 7 inches is 7/12 of a foot, and 7 divided by 12 equals 0.58. So 5 feet and 7 inches is written as 5.58 feet in decimal form.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 27,
    question: "How many wraps of hoist cable must remain on the hoist drum of the crane you are operating?",
    options: [
      "3 wraps",
      "1 wrap",
      "4 wraps",
      "2 wraps"
    ],
    correctAnswer: 3,
    explanation: "According to industry standards and regulations, a minimum of 2 full wraps of hoist cable must remain on the drum at all times during operation to maintain secure anchoring of the cable.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 28,
    question: "What is the rejection criteria for a hook?",
    options: [
      "10% loss in cross-sectional area",
      "15% stretch in throat opening",
      "Twist of more than 10%",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these criteria warrant hook rejection: 10% loss in cross-sectional area indicates wear, 15% stretch in throat opening shows overloading, and a 10% twist indicates improper use or damage.",
    category: "Rigging"
  },
  {
    id: 29,
    question: "What is the minimum design factor of wire rope, synthetic web sling, and polyester round sling rigging?",
    options: [
      "5:1",
      "4:1",
      "6:1",
      "3.5:1"
    ],
    correctAnswer: 0,
    explanation: "The minimum design factor (safety factor) for wire rope, synthetic web slings, and polyester round slings is 5:1, meaning the breaking strength is at least 5 times the working load limit.",
    category: "Rigging"
  },
  {
    id: 30,
    question: "What is the minimum design factor of alloy steel chain slings?",
    options: [
      "5:1",
      "4:1",
      "6:1",
      "3.5:1"
    ],
    correctAnswer: 0,
    explanation: "The minimum design factor (safety factor) for alloy steel chain slings used in hoisting is 5:1, requiring the breaking strength to be at least 5 times the working load limit.",
    category: "Rigging"
  },
  {
    id: 31,
    question: "What term best describes the extra force exerted on a crane from the motion of a load?",
    options: [
      "Static force",
      "Dynamic force",
      "Eccentric load",
      "Centrifugal force"
    ],
    correctAnswer: 1,
    explanation: "Dynamic force refers to the additional forces exerted on a crane due to the movement of a load, such as starting, stopping, or swinging. These forces can exceed the static weight of the load.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 32,
    question: "Any defects found during inspection or use of a crane or hoist must be…",
    options: [
      "Recorded in the inspection and maintenance record system.",
      "Reported immediately to the supervisor.",
      "Disregarded if the defect is minor.",
      "Both A and B."
    ],
    correctAnswer: 3,
    explanation: "Defects must both be recorded in the inspection and maintenance record system AND reported immediately to the supervisor to ensure proper documentation and prompt action to address safety concerns.",
    category: "Common Occupational Skills"
  },
  {
    id: 33,
    question: "Before lifting a load, the weight of each load must be communicated to…",
    options: [
      "Equipment operator.",
      "Any person rigging the load.",
      "Both A and B.",
      "Supervisor."
    ],
    correctAnswer: 2,
    explanation: "The weight of each load must be communicated to both the crane operator and any person rigging the load to ensure proper equipment selection and safe lifting procedures.",
    category: "Crane Applications"
  },
  {
    id: 34,
    question: "If you don't know the weight of a load, what must your crane have to proceed with the lift?",
    options: [
      "Either B or C",
      "Load weight indicator.",
      "Overload prevention system.",
      "Three sheave block."
    ],
    correctAnswer: 0,
    explanation: "If the load weight is unknown, the crane must have either a load weight indicator or an overload prevention system to safely proceed with the lift and prevent potential overloading.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 35,
    question: "What devices or systems must be calibrated at specific intervals or whenever there is a device or system malfunctioning?",
    options: [
      "A load weighing device.",
      "A load moment indicator.",
      "An overload prevention system.",
      "All of the above."
    ],
    correctAnswer: 3,
    explanation: "All safety-critical devices including load weighing devices, load moment indicators, and overload prevention systems must be regularly calibrated at specified intervals and whenever a malfunction occurs.",
    category: "Common Occupational Skills"
  },
  {
    id: 36,
    question: "The load line may contact…",
    options: [
      "Load block, hook, sheaves, and hoist drum.",
      "Load block, hook, sheaves, jib.",
      "Load block, hook, edge of the building, hoist drum.",
      "Load block, cab, sheaves, hoist drum."
    ],
    correctAnswer: 0,
    explanation: "The load line should only contact components designed for that purpose: the load block, hook, sheaves, and hoist drum. Contact with other structures can cause damage to the wire rope.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 37,
    question: "When is it necessary to use a tag line?",
    options: [
      "On windy days.",
      "When you need to control hazardous movement of a load or to position a load.",
      "When the load is more than six feet off the ground.",
      "When it's a tandem lift."
    ],
    correctAnswer: 1,
    explanation: "Tag lines are necessary when you need to control potential hazardous movement of a load or when precise positioning is required, regardless of height or weather conditions.",
    category: "Rigging"
  },
  {
    id: 38,
    question: "Who is responsible for controlling worksite activities when a crane is working?",
    options: [
      "Geotechnical engineer.",
      "CSO (Construction Safety Officer).",
      "First aid attendant.",
      "The employer or the prime contractor."
    ],
    correctAnswer: 3,
    explanation: "The employer or prime contractor has ultimate responsibility for controlling worksite activities when a crane is operating, including ensuring safety protocols are followed.",
    category: "Crane Applications"
  },
  {
    id: 39,
    question: "Which of the following best describes the term \"two-block\"?",
    options: [
      "When the hook block or headache ball contacts the head sheave assembly",
      "When the LMI device is not functioning properly",
      "When the hook block or headache ball contacts the boom",
      "A term used when the load is too heavy for the crane"
    ],
    correctAnswer: 0,
    explanation: "Two-blocking occurs when the hook block or headache ball contacts the head sheave assembly, causing potential damage to the hoist rope and creating a dangerous condition.",
    category: "Hoisting Fundamentals"
  },
  {
    id: 40,
    question: "Is the boom of the crane allowed to rest against or come in contact with any fixed objects?",
    options: [
      "Yes.",
      "No.",
      "Yes, if the load is less than 4000 lbs.",
      "Yes, if the boom is protected with softeners."
    ],
    correctAnswer: 1,
    explanation: "No, the boom of a crane should never rest against or come in contact with any fixed objects as this can cause damage to the boom structure and compromise the crane's integrity.",
    category: "Crane Applications"
  },
  {
    id: 41,
    question: "Who can decide if a crane is safe to use if the load has hit the crane?",
    options: [
      "An engineer.",
      "Your supervisor.",
      "Anyone.",
      "No one."
    ],
    correctAnswer: 0,
    explanation: "Only a qualified engineer can properly assess and determine if a crane is safe to use after a load has hit the crane, as structural damage may not be visible to untrained personnel.",
    category: "Crane Applications"
  },
  {
    id: 42,
    question: "What is the minimum required clearance distance from any obstruction if there is a potential swing or shearing hazard?",
    options: [
      "2.5 ft.",
      "2 ft.",
      "3 ft.",
      "3.5 ft."
    ],
    correctAnswer: 2,
    explanation: "The minimum required clearance from any obstruction where there is a potential swing or shearing hazard is 3 feet (approximately 1 meter) to prevent crushing hazards.",
    category: "Crane Applications"
  },
  {
    id: 43,
    question: "What do you do if the minimum clearance distance cannot be provided?",
    options: [
      "Block the entry to the area with barriers.",
      "The minimum clearance is required; no exceptions.",
      "Another employee must guard the area.",
      "Post a sign indicating the lack of space."
    ],
    correctAnswer: 0,
    explanation: "If minimum clearance cannot be provided, the area must be physically blocked with barriers to prevent access and the potential for crushing injuries.",
    category: "Crane Applications"
  },
  {
    id: 44,
    question: "When must a tandem lift be carried under the direction of a qualified supervisor?",
    options: [
      "A supervisor is not needed in this situation.",
      "C and D.",
      "If a tandem lift is a critical lift.",
      "If the lifted load is to be moved laterally."
    ],
    correctAnswer: 1,
    explanation: "A tandem lift must be under the direction of a qualified supervisor both when it's classified as a critical lift and when the load is to be moved laterally, due to the increased complexity and risks.",
    category: "Crane Applications"
  },
  {
    id: 45,
    question: "When are you allowed to lift a load over a person?",
    options: [
      "This is never allowed.",
      "If it's someone you don't like.",
      "Anytime; it's okay.",
      "When there is no alternative and people have been warned of the danger."
    ],
    correctAnswer: 0,
    explanation: "Lifting loads over people is never allowed under any circumstances. The area under suspended loads must be kept clear to prevent potential injuries from falling objects.",
    category: "Crane Applications"
  },
  {
    id: 46,
    question: "When is it okay to leave a load suspended and unattended?",
    options: [
      "Never.",
      "Only during quick bathroom breaks.",
      "Always.",
      "When a supervisor approves it."
    ],
    correctAnswer: 0,
    explanation: "It is never okay to leave a suspended load unattended. The operator must either lower the load to the ground or transfer control to another qualified operator before leaving the controls.",
    category: "Crane Applications"
  },
  {
    id: 47,
    question: "When is it okay to hoist a load where the load is not directly under the boom tip?",
    options: [
      "If you're not lifting from the jib.",
      "If the load is floating on water.",
      "It's never a problem.",
      "Never."
    ],
    correctAnswer: 3,
    explanation: "It is never acceptable to hoist a load that is not directly under the boom tip. This practice, known as 'side loading,' creates dangerous lateral forces on the boom structure.",
    category: "Crane Applications"
  },
  {
    id: 48,
    question: "At what point does an operator need a signaller?",
    options: [
      "When they do not have a clear and unobstructed view of the boom, jib, load line, load hook, and load.",
      "The operator always needs a signaller.",
      "When the load is hoisted to more than 150 ft.",
      "When the operator has had more than eight years of experience."
    ],
    correctAnswer: 0,
    explanation: "An operator needs a signaller whenever they do not have a clear and unobstructed view of the boom, jib, load line, load hook, and load, to ensure safe operation.",
    category: "Common Occupational Skills"
  },
  {
    id: 49,
    question: "If another piece of equipment or crane is operating in the same vicinity, what do you need to establish?",
    options: [
      "Effective voice communication.",
      "Written procedures.",
      "A and B.",
      "Coffee breaks."
    ],
    correctAnswer: 2,
    explanation: "When multiple cranes or equipment operate in the same vicinity, both effective voice communication and written procedures must be established to prevent collisions and coordinate movements safely.",
    category: "Crane Applications"
  },
  {
    id: 50,
    question: "What precautions must be taken when working near components that may induce an electrical charge?",
    options: [
      "Crane or hoist must be effectively grounded.",
      "Flammable materials must be removed.",
      "A and B.",
      "A written lift plan must be established."
    ],
    correctAnswer: 2,
    explanation: "When working near components that may induce an electrical charge, the crane must be effectively grounded AND flammable materials must be removed from the area to prevent electrical hazards and fire risks.",
    category: "Common Occupational Skills"
  },
  {
    id: 51,
    question: "Who is responsible for determining the weight of a load?",
    options: [
      "Equipment operator.",
      "Rigger.",
      "A and B.",
      "Site supervisor."
    ],
    correctAnswer: 2,
    explanation: "Both the equipment operator and the rigger are responsible for determining the weight of a load, as both need this information to select appropriate equipment and ensure the lift is within the crane's capacity.",
    category: "Rigging"
  },
  {
    id: 52,
    question: "What is the maximum allowable wind speed while hoisting a suspended work platform?",
    options: [
      "50 km/h",
      "20 km/h",
      "25 km/h",
      "32 km/h"
    ],
    correctAnswer: 1,
    explanation: "The maximum allowable wind speed when hoisting a suspended work platform is typically 20 km/h (approximately 12 mph). Higher winds create unsafe conditions for personnel on the platform.",
    category: "Crane Applications"
  },
  {
    id: 53,
    question: "How often must a crane be certified in BC (excluding duty cycle work)?",
    options: [
      "Annually.",
      "Annually or immediately after a misadventure.",
      "As per manufacturer's instructions.",
      "When the owner decides to do it."
    ],
    correctAnswer: 1,
    explanation: "In British Columbia, cranes must be certified annually or immediately after a misadventure (incident or accident) that may have affected the structural integrity or safe operation of the crane.",
    category: "Common Occupational Skills"
  },
  {
    id: 54,
    question: "What are the rejection criteria for non-rotating wire rope?",
    options: [
      "3 broken wires in 1 strand in 1 lay length",
      "2 broken wires in 6 rope diameters",
      "4 broken wires in 30 rope diameters",
      "6 random broken wires in 1 lay length"
    ],
    correctAnswer: 0,
    explanation: "For non-rotating wire rope, the rejection criteria include 3 broken wires in 1 strand in 1 lay length, as this indicates significant deterioration that compromises the rope's integrity and safety.",
    category: "Rigging"
  }
];

// Categories distribution based on Red Seal exam breakdown
export const categories = [
  { name: "Common Occupational Skills", percentage: 28 },
  { name: "Hoisting Fundamentals", percentage: 26 },
  { name: "Rigging", percentage: 24 },
  { name: "Crane Applications", percentage: 22 }
]; 