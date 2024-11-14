import { Spinner } from "@nextui-org/spinner";
import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-4">
      <Spinner color="warning" />
    </div>
  );
};

export default Loader;
