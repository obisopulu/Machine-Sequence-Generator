'use client'

import { SetStateAction, useState } from "react";

export default function MachineCard(machineData: object) {
  const [exist, setExist] = useState<boolean>(true);
  const [machineindex, setMachineindex] = useState<number | null>();
  const [selectValue, setSelectValue] = useState<number>(20);
  
  let machineDataState: string[] = [];
  let machineDataStateIndex: number[] = [];

  let machineDataObj: { [key: string]: string | number } = Object.values(machineData)[0];
  machineDataObj = Object.values(machineDataObj)[0];
  
  let i = 0
  for (let x in machineDataObj) {
    machineDataState.push(machineDataObj[x])
    machineDataStateIndex.push(i)
    i ++
  }

  const handleExist = () => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      setExist(false);
    } else {
    }
  };
  
  const handleAddStep = (event: { target: { value: SetStateAction<number | null | undefined>; }; }) => {
    setMachineindex(event.target.value)
    setSelectValue(event.target.value)
  };
  
  const handleChange = () => {
    console.log("change")
  };
  
  return (
      
    exist &&
      <div key={Math.floor(Math.random() * 100)} className="p-4 rounded-sm border border-slate-600 mt-2">
        <div>
          <div className="flex flex-row ">
            StepType: 
            <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  bg-slate-600 w-full" />
          </div>
          <div className="flex flex-row ">
            StepId:
            <div className="flex gap-4 w-full">
              <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  bg-slate-600 w-full" />
                or
              <div className="flex gap-1 items-center mb-[13px]">
                  <input type="checkbox" id="StepIdDone" name="StepIdDone" />
                  <label htmlFor="StepIdDone">Done</label>
              </div>
            </div>
          </div>
          {/**<div className="flex flex-row ">
            ExecuteFunction: 
            <input onChange={handleChange} name="RecipeName" className="block mb-4 ml-4  bg-slate-600 w-full" />
          </div>*/}
        </div>
        <div className="flex justify-between">
          <select className="p-4 bg-slate-600 w-1/2" value={selectValue} onChange={handleAddStep}>
            <option key={999} value={20}>Machine-Module</option>
            {
              Object.keys(machineDataObj).map((i, key) => 
                <option key={key} value={key}>{i}</option>
              )
            }
          </select>
          {machineindex &&
            <select className="p-4 ml-4 bg-slate-600 w-1/2" name="cars" id="cars">
            {
              Object.keys(Object.values(machineDataState[machineindex])[0]).map((i, key) => (
                      <option className="block p-2 rounded-sm  border-none max-w-[150px] mr-1" key={key} value={i}>
                        {i}
                      </option>
              ))
            }                  
            </select>
          }
        </div>
        <div className="pt-4">
          Transitions:
          <div className="flex flex-col pl-4">
            <div className="flex flex-col w-full border-l-4 border-slate-600 pl-2 mt-2">
              <div className="flex gap-1 items-center">
                <p>hrFunction:</p>
                <input type="checkbox" id="Succeeded1" value="Succeeded" />
                <label htmlFor="Succeeded1">Succeeded</label>
              </div>
              <div className="flex">
                NextStepId:
                <input onChange={handleChange} name="RecipeName" className="block ml-4  bg-slate-600 w-full" />
              </div>
              
            </div>
            <div className="flex flex-col w-full border-l-4 border-slate-600 pl-2 mt-2">
              <div className="flex gap-1 items-center">
                <p>hrFunction:</p>
                <input type="checkbox" id="Succeeded1" value="Succeeded" />
                <label htmlFor="Succeeded1">Succeeded</label>
              </div>
              <div className="flex">
                NextStepId:
                <input onChange={handleChange} name="RecipeName" className="block ml-4  bg-slate-600 w-full" />
              </div>
              
            </div>
          </div>
          
          {/*
            "Transitions": [
                {
                    "hrFunction": "Succeeded",
                    "NextStepId": "move_to_bsc"
                },
                {
                    "hrFunction": "Failed",
                    "NextStepId": "Done"
                }
            ],
            "Parameter": {}
          */}
        </div>
        <div className="flex justify-end mt-4">
          <button className="p-4 bg-red-600 " onClick={handleExist}>Delete</button>
        </div>                    
      </div>
      
  );
};