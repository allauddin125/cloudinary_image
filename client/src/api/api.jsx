import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust based on your backend route
});

export const postP = (value) => {
  return api.post('/register', value, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getP = () =>{
  return api.get("/getdata")
  
}