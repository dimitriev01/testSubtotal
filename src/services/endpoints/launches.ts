import axios from 'axios';

const endpoints = {
  getLaunches: () => axios.get('https://api.spacexdata.com/v5/launches'),
};

export default endpoints;
