import { mergeStyleSets } from "@fluentui/react";
import { Fonts, Colors } from "../../helpers/constants";

export const styles = mergeStyleSets({
    contactContainer:{
        display:'flex',
        height:"3.5vh"
    },
    contactText:{
        ...Fonts.Medium,
        fontWeight:600,
        color:Colors.WHITE,
        borderBottom:`3px solid ${Colors.TURQOISE}`,
        ":hover":{
            color:Colors.TURQOISE
        },
    }
})