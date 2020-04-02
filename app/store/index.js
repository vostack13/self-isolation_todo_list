export const store = {
    tasks: [
        {id: 1, title: 'Первая задача'},
        {id: 2, title: 'Вторая задача'},
        {id: 3, title: 'Третья задача'},
    ]
}

export const storeSubscr = {
    tasks: [],
}

export const getTasksStore = () => store.tasks;

export const setTasksStore = (tasks) => {
    storeSubscr.tasks.forEach(updateMethod => updateMethod(store.tasks, tasks));
    store.tasks = tasks;
};