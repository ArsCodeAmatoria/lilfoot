import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:px-5 lg:py-4">
        <div className="flex flex-col items-center justify-center text-sm text-gray-400">
          <div className="mx-1 flex items-center gap-1.5">
            <span className="font-['Shadows_Into_Light_Two'] text-lg">
              lilfoot
            </span>
            <PawPrint size={20} className="ml-1 text-highlight" />
          </div>
          <div className="mt-1 text-xs">
            Created by{' '}
            <a
              href="https://bigfootcrane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight hover:underline"
            >
              Bigfoot Crane
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
