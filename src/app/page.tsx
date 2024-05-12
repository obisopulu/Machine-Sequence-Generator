import SequenceEditor from "@/components/SequenceEditor";
import { transferData } from "@/hooks/FileTransfer";

export default async function Home() {
  const data = await transferData({ folder: 'Task', fileName: 'MachineCapabilities_Assessment.json' });
  
  transferData({ data: data})

  return (
    <div className='flex justify-center text-white py-12'>
        <SequenceEditor data={data} />
    </div>
  );
}