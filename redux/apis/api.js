import axios from 'axios';
let url = 'https://jsonplaceholder.typicode.com/posts'

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
});


