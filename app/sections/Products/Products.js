"use client";
import { fetchProducts } from "@/redeux/Products/ProductsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.posts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="w-full mb-16 mt-16 px-4">
      {/* عنوان بخش */}
      <div className="w-full mb-8 flex justify-start items-center px-4">
        <h1 className="text-[#FF0000] text-[20px] md:text-[22px] font-semibold">
          محصولات گلستان
        </h1>
      </div>

      {/* گرید محصولات */}
      <div className="w-[90%] md:w-[80%] lg:w-[72%] mx-auto">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          "
        >
          {products.map((elem) => (
            <div
              key={elem.id}
              className="
                flex flex-col bg-white border border-gray-300 rounded-lg 
                overflow-hidden shadow-md transition-transform hover:scale-[1.02]
              "
            >
              {/* تصویر */}
              <div className="relative w-full h-[220px] md:h-[240px] lg:h-[260px] border-b border-gray-300">
                <Image
                  src={elem.image}
                  alt={elem.alt || "product image"}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* محتوا */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-red-600 text-[18px] md:text-[20px] font-semibold mb-2">
                    {elem.title}
                  </h3>
                  <p className="text-justify text-[14px] md:text-[15px] text-[#88858A] leading-6">
                    {elem.body}
                  </p>
                </div>

                <button
                  className="mt-4 w-[133px] h-[41px] border border-gray-400 text-[#88898A]
                    hover:text-white bg-white hover:bg-red-700 rounded-[8px] transition-all"
                >
                  ادامه مطلب
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
