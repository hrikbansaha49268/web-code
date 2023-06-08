const AboutHeader = () => {
    return (
        <div className="lg:flex lg:flex-col lg:items-start justify-center mx-auto lg:w-3/4 lg:mx-auto my-16 hover:shadow-xl hover:shadow-slate-400 hover:p-8 duration-300 ease-in-out rounded-lg hover:bg-slate-50 hover:mx-4">
            <div className="font-bold lg:text-8xl text-4xl pl-4">
                <p className="my-0">Your Ideas</p>
                <p className="my-0">Our Responsibility</p>
            </div>
            <p className="lg:mt-12 mt-4 text-xl mb-4 pl-4">
                High-quality work that speaks for itself. Expertly tailored solutions to meet your specific needs. A team of professionals dedicated to your success. We try to give you top-notch results every time. We have an unbeatable value for your money.
            </p>
        </div>
    );
}

export default AboutHeader;