import React from 'react'
import { FaHistory } from 'react-icons/fa'
import { FaBookmark, FaTrafficLight } from 'react-icons/fa6'
import { IoHelpCircle, IoMapSharp } from 'react-icons/io5'
import { LuLogOut } from 'react-icons/lu'
import { MdAddRoad } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="flex flex-col h-[620px] w-64 p-4">

      {/* Header */}
      <div className="mb-6 px-2">
        <h2 className="text-slate-100 font-bold text-lg">Navigation Hub</h2>
        <p className="text-slate-500 text-xs tracking-wide">Precision Wayfinding</p>
      </div>

      {/* New Route Button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 mb-6 text-sm">
        <span className="material-symbols-outlined text-base"><MdAddRoad/></span>
        New Route
      </button>

      {/* Nav Links */}
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 text-green-500 border-r-4 border-green-500 text-sm font-medium">
          <span className="material-symbols-outlined text-xl"><FaBookmark/></span>
          Saved
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors text-sm">
          <span className="material-symbols-outlined text-xl"><FaHistory/></span>
          History
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors text-sm">
          <span className="material-symbols-outlined text-xl"><IoMapSharp/></span>
          Offline Maps
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors text-sm">
          <span className="material-symbols-outlined text-xl"><FaTrafficLight/></span>
          Traffic
        </a>
      </div>

      {/* Bottom Links */}
      <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-1">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors text-xs uppercase tracking-widest">
          <span className="material-symbols-outlined text-base"><IoHelpCircle/></span>
          Support
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors text-xs uppercase tracking-widest">
          <span className="material-symbols-outlined text-base"><LuLogOut/></span>
          Logout
        </a>
      </div>

    </div>
  )
}

export default Sidebar