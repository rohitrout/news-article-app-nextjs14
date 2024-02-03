import qs from "query-string";
import { getArticles } from "@/lib/actions/articles.action";
import Image from "next/image";
import Link from "next/link";

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const currentUrl = qs.parse(params.id);

 const topic = Object.entries(currentUrl)[0][0]

 const articleContent = await getArticles({search: topic});
//  console.log(articleContent)
  

 return (
  <div className="pt-36">
   <main className="relative flex flex-col justify-start items-center max-w-full lg:px-20 px-3">
  <Link href="/articles"><button className='text-left mb-5 bg-blue-200 text-black rounded-lg text-white px-4 py-2'>Go back</button></Link>
  <p className="font-semibold text-2xl pb-1 ">
    {articleContent?.articles[0]?.title}
  </p>
  <p className="pb-6">By {articleContent?.articles[0]?.author}</p>
  <Image
    src={articleContent?.articles[0]?.urlToImage}
    height={500}
    width={900}
    alt="imagehere"
  />
  <p className="pt-4  mb-24">
    Specific Article for the given params {articleContent?.articles[0]?.content}
  </p>
</main>

  </div>
);
};

export default ArticlePage;
