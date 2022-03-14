import axios from "axios";
import { ActionKeys } from "./index";

const API_KEY2 = "6e2056d67584bf69e1c2fc725cff65ec";
const CITY_ID = "1835847";
const ROOT_URL2 = `https://api.openweathermap.org/data/2.5/`;

function cityWeather() {
  const url = `${ROOT_URL2}weather?id=${CITY_ID}&appid=${API_KEY2}&lang=kr`;
  const request = axios.get(url);

  return {
    payload: request,
    type: ActionKeys.FETCH_CITY_WEATHER,
  };
}

export default cityWeather;
