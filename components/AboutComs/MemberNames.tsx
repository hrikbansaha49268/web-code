const MemberNames = () => {
    return (
        <div className="lg:w-3/4 mx-auto my-20">
            <p className="text-6xl font-bold lg:text-8xl lg:ml-8 ml-4">They are Innovators:</p>
            <div className="flex lg:flex-row lg:items-center flex-col gap-4 lg:px-0 px-4 lg:mt-20">
                <div className="lg:w-4/6 border-4 p-4 text-white bg-gradient-to-b to-[#FB2576] from-[#810CA8] rounded-xl h-fit shadow-xl hover:shadow-slate-400 border-white hover:scale-105 duration-300 ease-in-out">
                    <h1 className="lg:text-6xl text-3xl font-semibold font-dosis tracking-wider">HRIKBAN SAHA</h1>
                    <h3 className="lg:text-3xl text-xl font-medium lg:mt-10 mt-4">Founder, President</h3>
                </div>
                <div className="lg:w-4/6 border-4 p-4 text-white bg-gradient-to-b to-[#9C254D] from-[#0014FF] rounded-xl h-fit shadow-xl hover:shadow-slate-400 border-white hover:scale-105 duration-300 ease-in-out">
                    <h1 className="lg:text-6xl text-3xl font-semibold font-dosis tracking-wider">SNEHA BANERJEE</h1>
                    <h3 className="lg:text-3xl text-xl font-medium lg:mt-10 mt-4">Managing Director</h3>
                </div>
                <div className="lg:w-4/6 border-4 p-4 text-white bg-gradient-to-b to-[#10A19D] from-[#540375] rounded-xl h-fit shadow-xl hover:shadow-slate-400 border-white hover:scale-105 duration-300 ease-in-out">
                    <h1 className="lg:text-6xl text-2xl font-semibold font-dosis tracking-wider">PRIYAM CHATTERJEE</h1>
                    <h3 className="lg:text-3xl text-xl font-medium lg:mt-10 mt-4">Co-Founder, CEO</h3>
                </div>
            </div>
        </div>
    );
}

export default MemberNames;