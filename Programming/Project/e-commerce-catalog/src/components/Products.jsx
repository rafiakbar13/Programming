import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../hooks/context";

const url = "https://fakestoreapi.com/products";

const Products = () => {
  const {
    products,
    setProducts,
    category,
    setCategory,
    index,
    empty,
    handleSingleProduct,
  } = useGlobalContext();
  console.log(products);
  const fetchProducts = async () => {
    const response = await axios.get(`${url}/${index}`);
    if (
      response.data.category === "men's clothing" ||
      response.data.category === "women's clothing"
    ) {
      setProducts(response.data);
    } else {
      handleSingleProduct();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [index]);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <article className="flex items-center justify-center max-w-5xl gap-8 p-12 bg-white rounded-lg shadow-lg">
        {/* kiri */}
        <img src={products.image} alt="" width={200} className="" />
        {/* Kanan */}
        <div>
          <h4
            className={
              products.category === "men's clothing"
                ? "text-men text-2xl font-semibold"
                : "text-women text-2xl font-semibold"
            }
          >
            {products.title}
          </h4>
          <div className="flex justify-between my-4 border-b-[1.5px]">
            <span>{products.category}</span>
            <span>{products?.rating?.rate}</span>
          </div>
          <p className="text-[18px] mb-4 font-normal border-b-[1.5px]">
            {products.description}
          </p>
          <span
            className={
              products.category === "men's clothing"
                ? "text-men text-2xl font-semibold"
                : "text-women text-2xl font-semibold"
            }
          >
            $ {products.price}
          </span>
          <div className="flex justify-between gap-5 mt-4">
            <button
              className={
                products.category === "men's clothing"
                  ? "bg-men text-white py-2 px-4 rounded-lg w-full"
                  : "bg-women text-white py-2 px-4 rounded-lg w-full"
              }
            >
              Buy Now
            </button>
            <button
              className={
                products.category === "men's clothing"
                  ? "bg-white ring-2 ring-men w-full rounded-lg"
                  : "bg-white ring-2 ring-women w-full rounded-lg"
              }
              onClick={handleSingleProduct}
            >
              Next Product
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Products;
