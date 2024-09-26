import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';
import { useEffect, useState } from 'react';

function MainPage() {
  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();
  console.log(isLoading, getWeatherData , error)

  const getWeatherDataProcessing = () => {
    if (getWeatherData !== '') {
      return (
        <>
          <Main id={getWeatherData.id}
            coord={getWeatherData.coord}
            weather={getWeatherData.weather}
            name={getWeatherData.name}
            wind={getWeatherData.wind}
            main={getWeatherData.main}
            sys={getWeatherData.sys}
            timezone={getWeatherData.timezone} />
        </>
      );
    }
  }

  return (
    <>
      <div className="wrapper">
        <Header axiosData={axiosData}/>
        {getWeatherDataProcessing()}
      </div>
    </>
  );
}

export default MainPage;