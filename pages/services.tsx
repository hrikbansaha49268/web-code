import NavbarLight from "../components/NavbarLight";
import ServiceHeader from "../components/ServiceComs/ServiceHeader";
import ServiceList from "../components/ServiceComs/ServiceList";


const services = () => {

    return (
        <>
            <NavbarLight />
            <div className="lg:w-1/2 mx-auto lg:px-0 px-4">
                <ServiceHeader />
                <div className="my-16">
                    <ServiceList />
                </div>
            </div>
        </>
    );
}

export default services;