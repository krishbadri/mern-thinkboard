import React from 'react'
import {Route, Routes} from "react-router"
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]' />

      {/* <button onClick={()=>toast.success("Congrats")} className="text-red-500 p-4 bg-pink-300">Click Me</button> */}
      {/* <button className='btn btn-primary'>Click Me</button> */}
      {/* <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;