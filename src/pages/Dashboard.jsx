import React from 'react'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'


const Dashboard = () => {
  return (
    <section className="min-h-screen flex flex-col pt-20">
      <div className="w-full flex flex-row gap-x-5 ">
        <aside className="w-1/4 bg-slate-950/85 h-full">
          <Sidebar/>
        </aside>
        <div className="w-3/4 m-5 h-[450px] ring-1"> <Map/> </div>
      </div>
    </section>
  )
}

export default Dashboard