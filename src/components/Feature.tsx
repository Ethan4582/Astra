import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className="relative">
        <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
          <div className="items-center flex justify-between w-full h-6 mt-[80px] md:mt-[155px]">
            <h2 className="font-medium text-[20px] leading-[24px]">
              Featured Work
            </h2>
            <a
              href="/works"
              className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
            >
              <div className="z-[2]">View all</div>
            </a>
          </div>
          <div className="w-full mt-[25px]">
            <div
              role="list"
              className="grid grid-cols-1 md:grid-cols-2 gap-[35px_15px] md:gap-[45px_15px]"
            >
              <div role="listitem">
                <a
                  href="/works/health-bridge"
                  className="flex flex-col max-w-full gap-[12px] group"
                >
                  <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                    <div
                      className="bg-center bg-cover size-full absolute transition-transform duration-400 ease-in-out group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2667&auto=format&fit=crop")',
                      }}
                    ></div>
                  </div>
                  <div className="items-start flex flex-col justify-start leading-[1.2] gap-y-0.5">
                    <div className="text-[18px] font-medium tracking-tight">Health Bridge Rebrand</div>
                    <div className="text-[18px] font-medium tracking-tight">Elegance in Form</div>
                    <div
                      className="text-[rgb(117,_117,_117)] text-[16px]"
                    >
                      Brand Identity
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem">
                <a
                  href="works/harmony-marketing"
                  className="flex flex-col max-w-full gap-[12px] group"
                >
                  <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                    <div
                      className="bg-center bg-cover size-full absolute transition-transform duration-400 ease-in-out group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2671&auto=format&fit=crop")',
                      }}
                    ></div>
                  </div>
                  <div className="items-start flex flex-col justify-start leading-[1.2] gap-y-0.5">
                    <div className="text-[18px] font-medium tracking-tight">Harmony Marketing</div>
                    <div className="text-[18px] font-medium tracking-tight">Leading the Charge</div>
                    <div
                      className="text-[rgb(117,_117,_117)] text-[16px]"
                    >
                      Motion Design
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem">
                <a
                  href="/works/eco-homes"
                  className="flex flex-col max-w-full gap-[12px] group"
                >
                  <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                    <div
                      className="bg-center bg-cover size-full absolute transition-transform duration-400 ease-in-out group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop")',
                      }}
                    ></div>
                  </div>
                  <div className="items-start flex flex-col justify-start leading-[1.2] gap-y-0.5">
                    <div className="text-[18px] font-medium tracking-tight">Mind Haven Rebrand</div>
                    <div className="text-[18px] font-medium tracking-tight">Savor the Future</div>
                    <div
                      className="text-[rgb(117,_117,_117)] text-[16px]"
                    >
                      Packaging
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem">
                <a
                  href="/works/urban-pulse"
                  className="flex flex-col max-w-full gap-[12px] group"
                >
                  <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                    <div
                      className="bg-center bg-cover size-full absolute transition-transform duration-400 ease-in-out group-hover:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop")',
                      }}
                    ></div>
                  </div>
                  <div className="items-start flex flex-col justify-start leading-[1.2] gap-y-0.5">
                    <div className="text-[18px] font-medium tracking-tight">Flowstream Home</div>
                    <div className="text-[18px] font-medium tracking-tight">Vision in Action</div>
                    <div
                      className="text-[rgb(117,_117,_117)] text-[16px]"
                    >
                      Development
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Feature