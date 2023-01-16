import { mergeStyleSets } from "@fluentui/react";
import { Fonts, Colors } from "../../helpers/constants";

export const styles = mergeStyleSets({
  mediaContainer: {
    width: "100%",
    gridRow: "1 / 11",
    gridColumn: "-1 / 1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    gridRow: "2 / span 1",
    gridColumn: "1 / span 2",
    ...Fonts.Medium,
    color: Colors.WHITE,
    display: "flex",
    alignItems: "center",
  },
  socialContainer: {
    width: "10vw",
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    'svg':{        
        "@media screen and (min-width:1400px)":{
            transform:'scale(1)',
        },
        "@media screen and (max-width:1400px)":{
            transform:'scale(1.2)',
        }
    },
    path: {
      fill: Colors.WHITE,
    },
    ":hover": {
      path: {
        fill: Colors.TURQOISE,
      },
    },
  },
});
