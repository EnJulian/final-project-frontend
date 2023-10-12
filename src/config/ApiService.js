import axios from "axios";
import { getToken } from "@/config/JwtService";

const token = getToken() || "";

const client = axios.create({
  baseURL: "http://localhost:7006/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export const get = async (url) => {
  const response = await client.get(url);
  return response;
};

export const post = async (url, data) => {
  const response = await client.post(url, data);
  return response;
};
