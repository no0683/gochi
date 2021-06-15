import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <>
            <h1 className={styles.Title}>Hello</h1>
            <World />
        </>
    );
}