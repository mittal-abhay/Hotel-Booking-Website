import axios from 'axios';

const base = axios.create({
  baseURL: 'https://hotel-booking-website-ssom.onrender.com/api'
});

export default base;