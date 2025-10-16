"use client";
import Image from "next/image";
import { fetchQore } from "@/redeux/Qore/QoreSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Qore = () => {
  const dispatch = useDispatch();
  const qore = useSelector((state) => state.qore.posts);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchQore());
    setTimeout(() => setLoaded(true), 50);
  }, [dispatch]);

  return (
    <div className="w-full bg-[#EFEFEF] py-10 md:py-0">
      <div
        className="
          flex flex-col md:flex-row 
          w-[90%] md:w-[80%] 
          mx-auto 
          h-auto md:h-[460px] 
          gap-10 md:gap-0
        "
      >
        {/* --- بخش متن --- */}
        <div
          className="
            w-full md:w-1/2 
            flex flex-col justify-center 
            px-4 md:pr-10 
            text-right md:text-right
            leading-relaxed
          "
        >
          <h1 className="text-red-600 mb-4 md:mb-5 text-[22px] md:text-[26px] whitespace-nowrap md:whitespace-normal">
            قرعه‌کشی مصرف‌کنندگان گلستان
          </h1>

          <h2 className="mb-4 md:mb-5 text-[15px] md:text-[17px] whitespace-nowrap md:whitespace-normal">
            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
          </h2>

          <p
            className={`mb-6 md:mb-6 text-[#939393] text-justify text-[14px] md:text-[17px] transition-all duration-700 ease-out
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }
            `}
          >
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>

          <a
            href="#"
            className="
              w-[150px] md:w-[133px] 
              h-[44px] md:h-[41px] 
              text-[#88898A] hover:text-white
              flex justify-center items-center 
              bg-white hover:bg-red-700 
              rounded-[8px] border border-gray-400
              mx-auto md:mx-0
              transition-colors duration-300
            "
          >
            اطلاعات بیشتر
          </a>
        </div>

        {/* --- بخش تصویر --- */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-700 ease-out
            ${
              loaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }
          `}
        >
          {qore.map((elem) => (
            <Image
              key={elem.id}
              src={elem.image}
              alt={elem.alt}
              width={450}
              height={300}
              className="
                max-w-[85%] md:max-w-[90%] 
                h-auto object-contain
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qore;
