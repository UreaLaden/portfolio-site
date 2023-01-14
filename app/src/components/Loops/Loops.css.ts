import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../../helpers/constants";

export const styles = mergeStyleSets({
    parent:{
        height:'100%',
        width:"100%"
    },
    loopContainer:{
        width:'90%',
        height:'25%',
        display:"grid",
        gridTemplate:"1fr / 1fr"
    },
    line1:{
        width:"100%",
        height:"100%",
        border: `1px solid ${Colors.WHITE}`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":2,
        transform:'translateY(7%)'
    },
    line2:{
        width:"100%",
        height:"100%",
        border: `1px solid ${Colors.WHITE}`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":3,

    },
    line3:{
        width:"100%",
        height:"100%",
        border: `1px solid ${Colors.WHITE}`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":4,
        transform:'translateY(-10%)'

    },
    line4:{
        width:"100%",
        height:"100%",
        border: `1px solid ${Colors.WHITE}`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":5,
        transform:'translateY(-20%)'
    },
    line5:{
        width:"100%",
        height:"100%",
        border: `1px solid ${Colors.WHITE}`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":6,
        transform:'translateY(-30%)'
    }
})