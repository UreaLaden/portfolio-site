import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../helpers/constants";

export const styles = mergeStyleSets({
    skillsContainer:{
        width:"100%",
        height:"100%",
        display:'grid',
        borderTop:`3px solid ${Colors.WHITE}`,
        gridTemplate:"repeat(2,1fr) / repeat(3,1fr)",
        alignItems:"center",
        color:Colors.WHITE,
        "@media screen and (min-width:1400px)":{
            gridTemplate:"repeat(2,1fr) / repeat(3,1fr)",
        },
        "@media screen and (max-width:1400px)":{
            gridTemplate:"repeat(2,1fr) / repeat(3,1fr)",
        },
        "@media screen and (max-width:750px)":{
            gridTemplate:"repeat(3,1fr) / repeat(2,1fr)",
        }
    },
    subContainer:{
        textAlign:"start"
    },
    subHeader:{
        ...Fonts.Large
    },
    subHeaderText:{
        ...Fonts.Medium
    },
})