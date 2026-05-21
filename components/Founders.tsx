import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

import { founders } from '@/lib/constants';

export const Founders = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {founders.map((founder) => (
        <div key={founder.name} className="flex flex-col sm:flex-row gap-4">
          <div className="sm:self-center w-16 h-16">
            <img
              src={founder.headshotSrc}
              alt={founder.name + " headshot"}
              className="grayscale rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-col">
              <p className="text-lg font-medium mb-1.5 text-white leading-none">{founder.name}</p>
              <p className="text-xs text-neutral-500">{founder.title}</p>
            </div>
            <Link
              href={founder.linkedinURL}
              target="_blank"
              className="w-fit"
            >
              <RiLinkedinFill size={16} className="text-neutral-500 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}; 