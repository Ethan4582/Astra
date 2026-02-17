import React from 'react'

const Feature = () => {
  return (
    <div>
       <section className="relative">
          <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
            <div className="items-center flex justify-between w-full h-6 mt-[155px]">
              <h2 className="font-medium text-[20px] leading-[24px]">
                Featured Work
              </h2>
              <a
                href="https://aubreyfolio-template.webflow.io/works"
                className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
              >
                <div className="z-[2]">View all</div>
              </a>
            </div>
            <div className="w-full mt-[25px]">
              <div
                role="list"
                className="grid-cols-2 grid grid-rows-[auto_auto] gap-[45px_15px]"
              >
                <div role="listitem">
                  <a
                    href="https://aubreyfolio-template.webflow.io/works/health-bridge"
                    className="flex flex-col max-w-full gap-[10px]"
                  >
                    <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                      <div
                        className="bg-center bg-cover size-full absolute"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8a24a5cf2bc18b6e0a7c0eb15d6f70d7432595f4.jpg?generation=1769877867483751&alt=media")',
                        }}
                      ></div>
                    </div>
                    <div className="items-start flex flex-col justify-start leading-[18.4px]">
                      <div>Health Bridge Rebrand</div>
                      <div>Elegance in Form</div>
                      <div
                        className="text-[rgb(117,_117,_117)]"
                        style={{
                          textDecoration: "rgb(117, 117, 117)",
                        }}
                      >
                        Brand Identity
                      </div>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="https://aubreyfolio-template.webflow.io/works/lift-harmony"
                    className="flex flex-col max-w-full gap-[10px]"
                  >
                    <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                      <div
                        className="bg-center bg-cover size-full absolute"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F806e0eb2bccfafd3669e81295e00d2087e6bf198.jpg?generation=1769877867477528&alt=media")',
                        }}
                      ></div>
                    </div>
                    <div className="items-start flex flex-col justify-start leading-[18.4px]">
                      <div>Harmony Marketing</div>
                      <div>Leading the Charge</div>
                      <div
                        className="text-[rgb(117,_117,_117)]"
                        style={{
                          textDecoration: "rgb(117, 117, 117)",
                        }}
                      >
                        Motion Design
                      </div>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="https://aubreyfolio-template.webflow.io/works/mind-haven"
                    className="flex flex-col max-w-full gap-[10px]"
                  >
                    <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                      <div
                        className="bg-center bg-cover size-full absolute"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F478fa4ab94eea5efd8f3c1f83fa41db1a37a20ec.jpg?generation=1769877867523101&alt=media")',
                        }}
                      ></div>
                    </div>
                    <div className="items-start flex flex-col justify-start leading-[18.4px]">
                      <div>Mind Haven Rebrand</div>
                      <div>Savor the Future</div>
                      <div
                        className="text-[rgb(117,_117,_117)]"
                        style={{
                          textDecoration: "rgb(117, 117, 117)",
                        }}
                      >
                        Packaging
                      </div>
                    </div>
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="https://aubreyfolio-template.webflow.io/works/flowstream"
                    className="flex flex-col max-w-full gap-[10px]"
                  >
                    <div className="items-center justify-center overflow-hidden relative aspect-[1.26_/_1] rounded-[0.1875rem]">
                      <div
                        className="bg-center bg-cover size-full absolute"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F21a88315613c8e530dd50b61c3632d4ef193c1ae.jpg?generation=1769877867508295&alt=media")',
                        }}
                      ></div>
                    </div>
                    <div className="items-start flex flex-col justify-start leading-[18.4px]">
                      <div>Flowstream Home</div>
                      <div>Vision in Action</div>
                      <div
                        className="text-[rgb(117,_117,_117)]"
                        style={{
                          textDecoration: "rgb(117, 117, 117)",
                        }}
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