"use client";
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50">
        <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
          <div className="items-center flex justify-between h-[17px] mt-[25px]">
            <a
              href="/"
              className="flex max-w-full gap-[3px]"
            >
              <img
                alt="Astra Template Logo"
                src="/assets/logo.png"
                className="block overflow-clip align-middle w-[65px]"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-start gap-[30px]">
              <div className="items-center flex justify-center gap-[22px]">
                <a
                  href="/works"
                  className="flex max-w-full overflow-hidden relative h-[19.5px]"
                >
                  <div className="text-[14px]">Works</div>
                  <div
                    className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                    style={{
                      transform:
                        "translate3d(-105%, 0px, 0px)",
                    }}
                  ></div>
                </a>
                <a
                  href="/about"
                  className="flex max-w-full overflow-hidden relative h-[19.5px]"
                >
                  <div className="text-[14px]">About</div>
                  <div
                    className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                    style={{
                      transform:
                        "translate3d(-105%, 0px, 0px)",
                    }}
                  ></div>
                </a>
                <a
                  href="/about#services"
                  className="flex max-w-full overflow-hidden relative h-[19.5px]"
                >
                  <div className="text-[14px]">Services</div>
                  <div
                    className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                    style={{
                      transform:
                        "translate3d(-105%, 0px, 0px)",
                    }}
                  ></div>
                </a>
              </div>
             <a
            href="https://x.com/SinghAshir65848"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
          >
            <div className="z-[2]">Get in touch</div>
          </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-[16px] font-medium cursor-pointer"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 z-[100] bg-[rgb(25,25,25)] text-white flex flex-col px-[20px] py-[25px] h-[48vh] shadow-xl transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[16px] font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="mt-[40px] flex flex-col items-start">
          <a href="/works" onClick={() => setIsOpen(false)} className="text-[34px] font-medium leading-[0.95] tracking-tight">Work</a>
          <a href="/about" onClick={() => setIsOpen(false)} className="text-[34px] font-medium leading-[0.95] tracking-tight">About</a>
          <a href="/about#services" onClick={() => setIsOpen(false)} className="text-[34px] font-medium leading-[0.95] tracking-tight">Services</a>
          <a href="mailto:singhashirwad2003@gmail.com" onClick={() => setIsOpen(false)} className="text-[34px] font-medium leading-[0.95] tracking-tight">Contact</a>
        </div>

        <div className="mt-auto flex justify-between items-center w-full text-[15px] font-medium pb-[5px]">
          <a href="#" className="hover:opacity-70 transition-opacity">Style Guide</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Licenses</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Changelog</a>
        </div>
      </div>
    </>
  )
}

export default Navbar