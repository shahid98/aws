import { SupportingContentText } from "../../components/PageSupportingContent";
import {
  navLinkStylesEnter,
  navLinkStylesLeave,
} from "../../components/Header";

const HomePageContent = (
  <SupportingContentText>
   INDUSTRIAL TRAINING UNDER DR DEBASHISH GIRI SIR
    <br/>
 
  <br>

  
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
      about this project
    </a>{" "}
   
   
    
  </SupportingContentText>
);

export default HomePageContent;
