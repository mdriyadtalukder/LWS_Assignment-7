import React, { useEffect, useRef } from 'react';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, salaryFiltering, searchfilter } from '../../redux/features/jobs/jobsSlice';

const Jobs = () => {
    const dispatch = useDispatch();
    const values = useRef('')
    const { jobs, isLoading, isError, error, typeFilter, salaryFilter, searche } = useSelector(state => state.jobs);
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);
    const filterings = (text) => {
        dispatch(salaryFiltering(text));
    }
    const searching = (e) => {
        e.preventDefault();
        dispatch(searchfilter(values.current.value))
    }
    console.log(salaryFilter)
    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isError && !isLoading && jobs.length === 0) {
        content = <p>No Jobs Find.</p>
    }
    if (!isError && !isLoading && jobs.length > 0) {
        content = jobs
            .filter(job => {
                if (typeFilter === "Internship") {
                    return job.type === "Internship";
                }
                else if (typeFilter === "Full Time") {
                    return job.type === "Full Time";
                }
                else if (typeFilter === "Remote") {
                    return job.type === "Remote";
                }
                else {
                    return true;
                }
            })
            .filter(job => {
                if (searche) {
                    console.log(job.title)
                    console.log(searche)
                    return job.title.toLowerCase().includes(searche.toLowerCase());
                }
                else {
                    return true;
                }
            })
            .sort((a, b) => {
                if (salaryFilter === "Salary (High to Low)") {
                    return b.salary - a.salary;
                }
                else if (salaryFilter === "Salary (Low to High)") {
                    return a.salary - b.salary;
                }
                else {
                    return true;
                }
            })
            .map(job => <Job job={job} key={job.id}></Job>)
    }
    return (
        <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                <h1 class="lws-section-title">All Available Jobs</h1>
                <div class="flex gap-4">
                    <form onSubmit={searching} class="search-field group flex-1">
                        <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                        <input ref={values} type="text" placeholder="Search Job" class="search-input" id="lws-searchJob" />
                    </form>
                    <select onChange={(e) => filterings(e.target.value)} id="lws-sort" name="sort" autocomplete="sort" class="flex-1">
                        <option>Default</option>
                        <option>Salary (Low to High)</option>
                        <option>Salary (High to Low)</option>
                    </select>
                </div>
            </div>

            <div class="jobs-list">
                {content}
            </div>
        </main>
    );
};

export default Jobs;