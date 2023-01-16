import Loops from "../Loops/Loops"
import { styles } from "./Skills.css"

const skills = [
    {name:'HTML',experience:4},
    {name:'CSS',experience:4},
    {name:'Javascript',experience:4},
    {name:'Accessibility',experience:4},
    {name:'React',experience:3},
    {name:'Sass',experience:3},
]

export const Skills = () =>{
    return (<div className={styles.skillsContainer}>
        {skills.map((value,index) => {
            return (<div key={index} className={styles.subContainer}>
                <div className={styles.subHeader}>{value.name}</div>
                <div className={styles.subHeaderText}>{value.experience} Years Experience</div>
            </div>)
        })}
    </div>)
}