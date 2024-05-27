import Image from "../../../node_modules/next/image";
import Yellow4 from "../../assets/yellow4.png";
import { CarouselTestemonials } from "../CarouselTestimonial";
import { testimonials } from '../../utils/TestimonialMock';


export function SectionTestemonial() {
    return (
        <section className="w-full bg-jogga-white bg-no-repeat bg-center bg-cover relative">
            <div className="w-full mx-auto flex items-center justify-center">
                <div className="max-w-[1919px] w-full lg:px-0 lg:mx-[140px] mx-4 sm:mx-6 md:mx-8 mt-2 mb-6 sm:mt-6 md:mt-8 lg:mt-[140px] lg:h-[994px]">
                    <div className="lg:mg text-center lg:text-center">
                        <h1 className="text-jogga-black-text text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                            <span className="relative inline-block">
                                What Our Clients Says
                            </span>
                            <Image
                                src={Yellow4}
                                alt="yellow element"
                                className="absolute right-0 bottom-[5%] z-[-1] mr-[100px] lg:mr-[550px]"
                                style={{ transform: 'translate(50%, 50%)' }}
                                layout="fixed"
                                width={257.97}
                                height={47.65}
                                quality={100}
                            />
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full sm:mt-6 md:mt-8">
                            <div className="w-full">
                                <CarouselTestemonials comments={testimonials} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}