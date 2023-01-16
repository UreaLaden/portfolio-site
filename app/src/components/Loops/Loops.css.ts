import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../../helpers/constants";

export const styles = mergeStyleSets({
    parent:{
        height:'100%',
        width:"100%"
    },
    loopContainer:{
        width:'90%',
        height:'20%',
        display:"grid",
        gridTemplate:"1fr / 1fr"
    },
    line1:{
        width:"100%",
        height:"100%",
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":2,
        transform:'translateY(15%)'
    },
    line2:{
        width:"100%",
        height:"100%",
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":3,

    },
    line3:{
        width:"100%",
        height:"100%",
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":4,
        transform:'translateY(-18%)'

    },
    line4:{
        width:"100%",
        height:"100%",
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":5,
        transform:'translateY(-36%)'
    },
    line5:{
        width:"100%",
        height:"100%",
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius:"50%",
        gridRow:"1 / -1",
        gridColumn:"1 / span 1",
        "z-index":6,
        transform:'translateY(-50%)'
    }
})