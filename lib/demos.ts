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
        name: 'Red Seal Practice Exam (Mobile)',
        slug: 'practice-exams/mobile-red-seal',
        description:
          'Interactive practice exam for Red Seal Mobile Crane Operator certification with 10 sample questions',
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
    name: 'Mobile Crane Charts',
    items: [
      {
        name: 'Liebherr LTM 1200',
        slug: 'mobile-crane/liebherr-ltm-1200',
        description:
          'Coming soon: Specifications and load charts for the Liebherr LTM 1200 mobile crane',
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
    ],
  },
  {
    name: 'Self Erect Tower Charts',
    items: [
      {
        name: 'Liebherr 81k',
        slug: 'crane-tables',
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
        name: 'Liebherr 125k',
        slug: 'self-erect-tower/liebherr-125k',
        description:
          'Coming soon: Specifications and load charts for the Liebherr 125k self-erecting tower crane',
      },
    ],
  },
  {
    name: 'Math',
    items: [
      {
        name: 'Dimensions',
        slug: 'dimensions',
        description:
          'Geometric formulas for area, volume, and perimeter of common shapes',
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
    name: 'Components',
    items: [
      {
        name: 'Crane Chart',
        slug: 'crane',
        description:
          'Interactive chart displaying crane specifications and lifting capacity data',
      },
      {
        name: 'Self-Erect Crane',
        slug: 'self-erect',
        description:
          'Liebherr 81k self-erect crane with Load-Plus LM 1 and 30° configurations',
      },
      {
        name: '3D Buffer Demo',
        slug: 'three-demo',
        description:
          'Interactive 3D particle system using Three.js buffer geometry draw range',
      },
    ],
  },
];
