import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import useGetWeatherData from '../utils/getDataAPI';

function MainPage() {
  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();
  console.log(getWeatherData);

  return (
    <>
      <div className="wrapper">
        <Header axiosData={axiosData}/>
        <Main />
      </div>
    </>
  );
}

export default MainPage;