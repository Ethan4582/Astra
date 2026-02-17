import React from 'react'

const Navbar = () => {
  return (
    <div> <nav className="relative">
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
              <div className="items-center flex justify-start gap-[30px]">
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
                  href="mailto:singhashirwad2003@gmail.com"
                  className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
                >
                  <div className="z-[2]">Get in touch</div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        </div>
  )
}

export default Navbar