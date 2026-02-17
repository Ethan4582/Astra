
import React from 'react'
import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { projects } from '../data'

const Works = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16 font-['Inter_Tight']">
        <h1 className="text-center text-2xl font-medium mb-12">
          All Works<span className="text-sm text-gray-500"> ({projects.length.toString().padStart(2, '0')})</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="group block overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[1.8/1] bg-gray-100 overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url("${project.mainImage}")`,
                  }}
                />
              </div>

              <div className="mt-4">
                <div className="text-lg font-medium">{project.title}</div>
                <div className="text-sm text-gray-600">{project.description.substring(0, 50)}... — {project.category}</div>
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