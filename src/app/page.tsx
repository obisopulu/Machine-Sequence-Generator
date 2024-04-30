import SequenceEditor from "@/components/SequenceEditor";
import { fetchData } from "@/hooks/FileReader";

export default async function Home() {
  const data = await fetchData({ folder: 'Task', fileName: 'MachineCapabilities_Assessment.json' });
  
  const handleChange = (event: any) => {

  };

  return (
    <div className='bg-slate-600 flex justify-center'>
        <SequenceEditor data={data} />
    </div>
  );
}