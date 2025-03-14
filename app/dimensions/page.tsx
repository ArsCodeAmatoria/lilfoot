import FormulaDisplay from '../components/FormulaDisplay';
import GeometryVisualizer from '../components/GeometryVisualizer';

export default function DimensionsPage() {
  // Define all our geometric formulas
  const squareFormulas = [
    {
      name: 'Area of a Square',
      formula: 'A = s²',
      variables: { 'A': 'Area', 's': 'Side length' }
    },
    {
      name: 'Perimeter of a Square',
      formula: 'P = 4s',
      variables: { 'P': 'Perimeter', 's': 'Side length' }
    }
  ];

  const cubeFormulas = [
    {
      name: 'Volume of a Cube',
      formula: 'V = s³',
      variables: { 'V': 'Volume', 's': 'Side length' }
    },
    {
      name: 'Surface Area of a Cube',
      formula: 'SA = 6s²',
      variables: { 'SA': 'Surface Area', 's': 'Side length' }
    }
  ];

  const circleFormulas = [
    {
      name: 'Area of a Circle',
      formula: 'A = πr²',
      variables: { 'A': 'Area', 'r': 'Radius', 'π': 'Pi (≈ 3.14159)' }
    },
    {
      name: 'Circumference of a Circle',
      formula: 'C = 2πr',
      variables: { 'C': 'Circumference', 'r': 'Radius', 'π': 'Pi (≈ 3.14159)' }
    }
  ];

  const cylinderFormulas = [
    {
      name: 'Volume of a Cylinder',
      formula: 'V = πr²h',
      variables: { 'V': 'Volume', 'r': 'Radius of base', 'h': 'Height', 'π': 'Pi (≈ 3.14159)' }
    },
    {
      name: 'Lateral Surface Area',
      formula: 'LSA = 2πrh',
      variables: { 'LSA': 'Lateral Surface Area', 'r': 'Radius', 'h': 'Height', 'π': 'Pi (≈ 3.14159)' }
    },
    {
      name: 'Total Surface Area',
      formula: 'TSA = 2πr(r+h)',
      variables: { 'TSA': 'Total Surface Area', 'r': 'Radius', 'h': 'Height', 'π': 'Pi (≈ 3.14159)' }
    }
  ];

  const sphereFormulas = [
    {
      name: 'Volume of a Sphere',
      formula: 'V = (4/3)πr³',
      variables: { 'V': 'Volume', 'r': 'Radius', 'π': 'Pi (≈ 3.14159)' }
    },
    {
      name: 'Surface Area of a Sphere',
      formula: 'SA = 4πr²',
      variables: { 'SA': 'Surface Area', 'r': 'Radius', 'π': 'Pi (≈ 3.14159)' }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Geometric Dimensions</h1>
        <p className="text-gray-300">
          Common formulas for calculating areas, volumes, and perimeters of geometric shapes.
        </p>
      </div>

      <FormulaDisplay title="Square" formulas={squareFormulas}>
        <GeometryVisualizer type="square" />
      </FormulaDisplay>

      <FormulaDisplay title="Cube" formulas={cubeFormulas}>
        <GeometryVisualizer type="cube" />
      </FormulaDisplay>

      <FormulaDisplay title="Circle" formulas={circleFormulas}>
        <GeometryVisualizer type="circle" />
      </FormulaDisplay>

      <FormulaDisplay title="Cylinder" formulas={cylinderFormulas}>
        <GeometryVisualizer type="cylinder" />
      </FormulaDisplay>

      <FormulaDisplay title="Sphere" formulas={sphereFormulas}>
        <GeometryVisualizer type="sphere" />
      </FormulaDisplay>
    </div>
  );
} 