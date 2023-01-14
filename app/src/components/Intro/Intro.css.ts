import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../helpers/constants";

export const styles = mergeStyleSets({
    introContainer:{
        display:"grid",
        gridTemplate:"15% repeat(4,1fr) / repeat(2, 2fr) 1fr",
        position:'relative',
        height:"65vh"
    },
    loopParentContainer:{},
    introHeader:{
        ...Fonts.ExtraLarge,
        color:Colors.WHITE,
        lineHeight:'1vw',
    },
    introHeaderContainer:{
        gridRow:"2/ span 3",
        gridColumn:"1 / span 4",
        display:'grid',
        gridTemplate:"repeat(2,2fr) repeat(2,3fr) / 2fr",
        "z-index":5
    },
    introHeaderDescription:{
        display:'grid',
        gridTemplate:"1fr / 2fr 2fr",
        ...Fonts.Large,
        fontWeight:700,
        color:Colors.WHITE,
        padding:"2% 0"
    },
    introContactContainer:{
        display:'flex',
        alignItems:"flex-start",
        justifyContent:'start',
        paddingTop:"2%"
    },
    introContact:{
        ...Fonts.Medium,
        fontWeight:600,
        color:Colors.WHITE,
        borderBottom:`3px solid ${Colors.TURQOISE}`,
        lineHeight:'48px',
        ":hover":{
            color:Colors.TURQOISE
        }
    },
    introCircle:{
        border:"3px solid white",
        borderRadius:"100%",
        height:'40%',
        width:'30%',
        gridRow:"4 / span 1",
        gridColumn:"-1 / span 1",
        "z-index":5,
        transform:'translate(-50%,20%)'
    },
    mediaHeader:{
        gridRow:'1 / span 1',
        gridColumn:'4 / span 1',
        display:'grid',
        gridTemplate:"repeat(2,1fr) / 1fr",
        position:'relative'
    },
    logoContainer:{
        gridRow:"2 / span 1",
        gridColumn:"1 / 1",
        "z-index":5,
        display:'grid',
        gridTemplate:'1fr / repeat(2,1fr)'
    },
    username:{
        display:'grid',
        gridTemplate:"repeat(2,1fr) / 1fr",
        position:'relative'
    },
    tag:{
        gridRow:"2 / span 1",
        gridColumn:'1 / 1',
        color:Colors.WHITE,
        ...Fonts.Large,
        fontWeight:"600",

    },
    introDescription:{
        ...Fonts.Medium,
        color:Colors.WHITE
    },
    name:{
        textDecoration:`underline solid ${Colors.TURQOISE}`
    },
    introImage:{
        gridRow:"1 / span 4",
        gridColumn: "-1 / span 1",
        height:'inherit'        
    },
    logo:{
    },
    logoChildContainer:{
        gridRow:"1 / span 1",
        gridColumn:"2 / span 1",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
})