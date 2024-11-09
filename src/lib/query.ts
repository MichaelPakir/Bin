import { groq } from "sanity";

const bannerQuery = groq`*[_type == 'banner']{
  ...
}`;

const productQuery = groq`*[_type == 'product']{
  ...
}`;

export { bannerQuery, productQuery };
