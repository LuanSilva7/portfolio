import RoutesComponets from "../../routes/Routes";
import Footer from "../ComponentsGlobal/Footer";
import Header from "../ComponentsGlobal/Header";

export default function Layout(){

    return(
        <>
        <Header />
        <RoutesComponets />
        <Footer />
        </>
    )
}