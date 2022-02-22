//Environment variables are injected in build-time (not accessible in development)

// URL 
//export const API_URL = '127.0.0.1:8000';
//export const API_PROTOCOL = "http://";
//export const SOC_PROTOCOL = "ws://";
export const SOC_PROTOCOL = "wss://";
export const API_URL = 'www.topolar.co.kr';
// export const API_URL = 'tonyscoding.com';
// export const API_URL = 'kimbu.tonyscoding.com';
// export const API_URL = 'tocol.info';
// export const API_URL = 'localhost:8000';
// export const API_URL = '192.168.0.13:8000';
// export const API_URL = '192.168.1.3';
export const API_PROTOCOL = "https://";
// export const API_PROTOCOL = "http://";
//export const API_URL = 'tocol-444960480.ap-northeast-2.elb.amazonaws.com';
export const MEDIA_SERVER_URL = 'www.topolar.co.kr';
// export const MEDIA_SERVER_URL = 'tonyscoding.com'
// export const MEDIA_SERVER_URL = 'www.tocol.info'


// TOCOL Price list
export const COURSE_BLACK = "BLACK";
export const COURSE_BLACK_CODE = "BL";
export const COURSE_NORMAL = "NORMAL";
export const COURSE_NORMAL_CODE = "NO";

export const STATIC_IP_ADDR = "112.220.26.74";
// export const TURN_IP_ADDR = "54.180.153.96";
export const TURN_IP_ADDR = "13.125.217.155";
export const TURN_PASSWORD = "yZ4d4eM3Cq";
export const TURN_USERNAME = "tonysacademy";

//  Classroom entry buffer time
export const CLASSROOM_ENTRY_TIME_BUFFER = 10;

// Social Login Redirct uri
export const REDIRECT_URI_NAVER = "/api/naver/social/login/callback/";
export const REDIRECT_URI_FACEBOOK = "/api/facebook/social/login/callback";
export const REDIRECT_URI_KAKAO = "/api/kakao/social/login/callback";
export const REDIRECT_URI_GOOGLE = "/api/google/social/login/callback";

export const REDIRECT_URI_NAVER_AUTHENTICATE = "/api/naver/social/authentication/callback/";
export const REDIRECT_URI_FACEBOOK_AUTHENTICATE = "/api/facebook/social/authentication/callback";
export const REDIRECT_URI_KAKAO_AUTHENTICATE = "/api/kakao/social/authentication/callback";
export const REDIRECT_URI_GOOGLE_AUTHENTICATE = "/api/google/social/authentication/callback";

const NAVER_OAUTH_URL = "https://nid.naver.com/oauth2.0/authorize";
// const FACEBOOK_OAUTH_URL = "https://www.facebook.com/v8.0/dialog/oauth/";
const KAKAO_OAUTH_URL = "https://kauth.kakao.com/oauth/authorize"
const GOOGLE_OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"


// Social Login variables
export const SOCIAL_VARIABLES = {
    naver: {
        response_type: 'code',
        client_id: API_URL==='www.topolar.co.kr'?'B2XvP5bEY2qQ3Aj2SpnJ':'qChFIQ5bqKM8sjPgJHT9',
        redirect_uri: window.location.origin+REDIRECT_URI_NAVER,
    },
    // facebook: {
    //     response_type: 'code',
    //     client_id: '2390419097919426',
    //     redirect_uri: window.location.origin+REDIRECT_URI_FACEBOOK,
    //     scope: 'public_profile, email'
    // },
    kakao: {
        response_type: 'code',
        client_id: "746bf258cf0d1ed175efddcbaf3608db",
        redirect_uri: window.location.origin + REDIRECT_URI_KAKAO,
    },
    google: {
        response_type: 'code',
        client_id: "556593457930-1896adndgn3n09dis9o2bh413ocj427r.apps.googleusercontent.com",
        redirect_uri: window.location.origin + REDIRECT_URI_GOOGLE,
        scope: "https://www.googleapis.com/auth/userinfo.email"
    },
    naverConnection: {
        response_type: 'code',
        client_id: API_URL==='www.topolar.co.kr'?'B2XvP5bEY2qQ3Aj2SpnJ':'qChFIQ5bqKM8sjPgJHT9',
        redirect_uri: window.location.origin+REDIRECT_URI_NAVER_AUTHENTICATE,
    },
    // facebookConnection: {
    //     response_type: 'code',
    //     client_id: '2390419097919426',
    //     redirect_uri: window.location.origin+REDIRECT_URI_FACEBOOK_AUTHENTICATE,
    //     scope: 'public_profile, email'
    // },
    kakaoConnection: {
        response_type: 'code',
        client_id: "746bf258cf0d1ed175efddcbaf3608db",
        redirect_uri: window.location.origin + REDIRECT_URI_KAKAO_AUTHENTICATE,
    },
    googleConnection: {
        response_type: 'code',
        client_id: "556593457930-1896adndgn3n09dis9o2bh413ocj427r.apps.googleusercontent.com",
        redirect_uri: window.location.origin + REDIRECT_URI_GOOGLE_AUTHENTICATE,
        scope: "https://www.googleapis.com/auth/userinfo.email"
    },
    naverOauth: NAVER_OAUTH_URL,
    // facebookOauth: FACEBOOK_OAUTH_URL,
    kakaoOauth: KAKAO_OAUTH_URL,
    googleOauth: GOOGLE_OAUTH_URL
}
