import React from 'react'

const LandingPageHardwareIntegration = () => {
    return (
    <div className="bg-blue-100 p-10 min-h-screen">
            <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <h2 className="text-5xl font-black text-primary tracking-tighter mb-8">Hardware Integrated Precision.</h2>
                    <p className="text-lg text-secondary mb-10 leading-relaxed">NavLink isn't just an app—it's a hardware-first ecosystem. Our specialized SDKs bridge the gap between satellite telemetry and consumer interfaces.</p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <span className="text-4xl font-bold text-orange-500">0.3m</span>
                            <p className="text-xs font-bold text-orange-500 uppercase mt-1">Accuracy Radius</p>
                        </div>
                        <div>
                            <span className="text-4xl font-black text-orange-500">60Hz</span>
                            <p className="text-xs font-bold text-orange-500 uppercase mt-1">Refresh Rate</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="w-full h-full overflow-hidden">
                        <img className="w-full h-full object-cover" data-alt="High tech hardware electronic circuit close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwgF1pHdRInLzGjx7oOPoB-ZopeluAdbjJxaWdrT91JffSMeTtt4Qqur7jMHcqYiAVlkFNRvng4j8SoLluvT1om2hdZdQJZdO79_dF1XfLCaa0WeEztrIm7iwr12AWrD2kUdwupVeoWhgCw7CnlKfwpm5Kxx8RWckct5N7VF4gCOjh1fqQ7wLDg0nhUdSdptezVR0E92RGRw_GGZQBWShG9PgedAzLuJkDPUWhTMuMlrGg-3LcQDCRjsJeZOEFY20iGGINQA4DoEPT" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                        <p className="text-xs font-mono opacity-60 mb-2">SIGNAL_STATUS</p>
                        <p className="text-sm font-bold">CRYPTO-STABLE POSITIONING ACTIVE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageHardwareIntegration