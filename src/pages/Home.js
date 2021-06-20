import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Nagivation from "../components/Nagivation";

const Home = () => { 
    return (
        <div className="home">
            <Nagivation />
            <Logo />
            <Countries />         
        </div>
    )
};
export default Home;