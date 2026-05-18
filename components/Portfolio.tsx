import { companies } from '@/lib/constants';
import { Company } from '@/lib/types';

export const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 md:auto-rows-fr">
      {companies.map((company: Company) => (
        <a
          key={company.name}
          href={company.url}
          target="_blank"
          className="gradual-border relative py-8 md:p-8 border-t border-neutral-800"
        >
          <div className="flex flex-col">
            <div className="justify-between space-x-4 flex mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain w-12 h-12"
              />
              <div className="px-3 py-1.5 flex items-center rounded-full bg-neutral-800 h-fit">
                <span className="text-xs text-white truncate">{company.category}</span>
              </div>
            </div>
            <p className="text-lg font-medium text-white mb-2 leading-none">{company.name}</p>
            <p className="text-neutral-500 text-sm">{company.description}</p>
            {company.descriptionTwo && (
              <>
                <br />
                <p className="text-neutral-500">{company.descriptionTwo}</p>
              </>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}; 