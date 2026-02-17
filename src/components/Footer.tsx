import React from 'react'

const Footer = () => {
  return (
    <div> <footer className="relative">
      <div className="mt-[155px] pt-0 pr-[15px] pb-0 pl-[15px]">
        <div
          className="border-t h-[25px]"
          style={{ borderTopColor: "rgb(245, 245, 245)" }}
        ></div>
        <div className="grid-cols-12 grid w-full grid-rows-[auto] gap-[0px_15px]">
          <div
            className="items-start flex flex-col justify-start gap-[22px] max-w-[435px] pt-0 pr-[25px] pb-0 pl-0"
            style={{
              gridArea: "span 1 / span 5 / span 1 / span 5",
            }}
          >
            <h3 className="font-medium text-[25px] leading-[30px]">
              Ready to bring your ideas to life? Let’s
              connect and create something
            </h3>
            <a
              href="mailto:singhashirwad2003@gmail.com"
              className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
            >
              <div className="z-[2]">
                Get in touch &nbsp;
              </div>
            </a>
          </div>
          <div
            className="flex flex-col mt-[45px] gap-[14px]"
            style={{ gridArea: "2 / 7 / 3 / 10" }}
          >
            <div
              className="text-[rgb(117,_117,_117)]"
              style={{
                textDecoration: "rgb(117, 117, 117)",
              }}
            >
              Links &nbsp;
            </div>
            <div className="items-start flex flex-col justify-start leading-[19.2px]">
              <a
                href=""
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Home</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
              <a
                href="https://aubreyfolio-template.webflow.io/works"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Works</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
              <a
                href="https://aubreyfolio-template.webflow.io/about"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>About</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
              <a
                href="mailto:singhashirwad2003@gmail.com"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Contact</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
            </div>
          </div>
          <div
            className="flex flex-col mt-[45px] gap-[14px]"
            style={{ gridArea: "2 / 10 / 3 / 13" }}
          >
            <div
              className="text-[rgb(117,_117,_117)]"
              style={{
                textDecoration: "rgb(117, 117, 117)",
              }}
            >
              Template &nbsp;
            </div>
            <div className="items-start flex flex-col justify-start leading-[19.2px]">
              <a
                href="https://aubreyfolio-template.webflow.io/template-info/style-guide"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Style Guide</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
              <a
                href="https://aubreyfolio-template.webflow.io/template-info/licenses"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Licenses</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
              <a
                href="https://aubreyfolio-template.webflow.io/template-info/changlog"
                className="flex max-w-full overflow-hidden relative mt-[-1.85px] mb-[-1.85px] pt-[1.85px] pr-0 pb-[1.85px] pl-0"
              >
                <div>Changlog</div>
                <div
                  className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                  style={{
                    transform:
                      "translate3d(-105%, 0px, 0px)",
                  }}
                ></div>
              </a>
            </div>
          </div>
          <div
            className="mt-[125px]"
            style={{ gridArea: "3 / 1 / 4 / 7" }}
          >
            <div
              className="text-[rgb(117,_117,_117)] text-[14px]"
              style={{
                textDecoration: "rgb(117, 117, 117)",
              }}
            >
              © Copyright 2025 &nbsp;
            </div>
          </div>
          <div
            className="mt-[125px]"
            style={{ gridArea: "3 / 7 / 4 / 13" }}
          >
            
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full pt-[35px] pr-0 pb-0 pl-0 group">
        <img
          src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbea21be3ca4c7507cff3a72b9ace5d6001a0fab1.svg?generation=1769877867482996&amp;alt=media"
          className="inline-block overflow-clip align-middle w-full transition-transform duration-400 ease-in-out group-hover:scale-125"
          style={{ textDecoration: "rgb(25, 25, 25)" }}
        />
      </div>
    </footer></div>
  )
}

export default Footer