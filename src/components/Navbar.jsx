import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { IoSearchSharp, IoSettingsSharp } from 'react-icons/io5'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-between px-8 h-20 w-full shadow-[0_36px_36px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black tracking-tighter text-slate-50 dark:text-slate-50">NavLink</span>
          <nav className="hidden md:flex gap-8 items-center h-full">
            <Link className="text-xl font-['Inter'] tracking-tight label-md:text-sm text-green-500 font-bold border-b-2 border-green-500 pb-1" to="/">Dashboard</Link>
            <Link className="text-xl font-['Inter'] tracking-tight label-md:text-sm text-slate-400 hover:text-slate-100 transition-colors" to="/">Routes</Link>
            <Link className="text-xl font-['Inter'] tracking-tight label-md:text-sm text-slate-400 hover:text-slate-100 transition-colors" to="/">Analytics</Link>
            <Link className="text-xl font-['Inter'] tracking-tight label-md:text-sm text-slate-400 hover:text-slate-100 transition-colors" to="/">Subscription</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"><IoSearchSharp /></span>
            <input className="bg-slate-900/50 border-none rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:ring-1 focus:ring-green-500 w-64 placeholder:text-slate-500" placeholder="Search coordinates..." type="text"/>
          </div>
          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-green-500 active:scale-95 duration-200 transition-all">
              <span className="material-symbols-outlined"><IoIosNotifications/></span>
            </button>
            <button className="text-slate-400 hover:text-green-500 active:scale-95 duration-200 transition-all">
              <span className="material-symbols-outlined"><IoSettingsSharp/></span>
            </button>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-green-500/20 active:scale-95 duration-200 cursor-pointer">
            <img alt="User Profile Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZWe0hq-egh34czhr_qzXscuiM3ct3ATakYNXPV-W5hcVhaNmBtZLWGjIhxfYxk7uNJaE5K_OLS5ZGvMF3OgaZ_Qg9PSlUOPho88128CapUqqQeVFkrYj4Z7LyIVRKReMOdSD1WHCuJs-fTyDeTc78MzK9HmQ1SAyWXnbmOwMt-yo0LAzwqZUZFgBSTFMRRixGAXVT27fKTq8bL86UvGv11nCAvtyPbQUDFQpn4iWXQYU60ExMzxPlvl2lM2gHcuZYODvoVChytdxY"/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar