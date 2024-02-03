import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import Search from "@/components/Search";
import DatePicker from "@/components/DatePicker";
import { getArticles } from "@/lib/actions/articles.action";
import { SearchParamsProps } from "@/types";
import NoResult from "@/components/NoResult";
import Pagination from "@/components/Pagination";

const page = async ({ searchParams }: SearchParamsProps) => {
  const responsejson = await getArticles({
    search: searchParams?.q,
    filterDate: searchParams?.from,
    page: searchParams?.page ? +searchParams?.page : 1
  })

  const pageNumber = searchParams?.page ? +searchParams?.page : 1;

  return (
    <>
    <section className="pt-36 bg-gray-200 ">
      <main className="relative lg:mx-48 flex flex-col justify-center items-center max-w-full my-0 mx-auto">
        <div className="bg-gray-200 fixed top-[72px] md:min-w-[600px] lg:min-w-[1000px] flex flex-col gap-2 md:gap-6 md:py-6 md:flex-row  items-center justify-center z-10">
          <div className="w-full md:w-3/4">
            <Search route="/articles"/>
          </div>
          <div className="w-full md:w-1/4">
            <DatePicker route="/articles"/>
          </div>
        </div>

        {responsejson?.articles?.length > 0 ?
        (
          responsejson?.articles?.map((item: any) => (
            <div key={item.title} className="flex flex-col">
              <Link href={`/articles/${item.title}`}>
                <ArticleCard
                  name={item.source.name}
                  title={item.title}
                  description={item.description}
                  publishedAt={item.publishedAt}
                  author={item.author}
                  imageUrl={item.urlToImage}
                />
              </Link>
            </div>
          ))
        ):(
          <NoResult
            title="There is no articles to show"
            description="Search For Something Else! 🚀 💡"
            link="/"
            linkTitle="Go Home"
          />
        )
        }
      </main>
    </section>

{
  responsejson?.articles?.length && <div className="mt-10">
  <Pagination pageNumber={pageNumber} isNext={true} />
</div>
}
    
    </>
  );
};

export default page;
