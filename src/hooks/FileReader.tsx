import fs from 'fs/promises';
import path from 'path';

type fetchDataProps = {
  folder: string;
  fileName: string;
};

export const fetchData = async ({folder, fileName}: fetchDataProps) => {
  const filePath = path.join(process.cwd(), 'src', folder, fileName);
  try {
    const jsonData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    return jsonData;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};
