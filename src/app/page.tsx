import fs from 'fs/promises'; // Import fs with promises
import path from 'path';

const fetchData = async () => {
  const filePath = path.join(process.cwd(), 'src', 'Task', 'MachineCapabilities_Assessment.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8'); // Use fs.promises.readFile
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};

export default async function Home() {
  const data = await fetchData();
  console.log(data);
  return (
    <div className='bg-red-500'>
      {/* Your component code here */}
    </div>
  );
}