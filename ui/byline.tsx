import { PawPrint } from 'lucide-react';

export default function Byline() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="flex flex-col justify-between space-y-4 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-sm text-gray-400">
              Discover how proper crane operator training directly improves safety metrics, operational efficiency, and your bottom line through data-driven insights.{' '}
              <a href="https://crigsafe-app.vercel.app/" className="text-highlight hover:underline" target="_blank" rel="noopener noreferrer">
                Crigsafe
              </a>
            </p>
          </div>
          <div className="flex items-center">
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
    </div>
  );
}
