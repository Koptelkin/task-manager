const tasks = [];
const completedTasks = [];
let completedTaskCount = 0;


// Отображаем все to-do задачи перебором массива и выводим их в консоль
function showTask() {
    tasks.forEach((task) => {
        const {title, description, isCompleted, createdDate, completedDate} = task
        console.log(`
            Название - ${title}, 
            Описание - ${description}, 
            Статус - ${isCompleted ? 'Выполнено' : 'Не выполнено'}, 
            Дата создания - ${createdDate}, 
            Дата выполнения - ${completedDate}
        `);
    })
}


//Добавляем новую задачу в массив задач
function setTask(title, description) {
    if (!title || title.trim() === '') {
        console.log('Введите непустое название задачи')
        return;
    }

    tasks.push({
        title, 
        description, 
        isCompleted: false, 
        createdDate: new Date(), 
        completedDate: null
    })
}

// Делаем задачу выполненной по индексу
const completeTask = (taskIndex) => {
    const task = tasks[taskIndex];

    if (task) {
        task.isCompleted = true;
        task.completedDate = new Date();
        completedTasks.push(task);
        completedTaskCount++;
    } else {
        console.log('Задача не найдена по указанному индексу')
        return;
    }
}

//Удаляем задачу из общего списка задач. Подтверждаем удаление задачи для невыполеннных задач
const deleteTask = (taskIndex) => {
    const task = tasks[taskIndex];

    if (task) {
        if (!task.isCompleted) {
            confirm('Задача ещё не выполнена, удалить?') ? tasks.splice(taskIndex, 1) : null;
        } else {
            tasks.splice(taskIndex, 1);
            return;
        }
    } else {
        console.log('Задача не найдена по указанному индексу')
        return;
    }
}   

//Очищаем массив to-do задач
function clearTasks() {
    tasks.length = 0;
}