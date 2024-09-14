import { useState } from "react";

const useGetTimeZone = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [day, setDay] = useState('');
    const [week, setWeek] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const getCurrentDate = (timezone) => {
        const getCurrentDate = new Date();
        const currentTime = getCurrentDate.getTime();
        const getTimeZone = new Date(currentTime + (timezone * 1000));
        const arrDayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const arrDayMounth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        setHours(getTimeZone.getUTCHours());
        setMinutes(getTimeZone.getUTCMinutes());
        setDay(getTimeZone.getUTCDate());
        setWeek(arrDayWeek[getTimeZone.getUTCDay()]);
        setMonth(arrDayMounth[getTimeZone.getUTCMonth()]);
        setYear(getTimeZone.getUTCFullYear());
    }

    return { getCurrentDate, hours, minutes, day, week, month, year }

}

export default useGetTimeZone;