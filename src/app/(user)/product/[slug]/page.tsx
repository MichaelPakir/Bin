import Container from "@/components/Container";
import React from "react";
import { ProductData } from "../../../../../type";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const SingleProductPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
  ...
  }`;

  const product: ProductData = await client.fetch(query, { slug });
  console.log(product);
  return <Container>SingleProductPage</Container>;
};

export default SingleProductPage;
