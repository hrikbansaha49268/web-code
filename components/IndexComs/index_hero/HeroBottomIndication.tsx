import Link from "next/link";
import DownArrow from "../../../public/DownArrow.svg";

const HeroBottomIndication = () => {
    return (

        <Link href="#bottom-section"
            className="text-white lg:place-self-end place-content-center mb-12 lg:mr-12 flex lg:flex-row flex-col items-center justify-center text-xl no-underline"
            scroll={false}>
            <p className="lg:mb-0 mb-2">See More</p>
            <span className="lg:ml-8 hover:translate-y-2 duration-300 ease-in-out"><DownArrow /></span>
        </Link>
    );
}

export default HeroBottomIndication;