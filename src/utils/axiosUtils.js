import axios from "axios";

import showHideBlockUI from "components/showHideBlockUI";

if (!window.loadingUrls) window.loadingUrls = [];
let config = {
  headers: {},
};

axios.interceptors.request.use(
  function (config2) {
    if (config2.url.indexOf("loading=false") == -1) {
      window.loadingUrls.push(config2.url);
      showHideBlockUI();
    }
    return config2;
  },
  function (error) {
    // Do something with request error
    window.loadingUrls = [];
    showHideBlockUI();
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.config.url.indexOf("loading=false") == -1) {
      window.loadingUrls = window.loadingUrls.filter(
        (v) => v != response.config.url
      );

      showHideBlockUI();
    }
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    // Do something with response error
    if (originalRequest) {
      window.loadingUrls = window.loadingUrls.filter(
        (v) => v != originalRequest.url
      );
    } else {
      window.loadingUrls = [];
    }
    showHideBlockUI();

    return Promise.reject(error);
  }
);


  export const msgFromError = (err) =>
    err &&
    err.response &&
    err.response.data &&
    err.response.data.error &&
    err.response.data.error.msg &&
    err.response.data.error.msg;

