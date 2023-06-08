const ServiceList = () => {

    const srvL = [
        {
            theTag: "UI/UX Design",
            theDesc: "Designing interfaces that enhances user satisfaction and experience.",
            theFromC: "from-[#0081C9]",
            theToC: "to-[#FFC93C]"
        },
        {
            theTag: "Website Design with Blog",
            theDesc: "Creating visually appealing and functional blog-inclusive websites.",
            theFromC: "from-[#1C315E]",
            theToC: "to-[#E6E2C3]"
        },
        {
            theTag: "E-Commerce Website",
            theDesc: "Designing and developing websites for online sales and transactions.",
            theFromC: "from-[#056676]",
            theToC: "to-[#142850]"
        },
        {
            theTag: "Custom Theme",
            theDesc: "Customizable website design tailored to client's needs.",
            theFromC: "from-[#406882]",
            theToC: "to-[#7DE5ED]"
        },
        {
            theTag: "LOGO Design",
            theDesc: "Creating visually appealing and memorable symbol.",
            theFromC: "from-[#0081C9]",
            theToC: "to-[#B1D0E0]"
        },
        {
            theTag: "Website Maintenance",
            theDesc: "Updating, troubleshooting and ensuring website's full functionality at high-traffic.",
            theFromC: "from-[#444941]",
            theToC: "to-[#D5EEBB]"
        },
        {
            theTag: "Website Design with Backend",
            theDesc: "Creating visually appealing and functional website with server-side functionality.",
            theFromC: "from-[#16C79A]",
            theToC: "to-[#1D2D50]"
        },
    ]

    return (
        <>
            {srvL.map((e, i) =>
                <div className="flex flex-row my-4 justify-center" key={i}>
                    <div className={`lg:w-[50vw] w-[90vw] lg:h-40 bg-black h-24 lg:mx-4 bg-gradient-to-r ${e.theToC} ${e.theFromC} lg:hover:scale-110 md:hover:scale-105 hover:scale-110 hover:shadow-xl hover:shadow-slate-400 duration-300 ease-in-out hover:rounded-lg`}>
                        <div className="text-white font-inter w-fit h-full flex flex-col justify-center lg:ml-8 ml-4">
                            <p className="font-medium lg:text-4xl text-base">{e.theTag}</p>
                            <p className="font-light lg:text-base text-xs -mt-2 lg:pr-0 pr-4">{e.theDesc}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ServiceList;