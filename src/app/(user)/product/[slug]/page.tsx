import Container from "@/components/Container";
import React from "react";
import { ProductData } from "../../../../../type";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormattedPrice from "@/components/FormattedPrice";
import { MdStar } from "react-icons/md";
import { TbStarHalfFilled } from "react-icons/tb";

const SingleProductPage = async ({ params }: Props) => {
  const { slug } = await Promise.resolve(params);
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
  ...
  }`;

  const product: ProductData = await client.fetch(query, { slug });
  console.log(product);
  return (
    <Container className="my-10 bg-bgLight">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4">
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt={product?.title}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">{product?.title}</h2>
            <div className="flex items-center gap-4">
              <p className="text-lg font-normal text-gray-500 line-through">
                <FormattedPrice amount={product?.rowprice} />
              </p>
              <FormattedPrice
                amount={product?.price}
                className="text-lg font-bold"
              />
              <p className="text-sm">
                You saved{" "}
                <FormattedPrice
                  amount={product?.rowprice - product?.price}
                  className="bg-lightGreen text-white px-2 rounded-md text-xs py-1"
                />{" "}
                from this item.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-base text-lightText flex items-center">
                {Array?.from({ length: 5 })?.map((_, index) => {
                  const filled = index + 1 <= Math.floor(product?.ratings);
                  const halfFilled =
                    index + 1 > Math.floor(product?.ratings) &&
                    index < Math.ceil(product?.ratings);

                  return (
                    <MdStar
                      key={index}
                      className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-[#f7ca00]" : "text-lightText"}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
