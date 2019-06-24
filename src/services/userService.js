import axios from 'axios';

export const fetchUserByLogin = async payload => {
  try {
    const { data } = await axios.post('http://localhost:8080/api/users/login', {
      account: payload.account,
      password: payload.password
    });
    return data;
  }
  catch (err) {
    throw new Error(err);
  }
};
