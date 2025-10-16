const Rokn = () => {
  return (
    <div className="mt-[50px] w-full bg-white text-[#848C8F]">
      <div className="w-[90%] md:w-[70%] lg:w-[53%] mx-auto flex flex-col items-start p-3">
        {/* عنوان */}
        <div className="mb-[16px]">
          <h2 className="text-[#FF1000] text-[18px] md:text-[20px] font-semibold text-center md:text-right">
            رکن اول غذای ایرانی
          </h2>
        </div>

        {/* متن */}
        <div className="mb-[24px]">
          <p className="leading-[30px] md:leading-[35px] text-justify text-[14px] md:text-[16px]">
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
        </div>

        {/* دکمه‌ها */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center sm:justify-start w-full">
          <a
            href="#"
            className="border border-gray-400 bg-white text-[#88898A] hover:bg-red-600 hover:text-white px-6 py-3 rounded-[8px] transition-all text-[14px] md:text-[15px] w-full sm:w-auto text-center"
          >
            محصولات برنج
          </a>
          <a
            href="#"
            className="border border-gray-400 bg-white text-[#88898A] hover:bg-red-600 hover:text-white px-6 py-3 rounded-[8px] transition-all text-[14px] md:text-[15px] w-full sm:w-auto text-center"
          >
            آشپزخانه گلستان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rokn;
