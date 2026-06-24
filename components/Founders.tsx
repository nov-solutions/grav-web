import Link from 'next/link';

import { RiLinkedinFill } from '@remixicon/react';

import { founders } from '@/lib/constants';

export const Founders = () => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {founders.map((founder) => (
        <div key={founder.name} className="flex flex-col sm:flex-row gap-4">
          <div className="sm:self-center w-16 h-16">
            <img
              src={founder.headshotSrc}
              alt={founder.name + " headshot"}
              className="grayscale rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <div className="flex flex-col space-y-1">
              <p className="font-medium text-white leading-none tracking-tight">{founder.name}</p>
              <p className="text-xs text-neutral-600">{founder.title}</p>
            </div>
            <Link
              href={founder.linkedinURL}
              target="_blank"
              className="w-fit"
            >
              <RiLinkedinFill size={16} className="text-neutral-600 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}; 