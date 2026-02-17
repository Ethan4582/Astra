
import { projects } from '../../data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../src/components/Footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const nextProject = projects.find((p) => p.id === project.nextProjectId);

  return (
    <div className="h-full text-black text-[16px] leading-[normal] font-sans max-w-[1440px] mx-auto">
      <div className="min-h-full bg-white text-[#191919] tracking-[-0.08px] leading-[20px] font-['Inter_Tight']">

        <section>
          <div className="pt-0 px-[15px] pb-0">
            <div className="items-center flex flex-col justify-start w-full">
              <div className="grid grid-cols-12 w-full mt-[85px] mb-[75px] auto-rows-auto gap-x-[15px]">
                <h1 className="font-medium text-[36px] leading-[38.88px] col-span-12">
                  {project.title}
                </h1>
                <div className="border-t h-[25px] mt-[20px] col-span-12 border-[#f5f5f5]"></div>

                <div className="flex col-span-3">
                  <div className="text-[14px]">(</div>
                  <div className="text-[14px]">{project.year}</div>
                  <div className="text-[14px]">)</div>
                </div>

                <div className="max-w-[450px] col-span-4">
                  <p>{project.description}</p>
                </div>

                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center self-start flex justify-end justify-self-end max-w-full gap-[2px] col-start-10 col-span-3 row-start-3"
                >
                  <div className="text-[14px]">Preview Link</div>
                  <img
                    src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3c3d71e7824ce7ed4be5834af58ab822e94790ab.svg?generation=1771359199353376&amp;alt=media"
                    className="block overflow-clip align-middle w-[15px] h-[15px]"
                    alt="arrow"
                  />
                </a>
              </div>

              <div className="items-center flex justify-center overflow-hidden relative w-full aspect-[1.74/1] rounded-[0.1875rem]">
                <div
                  className="bg-center bg-cover size-full absolute"
                  style={{
                    backgroundImage: `url("${project.mainImage}")`,
                    transform: "scale3d(1.02716, 1.02716, 1)"
                  }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full auto-rows-auto gap-x-[15px]">
              <div className="mt-[45px] col-start-7 col-span-5">
                <p>{project.intro}</p>
                <div className="border-t h-5 mt-[20px] border-[#f5f5f5]"></div>

                <div className="grid grid-cols-2 auto-rows-auto gap-[15px]">
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[#757575] text-[14px]">Client</div>
                    <div>{project.client}</div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[#757575] text-[14px]">Service</div>
                    <div>{project.service}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-[125px] pt-0 px-[15px] pb-0">
            <div>
              <div role="list" className="grid grid-cols-1 grid-rows-[auto_auto] gap-[15px]">
                {project.images.map((img, index) => (
                  <div role="listitem" key={index}>
                    <div className="items-center flex justify-center overflow-hidden relative w-full aspect-[1.74/1] rounded-[0.1875rem]">
                      <div
                        className="bg-center bg-cover size-full absolute"
                        style={{
                          backgroundImage: `url("${img}")`,
                          transform: "scale3d(1.075, 1.075, 1)"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[45px] mb-[-45px]">
              <div className="border-t h-[25px] border-[#f5f5f5]"></div>
              <div>
                <div role="list">
                  {nextProject && (
                    <div role="listitem">
                      <Link href={`/works/${nextProject.id}`} className="flex flex-col max-w-full gap-[5px]">
                        <div className="text-[#757575] text-[14px]">Next project</div>
                        <div className="font-medium text-[20px] leading-[24px]">{nextProject.title}</div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
