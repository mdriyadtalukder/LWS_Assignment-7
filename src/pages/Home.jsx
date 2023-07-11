import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Jobs from '../components/jobs/Jobs';

const Home = () => {
    return (
        <div>
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <Sidebar></Sidebar>
                <div class="lg:pl-[14rem]  mt-[5.8125rem]">
                    <Jobs></Jobs>
                </div>
            </div>
        </div>
    );
};

export default Home;