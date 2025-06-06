import Description from "@/components/home/Description/Description";
import styles from "./page.module.css";
import Hero from "@/components/home/Hero/Hero";
import MainProducts from "@/components/home/MainProducts/MainProducts";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainProducts />
    </main>
  );
}
