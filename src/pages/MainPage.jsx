import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';
import { useEffect, useState } from 'react';

function MainPage() {
  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();
  const [coord, setCoord] = useState([]);
  const [weather, setWeather] = useState([]);

  const getWeatherDataProcessing = () => {
    if (getWeatherData !== '') {
      console.log(getWeatherData)
      return (
        <>
          <Main coord={getWeatherData.coord}
            weather={getWeatherData.weather} />
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