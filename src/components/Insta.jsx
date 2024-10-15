import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/grid';
import 'swiper/css/navigation';

// import required modules
import { Grid, Navigation, Pagination } from 'swiper/modules';
const Insta = () => {
    return (
        <section className="layout-section">
            <div className="max-width bg-no-repeat lg:bg-cover py-16" >
                <h2 className="heading-h2 text-center">INSTAGRAM FEED</h2>
                <h3 className="heading-h3 text-center leading-[4rem] font-bold">
                    Check Us on
                    <span className="text-[#8e7861]"> Instagram</span>
                </h3>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                            fill: "col",
                        }}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Grid, Pagination, Navigation]}
                        className="insta"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                            <SwiperSlide key={item}>
                                <div className="relative w-full aspect-[3/3]">
                                    <img src="https://picsum.photos/id/1018/200/300" alt="" className='object-cover absolute top-0 left-0 w-full h-full' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default Insta