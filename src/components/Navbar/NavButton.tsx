import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import { IconType } from "react-icons";

interface Props {
    icon: IconType;
    label: string;
}

const NavButton: FC<Props> = ({ icon: Icon, label }) => {
    return (
        <div className={styles.button}>
            <div className={styles.iconContainer}>
                <Icon />
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    )
}

export default NavButton