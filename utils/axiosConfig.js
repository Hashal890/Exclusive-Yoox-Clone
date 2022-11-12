import axios from "axios";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = getLocalStorageItem("accessToken");
    if (accessToken) config.headers["access-token"] = accessToken;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (succ) => succ,
  async (err) => {
    let originalConfig = err.config;
    // let userData = JSON.parse(err.config.data);
    if (
      originalConfig.url !== "/users/login" &&
      originalConfig.url !== "/users/signup"
    ) {
      if (err.response.status === 498 && !err.config._isRetry) {
        err.config["_isRetry"] = true;
        try {
          let refreshToken = getLocalStorageItem("refreshToken");
          if (refreshToken) {
            const res = await axiosInstance.get(
              `/users/refreshToken/${refreshToken}`
            );
            setLocalStorageItem("accessToken", res.data.data.accessToken);

            return axiosInstance(originalConfig);
            // return axiosInstance.post(`/users/login`, userData);
          } else {
            return Promise.reject(err);
          }
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);