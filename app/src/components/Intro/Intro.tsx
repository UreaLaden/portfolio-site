import { gitLogoOriginal, fmLogoOriginal, linkedInLogoOriginal, twitterLogoOriginal, introduction } from "../../helpers/constants";
import { Contact } from "../Contact/Contact";
import { Social } from "../Media/Social";
import { styles } from "./Intro.css";





export const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.socialHeader}>
        <div className={styles.socialItems}>
          <Social
            tag={introduction.username}
            media={[
              gitLogoOriginal,
              fmLogoOriginal,
              linkedInLogoOriginal,
              twitterLogoOriginal,
            ]}
          />
        </div>
      </div>
      <img
        className={styles.introImage}
        src={introduction.image}
        alt={introduction.description}
      />
      <div className={styles.introHeaderContainer}>
        <h1 className={styles.introHeader}>
          {introduction.header}
          <>
            I'm&nbsp;
            <span className={styles.name}>{introduction.greetings}</span>
          </>
        </h1>
      </div>
      <div className={styles.introHeaderDescriptionContainer}>
        <div className={styles.introHeaderDescription}>
          {introduction.description}
        </div>
      </div>
      <div className={styles.introContactContainer}>
        <Contact text={"CONTACT ME"} />
      </div>
    </div>
  );
};

export default Intro;
