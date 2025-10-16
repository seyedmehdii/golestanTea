import Image from "next/image";
const Responsibility = () => {
  return (
    <>
      <div className="relative w-full h-[600px] bg-[#105153]">
        <div className="w-full h-[40%] "></div>
        {/* محتوا */}
        <div className="flex flex-col justify-center gap-3 items-center w-full h-1/5">
          <h1 className="text-white text-[18px]">
            مسئوليت‌های اجتماعی شركت گلستان
          </h1>
          <h1 className="text-[#01D8DB] text-[18px] ">
            <span className="text-[#039CA2] text-[22px] ">Golestan</span> Social
            Responsibility
          </h1>
          <h2 className="text-[#B1B7BD] text-[18px] ">Mahdi Hospital</h2>
        </div>

        {/* تصویر بیرون از div */}
        <Image
          src="/hospital.png"
          width={395}
          height={344}
          priority
          alt="hospital"
          className="absolute top-[91%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* spacer برای رعایت margin */}
      <div className="h-[180px] md:h-[220px]"></div>
    </>
  );
};

export default Responsibility;
