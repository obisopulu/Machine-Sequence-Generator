'use server'

import fs from 'fs/promises';
import path from 'path';

type TransferDataProps = {
  folder?: string;
  fileName?: string;
  data?: Record<string, any>;
};

export async function transferData({ folder, fileName, data }: TransferDataProps) {
  
  try {
    if (data) {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(path.join(process.cwd(), 'public', 'SequenceEditor.json'), jsonData);
      return 'Data has been written to data.json';
    }else if (typeof folder === 'string' && typeof fileName === 'string') {
      const filePath = path.join(process.cwd(), 'src', folder, fileName);
      const jsonData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
      return { data: jsonData, status: 200 };
    } else {
      return { message: 'Invalid request parameters', status: 400 };
    }
  } catch (error) {
    console.error("Error:", error);
    return { message: error, status: 500 };
  }
}