import FormulaDisplay from '../../components/FormulaDisplay';
import ShapeVisualizer from '../../components/ShapeVisualizer';

export const metadata = {
  title: 'Geometric Dimensions | Math | lilfoot',
  description:
    'Common formulas for calculating areas, volumes, and perimeters of geometric shapes',
};

export default function DimensionsPage() {
  // Define all our geometric formulas
  const squareFormulas = [
    {
      name: 'Area of a Square',
      formula: 'A = s²',
      variables: { A: 'Area', s: 'Side length' } as Record<string, string>,
    },
    {
      name: 'Perimeter of a Square',
      formula: 'P = 4s',
      variables: { P: 'Perimeter', s: 'Side length' } as Record<string, string>,
    },
  ];

  const cubeFormulas = [
    {
      name: 'Volume of a Cube',
      formula: 'V = s³',
      variables: { V: 'Volume', s: 'Side length' } as Record<string, string>,
    },
    {
      name: 'Surface Area of a Cube',
      formula: 'SA = 6s²',
      variables: { SA: 'Surface Area', s: 'Side length' } as Record<
        string,
        string
      >,
    },
  ];

  const circleFormulas = [
    {
      name: 'Area of a Circle',
      formula: 'A = πr²',
      variables: { A: 'Area', r: 'Radius', π: 'Pi (≈ 3.14159)' } as Record<
        string,
        string
      >,
    },
    {
      name: 'Circumference of a Circle',
      formula: 'C = 2πr',
      variables: {
        C: 'Circumference',
        r: 'Radius',
        π: 'Pi (≈ 3.14159)',
      } as Record<string, string>,
    },
  ];

  const cylinderFormulas = [
    {
      name: 'Volume of a Cylinder',
      formula: 'V = πr²h',
      variables: {
        V: 'Volume',
        r: 'Radius of base',
        h: 'Height',
        π: 'Pi (≈ 3.14159)',
      } as Record<string, string>,
    },
    {
      name: 'Lateral Surface Area',
      formula: 'LSA = 2πrh',
      variables: {
        LSA: 'Lateral Surface Area',
        r: 'Radius',
        h: 'Height',
        π: 'Pi (≈ 3.14159)',
      } as Record<string, string>,
    },
    {
      name: 'Total Surface Area',
      formula: 'TSA = 2πr(r+h)',
      variables: {
        TSA: 'Total Surface Area',
        r: 'Radius',
        h: 'Height',
        π: 'Pi (≈ 3.14159)',
      } as Record<string, string>,
    },
  ];

  const sphereFormulas = [
    {
      name: 'Volume of a Sphere',
      formula: 'V = (4/3)πr³',
      variables: { V: 'Volume', r: 'Radius', π: 'Pi (≈ 3.14159)' } as Record<
        string,
        string
      >,
    },
    {
      name: 'Surface Area of a Sphere',
      formula: 'SA = 4πr²',
      variables: {
        SA: 'Surface Area',
        r: 'Radius',
        π: 'Pi (≈ 3.14159)',
      } as Record<string, string>,
    },
  ];

  // New triangle formulas
  const rightTriangleFormulas = [
    {
      name: 'Pythagorean Theorem',
      formula: 'a² + b² = c²',
      variables: {
        a: 'Base length',
        b: 'Height length',
        c: 'Hypotenuse length',
      } as Record<string, string>,
    },
    {
      name: 'Area of a Right Triangle',
      formula: 'A = (1/2)ab',
      variables: {
        A: 'Area',
        a: 'Base length',
        b: 'Height length',
      } as Record<string, string>,
    },
  ];

  const isoscelesTriangleFormulas = [
    {
      name: '45 degree sling angle',
      formula: 'c = a√2',
      variables: {
        a: 'Equal sides length (legs)',
        c: 'Hypotenuse length',
      } as Record<string, string>,
    },
    {
      name: 'Area of 45° Right Triangle',
      formula: 'A = (1/2)a²',
      variables: {
        A: 'Area',
        a: 'Equal sides length (legs)',
      } as Record<string, string>,
    },
  ];

  const equilateralTriangleFormulas = [
    {
      name: 'Area of Equilateral Triangle',
      formula: 'A = (√3/4)a²',
      variables: {
        A: 'Area',
        a: 'Side length',
      } as Record<string, string>,
    },
    {
      name: 'Height of Equilateral Triangle',
      formula: 'h = (√3/2)a',
      variables: {
        h: 'Height',
        a: 'Side length',
      } as Record<string, string>,
    },
    {
      name: 'All Angles',
      formula: '∠A = ∠B = ∠C = 60°',
      variables: {
        '∠A, ∠B, ∠C': 'All angles equal 60 degrees',
      } as Record<string, string>,
    },
  ];

  // New obtuse triangle formulas
  const obtuseTriangleFormulas = [
    {
      name: '30 degree sling angle',
      formula: 'Angles: 120° + 30° + 30° = 180°',
      variables: {
        '120°': 'Obtuse angle',
        '30°': 'Each base angle',
      } as Record<string, string>,
    },
    {
      name: 'Law of Cosines (for side a)',
      formula: 'a² = 2b² - 2b²cos(120°)',
      variables: {
        a: 'Base length',
        b: 'Equal sides length',
        'cos(120°)': '-0.5 (negative value)',
      } as Record<string, string>,
    },
    {
      name: 'Simplified Relation',
      formula: 'a² = 2b² - 2b²(-0.5) = 2b² + b² = 3b²',
      variables: {
        a: 'Base length',
        b: 'Equal sides length',
      } as Record<string, string>,
    },
    {
      name: 'Relation between a and b',
      formula: 'a = b√3',
      variables: {
        a: 'Base length',
        b: 'Equal sides length',
      } as Record<string, string>,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Geometric Dimensions
        </h1>
        <p className="text-gray-300">
          Common formulas for calculating areas, volumes, and perimeters of
          geometric shapes.
        </p>
      </div>

      {/* Triangle Sections */}
      <div className="my-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Triangles</h2>
        <p className="mb-6 text-gray-300">
          Triangles are one of the most fundamental shapes in geometry with
          various properties based on their angles and sides.
        </p>
      </div>

      <FormulaDisplay
        title="Right Triangle (Pythagorean Theorem)"
        formulas={rightTriangleFormulas}
      >
        <ShapeVisualizer type="rightTriangle" />
      </FormulaDisplay>

      <FormulaDisplay
        title="45 degree sling angle"
        formulas={isoscelesTriangleFormulas}
      >
        <ShapeVisualizer type="isoscelesTriangle" />
      </FormulaDisplay>

      <FormulaDisplay
        title="Equilateral Triangle (60°)"
        formulas={equilateralTriangleFormulas}
      >
        <ShapeVisualizer type="equilateralTriangle" />
      </FormulaDisplay>

      <FormulaDisplay
        title="30 degree sling angle"
        formulas={obtuseTriangleFormulas}
      >
        <ShapeVisualizer type="obtuseTriangle" />
      </FormulaDisplay>

      {/* Basic Shapes Section */}
      <div className="my-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Basic Shapes</h2>
        <p className="mb-6 text-gray-300">
          Common formulas for basic 2D and 3D geometric shapes.
        </p>
      </div>

      <FormulaDisplay title="Square" formulas={squareFormulas}>
        <ShapeVisualizer type="square" />
      </FormulaDisplay>

      <FormulaDisplay title="Cube" formulas={cubeFormulas}>
        <ShapeVisualizer type="cube" />
      </FormulaDisplay>

      <FormulaDisplay title="Circle" formulas={circleFormulas}>
        <ShapeVisualizer type="circle" />
      </FormulaDisplay>

      <FormulaDisplay title="Cylinder" formulas={cylinderFormulas}>
        <ShapeVisualizer type="cylinder" />
      </FormulaDisplay>

      <FormulaDisplay title="Sphere" formulas={sphereFormulas}>
        <ShapeVisualizer type="sphere" />
      </FormulaDisplay>
    </div>
  );
} 