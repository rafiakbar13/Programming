import React from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { getProduct, getProducts } from "../api";
const Example = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    config: {
      refetchOnWindowFocus: false,
    },
  });

  console.log(data);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return <></>;
};

export default Example;
