const studentsGrup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];

const studentsGrup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyrov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    }
];

/* Напишем не очень удобную, но показательную функцию, которая умеет принмать
неограниченное число аргументов, и находить максимум среди них. Функция должна
вызываться подобным образом: const maximum = findMax(4, 7, 10); */

function findMax() {
    const values = arguments; /* arguments - переменная доступная внутри каждой
    функции, которая содержит в себе все аргументы, переданные в функцию. Является
    псевдомассивом.*/
    let maxValue = -Infinity;
    /* Так как arguments является псевдоклассом, мы не можем применять к нему новые
    методы массивов такие как forEach или reduce, поэтому будем итерировать по
    старинке. */
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) 
        maxValue = values[index];
    }
    return maxValue;
};
/* Мы должны передавать в нашу функцию только числа, а в наших массивах содержатся
объекты, поэтому сначала создадим массивы только со значеними времени отработанными
сстудентами.*/
const group1PracticeTime = studentsGrup1PracticeTime.map((student) => student.practiceTime);
console.log(group1PracticeTime);
const group2PracticeTime = studentsGrup2PracticeTime.map((student) => student.practiceTime);
console.log(group2PracticeTime);
/* Теперь можем вызвать нашу функцию поиска максиального значения. Она принимает
множестов числовых аргументов, а у нас есть только массив, вот тут нам и поможет
оператор spread. */

const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160
/* ...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию
как отдельные переменные.
Это аналогично неудобной записи:
findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], 
group1PracticeTime[3], group1PracticeTime[4]). */

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

/* Давайте найдем максимально отработанное время среди двух групп. Мы можем
сделать это передав данные обоих массивов в функцию таким образом:
findMax(...group1PracticeTime, ...group12PracticeTime);
А можем обьеденить два массива в один - это очень частая операция и оператор
расширения (spread) очень в этом помогает. */

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
console.log(bothGroupsTime);
/* Для объединения двух массивов нам нужно вытащить их элементы в один общий массив,
поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов
первого и второго массива. Также мы могли бы добавить в него и другие элементы. */

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
