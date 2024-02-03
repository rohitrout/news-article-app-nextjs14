"use client";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { CustomInputProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = ({ route, placeholder, otherClasses }: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["q"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, router, pathname, searchParams]);

  return (
    
      <input
        className={`w-full rounded-lg p-1 py-[8px] px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 border-2 border-gray-300 ${otherClasses}`}
        placeholder={placeholder || "🔍  Search for articles..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    
  );
};

export default Search;
