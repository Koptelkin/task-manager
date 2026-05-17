let task = 'Написать рецепт пельменей';
let completedTaskCount = 0;

function showTask() {
    if (!task) {
        console.log('Задача отсутствует')
    } else {
        console.log(task)
    }
}

function setTask(taskDescription) {
    if (taskDescription && !task) {
        task = taskDescription
    } else if (!taskDescription) {
        console.log('Введите непустое описание задачи')
    } else if (task) {
        console.log('Не могу добавить задачу, завершите или удалите предыдущую')
    }
}

let completeTask = () => {  
     if (!task) {
        console.log('Нет текущей задачи')
    } else {
        task = ''
        completedTaskCount++
    }
}

let deleteTask = () => {
    if (!task) {
        console.log('Нет текущей задачи')
    } else {
        task = ''
    }
}