import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';
import { useEffect, useState } from 'react';

function MainPage() {
  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();
  console.log(isLoading )
  const getWeatherDataProcessing = () => {
    if (getWeatherData !== '') {
      console.log(getWeatherData )
      return (
        <>
          <Main id={getWeatherData.id}
                coord={getWeatherData.coord}
                weather={getWeatherData.weather}
                name = {getWeatherData.name} 
                wind = {getWeatherData.wind}
                main = {getWeatherData.main}
                sys = {getWeatherData.sys}
                timezone = {getWeatherData.timezone} />
        </>
      )
    }
  }


  // let coords = getWeatherData.coords.map((elem) => {
  //   console.log(elem);
  // });

  // console.log(coords);

  return (
    <>
      <div className="wrapper">
        <Header axiosData={axiosData} />
        {getWeatherDataProcessing()}
        {/* <Main coord={getWeatherData.coord}
          weather={getWeatherData.weather} /> */}
      </div>
    </>
  );
}

export default MainPage;