import * as React from "react";
import { styles } from "./App.css";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sectionContainer}>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
