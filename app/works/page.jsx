
import React from 'react'
import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { projects } from '../data'

const Works = () => {
  return (
    <div>
      <section className="w-full px-4 pt-16 pb-2 font-['Inter_Tight',sans-serif] text-[#191919] text-[16px] leading-[18px] font-medium"> {/* Adjusted pb-2 to reduce space before footer, change this value adjust space */}
        <h1 className="text-center py-12  text-[36px] font-medium mb-12">
          All Works<span className="text-[16px] text-gray-500 font-normal"> ({projects.length.toString().padStart(2, '0')})</span>
        </h1>

        <div className="grid pt-12 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="group block overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[1.3/1] bg-gray-100 overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-400 ease-in-out group-hover:scale-125"
                  style={{
                    backgroundImage: `url("${project.mainImage}")`,
                  }}
                />
              </div>
              {/* discription */}
              <div className="mt-2 px-1">
                <div className="text-[16px] font-medium leading-[18px]">{project.title}</div>
                <div className="text-[16px] font-medium leading-[18px]">{project.shortDescription}
                </div>
                <span className="text-[16px] text-gray-600 leading-[18px]">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Works