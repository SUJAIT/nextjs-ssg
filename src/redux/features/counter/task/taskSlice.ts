import { ITask } from "@/Types/taskTypes";
import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
    task: ITask[];
}

const initialState:InitialState = {
    task: [
        {
            id: "hehehe",
            title: "Initial Frontend",
            description: "Create Home Page",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high"
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;