import axios from "axios";

export enum resultCode { Success = 0, Error = 1, RequiredCaptcha = 10 }

export const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: { 'API-KEY': 'bf564537-ae0f-475b-a4ab-53d32391d136' }
})
