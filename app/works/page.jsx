import React from 'react'
import Footer from '../../src/components/Footer'

const Works = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-center text-2xl font-medium mb-12">
          All Works<span className="text-sm text-gray-500"> (06)</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://aubreyfolio-template.webflow.io/works/health-bridge"
            className="group block overflow-hidden rounded-sm"
          >
            <div className="relative aspect-[1.8/1] bg-gray-100 overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8a24a5cf2bc18b6e0a7c0eb15d6f70d7432595f4.jpg?generation=1769877867483751&alt=media")',
                }}
              />
            </div>

            <div className="mt-4">
              <div className="text-lg font-medium">Health Bridge Rebrand</div>
              <div className="text-sm text-gray-600">Elegance in Form — Brand Identity</div>
            </div>
          </a>

          <a
            href="https://aubreyfolio-template.webflow.io/works/lift-harmony"
            className="group block overflow-hidden rounded-sm"
          >
            <div className="relative aspect-[1.8/1] bg-gray-100 overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F806e0eb2bccfafd3669e81295e00d2087e6bf198.jpg?generation=1769877867477528&alt=media")',
                }}
              />
            </div>

            <div className="mt-4">
              <div className="text-lg font-medium">Harmony Marketing</div>
              <div className="text-sm text-gray-600">Leading the Charge — Motion Design</div>
            </div>
          </a>
        </div>
      </section>
       <Footer/>
    </div>
  )
}

export default Works