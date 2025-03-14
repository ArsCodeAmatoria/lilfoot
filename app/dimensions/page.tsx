import FormulaDisplay from '../components/FormulaDisplay';
import ShapeVisualizer from '../components/ShapeVisualizer';

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
