import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, deleteJob, editJob, getJobs } from "./jobsAPI"

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
    typeFilter: "",
    salaryFilter: "",
    searche:"",
}
export const fetchJobs = createAsyncThunk("jobs/fetchJobs",
    async () => {
        const jobs = await getJobs();
        return jobs;
    })
export const createJob = createAsyncThunk("jobs/createJob",
    async ({ data }) => {
        const job = await addJob(data);
        return job;

    })
export const updateJob = createAsyncThunk("jobs/updateJob",
    async ({ id, data }) => {
        const job = await editJob(id, data);
        return job;
    })
export const removeJob = createAsyncThunk("jobs/removeJob",
    async (id) => {
        const job = await deleteJob(id);
        return job;
    })

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        editingJob: (state, action) => {
            state.editing = action.payload;
        },
        typeFiltering: (state, action) => {
            state.typeFilter = action.payload;
        },
        salaryFiltering: (state, action) => {
            state.salaryFilter = action.payload;
        },
        searchfilter:(state,action)=>{
            state.searche=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.jobs = [];
                state.error = action.error?.message;
            })
            .addCase(createJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(updateJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isLoading = false;
                const getJob = state.jobs.findIndex(j => j.id === action.payload.id)
                state.jobs[getJob] = action.payload;
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(removeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = state.jobs.filter(j => j.id !== action.meta.arg);
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })

    }
})
export default jobsSlice.reducer;
export const { editingJob, typeFiltering, salaryFiltering ,searchfilter} = jobsSlice.actions;