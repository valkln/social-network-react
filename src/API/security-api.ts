import { instance } from "./api";
type TGetCaptcha = {
	url: string
}
export const securityAPI = {
	getCaptcha() {
		return instance.get<TGetCaptcha>('security/get-captcha-url')
	}
}