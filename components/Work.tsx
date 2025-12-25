import { companies } from '@/lib/constants';
import { Company } from '@/lib/types';

export const Work = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8 sm:auto-rows-fr">
      {companies.map((company: Company) => (
        <a
          key={company.name}
          href={company.url}
          target="_blank"
          className="gradual-border relative py-8 sm:p-8 border-t border-neutral-800"
        >
          <div className="flex flex-col">
            <div className="justify-between space-x-4 flex mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain w-12 h-12"
              />
              <div className="px-3 py-1 rounded-full bg-neutral-800 h-fit">
                <span className="text-sm text-white truncate">{company.category}</span>
              </div>
            </div>
            <span className="text-lg font-medium text-white mb-2 leading-none">{company.name}</span>
            <p className="text-neutral-500">{company.description}</p>
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