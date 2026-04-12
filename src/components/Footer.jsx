import React from 'react'

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full py-12 border-t border-slate-900 bg-slate-950">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-full">
                <div className="flex flex-col md:items-start mb-8 md:mb-0">
                    <span className="text-lg font-bold text-slate-200">NavLink Kinetic Cartography</span>
                    <p className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 mt-2">© 2024 NavLink Kinetic Cartography. All rights reserved.</p>
                </div>
                <div className="flex gap-8">
                    <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors" href="#">Privacy Policy</a>
                    <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors" href="#">Terms of Service</a>
                    <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors" href="#">API Documentation</a>
                    <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors" href="#">System Status</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer