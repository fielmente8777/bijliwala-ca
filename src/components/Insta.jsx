import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/grid';
import 'swiper/css/navigation';

// import required modules
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Profile from "../assets/Images/befikre.jpg"
const Insta = () => {

    const [posts, setPosts] = useState([]);
    const [accountInfo, setAccountInfo] = useState({});
    const accessToken = 'IGQWRNU2JnYzVYbHpzejJ2Ym9LeUNjTU1RdlVURjZAycTBmclA2blpPTXRSNmxtUWRmOXhvQzk2SDlpTWhkOGxuNDZA6TGYtUjFqVTJFOTg1M3U1a3hGOXU5SEpSY1YyNWJpQkxtNnVOZA2JzUjZADZAWhZAdXNzU3oxLXcZD';

    // cosnt test= "https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=IGQWRNU2JnYzVYbHpzejJ2Ym9LeUNjTU1RdlVURjZAycTBmclA2blpPTXRSNmxtUWRmOXhvQzk2SDlpTWhkOGxuNDZA6TGYtUjFqVTJFOTg1M3U1a3hGOXU5SEpSY1YyNWJpQkxtNnVOZA2JzUjZADZAWhZAdXNzU3oxLXcZD"
    // useEffect(() => {
    //     fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`)
    //         .then((response) => response.json())
    //         .then((data) => setPosts(data.data))
    //         .catch((error) => console.error(error));
    // }, [accessToken]);

    useEffect(() => {
        // Fetch media details
        fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`)
            .then((response) => response.json())
            .then((data) => setPosts(data.data))
            .catch((error) => console.error('Error fetching media:', error));

        fetch(`https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`)
            .then((response) => response.json())
            .then((data) => { setAccountInfo(data) })
            .catch((error) => console.error('Error fetching account info:', error));
    }, [accessToken]);

    console.log(accountInfo)
    return (
        <section className="layout-section">
            <div className="max-width bg-no-repeat lg:bg-cover py-16" >
                <h2 className="heading-h2 text-center">INSTAGRAM FEED</h2>
                <h3 className="heading-h3 text-center leading-[4rem] font-bold">
                    Check Us on
                    <span className="text-[#8e7861]"> Instagram</span>
                </h3>
                <div className='flex'>

                    <div className='border flex items-center gap-4'>
                        <div className='h-[80px] w-[80px] rounded-full overflow-hidden border-2'>
                            <img src={Profile} alt='profile' className='h-full w-full' />
                        </div>
                        <div>
                            <p className='text-[28px] text-white font-medium'>Lagan Batra</p>
                            <p className='text-zinc-500 text-[14px]'>@{accountInfo.username}</p>
                        </div>
                        {/* <p>Account Type: {accountInfo.account_type}</p> */}
                        {/* <p>Media Count: {accountInfo.media_count}</p> */}
                    </div>
                    <div>
                        <div>
                            <p className='text-[28px] text-white'>{accountInfo.media_count ? accountInfo.media_count : "0"}</p>
                            <p className='capitalize'>posts</p>
                        </div>
                        <div>
                            <p>2.2k</p>
                            <p className='capitalize'>Followers</p>
                        </div>
                        <div>
                            <p>146</p>
                            <p className='capitalize'>Following</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-blue-600 flex justify-center items-center gap-4 py-1 px-8 text-[20px] rounded-md'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.15937 3.30469C7.63594 3.30469 8.85469 4.52344 8.85469 6C8.85469 7.5 7.63594 8.69531 6.15937 8.69531C4.65937 8.69531 3.46406 7.5 3.46406 6C3.46406 4.52344 4.65937 3.30469 6.15937 3.30469ZM6.15937 7.75781C7.12031 7.75781 7.89375 6.98438 7.89375 6C7.89375 5.03906 7.12031 4.26562 6.15937 4.26562C5.175 4.26562 4.40156 5.03906 4.40156 6C4.40156 6.98438 5.19844 7.75781 6.15937 7.75781ZM9.58125 3.21094C9.58125 3.5625 9.3 3.84375 8.94844 3.84375C8.59687 3.84375 8.31562 3.5625 8.31562 3.21094C8.31562 2.85938 8.59687 2.57812 8.94844 2.57812C9.3 2.57812 9.58125 2.85938 9.58125 3.21094ZM11.3625 3.84375C11.4094 4.71094 11.4094 7.3125 11.3625 8.17969C11.3156 9.02344 11.1281 9.75 10.5187 10.3828C9.90937 10.9922 9.15937 11.1797 8.31562 11.2266C7.44844 11.2734 4.84687 11.2734 3.97969 11.2266C3.13594 11.1797 2.40937 10.9922 1.77656 10.3828C1.16719 9.75 0.979687 9.02344 0.932812 8.17969C0.885937 7.3125 0.885937 4.71094 0.932812 3.84375C0.979687 3 1.16719 2.25 1.77656 1.64062C2.40937 1.03125 3.13594 0.84375 3.97969 0.796875C4.84687 0.75 7.44844 0.75 8.31562 0.796875C9.15937 0.84375 9.90937 1.03125 10.5187 1.64062C11.1281 2.25 11.3156 3 11.3625 3.84375ZM10.2375 9.09375C10.5187 8.41406 10.4484 6.77344 10.4484 6C10.4484 5.25 10.5187 3.60938 10.2375 2.90625C10.05 2.46094 9.69844 2.08594 9.25312 1.92188C8.55 1.64062 6.90937 1.71094 6.15937 1.71094C5.38594 1.71094 3.74531 1.64062 3.06562 1.92188C2.59687 2.10938 2.24531 2.46094 2.05781 2.90625C1.77656 3.60938 1.84687 5.25 1.84687 6C1.84687 6.77344 1.77656 8.41406 2.05781 9.09375C2.24531 9.5625 2.59687 9.91406 3.06562 10.1016C3.74531 10.3828 5.38594 10.3125 6.15937 10.3125C6.90937 10.3125 8.55 10.3828 9.25312 10.1016C9.69844 9.91406 10.0734 9.5625 10.2375 9.09375Z"
                                    fill="white"
                                />
                            </svg>
                            Follow
                        </button>
                    </div>
                </div>


                <div className="mt-8 border">
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
                                <div to={post.permalink} target="_blank" rel="noopener noreferrer" className="relative w-full h-[500px] aspect-[3/3]">
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



