import { getBannerData } from "@/lib/getData";
import React from "react";

const Banner = async () => {
  const banner = await getBannerData();
  console.log(banner);

  return <div>Banner</div>;
};

export default Banner;
