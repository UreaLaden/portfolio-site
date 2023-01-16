import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./helpers/constants";

export const styles = mergeStyleSets({
  mainContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: Colors.BLACK,
    position: "fixed",
    margin: "0",
    overflow: "auto",
  },
  appContainer: {
    height: "120%",
    backgroundColor: Colors.BLACK,
    overflow: "auto",
    paddingBottom: "5%",
    "::-webkit-scrollbar": {
      width: 0,
    },
    "-ms-overflow-style": "none",
    "@media screen and (min-width:1400px)": {
      margin: "0 auto",
      maxWidth: "65vw",
    },
    "@media screen and (max-width:1400px)": {
      margin: "0 auto",
      maxWidth: "75vw",
    },
    "@media screen and (min-width:750px)": {},
  },
  sectionContainerHeader1: {
    height: "100%",
    display: "grid",
    gridTemplate: "repeat(2,1fr) / repeat(7,1fr)",
    "@media screen and (min-width:1400px)": {
      gridTemplate: "repeat(4,1fr) .5fr .5fr repeat(2,1fr) / repeat(7,1fr)",
    },
    "@media screen and (max-width:1400px)": {},
    "@media screen and (min-width:750px)": {},
  },
  sectionContainerHeader2: {
    height: "auto",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (min-width:1400px)": {},
    "@media screen and (max-width:1400px)": {},
    "@media screen and (min-width:750px)": {},
  },
  sectionContainerSkills: {
    gridRow: "7 / span 2",
    gridColumn: "-1 / 1",
  },
  headerText: {
    ...Fonts.ExtraLarge,
    color: Colors.WHITE,
    gridRow: "1 / 1",
    gridColumn: "1 / 3",
  },
  contactContainerMain: {
    gridRow: "1 / 1",
    gridColumn: "6 / span 3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  projectContainerMain: {
    display: "grid",
    width: "100%",
    gridTemplate:
      "repeat(3,1fr) .3fr repeat(3,1fr) .3fr repeat(3,1fr) / repeat(3,1fr) .1fr repeat(3,1fr)",
  },
  project1: {
    minHeight: "30vh",
    gridRow: "1 / 4",
    gridColumn: "1 / span 3",
  },
  project2: {
    gridRow: "1 / span 3",
    gridColumn: "5 / span 3",
  },
  project3: {
    gridRow: "5 / span 3",
    gridColumn: "1 / span 3",
  },
  project4: {
    gridRow: "5 / span 3",
    gridColumn: "5 / span 3",
  },
  project5: {
    gridRow: "9 / span 3",
    gridColumn: "1 / span 3",
  },
  project6: {
    gridRow: "9 / span 3",
    gridColumn: "5 / span 3",
  },
  loopContainer1: {
    height: "40%",
    width: "35%",
    position: "absolute",
    top: "10%",
    left: "-10%",
  },
  loopContainer2: {
    position: "absolute",
    height: "40%",
    width: "35%",
    top: "90%",
    right: "-8%",
  },
  circle: {
    border: "3px solid white",
    borderRadius: "50%",
    gridRow: "4 / span 1",
    gridColumn: "6 / 7",
    transform: "translate(-60%,5%)",
    maxWidth: "8vw",
  },
  contactSectionContainer: {
    height: "60vh",
    width:"100vw",
    marginLeft: "calc(-50vw + 50%)",
    backgroundColor: Colors.DARK_GRAY,
  },
  contactFormContainer:{
    maxWidth: "65vw",
    margin: "0 auto",
    height:"100%",
    display:'grid',
    gridTemplate:"repeat(5,1fr) .5fr .5fr / repeat(7,1fr)",
    position:'relative'
  },
  socialItems:{
    gridRow:"6 / span 2",
    gridColumn:"1 / -1",
    display:'flex',
    borderTop:"1px solid white"
  },
  contactHeader:{
    gridRow:"1 / span 3",
    gridColumn:"1 / span 2",
    ...Fonts.ExtraLarge,
    color:Colors.WHITE,
    alignSelf:'center'
  },
  cta:{
    gridRow:"3 / 4",
    gridColumn:"1 / 4",
    ...Fonts.Medium,
    color:Colors.WHITE,
    paddingTop:"15%"
  },
  contactLoops:{
    gridRow:"5 / span 2",
    gridColumn:"1 / 3",
    height:"30vh",
    width:"25vw",
    position:'absolute',
    top:"-5%",
    left:"-60%"
  },
  contactForm:{
    gridRow:"1 / 5",
    gridColumn:"5 / span 3",
    display:'grid',
    gridTemplate:"repeat(2,1fr) .5fr 2fr 1fr / 1fr"
  },
  messageButtonContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'end'
  },
  input:{
    backgroundColor:Colors.DARK_GRAY,
    border:'none',
    borderBottom:"1px solid white"
  },
  message:{
    backgroundColor:Colors.DARK_GRAY,
    border:'none',
    borderBottom:"1px solid white",
    resize:'none'
  }
});
