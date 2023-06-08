import Image from 'next/image';
import { Carousel } from 'react-bootstrap';


const MyCarouselBox = () => {
    return (
        <div className="lg:h-[450px] lg:w-[522px] md:w-[522px] lg:my-0 my-8 w-full">
            <Carousel fade>
                <Carousel.Item>
                    <div className="lg:w-[522px] lg:h-[347px]">
                        <Image src="/poster1.jpg" alt="Website with Backend" width={500} height={500} className='rounded-xl' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="lg:w-[522px] lg:h-[347px]">
                        <Image src="/poster2.jpg" alt="Custom theme" width={500} height={500} className='rounded-xl' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default MyCarouselBox;