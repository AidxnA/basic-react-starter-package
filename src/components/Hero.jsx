import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[921px] w-full bg-slate-900 overflow-hidden">

				<div className="absolute inset-0 z-0">
					<img className="w-full h-full object-cover opacity-50 grayscale contrast-125" data-alt="Modern dark satellite map view of a complex city" data-location="Tokyo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOa6o8YVue8x88Sl-EMPv9dfyVkPTI39Q8D1xn6Pm_ea5qIfSfBnhyQ5v2cy-rcF3rj0X6rtybvftYPxCwGXaQQ-8_5he7K7MomjBQR363-yWIvOmlvl--vf29fahao1wVcrI9oSi2ba-Lr63YMt82Bm-yS4FIqWTlaUWshFwtKBGjs9kMkbqR5eiOmxWuV6xLDpr40xQOv1EcwC5NBJxgEt8L-AMNhiuIrmDJ5nMmaY5TbK22MDjZcb1UyTpkZ7RIRKScqrp01ZE" />
					<div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
				</div>

				<div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-on-tertiary-container/10 border border-on-tertiary-container/20 mb-6">
							<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
							<span className="bg-green-500/10 ring-1 ring-green-500 p-2 text-green-500 text-xs font-bold uppercase tracking-widest">• Live System Active</span>
						</div>
						
						<h1 className="font-headline font-black text-7xl md:text-8xl text-white tracking-tighter leading-none mb-6">
							PRECISION<br /><span className="text-green-500 text-on-tertiary-container">KINETICS</span>
						</h1>
						<p className="w-[650px] text-slate-300 text-xl font-light leading-relaxed mb-10 max-w-lg">
							Navigate the complexity of urban sprawl with high-fidelity cartography and predictive traffic modeling.
						</p>
						<div className="flex flex-row gap-x-4 text-nowrap">
							<button className="bg-green-500 action-gradient text-white px-10 py-4 rounded-xl font-bold text-lg w-full shadow-xl shadow-green-500 hover:translate-y-[-2px] transition-all active:scale-95">
								Start Navigation
							</button>
							<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl w-[200px] font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
								View API Docs
							</button>
						</div>
					</div>
					<div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block w-96">
						<div className="glass-panel p-6 rounded-xl shadow-2xl border border-white/10">
							<div className="flex justify-between items-start mb-8">
								<div>
									<h3 className="text-primary font-black text-2xl tracking-tight">ETA 14:20</h3>
									<p className="text-on-surface-variant text-sm font-medium uppercase tracking-wider">Arrival in Shibuya</p>
								</div>
								<span className="material-symbols-outlined text-on-tertiary-container text-4xl">near_me</span>
							</div>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
										<span className="material-symbols-outlined text-primary">traffic</span>
									</div>
									<div className="flex-1">
										<div className="flex justify-between items-center">
											<span className="text-sm font-bold text-primary">Heavy Traffic</span>
											<span className="text-xs font-black text-on-tertiary-container">+12 min</span>
										</div>
										<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-1.5">
											<div className="bg-on-tertiary-container h-full w-3/4 rounded-full"></div>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
										<span className="material-symbols-outlined text-primary">route</span>
									</div>
									<div className="flex-1">
										<span className="text-sm font-bold text-primary">Fastest Route Found</span>
										<p className="text-xs text-on-surface-variant">Via Route C2 Express</p>
									</div>
								</div>
							</div>
							<div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
								<span className="text-primary/60 text-xs font-mono">35.6580° N, 139.7016° E</span>
								<div className="flex -space-x-2">
									<div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-slate-300"></div>
									<div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-slate-400"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Hero