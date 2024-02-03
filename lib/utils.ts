import { UrlQueryParams, removeUrlQueryParams } from "@/types";
import qs from "query-string";

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params); //base only
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname, //base url
      query: currentUrl,  //params after ?mark
    },
    { skipNull: true }
  );
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: removeUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
