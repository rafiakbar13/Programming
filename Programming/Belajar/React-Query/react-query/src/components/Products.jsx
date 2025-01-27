import React from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { getProduct, getProducts } from "../api";
const Products = () => {
  const fetchProducts = async ({ pageParam = 5 }) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=${pageParam}`
    );
    return data;
  };

  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 5,
    getNextPageParam: (lastPage, pages) => lastPage.limit + 5,
    getPreviousPageParam: (firstPage, pages) => {
      if (firstPage.limit === 5) return;
      return firstPage.limit - 5;
    },
  });

  console.log(data);
  //   if (isPending) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.products.map((project) => (
            <p key={project.id}>{project.title}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        <button
          onClick={() => fetchPreviousPage()}
          disabled={!hasPreviousPage || isFetchingPreviousPage}
        >
          {isFetchingPreviousPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      <div>{isFetching && !isFetchingPreviousPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Products;
