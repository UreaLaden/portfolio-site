import { Contact } from "../Contact/Contact";
import { styles } from "./Projects.css";

export interface IProjectProps {
  image: string;
  title: string;
  skills: string[];
}

export const Projects = (props: IProjectProps) => {
  const { image, title, skills } = props;
  return (
    <div className={styles.projectContainerInner}>
      <img src={image} alt={`${title}`} className={styles.projectImage} />
      <div className={styles.projectSubHeader}>{title}</div>
      <div className={styles.projectSubHeaderTextContainer}>
        {skills.map((val, idx) => {
          return (
            <div key={idx} className={styles.projectSubHeaderText}>
              {val}
            </div>
          );
        })}
      </div>
      <div className={styles.projectOverlay}>
        <div className={styles.overlayItem1}>
          <Contact text={"VIEW PROJECT"} />
        </div>
        <div className={styles.overlayItem2}>
          <Contact text={"VIEW CODE"} />
        </div>
      </div>
    </div>
  );
};
