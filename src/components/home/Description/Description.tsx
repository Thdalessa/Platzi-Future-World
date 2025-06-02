"use client";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./Description.module.scss";
import { PLACEHOLDER_IMAGE } from "@/blurdataUrl/description";
import { useState } from "react";
const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => {
    setHasBorder(!hasBorder);
  };

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  console.log(buttonStyles);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            priority={false} /*priority=false -> NOT lazy loading*/
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech!</p>
      </div>
    </section>
  );
};

export default Description;
