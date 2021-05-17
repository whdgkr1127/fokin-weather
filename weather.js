import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Clouds:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"]
    },
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:["#616161", "#9BC5C3"]
    },
     Drizzle:{
         iconName:"weather-partly-rainy",
         gradient:["#616161", "#9BC5C3"]
     },
     Rain:{
         iconName:"weather-rainy",
         gradient:["#616161", "#9BC5C3"]
     },
     Snow:{
         iconName:"weather-snowy",
         gradient:["#BBD2C5","#536976"]
     },
      Atmosphere :{
          iconName:"weather-snowy",
          gradient:["#BBD2C5","#536976"]
      },
      Clear :{
          iconName:"weather-snowy",
          gradient:["#BBD2C5","#536976"]
      },
      Clouds:{
          iconName:"weather-partly-rainy",
          gradient:["#BBD2C5","#536976"]
      },
       Haze:{
           iconName:"weather-snowy",
           gradient:["#BBD2C5","#536976"]
       },
        Mist: {
            iconName:"weather-snowy",
            gradient:["#BBD2C5","#536976"]
        },
        Dust:{
            iconName:"weather-snowy",
            gradient:["#BBD2C5","#536976"]
        }
}

export default function Weather({temp, condition}){
    return <LinearGradient style={styles.container}//View와 비슷한것
        colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
   <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>In case this is too long</Text>
            <Text style={styles.subtitle}>and this one as well then?</Text>
        </View>
        </LinearGradient>
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}//oneOf는 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있다.

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:40,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
       color:"white",   
       fontSize: 44,
       fontWeight:"300",//fontWeight는 String이어야만 한다.
       marginBottom: 10
    },
    subtitle:{
        fontWeight:"600",
       color:"white",   
       fontSize:24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
})
