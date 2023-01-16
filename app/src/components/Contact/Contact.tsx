import { styles } from "./Contact.css";

export interface IContactProps{
  text:string;
}

export const Contact = (props: IContactProps) => {
  const { text } = props;
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>{text}</div>
    </div>
  );
};
