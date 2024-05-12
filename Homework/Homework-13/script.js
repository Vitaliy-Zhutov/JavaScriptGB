const scheduleData = `
[
    {
        "id": "1",
        "typeSport": "Баскетбол",
        "timeEvent": "10.00 - 12.00",
        "locationEvent": "Зал №1",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "12"
    },
    {
        "id": "2",
        "typeSport": "Гандбол",
        "timeEvent": "12.00 - 14.00",
        "locationEvent": "Зал №2",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "20"
    },
    {
        "id": "3",
        "typeSport": "Дзюдо",
        "timeEvent": "14.00 - 16.00",
        "locationEvent": "Зал №3",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "19"
    },
    {
        "id": "4",
        "typeSport": "Фитнес",
        "timeEvent": "16.00 - 18.00",
        "locationEvent": "Тренажерный зал",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "14"
    },
    {
        "id": "5",
        "typeSport": "Плавание",
        "timeEvent": "10.00 - 12.00",
        "locationEvent": "Бассейн",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "16"
    },
    {
        "id": "6",
        "typeSport": "Легкая атлетика",
        "timeEvent": "12.00 - 14.00",
        "locationEvent": "Манеж",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "17"
    }
]`

const scheduleInfo = JSON.parse(scheduleData);

function renderWorkoutSchedule(scheduleInfo) {
    const scheduleBox = document.querySelector('.schedule-box');

    scheduleInfo.forEach(item => {
        scheduleBox.insertAdjacentHTML('beforeend', `
        <div class="schedule_item-box" id="${item.typeSport}">
			<div class="schedule_item">
            <p class="schedule_item-title">${item.typeSport}</p>
            <p class="schedule_item-time">Время занятий: <span>${item.timeEvent}</span></p>
            <p class="schedule_item-location">Место проведения: <span>${item.locationEvent}</span></p>
			<p class="schedule_item-maxnumber">Максимальное количество участников: <span>${item.maxParticipants}</span></p>
            <p data-id=${item.id} class="schedule_item-currentnumber">Текущее количество участников: <span>${item.currentRegisteredParticipants}</span></p>
            <div class="button-box">
            <button class="button-submit" id="${item.id}">Записаться</button>
            <button class="button-reject disabled" data-id="${item.typeSport}">Отменить запись</button>
            </div>
		</div>
        `)
        if (Number(item.maxParticipants) === Number(item.currentRegisteredParticipants)) {
            const submitButton = document.getElementById(`${item.id}`);
            submitButton.classList.add('disabled');
        }
    });
}

renderWorkoutSchedule(scheduleInfo);

const scheduleBox = document.querySelector('.schedule-box');

scheduleBox.addEventListener('click', function (e) {
    if (e.target.classList.contains('button-submit')) {
        scheduleInfo[e.target.id - 1].currentRegisteredParticipants = Number(scheduleInfo[e.target.id - 1].currentRegisteredParticipants) + 1;
        const currentNumberOfParticipants = document.querySelector(`[data-id="${e.target.id}"]`);
        const span = currentNumberOfParticipants.querySelector('span');
        span.textContent = scheduleInfo[e.target.id - 1].currentRegisteredParticipants;

        const currentSubmitButton = document.getElementById(`${e.target.id}`);
        currentSubmitButton.classList.add('disabled');
        currentSubmitButton.nextElementSibling.classList.remove('disabled');
    }
    if (e.target.classList.contains('button-reject')) {
        let currentScheduleInfoItem = scheduleInfo.filter(item => item.typeSport === e.target.dataset.id);
        let index = Number(currentScheduleInfoItem[0].id) - 1;
        scheduleInfo[index].currentRegisteredParticipants = scheduleInfo[index].currentRegisteredParticipants - 1;

        const currentNumberOfParticipants = document.querySelector(`[data-id="${index + 1}"]`);
        const span = currentNumberOfParticipants.querySelector('span');
        span.textContent = scheduleInfo[index].currentRegisteredParticipants;

        const currentRejectButton = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
        currentRejectButton.classList.add('disabled');
        currentRejectButton.previousElementSibling.classList.remove('disabled');
    }
});
