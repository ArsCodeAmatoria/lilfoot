import { demos } from '#/lib/demos';
import Link from 'next/link';
import Image from 'next/image';
import {
  PawPrint,
  BookOpen,
  HardHat,
  Award,
  Calculator,
  ClipboardCheck,
} from 'lucide-react';

export default function Page() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/liebherr81k.jpg"
              alt="Tower Crane"
              className="object-cover opacity-30"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
          <div className="mb-4 inline-flex items-center">
            <PawPrint size={40} color="#53C03F" className="mr-2" />
            <h1 className="font-['Shadows_Into_Light_Two'] text-4xl text-white md:text-5xl lg:text-6xl">
              lilfoot
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-xl font-light text-gray-300 md:text-2xl">
            Crane and Rigging Exam Practice Resources
          </p>
          <p className="text-md mt-4 max-w-2xl text-gray-400 md:text-lg">
            Interactive tools, charts, and practice exams for crane operators
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/red-seal-exam"
              className="text-md rounded-md bg-green-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Practice Exam
            </Link>
            <Link
              href="/crane-tables"
              className="text-md rounded-md bg-gray-800 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Crane Tables
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-200">
          Crane Operator Resources
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <BookOpen size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Practice Exams</h3>
            <p className="mb-4 flex-grow text-gray-400">
              Prepare for your certification with our comprehensive practice
              exams designed to simulate real testing conditions.
            </p>
            <Link
              href="/practice-exams/40-tonnes-and-under"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              View exams <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <HardHat size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Load Charts</h3>
            <p className="mb-4 flex-grow text-gray-400">
              Access detailed specifications and load charts for a wide range of
              crane types including tower, mobile, and rough terrain.
            </p>
            <Link
              href="/tower-crane/pecco-sk-180"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              View charts <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <Calculator size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Technical Resources</h3>
            <p className="mb-4 flex-grow text-gray-400">
              From rigging charts to power line approach limits, find all the
              technical information you need for safe crane operations.
            </p>
            <Link
              href="/rigging-charts/basic"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              View resources <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-200">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {demos.slice(0, 8).map((section) => (
              <div key={section.name} className="rounded-lg bg-gray-900 p-5">
                <h3 className="mb-3 text-lg font-medium text-white">
                  {section.name}
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {section.items.slice(0, 4).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="group flex items-center justify-between rounded-md p-2 transition-colors hover:bg-gray-800"
                    >
                      <span className="text-gray-300 group-hover:text-green-500">
                        {item.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  ))}
                  {section.items.length > 4 && (
                    <div className="mt-1 px-2">
                      <Link
                        href={`/all-categories#${section.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-gray-500 transition-colors hover:text-green-500"
                      >
                        +{section.items.length - 4} more items →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/all-categories"
              className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span>View All Categories</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
