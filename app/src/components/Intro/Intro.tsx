import { Contact } from "../Contact/Contact";
import Loops from "../Loops/Loops";
import { styles } from "./Intro.css";

const introduction = {
  header: "Nice to meet you! ",
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
      <div className={styles.usernameContainer}>
        <div className={styles.username}>{introduction.username}</div>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logoChildContainer}>
          <img src={introduction.gitLogo} alt={introduction.gitLogo} />
          <img src={introduction.fmLogo} alt={introduction.fmLogo} />
          <img
            src={introduction.linkedInLogo}
            alt={introduction.linkedInLogo}
          />
          <img src={introduction.twitterLogo} alt={introduction.twitterLogo} />
        </div>
      </div>
      <img
        className={styles.introImage}
        src={introduction.image}
        alt={introduction.description}
      />
      <div className={styles.introHeaderContainer}>
        <h1 className={styles.introHeader}>
          {introduction.header}I'm &nbsp;
          <span className={styles.name}>{introduction.greetings}</span>
        </h1>
      </div>
      <div className={styles.introHeaderDescriptionContainer}>
      <div className={styles.introHeaderDescription}>{introduction.description}</div>
      </div>
      <div className={styles.introContactContainer}>
        <Contact text={'CONTACT ME'}/>
      </div>
    </div>
  );
};

export default Intro;
