import { NextPage } from "next";
import styles from "./utils/styles/home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <section className={styles.pageWidth}>
                <div className={styles.heroCard}>
                    <div className={styles.content}>
                        <div className={styles.descriptionContainer}>
                            <h1>Statistiche degli atleti a portata di mano</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus viverra justo id molestie.</p>
                        </div>
                        <button>Start now</button>
                    </div>
                    <div className={styles.phone}>
                        <img src="/iphone_mockup.png" alt="iphone_mockup" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home