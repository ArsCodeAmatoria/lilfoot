import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5 lg:px-5 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Crigsafe Information */}
          <div className="text-sm text-gray-400 flex items-center">
            Discover how proper crane operator training directly improves safety metrics, operational efficiency, and your bottom line through data-driven insights.{' '}
            <a href="https://crigsafe-app.vercel.app/" className="text-highlight hover:underline ml-1" target="_blank" rel="noreferrer">
              Crigsafe
            </a>
          </div>
          
          {/* Bigfoot Crane Attribution */}
          <div className="flex justify-center md:justify-end">
            <a
              className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-gray-300 text-sm"
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
    </div>
  );
}
