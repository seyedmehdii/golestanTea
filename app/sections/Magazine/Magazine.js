"use client";
import { fetchMagazine } from "@/redeux/Magazine/MagazineSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Magazine = () => {
  const dispatch = useDispatch();
  const magazine = useSelector((state) => state.magazine.posts);

  useEffect(() => {
    dispatch(fetchMagazine());
  }, [dispatch]);

  return (
    <div className="w-full mt-[40px]">
      {/* عنوان */}
      <div className="w-full mb-[30px] flex justify-start items-center px-6">
        <h1 className="text-[#FF0000] text-[20px] md:text-[22px] font-semibold">
          مجله گلستان
        </h1>
      </div>

      {/* بخش محتوا */}
      <div className="w-full bg-[#CDE4B0] py-8">
        <div className="w-[90%] md:w-[80%] lg:w-[73%] mx-auto">
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-6
            "
          >
            {magazine.map((elem) => (
              <div
                key={elem.id}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={elem.image}
                  alt={elem.alt}
                  width={400}
                  height={260}
                  className="object-cover w-full h-[220px]"
                  priority
                />

                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-red-600 text-[18px] md:text-[20px] mb-[10px] font-semibold">
                      {elem.title}
                    </h3>
                    <p className="text-justify text-[14px] md:text-[15px] text-[#88858A] leading-7">
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
    </div>
  );
};

export default Magazine;
