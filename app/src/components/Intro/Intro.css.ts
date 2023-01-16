import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../helpers/constants";

export const styles = mergeStyleSets({
    introContainer:{
        gridRow:'1 / 6',
        gridColumn:'1 / -1',
        display:"grid",
        position:'relative',
        "@media screen and (min-width:1400px)":{
            gridTemplate:"repeat(5,1fr) .5fr / repeat(7,1fr) 2rem",
        }
    },
    loopParentContainer:{},
    introHeader:{
        ...Fonts.ExtraLarge,
        color:Colors.WHITE,
        lineHeight:'1em',
    },
    introHeaderContainer:{
        gridRow:"2/ span 4",
        gridColumn:"1 / span 6",
        display:'grid',
        gridTemplate:"repeat(2,2fr) repeat(2,3fr) / 2fr",
        "z-index":5
    },
    introHeaderDescription:{
        ...Fonts.Medium,
        fontWeight:700,
        color:Colors.WHITE,
        padding:"2% 0"
    },
    introHeaderDescriptionContainer:{
        gridRow:'4 / span 2',
        gridColumn:"1 / span 3"
    },
    introContactContainer:{
        gridRow:'5 / span 1',
        gridColumn:'1 / 1'
    },
    socialHeader:{
        gridRow:"1 / span 1",
        gridColumn:"-2 / 1",
        "z-index":5,
        display:'grid',
        gridTemplate:".5fr repeat(2,1fr) / repeat(7,1fr)"
    },
    socialItems:{
        gridRow:"2 / span 1",
        gridColumn:"1 / -1",
        display:'grid',
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
        gridRow:"1 / span 1",
        gridColumn:"-4 / span 2",
        "z-index":5,
        display:'grid',
        gridTemplate:'repeat(3,1fr) / repeat(2,1fr)',
    },
    
    usernameContainer:{
        display:'grid',
        gridTemplate:"repeat(3,1fr) / repeat(2, 1fr)",
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
        backgroundColor:Colors.BLUE,
        gridRow:"1 / -1",
        gridColumn: "6 / 8",
        height:'100%'
    },
    logo:{
    },
    logoChildContainer:{
        gridRow:"2 / span 1",
        gridColumn:"2 / span 1",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
})