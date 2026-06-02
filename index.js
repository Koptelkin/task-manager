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
    if (!taskDescription) {
        console.log('Введите непустое описание задачи')
        return;
    }

    if (task) {
        console.log('Не могу добавить задачу, завершите или удалите предыдущую')
        return;
    }

    task = taskDescription;
}

const completeTask = () => {  
     if (!task) {
        console.log('Нет текущей задачи')
    } else {
        task = ''
        completedTaskCount++
    }
}

const deleteTask = () => {
    if (!task) {
        console.log('Нет текущей задачи')
    } else {
        task = ''
    }
}