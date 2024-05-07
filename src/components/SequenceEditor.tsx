'use client'


import MachineCard from "@/components/MachineCard";
import { useState } from "react";

export default function SequenceEditor(machineData: string | number) {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  let key = components.length;

  const addComponent = () => {
    setComponents([...components, <MachineCard key={key} machineData={machineData} />]);
    key++;
  };
  const handleChange = (event: any) => {

  };

  return (
    <div className='bg-slate-600 flex flex-1 justify-center items-center'>
      
      <div className="p-4 bg-slate-700 w-[840px]">
        <div className=" pb-2">Machine State:</div>
          
        <div className="flex flex-row text-4xl  gap-4">
          RecipeName: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  text-4xl bg-slate-600 w-full" />
        </div>
        
        <div className="flex flex-row text-2xl ">
          StartSequenceId: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  bg-slate-600 w-full" />
        </div>
        
        <div className="flex flex-row text-xl ">
          StartStepId: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  bg-slate-600 w-full" />
        </div>
        
        <div className="flex flex-row text-2xl  mb-2">
          Steps:
        </div>

        <div id="steps">  
          {components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
        
        <button className="p-4 mt-4 bg-slate-600 " onClick={addComponent}>Add Step</button>
      </div>
    </div>
  );
}