import NavbarLight from "../components/NavbarLight";
import RightArrow from "../public/side-arrow.svg";

const contact = () => {
    return (
        <div>
            <NavbarLight />
            <div className="my-16 lg:w-1/2 lg:mx-auto text-center">
                <p className="my-0 font-bold lg:text-8xl text-4xl text-transparent bg-clip-text bg-gradient-to-r to-transparent via-black from-transparent">
                    Drop Us a Message
                </p>
                <p className="my-4 text-xl lg:mx-8 lg:px-0 md:mx-4 px-2">
                    Our team of experienced web developers is dedicated to helping our clients succeed online by delivering top-quality websites that are both functional and visually appealing. If you have any questions please don&apos;t hesitate to drop us a message. We look forward to working with you!
                </p>
            </div>
            <form method="post" className="lg:w-1/2 lg:px-0 px-4 mx-auto flex flex-col mb-10">
                <div className="flex flex-col my-8">
                    <label htmlFor="name" className="font-semibold text-2xl mb-2">Name</label>
                    <input type="text" name="name" className="py-6 pl-4 border-2 border-black hover:bg-gray-200 duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col my-8">
                    <label htmlFor="email" className="font-semibold text-2xl mb-2">Email</label>
                    <input type="email" name="email" className="py-6 pl-4 border-2 border-black hover:bg-gray-200 duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col my-8">
                    <label htmlFor="phone" className="font-semibold text-2xl mb-2">Phone</label>
                    <input type="text" name="phone" className="py-6 pl-4 border-2 border-black hover:bg-gray-200 duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col my-8">
                    <label htmlFor="msg" className="font-semibold text-2xl mb-2">Message</label>
                    <input type="text" name="msg" className="py-6 pl-4 border-2 border-black hover:bg-gray-200 duration-300 ease-in-out" />
                </div>
                <button
                    className="lg:text-3xl text-xl lg:border-2 border-black font-bold flex justify-center items-center gap-4 lg:py-6 my-8 hover:bg-gray-200 duration-300 ease-in-out">
                    Submit <RightArrow />
                </button>
            </form>
        </div>
    );
}

export default contact;