"use client";
import Image from "next/image";
import { fetchHeader } from "@/redeux/Header/HeaderSlice";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const header = useSelector((state) => state.header.posts);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* ✅ fixed header */}
      <div ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-black">
        <header className="relative w-full">
          <div
            className="
              relative
              w-full flex flex-col lg:flex-row
              items-center justify-between
              px-6 lg:px-10
              py-10 md:py-10 lg:py-4
              gap-4
            "
          >
            {/* لوگو */}
            <div className="flex items-center justify-center lg:justify-start w-[200px]">
              <Image
                src="/logo-fr.png"
                alt="Logo"
                priority
                width={170}
                height={105}
                className="w-[170px] h-auto object-contain"
              />
            </div>

            {/* منوی دسکتاپ */}
            <nav
              className="
                hidden md:flex
                items-center justify-center
                text-[#AFB2B4]
                w-full
              "
            >
              <ul
                className="
                  flex flex-row flex-wrap
                  items-center justify-center
                  gap-6 md:gap-8 lg:gap-10
                  text-[16px] font-light
                  w-full max-w-[1200px]
                "
              >
                {header.map((elem, idx) =>
                  elem.submenu.length > 0 ? (
                    <li
                      className="relative group/sub cursor-pointer hover:text-white transition-colors"
                      key={`${elem.id}-${idx}`}
                    >
                      <a href={elem.link}>{elem.name}</a>
                      <ul
                        className="absolute top-full right-0 bg-[#2d2d2d] hidden group-hover/sub:flex flex-col text-[#afb2b4] gap-1 py-2 w-[180px] z-[60]"
                      >
                        {elem.submenu.map((e, itx) => (
                          <li
                            key={`${e.id}-${itx}`}
                            className="hover:text-white px-3 py-2 transition-colors"
                          >
                            <a href={e.link}>{e.name}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      className="hover:text-white cursor-pointer transition-colors"
                      key={`${elem.id}-${idx}`}
                    >
                      <a href={elem.link}>{elem.name}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* دکمه منوی موبایل */}
            <button
              onClick={handleMenuToggle}
              className="block md:hidden absolute right-6 bottom-6 text-white z-[60]"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* ✅ منوی موبایل */}
     <div
  className={`fixed left-0 w-full text-[#AFB2B4] flex flex-col items-center justify-start overflow-y-auto transition-all duration-500 ease-in-out transform ${
    menuOpen
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0 pointer-events-none"
  } md:hidden`}
  style={{
    top: `${headerHeight}px`,
    height: `calc(100vh - ${headerHeight}px)`,
    backgroundColor: "rgba(0, 0, 0, 0.97)", // پس‌زمینه‌ی کاملاً تیره و کمی شفاف برای حس عمق
    backdropFilter: "blur(2px)", // افکت بلور ملایم فقط برای زیبایی
    zIndex: 100, // مطمئن می‌شیم بالاتر از بقیه عناصره
  }}
>
  <ul className="flex flex-col items-center gap-4 py-8 w-full text-lg">
    {header.map((elem, idx) => (
      <li
        key={`${elem.id}-${idx}`}
        className="cursor-pointer hover:text-white w-full text-center py-3 border-b border-gray-700"
        onClick={() => setMenuOpen(false)}
      >
        <a href={elem.link}>{elem.name}</a>
      </li>
    ))}
  </ul>
</div>

    </>
  );
};

export default Header;
