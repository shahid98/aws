import { SupportingContentText } from "../../components/PageSupportingContent";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const HomePageContent = (
  <SupportingContentText>
   THIS IS DONE  BY US MAKATIAN
    <br />
    <br />
    Learn more{" "}
    <a
      href="/about"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#748592",
        textDecoration: "underline",
        textDecorationColor: "#E6E6E6",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => {
        navLinkStylesEnter(e, "underline", "2px", "#525252", "#748492");
      }}
      onMouseLeave={(e) => {
        navLinkStylesLeave(e, "none", "#748492");
      }}
    >
      about me
    </a>{" "}
    and the things I'm{" "}
   
    !
  </SupportingContentText>
);

export default HomePageContent;
