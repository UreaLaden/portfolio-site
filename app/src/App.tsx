import * as React from "react";
import { styles } from "./App.css";
import Intro from "./components/Intro/Intro";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainerHeader}>
        <Intro/>
      </section>
      <section className={styles.sectionContainerSkills}>
        <Skills/>
      </section>
    </div>
  );
}

export default App;
