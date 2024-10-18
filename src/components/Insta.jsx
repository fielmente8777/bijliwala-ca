import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/grid';
import 'swiper/css/navigation';

// import required modules
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Insta = () => {

    const [posts, setPosts] = useState([]);
    const accessToken = '';

    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`)
            .then((response) => response.json())
            .then((data) => setPosts(data.data))
            .catch((error) => console.error(error));
    }, [accessToken]);


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
                        {posts.map((post) => (
                            <SwiperSlide key={post.id} >
                                <div to={post.permalink} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[3/3]">
                                    {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                                        <img src={post.media_url} alt="Instagram post" className='object-cover absolute top-0 left-0 w-full h-full' />
                                    ) : post.media_type === 'VIDEO' ? (
                                        <video src={post.media_url} controls className='object-cover absolute top-0 left-0 w-full h-full' />
                                    ) : null}
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



