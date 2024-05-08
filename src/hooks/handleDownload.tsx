export const downloadFile = (fileName: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const url = `${baseUrl}/${fileName}`;
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const fileURL = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(fileURL);
    })
    .catch(error => console.error('Error downloading file:', error));
};
