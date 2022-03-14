import axios from "axios";
import { ActionKeys } from "./index";

const API_KEY = "4b414f7851777031363475514b545a";
const ROOT_URL = `http://openapi.seoul.go.kr:8088/${API_KEY}`;

function airPollution() {
  const url = `${ROOT_URL}/json/ListAvgOfSeoulAirQualityService/1/5/`;
  const request = axios.get(url);

  return {
    payload: request,
    type: ActionKeys.FETCH_AIR_POLLUTION,
  };
}

export default airPollution;
