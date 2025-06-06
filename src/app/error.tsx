"use client";
import styles from "@/sass/global_error.module.scss";
import Image from "next/image";

const GlobalError = (props: ErrorPageProps) => {
  return (
    <div className={styles.Error}>
      <h1 className={styles.Error_title}>Ha ocurrido un error</h1>
      <Image src={"/images/404.webp"} width={500} height={500} alt="Error" />
      <p className={styles.Error_message}>
        Al parecer ha ocurrido un error, pero no te sientas mal
      </p>
      <button onClick={props.reset} className={styles.Error_button}>
        Volver a intentar
      </button>
    </div>
  );
};
export default GlobalError;
