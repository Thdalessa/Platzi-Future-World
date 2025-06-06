"use client";

import { useEffect } from "react";

const Error = (props: ErrorPageProps) => {
  useEffect(() => {
    console.log(props.error);
  }, []);

  return (
    <div style={{ padding: "10rem", fontSize: "2rem" }}>
      <h1>:(</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={() => props.reset()}>Reintentar</button>
    </div>
  );
};

export default Error;
