import axios from "axios";
import { ILaunch } from "store/slices/launches/types";

const endpoints = {
  getLaunches: () => axios.get("https://api.spacexdata.com/v5/launches"),
};

export default endpoints;
