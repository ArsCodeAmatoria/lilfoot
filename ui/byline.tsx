import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:px-5 lg:py-4">
        <div className="flex items-center justify-center text-sm text-gray-400">
          <div className="mx-1 flex items-center gap-1.5">
            <span className="font-['Shadows_Into_Light_Two'] text-lg">
              lilfoot
            </span>
            <PawPrint size={20} className="ml-1 text-highlight" />
          </div>
        </div>
      </div>
    </div>
  );
}
