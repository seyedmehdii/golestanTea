"use client";
import { useEffect, useState } from "react";

const Moarefi = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 50);
  }, []);

  return (
    <div className="w-full bg-white mt-[60px] py-10 md:py-16">
      <div
        className="
          flex flex-col 
          items-center 
          w-[90%] md:w-[53%] 
          mx-auto 
          space-y-10 md:space-y-12
          transition-all
        "
      >
        {/* عنوان معرفی */}
        <div
          className={`transition-all duration-700 ease-out ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h2 className="text-[#FF1000] text-[20px] md:text-[24px] font-medium text-center md:text-right">
            معرفی گلستان
          </h2>
        </div>

        {/* پاراگراف اول */}
        <div
          className={`transition-all duration-700 ease-out delay-100 ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <p className="text-[#7E7E7A] text-justify leading-[30px] md:leading-[35px] text-[15px] md:text-[16px]">
            آنچه که امروز با نام مجموعه
            <span className="text-[#FF0821]"> گلستان</span> می‌شناسیم در سال
            1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی
            و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
            «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با
            تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.
            <span className="text-[#FF0821]"> گلستان</span> پس از سال‌ها تلاش
            همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
            کالاهایی قابل اعتماد و با کیفیت تولید نماید.
          </p>
        </div>

        {/* پاراگراف دوم */}
        <div
          className={`transition-all duration-700 ease-out delay-200 ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <p className="text-[#7E7E7A] text-justify leading-[30px] md:leading-[35px] text-[15px] md:text-[16px]">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین‌شده، به‌کارگیری همکاران مجرب و دلسوز، استفاده از روش‌های نوین
            بازاریابی و مشتری‌محوری از جمله عوامل مهم در استراتژی{" "}
            <span className="text-[#FF0821]">شرکت گلستان</span> است.
          </p>
        </div>

        {/* عنوان محصولات */}
        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h2 className="text-[#FF1000] text-[20px] md:text-[24px] font-medium text-center md:text-right">
            محصولات گلستان
          </h2>
        </div>

        {/* پاراگراف محصولات */}
        <div
          className={`transition-all duration-700 ease-out delay-400 ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <p className="text-[#7E7E7A] text-justify leading-[30px] md:leading-[35px] text-[15px] md:text-[16px]">
            <span className="text-[#FF0821]">نام تجاری گلستان</span> قدمتی به
            اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این
            نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام
            تجاری خاطره محصولاتی ممتاز و منحصر‌به‌فرد دارند و با اطمینان از
            نهایت کیفیت این نام تجاری حمایت می‌کنند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moarefi;
