import { companies } from '@/lib/constants';
import { Company } from '@/lib/types';

export const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:auto-rows-fr">
      {companies.map((company: Company) => (
        <a
          key={company.name}
          href={company.url}
          target="_blank"
          className="gradual-border relative py-8 sm:p-8 border-t border-neutral-600"
        >
          <div className="flex flex-col space-y-1.5">
            <div className="justify-between space-x-4 flex mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain w-12 h-12"
              />
              <div className="px-3 py-1.5 flex items-center rounded-full bg-neutral-600 h-fit">
                <span className="text-xs text-white truncate">{company.category}</span>
              </div>
            </div>
            <p className="font-medium text-white leading-none">{company.name}</p>
            <p className="!mt-2 text-neutral-600 text-xs">{company.description}</p>
            {company.descriptionTwo && (
              <>
                <br />
                <p className="text-neutral-600 text-xs">{company.descriptionTwo}</p>
              </>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}; 