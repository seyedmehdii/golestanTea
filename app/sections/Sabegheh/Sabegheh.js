const Sabegheh = () => {
  return (
    <div className="w-full bg-white text-[#848C8F] my-[50px] md:my-[70px]">
      <div className="w-[90%] md:w-[70%] lg:w-[53%] mx-auto flex flex-col p-3">
        {/* عنوان */}
        <div className="mb-[16px] text-center md:text-right">
          <h2 className="text-[#FF1000] text-[18px] md:text-[20px] font-semibold">
            سابقه‌ای به قدمت یک عمر
          </h2>
        </div>

        {/* پاراگراف اول */}
        <div className="mb-[20px]">
          <p className="leading-[30px] md:leading-[35px] text-justify text-[14px] md:text-[16px]">
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد.
          </p>
        </div>

        {/* پاراگراف دوم */}
        <div className="mb-[24px]">
          <p className="leading-[30px] md:leading-[35px] text-justify text-[14px] md:text-[16px]">
            برای مردمان ایران زمین نام{" "}
            <span className="text-[#FF0000] font-medium">گلستان</span> با چای
            پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و
            بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه
            باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و
            طعم به‌یادماندنی آن است.
          </p>
        </div>

        {/* دکمه */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/rice"
            className="border border-gray-400 bg-white text-[#88898A] hover:bg-red-600 hover:text-white px-6 py-3 rounded-[8px] transition-all text-[14px] md:text-[15px] w-full sm:w-auto text-center"
          >
            محصولات برنج
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sabegheh;
