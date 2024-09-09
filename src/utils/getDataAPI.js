import axios from "axios";
import { useState } from "react";


const useGetWeatherData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [getWeatherData, setWeatherData] = useState('');
    const [error, setError] = useState(false);
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '&appid=35c6ba00b7d1a23174ed6f5acca058c6';
    const lang = '&lang=ru';

    //Вынести в запросе город и единицы измерения
    const axiosData = (query = 'Зеленодольск') => {
        setIsLoading(true)
        axios.get(apiURL + query + apiKey + lang)
            .then(response => {
                // console.log(response);
                setError(false);
                setWeatherData(response || []);
            })
            .catch(error => {
                setError(true);
                console.error('There was a problem with the fetch operation:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    return { isLoading, getWeatherData, error, axiosData }

}

export default useGetWeatherData;

// https://api.openweathermap.org/data/2.5/weather?q=Зеленодольск&appid=35c6ba00b7d1a23174ed6f5acca058c6