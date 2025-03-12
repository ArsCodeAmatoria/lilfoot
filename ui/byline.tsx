import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:px-5 lg:py-4">
        <div className="flex flex-wrap items-center justify-center text-center gap-2 md:gap-3 text-sm text-gray-400 max-w-4xl mx-auto">
          <span className="text-center">Discover how proper crane operator training directly improves safety metrics, operational efficiency, and your bottom line through data-driven insights.</span>
          <a href="https://crigsafe-app.vercel.app/" className="inline-flex items-center hover:underline mx-1" target="_blank" rel="noreferrer">
            <span className="text-highlight">Crig</span>
            <span className="text-white">safe</span>
          </a>
          <span className="hidden md:inline-block mx-1">•</span>
          <a
            className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-gray-300 mx-1"
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
