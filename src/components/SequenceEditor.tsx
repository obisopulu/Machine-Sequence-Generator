'use client'


import MachineCard from "@/components/MachineCard";
import { useState } from "react";

export default function SequenceEditor(machineData) {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  let key = components.length;

  const addComponent = () => {
    setComponents([...components, <MachineCard key={key} machineData={machineData} />]);
    key++;
  };
  const handleChange = (event: any) => {

  };

  return (
    <div className='bg-slate-600 flex flex-1 justify-center items-center p-12 h-[100vh] overflow-auto'>
      
      <div className="p-4 bg-slate-700 w-[840px]">
        <div className="text-white pb-2">Machine State:</div>
          
        <div className="flex flex-row text-4xl text-white gap-4">
          RecipeName: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 text-white text-4xl bg-slate-700 w-full" />
        </div>
        
        <div className="flex flex-row text-2xl text-white">
          SequenceA: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 text-white bg-slate-700 w-full" />
        </div>
        
        <div className="flex flex-row text-2xl text-white mb-2">
          Steps:
        </div>

        <div id="steps">  
          {components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
        
        <button className="p-4 mt-4 bg-slate-600 text-white" onClick={addComponent}>Add Step</button>
      </div>
    </div>
  );
}