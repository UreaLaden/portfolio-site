import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "./helpers/constants";

export const styles = mergeStyleSets({
  appContainer: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    height:'100%',
    backgroundColor:Colors.BLACK,
  },
  sectionContainerHeader:{
    height:"100%",
    width:'90%',    
    marginBottom:"5%"
  },
  sectionContainerSkills:{
    height:"100%",
    width:'90%',    
  }
})
