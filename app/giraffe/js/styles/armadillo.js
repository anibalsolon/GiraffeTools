import buttonStyles from "./buttons";
import styleSheet from "../constants/styles";
import componentStyles from "./components";
import headingStyles from "./headings";

const styles = {
  toolText: {
    paddingTop: "5rem"
  },
  armadillo: {
    ...headingStyles.h3
  },
  separator: {
    ...componentStyles.separator,
    width: "60%"
  },
  innerToolText: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "grey"
  },
  getStarted: {
    ...buttonStyles.giraffeButton,
    ...buttonStyles.giraffeButton.small
  },
  collage: {
    paddingRight: "0rem",
    paddingLeft: "0rem"
  },

  armadilloCollage: {
    width: "90%",
    float: "right"
  },

  diagLines1: {
    position: "absolute",
    width: "100%",
    left: "-62%",
    top: "-32%",
    zIndex: "-1"
  },

  diagLines2: {
    position: "absolute",
    width: "120%",
    left: "-75%",
    top: "70%",
    zIndex: -1,
    transform: "scaleX(-1)"
  }
};

export default styles;
