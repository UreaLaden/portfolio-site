import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../helpers/constants";

export const styles = mergeStyleSets({
  projectContainerInner: {
    display:'grid',
    gridTemplate:"4fr .5fr .5fr / 1fr",
    position:'relative'
  },
  projectImage: {
    width: "100%",
    marginBottom: "2%",
    gridRow:'1 / span 1',
    gridColumn:"1 / span 1"
  },
  projectSubHeader: {
    ...Fonts.Large,
    textAlign: "left",
    fontWeight: "700",
    color: Colors.WHITE,
    gridRow:"2 / span 1",
    gridColumn:"1 / span 1"
  },
  projectSubHeaderTextContainer: {
    display: "grid",
    gridTemplate: "1fr / repeat(6,1fr)",
    gridRow:"3 / span 1",
    gridColumn:"1 / span 1"
  },
  projectSubHeaderText: {
    ...Fonts.Medium,
    color: Colors.WHITE,
  },
  projectOverlay:{
    opacity:0,
    gridRow:"1 / -3",
    gridColumn:'1 / -1',
    "z-index":10,
    backgroundColor:'rgba(0,0,0,0.9)',
    display:"grid",
    gridTemplate:'repeat(6,1fr) / repeat(4,1fr)',
    alignItems:'center',
    justifyItems:'center',
    transition:"opacity .25s",
    ":hover":{
      opacity:1
    }
  },
  overlayItem1:{
    gridRow:"3 / span 1",
    gridColumn:"2 / span 2",
  },
  overlayItem2:{
    gridRow:"4 / span 1",
    gridColumn:"2 / span 2",
  },
});
