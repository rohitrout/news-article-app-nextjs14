"use client";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { CustomInputProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DatePicker = ({ route, placeholder, otherClasses }: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    console.log("selectedDate",selectedDate)
    if (selectedDate) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "from",
        value: selectedDate,
      });
      router.push(newUrl, { scroll: false });
    } else {
      if (pathname === route) {
        const newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["from"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  }, [selectedDate,router, pathname, searchParams]);
  return (
    
      <input
        placeholder={placeholder || "Select Date..."}
        type='date'
        className={`w-full rounded-lg p-1 py-[8px] px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 border-2 border-gray-300 ${otherClasses}`}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    
  );
};

export default DatePicker;
