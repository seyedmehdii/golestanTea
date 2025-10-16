const Nuts = () => {
  return (
    <div className="w-full bg-white text-[#848C8F] mt-[60px] md:mt-[80px] mb-[40px]">
      <div className="w-[90%] md:w-[70%] lg:w-[53%] mx-auto flex flex-col p-3">
        {/* عنوان */}
        <div className="mb-[16px] text-center md:text-right">
          <h2 className="text-[#FF1000] text-[18px] md:text-[20px] font-semibold">
            آجيل‌های خوش‌خنده
          </h2>
        </div>

        {/* پاراگراف اول */}
        <div className="mb-[16px]">
          <p className="leading-[30px] md:leading-[35px] text-justify text-[14px] md:text-[16px]">
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
            معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین‌دهنده قلب و اعصاب.
          </p>
        </div>

        {/* پاراگراف دوم */}
        <div className="mb-[24px]">
          <p className="leading-[30px] md:leading-[35px] text-justify text-[14px] md:text-[16px]">
            <span className="text-red-500 font-medium">پسته گلستان</span> اما
            حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین
            باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و
            اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده
            و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
          </p>
        </div>

        {/* دکمه */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/nuts"
            className="border border-gray-400 bg-white text-[#88898A] hover:bg-red-600 hover:text-white px-6 py-3 rounded-[8px] transition-all text-[14px] md:text-[15px] w-full sm:w-auto text-center"
          >
            ناتس گلستان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nuts;
