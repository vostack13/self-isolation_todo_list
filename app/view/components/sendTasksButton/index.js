import {setTasksStore} from "../../../store";

export const GetTasksButton = () => {
    const button = document.getElementById('getTasksButton');

    const fetchingTasks = () => {
        console.log('click')
        const data = [
            {id: 1, title: 'Первая задача'},
            {id: 2, title: 'Вторая задача'},
            {id: 3, title: 'Третья задача'},
            {id: 4, title: 'Четвертая задача'},
        ];

        setTasksStore(data);
    }

    button.addEventListener('click', fetchingTasks)
}