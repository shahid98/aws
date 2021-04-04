import {Header} from "../components/Header";
import { Descriptors } from "../components/HomeMain";
import { formatOf } from "../components/extras/customFormatters";
import {PageSupportingContent} from "../components/PageSupportingContent";
import HomePageContent from "./contents/HomePageContents"
import Footer from "../components/Footer";
import Container from "../styles/Global";
import Divider from "../components/extras/Divider";

const HomePage = () => {
  return (
    <div>
      <Container>
          <Header />
          <Descriptors
            
            config={{
              strings: [
                `${formatOf("MD SHAHID")}`,
                `${formatOf("AYESHA KHATUN")}`,
                `${formatOf("SK SOHAIL")}`,
                `${formatOf("ZAWED AKHTAR")}`,
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Divider />
          <PageSupportingContent content={HomePageContent} />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
