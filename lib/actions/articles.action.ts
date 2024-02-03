"use server";
import { GetArticleParams } from "@/types";

export const getArticles = async (params: GetArticleParams) => {
  try {
    const { search, filterDate, page = 1, pageSize = 10 } = params;
    const data = await fetch(
      `${process.env.API_BASE_URL}?q=${
        search || "Everything"
      }&from=${filterDate}&pageSize=${pageSize}&page=${page}&apiKey=${
        process.env.API_KEY
      }`
    );
    return data.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
