import { client } from '@/sanity/lib/client';
import { bannerQuery, productQuery } from "./query";

export const revalidate = 0;

const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};

const getProductsData = async () => {
  const productsData = await client.fetch(productQuery);
  return productsData;
};

export { getBannersData, getProductsData };
