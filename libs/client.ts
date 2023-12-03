import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  MicroCMSImage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  MicroCMSDate,
} from "microcms-js-sdk";
// eslint-disable-next-line import/extensions
import { Content, FTBCom, FTBPortalSingle } from "@/types/manuals";
import { relative } from "path";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apiKey: string = process.env.MICRO_CMS_API_KEY || "default-key";

export const revalidate = 0;

export const client = createClient({
  serviceDomain: "o5h6eiq13f",
  apiKey: process.env.MICRO_CMS_API_KEY || "default-key",
  customFetch: (input, init) => {
    if (typeof input === "string") {
      const newInput = new URL(input);
      const time = new Date();
      newInput.searchParams.set("cacheclearparam", `${time.getMinutes()}`);
      return fetch(newInput.href, init);
    }
    return fetch(input, init);
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ftbcom = async (queries?: MicroCMSQueries) => {
  const ftbcomLatest = await client.getList({
    endpoint: "ftbcom",
    queries: { limit: 5 },
  });
  return ftbcomLatest;
};

export const ftbcomlist = async (queries?: MicroCMSQueries) => {
  const ftbcomLatest = await client.getList({
    endpoint: "ftbcom",
    queries: { limit: 38 },
  });

  return ftbcomLatest;
};
export const ftbcomArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail({
    endpoint: "ftbcom",
    contentId,
    queries,
  });

  return detailData;
};

export const getList = async (props: { category: string }) => {
  const param = props.category;
  const ftbList = await client.getList({
    endpoint: "ftb",
    queries: { filters: `category[contains]${param}`, limit: 60 },
  });

  return ftbList;
};

export const getSearchList = async (word: string) => {
  const param = decodeURI(word);
  const ftbList = await client.getList({
    endpoint: "ftb",
    queries: { q: param, limit: 60 },
  });

  return ftbList;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<FTBPortalSingle>({
    endpoint: "ftb",
    contentId,
    queries,
  });

  return detailData;
};

export const getDmList = async () => {
  const dmList = await client.getList({
    endpoint: "dmtest",
    queries: { limit: 160 },
  });

  return dmList;
};
export const getDmLink = async () => {
  const dmList = await client.getList({
    endpoint: "dm_link",
    queries: { limit: 30 },
  });

  return dmList;
};

export const getDmDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<FTBPortalSingle>({
    endpoint: "dmtest",
    contentId,
    queries,
  });

  return detailData;
};
export const getDmDetail_link = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<FTBPortalSingle>({
    endpoint: "dm_link",
    contentId,
    queries,
  });

  return detailData;
};

export const getDetail2 = async (
  eventId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail({
    endpoint: "ftb",
    contentId: "",
    queries: { filters: `eventId[equals]${eventId}` },
  });

  return detailData;
};

export const getHRDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail({
    endpoint: "humanresources",
    contentId,
    queries,
  });

  return detailData;
};
