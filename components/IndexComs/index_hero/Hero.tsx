import HeroBottomIndication from "./HeroBottomIndication";
import HeroText from "./HeroText";
import NavbarDark from "../../NavbarDark";

const Hero = () => {
    return (
        <div className="bg-black w-full h-[90vh] flex flex-col" style={{
            backgroundImage: "url('/home-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%"
        }}>
            <NavbarDark />
            <HeroText />
            <HeroBottomIndication />
        </div>
    );
}

export default Hero;