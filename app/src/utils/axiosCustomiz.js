import axios from "axios";
import { logoutUserAPI } from "../redux/user/userSlice";
import { refreshTokenAPI } from "../apis";
import Toast from "react-native-toast-message";
// import { interceptorLoadingElements } from "./fomatter";
// import { logoutUserAPI } from "~/redux/user/userSlice";
// import { refreshTokenAPI } from "~/apis";
// import { reloadBoard } from "~/redux/activeBoard/activeBoardSlice";

const instance = axios.create({
    baseURL: 'http://localhost:9999/',
});


// max time of 1 request
instance.defaults.timeout = 1000 * 60 * 5


//allow send cookie in each request to server
instance.defaults.withCredentials = true

// //handle redux store in non-component files
// let axiosRuduxStore
// export const injectStore = mainStore => { axiosRuduxStore = mainStore }

instance.interceptors.request.use(function (config) {

    // const access_token = store?.getState()?.account?.account?.access_token;
    // config.headers["Authorization"] = "Bearer " + access_token;

    // interceptorLoadingElements(true)

    return config;
}, function (error) {
    return Promise.reject(error);
});

let refreshTokenPromise = null;

//handle middleware errors response
instance.interceptors.response.use(function (response) {

    //handdle click buton loading, await api response
    // interceptorLoadingElements(false)

    return response && response.data ? response.data : response;;
}, function (error) {

    // interceptorLoadingElements(false)

    //handle error refresh token
    if (error?.response?.status === 401) {
        //
        axiosRuduxStore.dispatch(logoutUserAPI(false))
    }

    const originalRequest = error.config;
    console.log('originalRequest:', originalRequest);


    if (error?.response?.status === 410 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!refreshTokenPromise) {
            refreshTokenPromise = refreshTokenAPI()
                .then(data => {
                    return data?.accessToken
                })
                .catch((error) => {
                    //if have any error from API refresh token , we will logout
                    axiosRuduxStore.dispatch(logoutUserAPI(false))
                    return Promise.reject(error)
                })
                .finally(() => {
                    refreshTokenPromise = null
                })
        }

        //return refresh token run successfully
        // eslint-disable-next-line no-unused-vars
        return refreshTokenPromise.then((accessToken) => {
            /* Handle save new access token but we save in cookie  and if save local storage such as:
            instance..defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;*/

            //handle call error api again with new access token
            return instance(originalRequest)
        })
    }
    else {
        Toast.error(error?.response?.data?.message)
    }

    return Promise.reject(error);
});


export default instance;