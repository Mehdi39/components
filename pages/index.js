import Head from "next/head";
import Image from "next/image";
import BlueOceanContact from "../Components/BlueOceanContact";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlueOceanContact />
    </div>
  );
}
