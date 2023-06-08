import Hero from "../components/IndexComs/index_hero/Hero";
import IdeaText from "../components/IndexComs/IdeaText";
import RightArrow from "../public/side-arrow.svg";
import MyCarouselBox from "../components/IndexComs/MyCarouselBox";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Hero />
      <section id="bottom-section">
        <div className="mt-28 lg:w-3/4 mx-auto hover:shadow-xl hover:shadow-slate-400 hover:py-8 duration-300 ease-in-out rounded-lg hover:bg-slate-50">
          <IdeaText />
        </div>
        <div className="flex lg:flex-row md:flex-col-reverse justify-center flex-col-reverse lg:mt-16 lg:w-[80%] lg:px-0 px-6 mx-auto items-center lg:hover:shadow-xl lg:hover:shadow-slate-400 lg:hover:px-8 lg:hover:py-16 duration-300 ease-in-out rounded-lg lg:hover:bg-slate-50">
          <div className="md:mr-14 md:mx-auto">
            <div className="w-full">
              <p className="lg:text-7xl text-4xl font-bold">Our Best Services</p>
              <div className="w-full">
                <p className="lg:text-xl text-sm lg:leading-7 leading-5 tracking-wide lg:mt-8">
                  At Innovation you will get your desired project with ease. A team of professionals dedicated to your success.
                </p>
                <p className="lg:text-xl text-sm lg:leading-7 leading-5 tracking-wide lg:mb-8">
                  Our best services includes <strong>UI/UX Design</strong> and WebApps for <strong>Blog</strong>, <strong>E-commerce</strong> and more. Contact us today to learn more about how we can bring your digital product ideas to life.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row md:flex md:flex-row lg:gap-x-4 md:gap-x-4 gap-y-4">
              <Link href='/services' className="no-underline">
                <button className="border-2 border-spacing-4 border-black px-8 py-2 flex items-center lg:mb-0 mb-4">
                  <span className="mr-2 font-bold text-base text-black">See More</span>
                  <RightArrow className="hover:translate-x-2 duration-300 ease-in-out" />
                </button>
              </Link>
              <Link href='/contact' className="no-underline">
                <button className="border-2 border-spacing-4 border-black px-8 py-2 flex items-center">
                  <span className="mr-2 font-bold text-xs text-black">Contact Us</span>
                  <RightArrow className="hover:translate-x-2 duration-300 ease-in-out" />
                </button>
              </Link>
            </div>
          </div>
          <MyCarouselBox />
        </div>
      </section>
    </div>
  );
};