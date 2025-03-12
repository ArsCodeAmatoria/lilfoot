export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'Not Found',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static Data',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
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
    ],
  },
  {
    name: 'Practice Exams',
    items: [
      {
        name: 'Red Seal Practice Exam (Tower)',
        slug: 'red-seal-exam',
        description:
          'Interactive practice exam for Red Seal Tower Crane Operator certification with detailed feedback',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
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
  {
    name: 'Misc',
    items: [
      {
        name: 'Patterns',
        slug: 'patterns',
        description: 'A collection of useful App Router patterns',
      },
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
