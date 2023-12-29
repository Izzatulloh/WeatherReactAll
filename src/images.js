import day from "./assets/images/animated/day.svg";
import cloudy3 from "./assets/images/animated/cloudy.svg";
import cloudy1 from "./assets/images/animated/cloudy-day-1.svg";
import cloudy2 from "./assets/images/animated/cloudy-day-2.svg";
import rainy1 from "./assets/images/animated/rainy-1.svg";
import rainy2 from "./assets/images/animated/rainy-3.svg";
import rainy3 from "./assets/images/animated/rainy-4.svg";
import rainy4 from "./assets/images/animated/rainy-6.svg";
import snowy1 from "./assets/images/animated/snowy-3.svg";
import snowy2 from "./assets/images/animated/snowy-4.svg";
import snowy3 from "./assets/images/animated/snowy-6.svg";
import thunder from "./assets/images/animated/thunder.svg";
export function getImage(desc) {
    if (desc == 'clear sky') {
        return day
    } else if (desc == 'few clouds') {
        return cloudy1
    } else if (desc == 'scattered clouds') {
        return cloudy2
    } else if (desc == 'light rain') {
        return rainy1
    } else if (desc == 'moderate rain') {
        return rainy3
    } else if (desc == 'rain') {
        return rainy2
    } else if (desc == 'shower rain') {
        return rainy4
    } else if (desc == 'snow') {
        return snowy3
    } else if (desc == 'light snow') {
        return snowy1
    } else if (desc == 'rain and snow') {
        return snowy2
    } else if (desc == 'thunderstorm') {
        return thunder
    } else {
        return cloudy3
    }
}