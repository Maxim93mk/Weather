import axios from "axios";
import { useState } from "react";


const useGetWeatherData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [getWeatherData, setWeatherData] = useState('');
    const [error, setError] = useState(false);
    const [getUnitsFlag, setUnitsFlag] = useState(false);
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '&appid=35c6ba00b7d1a23174ed6f5acca058c6';
    const lang = '&lang=ru';
  

    //Вынести в запросе город и единицы измерения
    const axiosData = async (query = 'Зеленодольск', unitsFlag=false) => {
        try {
            if (!query) {
                query = 'Зеленодольск';
            } 
            const units = unitsFlag ? '&units=imperial' : '&units=metric';
            setUnitsFlag(unitsFlag);
            console.log(unitsFlag, units)
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
    return { isLoading, getWeatherData, error, getUnitsFlag, axiosData }

}

export default useGetWeatherData;

// https://api.openweathermap.org/data/2.5/weather?q=Зеленодольск&appid=35c6ba00b7d1a23174ed6f5acca058c6