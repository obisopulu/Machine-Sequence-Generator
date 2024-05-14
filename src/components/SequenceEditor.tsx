"use client"

import MachineCard from "@/components/MachineCard";
import { downloadFile } from "@/hooks/handleDownload";
import { handleGenerator } from "@/hooks/handleGenerator";
import React, { useEffect, useState } from "react";
import { transferData } from "@/actions/file-transfer";

export default function SequenceEditor() {

  const [components, setComponents] = useState<JSX.Element[]>([]);
  const [machineData, setMachineData] = useState<object>({});
  const [generatedData, setGeneratedData] = useState<object>({});

  useEffect(() => {
    const fetchData = async () => {
     const reponse = await transferData({ folder: 'Task', fileName: 'MachineCapabilities_Assessment.json' });
     setMachineData(reponse)
    }

    fetchData()
  }, []);

  console.log(machineData)

  const addComponent = () => {
    setComponents([...components, <MachineCard machineData={machineData} />]);
  };
  const handleChange = () => {

  };

 const generateData = async () => {
    const genData = handleGenerator({ 
      steps: document.getElementById('steps')!,
      RecipeName: (document.getElementsByName("RecipeName")[0] as HTMLInputElement).value,
      StartSequenceId: (document.getElementsByName("StartSequenceId")[0] as HTMLInputElement).value,
      StartStepId: (document.getElementsByName("StartStepId")[0] as HTMLInputElement).value,
      responseData: machineData
    });
  
  
    const responsed = await transferData({ data: genData})
    console.log(responsed)
  }

  function downloadDate(): void {
    downloadFile('data.json');
  }

  return (
    <div className='bg-slate-600 flex justify-center items-center'>
      
      <div className="p-4 bg-slate-700 w-[840px]">
        <div className=" pb-2">Machine State:</div>
          
        <div className="flex flex-row text-4xl  gap-4">
          RecipeName: 
          <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  text-4xl bg-slate-600 w-full" />
        </div>
        
        <div className="flex flex-row text-2xl ">
          StartSequenceId: 
          <input onChange={handleChange} name="StartSequenceId" className="block mb-4 ml-4  bg-slate-600 w-full" />
        </div>
        
        <div className="flex flex-row text-xl ">
          StartStepId: 
          <input onChange={handleChange} name="StartStepId" className="block mb-4 ml-4  bg-slate-600 w-full" />
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

        <div className="flex gap-4">
          <button className="p-4 mt-4 bg-slate-600 " onClick={generateData}>Generate</button>
          <button className="p-4 mt-4 bg-slate-600 " onClick={downloadDate}>Download</button>
        </div>
      </div>
    </div>
  );
}

//export default React.memo(SequenceEditor);