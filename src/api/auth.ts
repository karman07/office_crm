import BACKEND_URL from '@/Constants/base';
import axios from 'axios';

const API = axios.create({
  baseURL: BACKEND_URL,
});

export const loginUser = (data: { email: string; password: string }) =>
  API.post('/login', data);

export const signupUser = (data: { email: string; password: string; role: string }) =>
  API.post('/signup', data);
