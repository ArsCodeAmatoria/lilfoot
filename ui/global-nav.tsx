'use client';

import { demos, type Item } from '#/lib/demos';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { PawPrint, ExternalLink } from 'lucide-react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="flex h-8 w-8 items-center justify-center">
            <PawPrint size={30} color="#53C03F" />
          </div>

          <h3 className="font-['Shadows_Into_Light_Two'] text-2xl tracking-wide text-gray-400 group-hover:text-gray-50">
            lilfoot
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="flex h-full flex-col space-y-6 px-2 pb-4 pt-5">
          <div className="flex-grow">
            {demos.map((section) => {
              return (
                <div key={section.name} className="mb-6">
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                    <div>{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <GlobalNavItem
                        key={item.slug}
                        item={item}
                        close={close}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Attribution */}
          <div className="fixed bottom-0 left-0 w-64 border-t border-gray-800 bg-gray-950 py-4">
            <div className="px-4 text-xs">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-['Shadows_Into_Light_Two'] text-base text-highlight">
                      lilfoot
                    </span>
                    <PawPrint size={14} className="ml-1 text-highlight" />
                  </div>
                  <span className="text-gray-500">© 2025</span>
                </div>

                <div className="border-t border-gray-800 pt-3 text-[11px] text-gray-400">
                  <a
                    href="https://bigfootcrane.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-colors hover:text-highlight"
                  >
                    <span>Made by Bigfoot Crane Company</span>
                    <ExternalLink size={10} className="ml-1 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
