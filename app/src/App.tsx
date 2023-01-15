import * as React from "react";
import { styles } from "./App.css";
import Intro from "./components/Intro/Intro";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.appContainer}>
        <header className={styles.sectionContainerHeader1}>
          <Intro />
          <section className={styles.sectionContainerSkills}>
            <Skills />
          </section>
        </header>
        <header className={styles.sectionContainerHeader2}>
          <h1 className={styles.headerText}>Projects</h1>
          <div className={styles.contactContainer}>
            <Contact text={"CONTACT ME"} />
          </div>
          <section className={styles.projectContainer}>
            
          </section>
        </header>
      </div>
    </div>
  );
}

export default App;
