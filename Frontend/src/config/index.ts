import axios from "axios";

let targetUrl = process.env.REACT_APP_API_ENDPOINT;

const hostname = window.location.host;

if (hostname.startsWith("dev-app")) {
  targetUrl = targetUrl?.replace("env", "dev-api");
} else if (hostname.startsWith("qa-app")) {
  targetUrl = targetUrl?.replace("env", "qa-api");
} else if (hostname.startsWith("localhost")) {
  targetUrl = "http://server.technetgrp.com:11234/";
} else {
  targetUrl = targetUrl?.replace("env", "api");
}

export const axiosInstance = axios.create({
  baseURL: targetUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
