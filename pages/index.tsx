import Link from 'next/link'
import { useEffect, useState } from 'react';
import fetch from "node-fetch"

const IndexPage = () => {
  const [uncompressedData, setUncompressedData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/compress", {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "*",
      //   "X-RapidAPI-Host": "*",
      // },
    })
      .then((response: { arrayBuffer: () => Buffer; }) => response.arrayBuffer())
      .then((data: Buffer) => uncomp(data))
      .catch((error: any) => console.log(error));
  }, []);

  const uncomp = async (compressedData: Buffer) => {
    // Sıkıştırılmış veriyi aç
    const inflatedData = new TextDecoder().decode(
      new Uint8Array(compressedData)
    );
    
    // Açılan veriyi kullan
    setUncompressedData(JSON.parse(inflatedData));
  };

  if (!uncompressedData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      TEST DATA
      <h1>{uncompressedData.message}</h1>
    </div>
  );
};

export default IndexPage;