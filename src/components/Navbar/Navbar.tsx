import { FC } from "react";
import styles from "./index.module.scss";
import { TbHomeFilled } from "react-icons/tb"
import NavButton from "./NavButton";
import { Sora } from "next/font/google"

const Navbar: FC = () => {
    return (
        // <div className="w-full h-12 bg-[#0a0a0a] border-b">
        <div className={styles.navContainer}>
            <div className={styles.sectionSize}>
                <div className={styles.logoContainer}>
                    <img src="/wrstatslogo.png" alt="wr stats logo" />
                </div>
                <div className={styles.buttonsContainer}>
                    <NavButton icon={TbHomeFilled} label="Home" />
                </div>
            </div>
        </div>
    )
};

export default Navbar