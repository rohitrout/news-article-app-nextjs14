'use client';

import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const Pagination = ({ pageNumber, isNext }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleNavigation = (direction: string) => {
    const nextPageNo = direction === 'prev' ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: nextPageNo.toString()
    });
    router.push(newUrl);
  };
  return (
    <div className="flex w-full items-center justify-center gap-2 pb-3">
      <button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation('prev')}
        className="border-2 rounded-lg border-orange-600 borderflex min-h-[36px] items-center justify-center"
      >
        <p className="body-medium text-[#143C6C] px-3.5 py-2.5 font-semibold">{`${'< Prev'}`}</p>
      </button>
      <div className="flex items-center justify-center rounded-full bg-[#143C6C] px-4 py-2.5">
        <p className="body-semibold text-white">{pageNumber}</p>
      </div>
      <button
        disabled={!isNext}
        onClick={() => handleNavigation('next')}
        className="border-2 rounded-lg border-orange-600 flex min-h-[36px] items-center justify-center "
      >
        <p className="body-medium text-[#143C6C] px-3.5 py-2.5 font-semibold">{`${'Next >'}`} </p>
      </button>
    </div>
  );
};
export default Pagination;
