import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../helpers/constants";

export const styles = mergeStyleSets({
  projectContainer: {
    display: "grid",
    height: "100%",
    gridTemplate: "repeat(3,1fr) / repeat(2,40%)",
    "@media screen and (min-width:1400px)": {
      gridTemplate: "repeat(3,1fr) / repeat(2,1fr)",
      columnGap: "1.5em",
      rowGap: "20em",
    },
    "@media screen and (max-width:1400px)":{
      gridTemplate: "repeat(3,30%) / repeat(2,1fr)",
      columnGap: "1.5em",
      rowGap: "20em",
    },
    "@media screen and (max-width:750)": {},
  },
  project1: {
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  project2: {
    gridRow: "1 / span 1",
    gridColumn: "2 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  project3: {
    gridRow: "2 / span 1",
    gridColumn: "1 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  project4: {
    gridRow: "2 / span 1",
    gridColumn: "2 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  project5: {
    gridRow: "3 / span 1",
    gridColumn: "1 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  project6: {
    gridRow: "3 / span 1",
    gridColumn: "2 / span 1",
    display: "flex",
    flexDirection: "column",
  },
  projectImage: {
    width: "100%",
    marginBottom: "2%",
  },
  projectSubHeader: {
    ...Fonts.Medium,
    textAlign: "left",
    fontWeight: "700",
    color: Colors.WHITE,
  },
  projectSubHeaderTextContainer: {
    display: "grid",
    gridTemplate: "1fr / repeat(6,1fr)",
  },
  projectSubHeaderText: {
    ...Fonts.Medium,
    color: Colors.WHITE,
  },
});
