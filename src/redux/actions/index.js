// asynchronous action creator


// export const fetchData = () => {
//     return (dispatch) => {
//         return fetch('https://60d8a43aeec56d001747740d.mockapi.io/todos')
//             .then(response =>  response.json())
//             .then(json => dispatch(
//                 { type: "FetchData", data: json }))
//             .catch(err => dispatch(
//                 { type: "ERROR",msg: "Unable to fetch data" }))
//     }
// }

export const fetchData = () => {
    return (dispatch) => {
        return fetch('https://fake-serverrrrr.herokuapp.com/todos')
            .then(response =>  response.json())
            .then(json => dispatch(
                { type: "FetchData", data: json }))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const fetchDelete = (task) => {
    return (dispatch) => {
        fetch("https://fake-serverrrrr.herokuapp.com/todos/"+task.id, {
            method: 'delete',
        })
        .then(() => dispatch(
            { type: "FetchDelete", data: task }))
        .catch(err => dispatch(
            { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const fetchUpdateStatus = (task) => {
    const updateStatusTask = {...task,complete: !task.complete}

    return (dispatch) => {
        fetch("https://fake-serverrrrr.herokuapp.com/todos/"+task.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateStatusTask),
        })
        .then(response => response.json())
        .then(json => {
            dispatch(
                { type: "FetchUpdateStatus", data: json},)
        })
        .catch(err => dispatch(
            { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const fetchUpdateName = (task,inputUpdate) => {
    const updateStatusTask = {...task,task: inputUpdate}

    return (dispatch) => {
        fetch("https://fake-serverrrrr.herokuapp.com/todos/"+task.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateStatusTask),
        })
        .then(response => response.json())
        .then(json => {
            dispatch(
                { type: "FetchUpdateName", data: json},)
        })
        .catch(err => dispatch(
            { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const addTask = (inputName) => {
    return (dispatch) => {
        fetch("https://fake-serverrrrr.herokuapp.com/todos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Date.now(),
                task: inputName,
                complete:false
            })
        })
        .then(response => response.json())
        .then(json => dispatch(
            { type: "AddTask", data: json},))
        .catch(err => dispatch(
            { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

