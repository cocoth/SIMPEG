export const CSVReader = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return reject(new Error("Failed to read file!"));
      const res = e.target.result as string;
      const rows = res.split("\n").map((row) => row.split(";"));
      const rowsToLower = rows.map((row) =>
        row.map((item) => item.toLowerCase())
      );
      const cleanRows = rowsToLower
        .map((row) => row.map((item) => item.trim().replace(/\r/g, "")))
        .filter((row) => row.some((item) => item !== ""));
      if (cleanRows[0].every((item) => !item.trim())) cleanRows.shift();
      const isHeader = cleanRows[0].map(
        (item) =>
          item === "no" ||
          item === "nama" ||
          item === "jabatan" ||
          item === "gender" ||
          item === "no._telp" ||
          item === "email" ||
          item === "status"
      );
      console.log({ cleanRows });
      console.log({ cleanRows0: cleanRows[0] });
      console.log({ isHeader });
      if (isHeader.every(Boolean)) {
        const RTLS = rowsToLower.slice(1);
        resolve(RTLS);
        console.log({ rowsToLower });
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
};

export const CSVtoJSON = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return reject(new Error("Failed to read file!"));
      const res = e.target.result as string;
      const rows = res.split("\n").map((row) => row.split(";"));
      const rowsToLower = rows.map((row) =>
        row.map((item) => item.toLowerCase())
      );
      const headers = rowsToLower[0].map((header) => header.trim());
      const cleanRows = rows
        .map((row) => row.map((item) => item.trim().replace(/\r/g, "")))
        .filter((row) => row.some((item) => item !== ""));
      const data = cleanRows.slice(1).map((row) => {
        const obj: any = {};
        row.forEach((item, index) => {
          let key = headers[index];
          key = key.replace(/\./g, '')
          //if(key === "no._telp") key = key.replace(/\./g, '') // just in case code on above doesnt work
          obj[key] = item.trim();
        });
        return obj;
      });
      resolve(data);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
};
