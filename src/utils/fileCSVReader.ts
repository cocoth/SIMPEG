export const CSVReader = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return reject(new Error("Failed to read file!"));
      const res = e.target.result as string;
      const rows = res.split("\n").map((row) => row.split(","));
      if (rows[0][0] === "No") rows.shift();
      resolve(rows);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
};
