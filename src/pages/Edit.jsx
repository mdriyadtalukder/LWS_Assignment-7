import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateJob } from '../redux/features/jobs/jobsSlice';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [job, setJob] = useState('');
    const [types, setType] = useState('');
    const dates = useRef('');
    const salaries = useRef('');
    const navigate = useNavigate();
    const { editing } = useSelector(state => state.jobs);
    const dispatch = useDispatch();
    const { title, type, salary, deadline, id } = editing || {};
    useEffect(() => {
        if (editing?.id) {
            setJob(title);
            setType(type)
        }
    }, [editing]);
    console.log(job)
    const edits = (e) => {
        e.preventDefault();
        dispatch(updateJob({
            id,
            data: {
                title: job,
                type: types,
                salary: Number(salaries.current.value),
                deadline: dates.current.value,
            }
        }))
        e.target.reset();
        dates.current.value = "";
        salaries.current.value = "";
        setJob("");
        setType("");
        navigate('/');
    }
    return (
        <div class="lg:pl-[14rem] mt-[5.8125rem]">
            <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

                <div class="max-w-3xl mx-auto">
                    <form class="space-y-6" onSubmit={edits}>
                        <div class="fieldContainer">
                            <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
                            <select onChange={(e) => setJob(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required>
                                <option value="" hidden selected={title === ""} >Select Job</option>
                                <option selected={title === "Software Engineer"}>Software Engineer</option>
                                <option selected={title === "Software Developer"}>Software Developer</option>
                                <option selected={title === "Full Stack Developer"}>Full Stack Developer</option>
                                <option selected={title === "MERN Stack Developer"}>MERN Stack Developer</option>
                                <option selected={title === "DevOps Engineer"}>DevOps Engineer</option>
                                <option selected={title === "QA Engineer"}>QA Engineer</option>
                                <option selected={title === "Product Manager"}>Product Manager</option>
                                <option selected={title === "Social Media Manager"}>Social Media Manager</option>
                                <option selected={title === "Senior Executive"}>Senior Executive</option>
                                <option selected={title === "unior Executive"}>Junior Executive</option>
                                <option selected={title === "Android App Developer"}>Android App Developer</option>
                                <option selected={title === "OS App Developer"}>IOS App Developer</option>
                                <option selected={title === "Frontend Developer"}>Frontend Developer</option>
                                <option selected={title === "Frontend Engineer"}>Frontend Engineer</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobType">Job Type</label>
                            <select onChange={(e) => setType(e.target.value)} id="lws-JobType" name="lwsJobType" required>
                                <option value="" hidden selected={type === ""}>Select Job Type</option>
                                <option selected={type === "Full Time"}>Full Time</option>
                                <option selected={type === "Internship"}>Internship</option>
                                <option selected={type === "Remote"}>Remote</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobSalary">Salary</label>
                            <div class="flex border rounded-md shadow-sm border-slate-600">
                                <span class="input-tag">BDT</span>
                                <input ref={salaries} defaultValue={editing?.salary} type="number" name="lwsJobSalary" id="lws-JobSalary" required class="!rounded-l-none !border-0"
                                    placeholder="20,00,000" />
                            </div>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobDeadline">Deadline</label>
                            <input ref={dates} defaultValue={editing?.deadline} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
                        </div>

                        <div class="text-right">
                            <button type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Edit;