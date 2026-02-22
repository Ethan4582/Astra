'use client';
import React, { useState } from 'react';
import Footer from '@/src/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [hoveredClient, setHoveredClient] = useState('Pears');

  const services = [
    {
      id: 1,
      number: "01",
      title: "Brand Identity",
      description: "Building a complete and cohesive visual and verbal identity for your brand. This includes designing memorable logos, choosing the right colors, typography, and crafting a consistent tone of voice."
    },
    {
      id: 2,
      number: "02",
      title: "Development",
      description: "Building fast, reliable, and scalable web solutions customized to your needs. From e-commerce platforms to complex web applications."
    },
    {
      id: 3,
      number: "03",
      title: "Packaging",
      description: "Creating stunning packaging designs that make your product stand out on the shelves and communicate your brand's unique story."
    },
    {
      id: 4,
      number: "04",
      title: "Motion Design",
      description: "Bringing your brand to life with engaging animations and motion graphics that capture attention and enhance the user experience."
    }
  ];

  const clients = [
    { name: "Pears", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2670&auto=format&fit=crop" },
    { name: "Lumora", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Echo", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2676&auto=format&fit=crop" },
    { name: "Tom Cole", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Rivers", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop" },
    { name: "Streamly", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" },
    { name: "Nexora", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  ];

  const getHoveredImage = () => {
    const client = clients.find(c => c.name === hoveredClient);
    return client ? client.image : clients[0].image;
  }

  return (
    <div className="min-h-full bg-white text-[#191919] font-['Inter_Tight',sans-serif] font-normal leading-normal max-w-[1440px] w-full mx-auto px-0">

      {/* Hero Section */}
      <section className="pt-[60px] md:pt-[80px] px-2 md:px-4 pb-[40px] md:pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px]">
          <div className="col-span-1 md:col-span-12 mb-[40px] md:mb-[60px]">
            <h1 className="text-[36px] md:text-[50px] leading-[1.05] font-medium max-w-[650px] tracking-tight text-[#191919]">
              We create bold solutions for<br />those ready to stand out
            </h1>
          </div>
          <div className="col-span-1 md:col-span-3 text-[14px] text-[#191919] mb-4 md:mb-0">
            (Established 2019)
          </div>
          <div className="col-span-1 md:col-start-7 md:col-span-6 text-[16px] leading-[1.4] text-[#191919]">
            Welcome to our studio. We&apos;re a small but passionate team of web designers and developers who love turning ideas into reality. Whether you&apos;re a startup or an established business, we make the web work for you with clean, modern designs and user-friendly solutions.
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-1 md:px-2 pb-[80px] md:pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] md:gap-[10px]">
          <div className="flex flex-col gap-[15px] group cursor-pointer">
            <div className="aspect-[3/3.4] bg-[#f5f5f5] rounded-[0.1875rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
                alt="James Clarke"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="text-[16px] leading-[1.2] px-1">
              <div className="text-[#191919]">James Clarke</div>
              <div className="text-[#757575]">Creative Director</div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] group cursor-pointer">
            <div className="aspect-[3/3.4] bg-[#f5f5f5] rounded-[0.1875rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop"
                alt="Daniel Harris"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="text-[16px] leading-[1.2] px-1">
              <div className="text-[#191919]">Daniel Harris</div>
              <div className="text-[#757575]">Technical Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-2 md:px-4 py-[60px] md:py-[80px] border-t border-[#f5f5f5]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px]">
          <div className="col-span-1 md:col-span-4 text-[16px] text-[#191919] mb-[40px] md:mb-0 uppercase text-[12px] tracking-wider font-medium opacity-60">
            Our Services
          </div>
          <div className="col-span-1 md:col-start-5 md:col-span-8">
            <h2 className="text-[24px] md:text-[32px] leading-[1.2] font-medium mb-[60px] md:mb-[80px] max-w-[800px] tracking-tight text-[#191919]">
              We take pride in delivering top-tier branding and web solutions trusted by leading industry experts and communities
            </h2>

            <div className="flex flex-col border-t border-[#f5f5f5]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col py-0 border-b border-[#f5f5f5] cursor-pointer"
                  onClick={() => setActiveAccordion(service.id === activeAccordion ? null : service.id)}
                >
                  <div className="grid grid-cols-12 gap-[15px] items-start py-[15px] md:py-[20px]">
                    <div className="col-span-2 text-[16px] text-[#191919] opacity-60">{service.number}</div>
                    <div className="col-span-9">
                      <div className="text-[16px] text-[#191919]">{service.title}</div>
                      <AnimatePresence initial={false}>
                        {activeAccordion === service.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 15 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="text-[#757575] text-[14px] leading-[1.6] max-w-[550px] pb-4">
                              {service.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="col-span-1 flex justify-end text-[16px] text-[#191919]">
                      <motion.span
                        animate={{ rotate: activeAccordion === service.id ? 45 : 0 }}
                        className="inline-block"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="px-2 md:px-4 py-[60px] md:py-[80px] border-t border-[#f5f5f5]">
         <div className="aspect-[3/2.4] bg-[#f5f5f5] pb-8 rounded-[0.1875rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="James Clarke"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px]">
          <div className="col-span-1 md:col-span-4 text-[16px] text-[#191919] mb-[40px] md:mb-0 uppercase text-[12px] tracking-wider font-medium opacity-60">
            Featured Clients
          </div>
          <div className="col-span-1 md:col-start-5 md:col-span-8 flex justify-between items-start relative">
            <div className="flex flex-col gap-1">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className={`text-[36px] md:text-[45px] leading-[1.1] font-medium tracking-tight cursor-pointer transition-colors duration-300 ${hoveredClient === client.name ? 'text-[#191919]' : 'text-[#e0e0e0]'
                    }`}
                  onMouseEnter={() => setHoveredClient(client.name)}
                >
                  {client.name}
                </div>
              ))}
            </div>

            <div className="hidden md:block w-[180px] h-[220px] lg:w-[240px] lg:h-[300px] bg-[#f5f5f5] rounded-[0.1875rem] overflow-hidden ml-auto flex-shrink-0">
              <motion.img
                key={hoveredClient}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={getHoveredImage()}
                alt={`${hoveredClient} preview`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About