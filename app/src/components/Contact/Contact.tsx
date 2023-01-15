import { styles } from "./Contact.css";

export const Contact = (props: any) => {
  const { text } = props;
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>{text}</div>
    </div>
  );
};
