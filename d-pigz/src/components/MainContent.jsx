import "../styles/components/maincontent.sass";
import LinkContainer from "./LinkContainer";
import FormVenderContainer from "./FormVenderContainer";
import AppFacilRapidoContainer from "./AppFacilRapidoContainer";
import MarketPlaceContainer from "./MarketPlaceContainer";
import DezenoveContainer from "./DezenoveContainer";

const MainContent = () => {
  return (
  <main id="main-content">
    <FormVenderContainer />
    <MarketPlace />
    <AppFacilRapido />
    <Dezenove />
    <Link/>
  </main> 

);  
};

export default MainContent;