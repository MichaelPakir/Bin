import { twMerge } from "tailwind-merge";

interface Props {
  item: ProductData;
  className?: string;
}

const AddToCartButton = ({ item, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1"
      )}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
