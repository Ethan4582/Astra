
import { projects } from '../../data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../src/components/Footer';
import ScrollImage from '../../components/ScrollImage';

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
    <div className="h-full text-[#191919] text-[16px] leading-[18px] font-normal max-w-[1480px] w-full mx-auto">
      <div className="min-h-full bg-white text-[#191919] tracking-[-0.08px] leading-[18px] font-normal">

        <section>
          <div className="pt-6 px-0 pb-0">
            <div className="items-center flex flex-col justify-start w-full">
              <div className="grid grid-cols-12 w-full mt-20 mb-14 auto-rows-auto gap-x-[15px] px-2"> {/* Added px-2 here to keep text padded, but main container is now full width */}
                <h1 className="font-600 weight-800 text-[36px] leading-[18px] col-span-12">
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

              <ScrollImage
                src={project.mainImage}
                containerClassName="items-center pt-14 flex justify-center relative w-full aspect-[1.3/1] rounded-[0.1875rem]" /* Changed aspect from 1.74/1 to 1.3/1 to increase height slightly */
                className="bg-center bg-cover size-full absolute"
              />
            </div>

            <div className="grid grid-cols-12 w-full auto-rows-auto gap-x-[15px] px-1">
              <div className="mt-8 col-start-7 col-span-5">
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
          <div className="mt-[125px] pt-0 px-[5px] pb-0">
            <div>
              <div role="list" className="grid grid-cols-1 grid-rows-[auto_auto] gap-[15px]">
                {project.images.map((img, index) => (
                  <div role="listitem" key={index}>
                    <ScrollImage
                      src={img}
                      containerClassName="items-center flex justify-center relative w-full aspect-[1.3/1] rounded-[0.1875rem]" /* Changed aspect from 1.74/1 to 1.3/1 to increase height slightly */
                      className="bg-center bg-cover size-full absolute"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 mb-0">
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
