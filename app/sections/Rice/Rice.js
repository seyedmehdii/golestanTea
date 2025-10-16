"use client";
import { fetchRice } from "@/redeux/Rice/RiceSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Rice = () => {
  const dispatch = useDispatch();
  const rice = useSelector((state) => state.rice.posts);

  useEffect(() => {
    dispatch(fetchRice());
  }, [dispatch]);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
      {/* تصویر پس‌زمینه */}
      {rice.map((elem) => (
        <Image
          key={elem.id}
          src={elem.image}
          alt={elem.alt || "rice image"}
          fill
          className="object-cover object-center transition-transform duration-300"
          priority
        />
      ))}

      {/* پوشش قرمز پایین */}
      <div
        className="
          absolute bottom-0 bg-red-600 text-white flex flex-col justify-center
          px-6 py-3 gap-1 md:gap-2 transition-all duration-300

          md:right-[28%] md:w-[260px] md:h-[110px]
          w-full h-[80px] right-0
          md:items-start md:text-right items-center text-center
        "
        style={{
          transform: "translateY(20%)", // ✅ کمی بالا بیاد تا داخل عکس نره
        }}
      >
        <div className="md:ml-auto">
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-tight">
            برنج گلستان
          </h2>
          <h3 className="text-[14px] md:text-[16px] leading-tight">
            معرفی محصول
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rice;
