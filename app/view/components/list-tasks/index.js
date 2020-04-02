import {itemTasks} from "../item-task";
import {getTasksStore, storeSubscr} from "../../../store";

export const ListTask = () => {
    const render = (prevState, nextState) => {
        const list = document.getElementById('listTasks');
        let tasks = nextState;
        let result = '';

        console.log('prevState', prevState);
        console.log('nextState', nextState);

        tasks.forEach(function (task) {
            result += itemTasks(task.title);
        });

        list.innerHTML = result;
    }

    storeSubscr.tasks.push(render);
    render(undefined, getTasksStore());
}