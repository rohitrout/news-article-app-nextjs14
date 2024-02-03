import Image from 'next/image';
import Link from 'next/link';

interface NoResultProps {
  title: string;
  link: string;
  linkTitle: string;
  description: string;
}

const NoResult = ({ title, link, linkTitle, description }: NoResultProps) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/no-data.png"
        alt="Not-result-page"
        width={270}
        height={200}
        className="block object-contain"
      />
      <h2 className="h1-bold text-4xl text-red-700 mt-8">{title}</h2>
      <p className="h2-bold text-2xl text-[#143C6C] mt-8 text-center">
        {description}
      </p>
      <Link href={link}>

        <button className="paragraph-medium mt-5 min-h-[100px] rounded-lg text-2xl font-semibold text-orange-500">
          {linkTitle}
        </button>
      </Link>
    </div>
  );
};
export default NoResult;
