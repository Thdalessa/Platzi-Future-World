import Image from "next/image"
import styles from "./Description.module.scss"
import { PLACEHOLDER_IMAGE } from "@/blurdataUrl/description"



const Description = () => {
  return (
    <section className={styles.Description}>
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
        <div>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech!</p>
        </div>
    </section>
  )
}

export default Description