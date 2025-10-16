const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#262626] text-white">
        {/* بخش بالا */}
        <div className="w-full py-10">
          <div
            className="
              w-[95%] md:w-[75%] mx-auto
              flex flex-col md:flex-row
              justify-between items-center md:items-start
              gap-10 md:gap-4
            "
          >
            {/* ستون‌ها */}
            {[
              {
                icon: "/footer-icon1.png",
                title: "چای گلستان",
                items: [
                  "چای ممتاز هندوستان​",
                  "چای ممتاز ارل گری​",
                  "چای سيلان عطری​",
                  "چای ممتاز سيلان",
                  "چای صبحانه گلستان​",
                ],
              },
              {
                icon: "/footer-icon4.png",
                title: "تی بگ گلستان",
                items: [
                  "تی بگ بلک لاين",
                  "تی بگ ارل گری",
                  "دمنوش نعناع",
                  "دمنوش بابونه",
                  "منوش چای سبز",
                ],
              },
              {
                icon: "/footer-icon3.png",
                title: "ادويه گلستان",
                items: [
                  "زعفران ممتاز خراسان",
                  "ادویه کاری",
                  "ادویه ماست و خیار",
                  "فلفل سياه خالص",
                  "زردچوبه ممتاز",
                ],
              },
              {
                icon: "/footer-icon2.png",
                title: "حبوبات گلستان",
                items: [
                  "لوبيا قرمز ممتاز",
                  "لوبيا چيتی گلستان",
                  "عدس كانادايی",
                  "نخود زودپز كرمانشاه",
                  "لوبيا سفيد گلستان",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="
                  md:w-1/4
                  flex flex-col justify-start items-center md:items-start
                  text-center md:text-right
                  break-words
                "
              >
                <img
                  src={section.icon}
                  alt={section.title}
                  className="mb-4 w-[50px] h-auto"
                />
                <h2 className="text-[16px] mb-3 text-white whitespace-nowrap">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-2 text-[14px] text-[#B3B5B6] leading-relaxed">
                  {section.items.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-white transition-colors break-words"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش پایین */}
        <div className="w-full border-t border-[#3A3A3A] py-6">
          <div className="w-[90%] md:w-[70%] mx-auto flex flex-col items-center text-center space-y-1">
            <h1 className="text-[#9F9F8F] text-sm sm:text-base">
              All Right Reserved Golestan Company 2022-2025
            </h1>
            <h2 className="text-[#7B7B7B] text-sm sm:text-base">
              Design By: Golestan Studio
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
