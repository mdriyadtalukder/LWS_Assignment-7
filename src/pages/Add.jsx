import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createJob } from '../redux/features/jobs/jobsSlice';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [job, setJob] = useState('');
    const [type, setType] = useState('');
    const dates = useRef('');
    const salary = useRef('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const adding = (e) => {
        e.preventDefault();
        dispatch(createJob({
            data: {
                title: job,
                type: type,
                salary: Number(salary.current.value),
                deadline: dates.current.value,
            }
        }))
        e.target.reset();
        navigate("/");
    }
    return (
        <div class="lg:pl-[14rem] mt-[5.8125rem]">
            <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 class="mb-10 text-center lws-section-title">Add New Job</h1>

                <div class="max-w-3xl mx-auto">
                    <form onSubmit={adding} class="space-y-6">
                        <div class="fieldContainer">
                            <label for="lws-JobTitle" class="text-sm font-medium text-slate-300">Job Title</label>
                            <select onChange={(e) => setJob(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required>
                                <option value="" hidden selected>Select Job</option>
                                <option>Software Engineer</option>
                                <option>Software Developer</option>
                                <option>Full Stack Developer</option>
                                <option>MERN Stack Developer</option>
                                <option>DevOps Engineer</option>
                                <option>QA Engineer</option>
                                <option>Product Manager</option>
                                <option>Social Media Manager</option>
                                <option>Senior Executive</option>
                                <option>Junior Executive</option>
                                <option>Android App Developer</option>
                                <option>IOS App Developer</option>
                                <option>Frontend Developer</option>
                                <option>Frontend Engineer</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobType">Job Type</label>
                            <select onChange={(e) => setType(e.target.value)} id="lws-JobType" name="lwsJobType" required>
                                <option value="" hidden selected>Select Job Type</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobSalary">Salary</label>
                            <div class="flex border rounded-md shadow-sm border-slate-600">
                                <span class="input-tag">BDT</span>
                                <input ref={salary} type="number" name="lwsJobSalary" id="lws-JobSalary" required class="!rounded-l-none !border-0"
                                    placeholder="20,00,000" />
                            </div>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-JobDeadline">Deadline</label>
                            <input ref={dates} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
                        </div>

                        <div class="text-right">
                            <button type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Add;