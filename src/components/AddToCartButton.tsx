"use client";
import { twMerge } from "tailwind-merge";
import { ProductData } from "../../type";
import { addToCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  item: ProductData;
  className?: string;
}

const AddToCartButton = ({ item, className }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 100)} added successfully`);
  };
  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1",
        className
      )}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
