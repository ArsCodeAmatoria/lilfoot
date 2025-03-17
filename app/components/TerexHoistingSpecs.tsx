import { Cpu, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const TerexHoistingSpecs = () => {
  return (
    <div className="space-y-8">
      {/* Power Supply Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 font-bold">
            Power Supply | Alimentation électrique | Stromversorgung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SR WB 66-100/4F */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">SR WB 66-100/4F</h3>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-gray-600" />
                <span>200 kVA</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>480V - 60Hz / 3 phase</span>
              </div>
            </div>

            {/* SR WB 102-100/4F */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">SR WB 102-100/4F</h3>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-gray-600" />
                <span>245 kVA</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>480V - 60Hz / 3 phase</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hoisting Table Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 font-bold">
            Hoisting | Levage | Heben
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Crane Model</TableHead>
                  <TableHead>Load (lbs)</TableHead>
                  <TableHead>Speed (ft/min)</TableHead>
                  <TableHead>Power (kW)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* SR WB 66-100/4F */}
                <TableRow>
                  <TableCell className="font-semibold" rowSpan={8}>SR WB 66-100/4F</TableCell>
                  <TableCell>5,512 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 440</TableCell>
                  <TableCell rowSpan={4}>66 kW</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9,259 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 275</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15,653 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 177</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>22,046 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 110</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11,023 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 220</TableCell>
                  <TableCell rowSpan={4}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>18,519 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 138</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>31,306 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>44,092 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 55</TableCell>
                </TableRow>

                {/* SR WB 102-100/4F */}
                <TableRow>
                  <TableCell className="font-semibold" rowSpan={8}>SR WB 102-100/4F</TableCell>
                  <TableCell>6,173 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 525</TableCell>
                  <TableCell rowSpan={4}>102 kW</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10,582 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 328.1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>17,637 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 206.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>22,046 🔗 2-Part</TableCell>
                  <TableCell>0 ➝ 131.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12,346 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 262.5</TableCell>
                  <TableCell rowSpan={4}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>21,164 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 196.9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>35,274 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 101.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>44,092 🔗 4-Part</TableCell>
                  <TableCell>0 ➝ 65.6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Values for heights {'>'}1,443.6 ft may vary. Please consult manufacturer specifications for exact details.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerexHoistingSpecs; 