import { styles } from "./Projects.css";

const projects = [
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-1-large.webp`, header: "DESIGN PORTFOLIO", technology: ['HTML','CSS'] },
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-2-large.webp`, header: "E-LEARNING LANDING PAGE", technology: ['HTML','CSS'] },
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-3-large.webp`, header: "TODO WEB APP", technology: ['HTML','CSS','JAVASCRIPT'] },
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-4-large.webp`, header: "ENTERTAINMENT WEB APP", technology: ['HTML','CSS','JAVASCRIPT'] },
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-5-large.webp`, header: "MEMORY GAME", technology: ['HTML','CSS','JAVASCRIPT'] },
  { image: `${process.env.PUBLIC_URL}/assets/images/thumbnail-project-6-large.webp`, header: "ART GALLERY SHOWCASE", technology: ['HTML','CSS','JAVASCRIPT'] },
];

const getClassName = (index:number) => {
    switch(index){
        case 0:
            return styles.project1;
        case 1:
            return styles.project2;
        case 2:
            return styles.project3;
        case 3:
            return styles.project4;
        case 4:
            return styles.project5;
        case 5:
            return styles.project6;
    }
}

export const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      {projects.map((value, index) => {
        return (
          <div className={getClassName(index)} key={index}>
            <img src={value.image} alt={`${value.header}`} className={styles.projectImage} />
            <div className={styles.projectSubHeader}>{value.header}</div>
            <div className={styles.projectSubHeaderTextContainer}>
                {value.technology.map((val,idx) =>{
                    return <div key={idx} className={styles.projectSubHeaderText}>{val}</div>
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
