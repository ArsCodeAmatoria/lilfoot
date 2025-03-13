import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:px-5 lg:py-4">
        <div className="flex items-center justify-center text-sm text-gray-400">
          <div className="flex items-center gap-1.5 mx-1">
            <span>Made by </span>
            <a
              className="text-gray-400 transition-colors hover:text-gray-300"
              href="https://bigfootcrane.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bigfoot Crane
            </a>
            <span> for </span>
            <span className="font-['Shadows_Into_Light_Two']">lilfoot</span>
            <PawPrint size={16} className="text-highlight ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
