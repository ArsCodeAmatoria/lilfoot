import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center justify-center">
          <a
            className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-gray-300"
            href="https://bigfootcrane.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Site by Bigfoot Crane</span>
            <PawPrint size={16} className="text-highlight" />
          </a>
        </div>
      </div>
    </div>
  );
}
