'use client'

import { SetStateAction, useState } from "react";

export default function MachineCard(machineData: { [key: string]: string | number }, key: number) {
  const [exist, setExist] = useState<boolean>(true);
  const [machineindex, setMachineindex] = useState<number | null>();
  
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
  
  const handleChange = (event: { target: { value: SetStateAction<number | null | undefined>; }; }) => {
    setMachineindex(event.target.value)
  };
  
  return (
      
    exist &&
      <div key={key} className="p-4 rounded-sm border border-slate-600 mt-2">
        <div className="flex justify-between">
          <select className="p-4 bg-slate-600 text-white" onChange={handleChange}>
            <option key={999} value={[]}>Machine Data State</option>
            {
              Object.keys(machineDataObj).map((i, key) => 
                <option key={key} value={key}>{i}</option>
              )
            }
          </select>
          <button className="p-4 bg-red-600 text-white" onClick={() => handleExist()}>Delete</button>
        </div>
        {machineindex &&

        <div className="pt-4" id="">
          <div className="p-4  text-white">
            {
              Object.keys(Object.values(machineDataState[machineindex])[0]).map((i, key) => (
                <div key={key} className="flex justify-start">
                  <div className="my-4 w-[200px]">{i}: </div>
                    {
                      Object.keys(Object.values(Object.values(machineDataState[machineindex])[0][i])[0]).map((j, k) => (
                        <div className="flex flex-col" key={k}>
                          <div className="my-2 text-xs">{j}: </div>
                          <input className="block p-2 rounded-sm bg-slate-400 text-white border-none max-w-[150px] mr-1" placeholder={j} />
                        </div>
                      ))
                    }
                </div>
              ))
            }
          </div>

        </div>
        }
      </div>
      
  );
};