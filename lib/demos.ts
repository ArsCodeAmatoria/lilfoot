export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Practice Exams',
    items: [
      {
        name: 'Red Seal Practice Exam (Tower)',
        slug: 'red-seal-exam',
        description:
          'Interactive practice exam for Red Seal Tower Crane Operator certification with detailed feedback',
      },
      {
        name: 'Self Erect Tower Crane',
        slug: 'practice-exams/self-erect-tower',
        description:
          'Coming soon: Specialized practice exam for operators of self-erecting tower cranes',
      },
      {
        name: 'Rigging Basic',
        slug: 'practice-exams/rigging-basic',
        description:
          'Coming soon: Basic rigging practice exam covering fundamental lifting operations and equipment safety',
      },
      {
        name: 'Rigging Advanced',
        slug: 'practice-exams/rigging-advanced',
        description:
          'Coming soon: Advanced rigging practice exam for complex lifts, load calculations, and critical safety procedures',
      },
    ],
  },
  {
    name: 'NCCCO Exams',
    items: [
      {
        name: 'CCO Tower Crane Operator',
        slug: 'nccco-exams/tower-crane-operator',
        description:
          'Coming soon: Preparation resources for the NCCCO Tower Crane Operator certification exam',
      },
    ],
  },
  {
    name: 'Tower Crane Charts',
    items: [
      {
        name: 'Pecco SK 180',
        slug: 'pecco-sk-180',
        description:
          'Load charts and specifications for the Pecco SK 180 tower crane with 2-Part and 4-Part line configurations',
      },
      {
        name: 'Comansa LC-5211',
        slug: 'tower-crane/comansa-lc-5211',
        description:
          'Coming soon: Specifications and load charts for the Comansa LC-5211 tower crane',
      },
      {
        name: 'Liebherr 100LC',
        slug: 'tower-crane/liebherr-100lc',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 100LC tower crane',
      },
      {
        name: 'Liebherr 125 EC-B 6',
        slug: 'tower-crane/liebherr-125-ec-b-6',
        description:
          'NEW: Detailed specifications and load charts for the Liebherr 125 EC-B 6 tower crane',
      },
      {
        name: 'Liebherr 172 EC-B 8',
        slug: 'tower-crane/liebherr-172-ec-b-8',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 172 EC-B 8 tower crane',
      },
      {
        name: 'Pecco SK 200',
        slug: 'tower-crane/pecco-sk-200',
        description:
          'Coming soon: Specifications and load charts for the Pecco SK 200 tower crane',
      },
      {
        name: 'Pecco SK 225',
        slug: 'tower-crane/pecco-sk-225',
        description:
          'Coming soon: Specifications and load charts for the Pecco SK 225 tower crane',
      },
      {
        name: 'Potain MDT-178',
        slug: 'tower-crane/potain-mdt-178',
        description:
          'Coming soon: Specifications and load charts for the Potain MDT-178 tower crane',
      },
      {
        name: 'San Marco SMT 550',
        slug: 'tower-crane/san-marco-smt-550',
        description:
          'Coming soon: Specifications and load charts for the San Marco SMT 550 tower crane',
      },
      {
        name: 'Terex SK 415-20',
        slug: 'tower-crane/terex-sk-415-20',
        description:
          'Detailed specifications and load charts for the Terex SK 415-20 tower crane',
      },
    ],
  },
  {
    name: 'Luffing Crane Charts',
    items: [
      {
        name: 'Liebherr Luffing HC-L',
        slug: 'luffing-crane/liebherr-hc-l',
        description:
          'Coming soon: Specifications and load charts for the Liebherr HC-L luffing crane series',
      },
    ],
  },
  {
    name: 'Self Erect Tower Charts',
    items: [
      {
        name: 'Liebherr 81k',
        slug: 'self-erect-tower/liebherr-81k',
        description:
          'Detailed specifications and load tables for the Liebherr 81k self-erecting tower crane',
      },
      {
        name: 'Liebherr 53k',
        slug: 'self-erect-tower/liebherr-53k',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 53k self-erecting tower crane',
      },
      {
        name: 'Liebherr 81K.1',
        slug: 'self-erect-tower/liebherr-81k-1',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 81K.1 self-erecting tower crane',
      },
      {
        name: 'Liebherr 125k',
        slug: 'self-erect-tower/liebherr-125k',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 125k self-erecting tower crane',
      },
      {
        name: 'Konig K 45 T',
        slug: 'self-erect-tower/konig-k-45-t',
        description:
          'Coming soon: Specifications and load charts for the Konig K 45 T self-erecting tower crane',
      },
      {
        name: 'Konig K 60',
        slug: 'self-erect-tower/konig-k60',
        description:
          'Coming soon: Specifications and load charts for the Konig K60 self-erecting tower crane',
      },
      {
        name: 'Konig K 72',
        slug: 'self-erect-tower/konig-k-72',
        description:
          'Coming soon: Specifications and load charts for the Konig K 72 self-erecting tower crane',
      },
      {
        name: 'Konig K1035TKH',
        slug: 'self-erect-tower/konig-k1035tkh',
        description:
          'Coming soon: Specifications and load charts for the Konig K1035TKH self-erecting tower crane',
      },
      {
        name: 'Potain HD40A',
        slug: 'self-erect-tower/potain-hd40a',
        description:
          'Coming soon: Specifications and load charts for the Potain HD40A self-erecting tower crane',
      },
      {
        name: 'Potain GTMR 331C',
        slug: 'self-erect-tower/potain-gtmr-331c',
        description:
          'Coming soon: Specifications and load charts for the Potain GTMR 331C self-erecting tower crane',
      },
      {
        name: 'Potain HDT-80',
        slug: 'self-erect-tower/potain-hdt-80',
        description:
          'Coming soon: Specifications and load charts for the Potain HDT-80 self-erecting tower crane',
      },
      {
        name: 'San Marco SMH 420',
        slug: 'self-erect-tower/san-marco-smh-420',
        description:
          'Coming soon: Specifications and load charts for the San Marco SMH 420 self-erecting tower crane',
      },
      {
        name: 'Terex Peiner SMK 308',
        slug: 'self-erect-tower/terex-peiner-smk-308',
        description:
          'Coming soon: Specifications and load charts for the Terex Peiner SMK 308 self-erecting tower crane',
      },
    ],
  },
  {
    name: 'Rigging Charts',
    items: [
      {
        name: 'Basic Rigging Charts',
        slug: 'rigging-charts/basic',
        description:
          'Essential rigging charts, load calculations, and guidelines for fundamental rigging operations',
      },
      {
        name: 'Advanced Rigging Charts',
        slug: 'rigging-charts/advanced',
        description:
          'Coming soon: Specialized rigging charts, complex load calculations, and detailed guidelines for advanced rigging operations',
      },
    ],
  },
  {
    name: 'Power Lines',
    items: [
      {
        name: 'Limits of Approach',
        slug: 'power-lines/limits-of-approach',
        description:
          'Guidelines and regulations for safe working distances from power lines for crane operations',
      },
    ],
  },
  {
    name: 'Math',
    items: [
      {
        name: 'Weights of Materials',
        slug: 'math/weights',
        description:
          'Reference tables for weights of common construction materials and steel pipe weights',
      },
      {
        name: 'Geometric Dimensions',
        slug: 'math/dimensions',
        description:
          'Common formulas for calculating areas, volumes, and perimeters of geometric shapes',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Crosby Charts',
        slug: 'misc/crosby-charts',
        description:
          'Coming soon: Rigging specifications and capacity charts for Crosby shackles, hooks, and other hardware',
      },
    ],
  },
  {
    name: 'Material Information',
    items: [
      {
        name: 'Material Weights',
        slug: 'material-weights',
        description:
          'Reference table of common material weights for load calculation',
      },
      {
        name: 'Steel Pipe Weights',
        slug: 'steel-pipe-weights',
        description:
          'Weight charts for steel pipes of various dimensions',
      },
      {
        name: 'Wire Rope Slings',
        slug: 'wire-rope-slings',
        description:
          'Working load limit charts for wire rope slings in various configurations',
      },
    ],
  },
];
