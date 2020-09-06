// import client from './client';
import axios from 'axios';

// 로그인
export const login = ({ email, password }) =>
  axios.post('http://3.35.3.178:8080/auth/login', { email, password });

// 회원가입
export const register = ({ email, password, nickname, birthYear, gender, departmentId, selfIntroduction }) =>
  axios.post('http://3.35.3.178:8080/auth/join', { email, password, nickname, birthYear, gender, departmentId, selfIntroduction });
 // ,{headers:{"Content-Type" : "application/json"}} 안붙여도 잘 날라감
// 로그인 상태 확인
export const check = () => axios.get('/api/auth/check');
