export const checkName = /^[ㄱ-ㅎ가-힣a-zA-Z ]+$/;
export const checkUsername = /^[a-z0-9A-Z._]{4,12}$/;
export const checkPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!~_%*#?&(){=}\[\]+^-])[A-Za-z\d$@$!~_%*#?&{=}\[\]()+^-]{8,}$/;
export const checkMobile = /^[0-9+]+$/
export const socialAccount = /^naver_|^kakao_|^facebook_|^google_/;
export const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;