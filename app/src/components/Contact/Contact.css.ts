import { mergeStyleSets } from "@fluentui/react";
import { Fonts, Colors } from "../../helpers/constants";

export const styles = mergeStyleSets({
    contactContainer:{
        display:'flex'
    },
    contactText:{
        ...Fonts.Medium,
        fontWeight:600,
        color:Colors.WHITE,
        borderBottom:`3px solid ${Colors.TURQOISE}`,
        lineHeight:'48px',
        ":hover":{
            color:Colors.TURQOISE
        },
    }
})