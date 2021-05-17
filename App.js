import React from 'react';
import Loading from "./Loading"
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from "./weather"


const API_KEY = "b7b89fca297237993eb0167e78b617a8";

export default class extends React.Component {
  state = {
    isLoading:true
    // condition 또는 temp의 값을 state에 굳이 넣지 않아도 오류는 생기지 않는다.
  }
  getWeather = async(latitude, longitude) => {
    const { data:{main:{temp}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({ isLoading:false, condition:weather[0].main, temp})
    console.log({condition:weather})
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords:{latitude, longitude} } = await Location.getCurrentPositionAsync();// getCurrentPositionAsync()는 await functionality이다.
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
     this.getLocation()
  }
  render(){
    const { isLoading ,temp ,condition} = this.state;
    return  isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
  ;
}


