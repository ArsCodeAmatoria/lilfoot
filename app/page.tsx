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
  ChevronRight,
  Cable,
  Ruler,
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
            Tower Crane & Rigging Resources
          </p>
          <p className="text-md mt-4 max-w-2xl text-gray-400 md:text-lg">
            Interactive charts, specs, and practice exams for tower crane operators
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/red-seal-exam"
              className="text-md rounded-md bg-green-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Red Seal Practice Exam
            </Link>
            <Link
              href="/tower-crane/terex-sk-415-20"
              className="text-md rounded-md bg-gray-800 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Tower Crane Specs
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-200">
          Tower Crane & Rigging Resources
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <BookOpen size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Tower Crane Exams</h3>
            <p className="mb-4 flex-grow text-gray-400">
              Prepare for your tower crane certification with our comprehensive practice
              exams designed to simulate real testing conditions.
            </p>
            <Link
              href="/red-seal-exam"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              Red Seal Exam <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <HardHat size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Tower Crane Charts</h3>
            <p className="mb-4 flex-grow text-gray-400">
              Access detailed specifications and load charts for various tower crane
              models including Liebherr, Terex, Pecco, and more.
            </p>
            <Link
              href="/tower-crane/liebherr-125-ec-b-6"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              View charts <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-5px]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
              <Cable size={28} className="text-green-500" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Rigging Resources</h3>
            <p className="mb-4 flex-grow text-gray-400">
              Essential rigging references including wire rope slings, chain slings, and material weights for safe and efficient crane operations.
            </p>
            <Link
              href="/rigging-charts/basic"
              className="inline-flex items-center font-medium text-green-500 hover:text-green-400"
            >
              View rigging charts <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-200">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {demos.slice(0, 6).map((section) => (
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
                      <ChevronRight size={16} className="text-green-500 opacity-0 transition-opacity group-hover:opacity-100" />
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
