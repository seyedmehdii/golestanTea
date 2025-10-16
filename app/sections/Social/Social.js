const Social = () => {
  return (
    <>
      <div className="w-full my-10 px-4 md:px-0">
        <div className="w-full flex flex-col items-center">
          {/* تیتر */}
          <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[53%] mb-5 text-center md:text-right">
            <h2 className="text-[#FF1000] text-[18px] sm:text-[20px] md:text-[22px] font-medium">
              مسئولیت‌های اجتماعی گلستان
            </h2>
          </div>

          {/* متن توضیحی */}
          <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[53%] mb-6 text-justify">
            <p className="text-[#848C8F] leading-[30px] sm:leading-[33px] md:leading-[35px] text-[14px] sm:text-[15px] md:text-[16px]">
              كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
              قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری
              فراتر از درآمدزایی ایجاد كنند؛ آنهایی كه آمده‌اند تا از تجربه و
              امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
              <span className="text-red-600 font-semibold"> گلستان </span>
              در فعالیت‌های اجتماعی خود، گستره وسیعی از فعالیت‌های عام‌المنفعه
              را در دستوركار خود قرار داده است.
            </p>
          </div>

          {/* دکمه */}
          <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[53%] flex justify-center md:justify-start">
            <a
              href="/nuts"
              className="border border-gray-400 bg-white text-[#88898A] hover:bg-red-600 hover:text-white px-6 py-3 rounded-[8px] transition-all text-[14px] sm:text-[15px]"
            >
              اطلاعات بیشتر
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
