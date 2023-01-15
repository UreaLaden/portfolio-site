import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./helpers/constants";

export const styles = mergeStyleSets({
  mainContainer:{
    height:'100%',
    backgroundColor:Colors.BLACK
  },
  appContainer: {
    height:'100%',
    backgroundColor:Colors.BLACK,
    overflow:'auto',
    "@media screen and (min-width:1400px)":{
      margin:"0 auto",
      maxWidth:"100em",      
    },
    "@media screen and (max-width:1400px)":{
      margin:"0 auto",
      maxWidth:"100em",    
    },
    "@media screen and (min-width:750px)":{}
  },
  sectionContainerHeader1:{
    height:"100%",
    display:"grid",
    gridTemplate:"repeat(2,1fr) / repeat(7,1fr)",
    "@media screen and (min-width:1400px)":{
      gridTemplate:'repeat(4,1fr) .5fr .5fr repeat(2,1fr) / repeat(7,1fr)'
    },
    "@media screen and (max-width:1400px)":{},
    "@media screen and (min-width:750px)":{},
  },
  sectionContainerHeader2:{
    height:"100%",
    display:"grid",
    gridTemplate:"repeat(2,1fr) / repeat(7,1fr)",
    "@media screen and (min-width:1400px)":{
      gridTemplate:'1fr .5fr repeat(5,1fr) / repeat(7,1fr)'
    },
    "@media screen and (max-width:1400px)":{},
    "@media screen and (min-width:750px)":{},
  },
  sectionContainerSkills:{
    gridRow:'7 / span 2',
    gridColumn:"-1 / 1"
  },
  headerText:{
    ...Fonts.ExtraLarge,
    color:Colors.WHITE,
    gridRow:'1 / 1',
    gridColumn:'1 / 3'
  },
  contactContainer:{
    gridRow:"1 / 1",
    gridColumn:"6 / span 3",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  projectContainer:{
  },
})
