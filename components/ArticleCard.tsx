import Image from "next/image";

const ArticleCard = ({
  name,
  title,
  description,
  publishedAt,
  author,
  imageUrl,
}: any) => {
  return (
    <section className="w-[284px] md:min-w-[600px] lg:min-w-[1000px] flex flex-col md:flex-row gap-8 border-2 border-green-100 p-5 rounded-lg bg-white mt-10 transform transition duration-500 hover:scale-110">
      <div className=" min-w-[200px] rounded-lg">
        <Image
          className="lg:py-8 rounded-lg"
          src={imageUrl ? imageUrl : "/logo.jpg"}
          alt="Image here"
          height={200}
          width={250}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono">
          <span>SOURCE : </span>
          {name}
        </p>
        <p className="font-semibold text-lg">
          <span>Title : </span>
          {title}
        </p>
        <p className="text-gray-500">
          <span>Description : </span>
          {description}
        </p>

        <div className="flex gap-4 pt-1">
          <span className="bg-slate-200 rounded-full ring-2 p-2 px-4 font-semibold text-xl">
            {String(author?.charAt(0))}
          </span>
          <div className="flex flex-row md:flex-col gap-5 md:gap-1 text-sm">
            <p>
              <span>By {author}</span>
            </p>
            <p className="text-gray-500 text-sm">
              <span>Dated : </span>
              {String(publishedAt?.slice(0, 10))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
