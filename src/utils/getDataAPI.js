import axios from "axios";
import { useState } from "react";


const useGetWeatherData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [getWeatherData, setWeatherData] = useState('');
    const [error, setError] = useState(false);
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '&appid=35c6ba00b7d1a23174ed6f5acca058c6';
    const lang = '&lang=ru';
    const units = '&units=metric';

    //Вынести в запросе город и единицы измерения
    const axiosData = async (query = 'Зеленодольск') => {
        try {
            if (!query) {
                query = 'Казань';
            } 
            console.log(query)    
            const URL = apiURL + query + apiKey + units + lang;
            const response = await axios.get(URL);
            setError(false);
            setWeatherData(response.data || []);
            setIsLoading(true);
        } catch (error) {
            setError(true);
            console.error('There was a problem with the fetch operation:', error);
        }
        finally {
            setIsLoading(false);
        }



        // response = await axios.get(apiURL + query + apiKey + lang)
        //     .then(response => {
        //         console.log(response.data)
        //         setError(false);
        //         setWeatherData(response.data || []);
        //     })
        //     .catch(error => {
        //         setError(true);
        //         console.error('There was a problem with the fetch operation:', error);
        //     })
        //     .finally(() => {
        //         
        //     });
    }
    return { isLoading, getWeatherData, error, axiosData }

}

export default useGetWeatherData;

// https://api.openweathermap.org/data/2.5/weather?q=Зеленодольск&appid=35c6ba00b7d1a23174ed6f5acca058c6