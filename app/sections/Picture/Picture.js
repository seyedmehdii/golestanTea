import Image from "next/image";

const Picture = () => {
  return (
    <div className="hidden md:block w-full my-[105px]">
      <div className="w-[63%] mx-auto h-[290px] flex items-center justify-between">
        {/* آيتم 1 */}
        <div className="flex flex-1 flex-col items-center p-3">
          <img
            src="/statistics-icon-4.png"
            alt="سرمایه انسانی"
            className="mb-[21px] max-w-[80px] h-auto"
          />
          <p className="text-center text-[#7C7D7E] whitespace-nowrap">
            سرمایه انسانی
          </p>
        </div>

        {/* آيتم 2 */}
        <div className="flex flex-1 flex-col items-center p-3">
          <img
            src="/statistics-icon-3.png"
            alt="مراکز فروش"
            className="mb-[21px] max-w-[80px] h-auto"
          />
          <p className="text-center text-[#7C7D7E] whitespace-nowrap">
            مراكز فروش
          </p>
        </div>

        {/* آيتم 3 */}
        <div className="flex flex-1 flex-col items-center p-3">
          <img
            src="/statistics-icon-2.png"
            alt="محصولات گلستان"
            className="mb-[21px] max-w-[80px] h-auto"
          />
          <p className="text-center text-[#7C7D7E] whitespace-nowrap">
            محصولات گلستان
          </p>
        </div>

        {/* آيتم 4 */}
        <div className="flex flex-1 flex-col items-center p-3">
          <img
            src="/statistics-icon-1.png"
            alt="مشتریان گلستان"
            className="mb-[21px] max-w-[80px] h-auto"
          />
          <p className="text-center text-[#7C7D7E] whitespace-nowrap">
            مشتریان گلستان
          </p>
        </div>
      </div>
    </div>
  );
};

export default Picture;
