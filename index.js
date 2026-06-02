const tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function showTask() {
    tasks.forEach((task) => {
        console.log(`Название - ${task.title}, Описание - ${task.description}, Статус - ${task.isCompleted ? 'Выполнено' : 'Не выполнено'}, Дата создания - ${task.createdDate}, Дата выполнения - ${task.completedDate}`);
    })
}

function setTask(title, description) {
    if (!title) {
        console.log('Введите непустое описание задачи')
        return;
    }

    tasks.push({
        title: title, 
        description: description, 
        isCompleted: false, 
        createdDate: new Date(), 
        completedDate: null
    })
}

const completeTask = (task) => {  
    task.isCompleted = true;
    task.completedDate = new Date();
    completedTasks.push(task);
    completedTaskCount++;
}

const deleteTask = (task) => {
    if (!task.isCompleted) {
        let shouldDelete = confirm('Задача ещё не выполнена, удалить?');
        const index = tasks.indexOf(task);
        if (shouldDelete) {
            index > -1 ? tasks.splice(index, 1) : 'Задача не найдена в списке актуальных задач';

        }
    } else {
        const completedIndex = completedTasks.indexOf(task);
        if (completedIndex > -1) {
            completedTasks.splice(completedIndex, 1);
            completedTaskCount--;
        } else {
            return 'Задача не найдена в списке выполненных задач';
        }
    }
}   

function clearTasks() {
    tasks.length = 0;
}