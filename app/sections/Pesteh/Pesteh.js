"use client";
import { fetchPesteh } from "@/redeux/Pesteh/PestehSlice";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Pesteh = () => {
  const dispatch = useDispatch();
  const pesteh = useSelector((state) => state.pesteh.posts);

  useEffect(() => {
    dispatch(fetchPesteh());
  }, [dispatch]);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mt-[75px] overflow-hidden">
      {/* تصویر پس‌زمینه */}
      {pesteh.map((elem) => (
        <Image
          key={elem.id}
          src={elem.image}
          alt={elem.alt || "pesteh image"}
          fill
          className="object-cover object-center transition-transform duration-300"
          priority
        />
      ))}

      {/* div قرمز پایین */}
      <div
        className="
          absolute bottom-0 bg-red-600 text-white flex flex-col justify-center
          px-6 py-3 gap-1 md:gap-2 transition-all duration-300

          /* حالت دسکتاپ */
          md:right-[28%] md:w-[280px] md:h-[110px]

          /* حالت موبایل */
          w-full h-[80px] right-0
          md:items-start md:text-right items-center text-center
        "
        style={{
          transform: "translateY(20%)",
        }}
      >
        <div className="md:ml-auto">
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-tight">
            پسته گلستان
          </h2>
          <h3 className="text-[14px] md:text-[16px] leading-tight">
            معرفی محصول
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Pesteh;
