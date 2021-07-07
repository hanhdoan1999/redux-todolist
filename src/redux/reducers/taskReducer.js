
const intialState = {
    data: [],
    error:""
}

const taskReducer = (state = intialState, action) => {

    switch (action.type) {
        case "FetchData":       
            return { ...state, data: action.data }
        case "FetchDelete":
            console.log("delete task");
            return { ...state, data: state.data.filter((el) => el.id !== action.data.id) }
        case "FetchUpdateStatus":      
            console.log("update task");
            return { ...state, data: state.data.map((el) => el.id === action.data.id ? {...el, complete: action.data.complete} : el)}
        case "FetchUpdateName":      
            console.log("update task");
            return { ...state, data: state.data.map((el) => el.id === action.data.id ? {...el, task: action.data.task} : el)}
        case "AddTask":
            return { ...state, data: [...state.data, action.data]}
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}
export default taskReducer