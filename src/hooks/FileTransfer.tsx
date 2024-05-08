import fs from 'fs/promises';
import path from 'path';

type fetchDataProps = {
  folder?: string;
  fileName?: string;
  data?: Record<string, any>;
};

export const transferData = async ({folder, fileName, data}: fetchDataProps) => {
  try {
    if (data) {
      const jsonData = JSON.stringify(data, null, 2);
      fs.writeFile('src/Task/data.json', jsonData);
      return('Data has been written to data.json');
    }else{
      const filePath = path.join(process.cwd(), 'src', folder, fileName);
      const jsonData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
      return jsonData;
    }
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};
