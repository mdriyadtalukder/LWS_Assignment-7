import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { typeFiltering } from '../../redux/features/jobs/jobsSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const filters = (text) => {

        dispatch(typeFiltering(text));
    }
    return (
        <div class="sidebar">
            <nav>
                <ul class="space-y-4">
                    <li>
                        <Link onClick={() => filters("")} to='/' class="main-menu menu-active" id="lws-alljobs-menu">
                            <i class="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </Link>
                        <ul class="space-y-6 lg:space-y-2 ">
                            <li onClick={() => filters("Internship")}>
                                <Link class="sub-menu" to='/' id="lws-internship-menu">
                                    <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </Link>
                            </li>
                            <li onClick={() => filters("Full Time")}>
                                <Link to='/' class="sub-menu" id="lws-fulltime-menu">
                                    <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </Link>
                            </li>
                            <li onClick={() => filters("Remote")} >
                                <Link to='/' class="sub-menu" id="lws-remote-menu">
                                    <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>

                        <Link to='/add' class="main-menu" id="lws-addJob-menu">
                            <i class="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;