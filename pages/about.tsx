import Image from "next/image";
import AboutHeader from "../components/AboutComs/AboutHeader";
import MemberNames from "../components/AboutComs/MemberNames";
import NavbarLight from "../components/NavbarLight";

const about = () => {
    return (
        <>
            <NavbarLight />
            <div className="py-32 px-2 mx-auto" style={{
                backgroundImage: "url('/team-bg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "50%"
            }}>
                <p className="text-white text-center lg:text-7xl text-5xl lg:font-light font:bold">
                    We Create Best Digital Products
                </p>
                <p className="text-white w-[90%] text-center mx-auto font-light lg:font-normal lg:text-xl text-sm lg:leading-9 tracking-widest lg:mt-8 mt-12 px-2 container">
                    At <strong>Innovation</strong>, we pride ourselves on creating the best <strong>Digital Products</strong> on the market. From custom websites to mobile apps, our team of talented developers is dedicated to delivering innovative solutions that exceed our clients&apos; expectations. Contact us today to learn more about how we can bring your digital product ideas to life.
                </p>
            </div>
            <AboutHeader />
            <MemberNames />
        </>
    );
}

export default about;