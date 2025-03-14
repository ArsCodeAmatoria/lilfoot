import { demos } from '#/lib/demos';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
  title: 'All Categories | Crane Operator Resources | lilfoot',
  description:
    'Browse all resource categories for crane operators, including practice exams, load charts, and technical specifications.',
};

export default function AllCategoriesPage() {
  return (
    <div className="space-y-8 text-white">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Home
        </Link>
        <h1 className="mb-2 mt-4 text-3xl font-bold">All Categories</h1>
        <p className="max-w-3xl text-gray-400">
          Browse our complete collection of crane operator resources, organized
          by category.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="rounded-lg bg-gray-900 p-5">
        <h2 className="mb-3 text-lg font-medium">Quick Navigation</h2>
        <div className="flex flex-wrap gap-2">
          {demos.map((section) => (
            <a
              key={section.name}
              href={`#${section.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-md bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {demos.map((section) => (
          <div
            key={section.name}
            id={section.name.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-16"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {section.name}
              </h2>
              <div className="mx-4 hidden h-0.5 flex-grow bg-gray-800 md:block"></div>
              <Link href="/" className="text-xs text-gray-400 hover:text-white">
                Back to top ↑
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  key={item.name}
                  className="group flex flex-col justify-between rounded-lg bg-gray-900 p-4 transition-all hover:bg-gray-800 hover:shadow-md"
                >
                  <div>
                    <div className="mb-2 font-medium text-gray-200 group-hover:text-green-500">
                      {item.name}
                    </div>

                    {item.description ? (
                      <div className="line-clamp-2 text-sm text-gray-400 group-hover:text-gray-300">
                        {item.description}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <span className="text-xs text-gray-500 group-hover:text-green-500">
                      View details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
