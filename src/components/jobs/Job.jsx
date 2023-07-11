import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editingJob, removeJob } from '../../redux/features/jobs/jobsSlice';

const Job = ({ job }) => {
    const { title, type, salary, deadline, id } = job || {}
    const dispatch = useDispatch();
    const editings = () => {
        dispatch(editingJob(job))
    }
    const deleting = (e) => {
        e.preventDefault();
        dispatch(removeJob(id));
    }
    return (

        <div class="lws-single-job">
            <div class="flex-1 min-w-0">
                <h2 class="lws-title">{title}</h2>
                <div class="job-footers">
                    <div class="lws-type">
                        <i class={`fa-solid fa-stop ${type === 'Internship' ? '!text-[#FF5757]' : type === 'Full Time' ? '!text-[#FF8A00]' : type === 'Remote' ? '!text-[#56E5C4]' : ''}  text-lg mr-1.5`}></i>
                        {type}
                    </div>
                    <div class="lws-salary">
                        <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        {salary}
                    </div>
                    <div class="lws-deadline">
                        <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <Link to='/edit'>
                    <span class="hidden sm:block">
                        <button onClick={editings} type="button" class="lws-edit btn btn-primary">
                            <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </span>
                </Link>

                <span class="sm:ml-3">
                    <button onClick={deleting} type="button" class="lws-delete btn btn-danger ">
                        <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>

    );
};

export default Job;