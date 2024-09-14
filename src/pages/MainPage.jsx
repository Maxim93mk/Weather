import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';
import { useEffect, useState } from 'react';

function MainPage() {
  // const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();
  const getWeatherData = [
    {
      "coord": {
        "lon": 10.99,
        "lat": 44.34
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 298.48,
        "feels_like": 298.74,
        "temp_min": 297.56,
        "temp_max": 300.05,
        "pressure": 1015,
        "humidity": 64,
        "sea_level": 1015,
        "grnd_level": 933
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
      },
      "rain": {
        "1h": 3.16
      },
      "clouds": {
        "all": 100
      },
      "dt": 1661870592,
      "sys": {
        "type": 2,
        "id": 2075663,
        "country": "IT",
        "sunrise": 1661834187,
        "sunset": 1661882248
      },
      "timezone": 7200,
      "id": 3163858,
      "name": "Великий Новгород",
      "cod": 200
    }
  ];
  const getWeatherDataProcessing = () => {
    if (getWeatherData !== '') {
      return (
        <>
          <Main id={getWeatherData[0].id}
            coord={getWeatherData[0].coord}
            weather={getWeatherData[0].weather}
            name={getWeatherData[0].name}
            wind={getWeatherData[0].wind}
            main={getWeatherData[0].main}
            sys={getWeatherData[0].sys}
            timezone={getWeatherData[0].timezone} />
          {/* <Main id={getWeatherData.id}
                coord={getWeatherData.coord}
                weather={getWeatherData.weather}
                name = {getWeatherData.name} 
                wind = {getWeatherData.wind}
                main = {getWeatherData.main}
                sys = {getWeatherData.sys}
                timezone = {getWeatherData.timezone} /> */}
        </>
      );
    }
  }


  // let coords = getWeatherData.coords.map((elem) => {
  //   console.log(elem);
  // });

  // console.log(coords);

  return (
    <>
      <div className="wrapper">
        {/* <img src={'http://openweathermap.org/img/w/'+getWeatherData[0].weather[0].icon+".png"} alt="" /> */}
        {/* <Header axiosData={axiosData} /> */}
        <Header />
        {getWeatherDataProcessing()}
        {/* <Main coord={getWeatherData.coord}
          weather={getWeatherData.weather} /> */}
      </div>
    </>
  );
}

export default MainPage;