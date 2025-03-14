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

      <div className="space-y-10">
        {demos.map((section) => (
          <div key={section.name} className="space-y-5">
            <div className="border-b border-gray-800 pb-2 text-xl font-semibold text-white">
              {section.name}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  href={`/${item.slug}`}
                  key={item.name}
                  className="group rounded-lg bg-gray-900 p-4 transition-colors hover:bg-gray-800"
                >
                  <div className="mb-1 font-medium text-gray-200 group-hover:text-white">
                    {item.name}
                  </div>

                  {item.description ? (
                    <div className="line-clamp-2 text-sm text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
