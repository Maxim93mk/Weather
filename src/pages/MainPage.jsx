import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';
import { useEffect } from 'react';

function MainPage() {
  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();

 

// if(getWeatherData!==''){
  // console.log(getWeatherData);
// }
  
  // let coords = getWeatherData.coords.map((elem) => {
  //   console.log(elem);
  // });

  // console.log(coords);

  return (
    <>
      <div className="wrapper">
        <Header axiosData={axiosData} />
        {/* <Main coord={getWeatherData.coord}
          weather={getWeatherData.weather} /> */}
      </div>
    </>
  );
}

export default MainPage;