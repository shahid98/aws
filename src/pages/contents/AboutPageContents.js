import { SupportingContentText } from "../../components/PageSupportingContent";
import { makeStyles } from "@material-ui/core/styles";

import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const useStyles = makeStyles(() => ({
  standout: {
    color: "#525252",
    textDecoration: "underline",
    textDecorationColor: "#E6E6E6",
    fontWeight: "bold",
  },
  link: {
    color: "#748592",
    textDecoration: "underline",
    textDecorationColor: "#E6E6E6",
    fontWeight: "bold",
  },
}));

const AboutPageContent = () => {
  const classes = useStyles();

  return (
    <SupportingContentText>
        
    THIS IS A TESTING M
    </SupportingContentText>
  );
};

export default AboutPageContent;
