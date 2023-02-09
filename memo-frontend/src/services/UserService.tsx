import axios from "axios";
import {UserState} from "../models/User";

const apiUrl = process.env.REACT_APP_MEMO_API_URL;

/**
 * Register user api, this endpoint returns the user if exist using the email
 * otherwise create the user and return a User object
 *
 * @param email
 * @param firstName
 */
export const registerUser = (email: string, firstName: string) =>  {
  return axios.post(apiUrl + '/users/register', { email, firstName});
}