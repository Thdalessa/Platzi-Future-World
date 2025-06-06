import Image from "next/image";
import styles from "./MainProducts.module.scss";
const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );
    const { products } = await res.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};

const MainProducts = async () => {
  const products = await getProducts();
  return (
    <section className={styles.MainProducts}>
      <h2>New products released!</h2>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <div>
                <Image
                  src={imageSrc}
                  alt={product.title}
                  fill
                  loading="eager"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MainProducts;
