import { CovidByProvince } from "../models/user";
import apiClient from "./api/http-common";

export const getAll = async (): Promise<CovidByProvince[]> => {
  const res = await apiClient.get("/Cases/today-cases-by-provinces");
  return res.data as CovidByProvince[];
};

export const getCurrentTime = (): Promise<number> => {
  return Promise.resolve(Date.now());
};

export const postCall = async (data: any) => {
  await apiClient.post("/xxx", data);
};
