import { demos } from '#/lib/demos';
import Link from 'next/link';
import Image from 'next/image';
import { PawPrint } from 'lucide-react';

export default function Page() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl">
        <div className="absolute inset-0 opacity-30 z-0">
          <Image 
            src="/images/liebherr81k.jpg" 
            alt="Tower Crane" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 px-6 py-16 sm:px-8 sm:py-20 lg:py-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center mb-4">
            <PawPrint size={40} color="#53C03F" className="mr-2" />
            <h1 className="font-['Shadows_Into_Light_Two'] text-4xl md:text-5xl lg:text-6xl text-white">
              lilfoot
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-300 font-light">
            Tower Crane Training & Resources
          </p>
          <p className="mt-4 max-w-2xl text-md md:text-lg text-gray-400">
            Interactive tools, charts, and practice exams for tower crane operators
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/red-seal-exam" 
              className="rounded-md bg-green-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Practice Exam
            </Link>
            <Link 
              href="/crane-tables" 
              className="rounded-md bg-gray-800 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Crane Tables
            </Link>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-medium text-gray-300">Examples</h2>

        <div className="space-y-10 text-white">
          {demos.map((section) => {
            return (
              <div key={section.name} className="space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.name}
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {section.items.map((item) => {
                    return (
                      <Link
                        href={`/${item.slug}`}
                        key={item.name}
                        className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      >
                        <div className="font-medium text-gray-200 group-hover:text-gray-50">
                          {item.name}
                        </div>

                        {item.description ? (
                          <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                            {item.description}
                          </div>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
