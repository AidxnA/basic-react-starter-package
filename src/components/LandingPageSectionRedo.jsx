import React from 'react'
import { CiMap } from 'react-icons/ci'
import { GiPathDistance, GiSattelite } from 'react-icons/gi'
import { FaBoltLightning } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";

const LandingPageSectionRedo = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between overflow-hidden relative min-h-64">
          <div className="relative z-10">
            <span className="text-on-tertiary-container text-5xl mb-6"><CiMap /></span>
            <h2 className="text-4xl font-black text-primary tracking-tighter mb-4 leading-none">Global Offline Cartography</h2>
            <p className="text-on-secondary-container text-lg max-w-sm">Precision navigation doesn't require a connection. Download entire regions with sub-meter accuracy.</p>
          </div>

          <div className="mt-12 relative z-10">
            <button className="text-primary font-bold flex items-center gap-2 group">
              Explore Regions
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform"><IoIosArrowRoundForward /></span>
            </button>
          </div>

          <img
            className="absolute bottom-0 right-60 w-48 h-60 object-cover object-left-top opacity-15 rounded-br-xl z-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc4_XLutGX5lefadYGX5jFc8lpUZu1jKeW0IrHIh5kaqLsCozqX4FdVqEkxukoXrzZgQ3gM_XmxyVQgmUzD-qJVkPWX2--3t0Nqil4hre-i3C-PQ9jZpMunlPeAk303DFNcANYN01AcucXxJcT_YemfNk1-BU-NjBRujOZRZCRLhKSDXv2c7qIzDOjuQOj8i5WJwNo_JtZMwa5hnbkAfyQxKCay89wqLmnRD1YQXq5w-1rBt6SkJUhfwf9wNCMsPLiNqeOmIN8eeyU"
            alt="Map grid background"
          />
        </div>

        <div className="md:col-span-5 bg-slate-950 text-white rounded-xl p-10 flex flex-col justify-between">
          <div classname="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6">
              <FaBoltLightning className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight mb-4">Predictive Traffic</h3>
            <p className="text-white/70">Our ML engine forecasts congestion 45 minutes before it peaks.</p>
          </div>
          <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/15">
            <div className="flex justify-between text-white/70 text-xs font-mono mb-2">
              <span>RE-ROUTING</span>
              <span>ACTIVE</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-2/3"></div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 bg-surface-container-high rounded-xl p-8 group hover:bg-on-tertiary-container/5 transition-colors bg-gray-300">
          <GiPathDistance className="text-primary text-3xl mb-4" />
          <h4 className="text-xl font-bold text-primary mb-2">Route Optimization</h4>
          <p className="text-sm text-on-surface-variant">Multi-stop logistics engine for commercial efficiency.</p>
        </div>

        <div className="md:col-span-1 bg-surface-container-high rounded-xl p-8 group hover:bg-on-tertiary-container/5 transition-colors bg-gray-300">
          <GiSattelite className="text-primary text-3xl mb-4" />
          <h4 className="text-xl font-bold text-primary mb-2 bg-gray-300">Terrain Analysis</h4>
          <p className="text-sm text-on-surface-variant">Elevation-aware routing for electric vehicle range.</p>
        </div>

        <div className="md:col-span-1 bg-tertiary-container rounded-xl p-8 flex items-center justify-between bg-green-400">
          <div>
            <h4 className="text-xl font-bold text-tertiary-fixed mb-1">Join the Beta</h4>
            <p className="text-xs text-tertiary-fixed-dim uppercase tracking-widest">Early Access 2024</p>
          </div>
          <button className="w-20 h-20 rounded-full bg-on-tertiary-container text-white flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined "><FaRegPlusSquare/></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LandingPageSectionRedo
