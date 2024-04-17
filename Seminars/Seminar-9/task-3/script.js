/* Задание 3
У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая
задача должна быть выполнена через определенный промежуток времени, заданный в миллисикундах.
Вам необходимо написать функцию, которая поринимает списко задач и интервал времени,
а затем выполняет каждую задачу через определенный промежуток времени. */

const allTasts = (taskList, interval) => {
    let delay = 0;
    taskList.forEach(task => {
        setTimeout(() => {
            console.log(task.name);
        }, delay)
        delay += task.time;
    });
}


const tasks = [
    {name: 'task 1', time: 1000},
    {name: 'task 2', time: 2000},
    {name: 'task 3', time: 3000},
    {name: 'task 4', time: 4000},
    {name: 'task 5', time: 5000}
];

allTasts(tasks, 1000);
