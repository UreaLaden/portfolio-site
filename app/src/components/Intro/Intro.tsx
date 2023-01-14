import Loops from "../Loops/Loops";
import { styles } from "./Intro.css";

const introduction = {
  header: "Nice to meet you!",
  greetings: "Adam Keyes.",
  description:
    "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
  image: `${process.env.PUBLIC_URL}/assets/images/image-profile-desktop.webp`,
  gitLogo: `${process.env.PUBLIC_URL}assets/images/icon-github.svg`,
  fmLogo: `${process.env.PUBLIC_URL}assets/images/icon-frontend-mentor.svg`,
  linkedInLogo: `${process.env.PUBLIC_URL}assets/images/icon-linkedin.svg`,
  twitterLogo: `${process.env.PUBLIC_URL}assets/images/icon-twitter.svg`,
  username: "adamkeyes",
};

export const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.mediaHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logoChildContainer}>
            <img
              className={styles.logo}
              src={introduction.gitLogo}
              alt={introduction.gitLogo}
            />
            <img
              className={styles.logo}
              src={introduction.fmLogo}
              alt={introduction.fmLogo}
            />
            <img
              className={styles.logo}
              src={introduction.linkedInLogo}
              alt={introduction.linkedInLogo}
            />
            <img
              className={styles.logo}
              src={introduction.twitterLogo}
              alt={introduction.twitterLogo}
            />
          </div>
        </div>
      </div>
      <div className={styles.introImage}>
        <img
          className={styles.introImage}
          src={introduction.image}
          alt={introduction.description}
        />
      </div>
      <div className={styles.username}>
        <div className={styles.tag}>
          <div className={styles.username}>{introduction.username}</div>
        </div>
      </div>
      <div className={styles.introHeaderContainer}>
        <div className={styles.introHeader}>
          <div className={styles.introHeader}>{introduction.header}</div>
        </div>
        <div className={styles.introHeader}>
          <div className={styles.introHeader}>
            I'm <span className={styles.name}>{introduction.greetings}</span>
          </div>
        </div>
        <div className={styles.introHeaderDescription}>{introduction.description}</div>
        <div className={styles.introContactContainer}>
            <div className={styles.introContact}>CONTACT ME</div>
        </div>
      </div>
      <div className={styles.introCircle}></div>
      
      {/* <div className={styles.mediaHeader}>
      <div className={styles.loopParentContainer}>
        <Loops />
      </div>
            

        </div>
       */}
    </div>
  );
};

export default Intro;
