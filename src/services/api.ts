import { DustboyStation, StationValue} from "../models/dustboy";
import apiClient from "./api/http-common";

export const getAllStationList = async (): Promise< DustboyStation[]> => {
  const res = await apiClient.get("/ccdc/stations");
  return res.data as  DustboyStation[];
};
export const getAllDetailList = async (id: string): Promise< StationValue> => {
  const res = await apiClient.get(`/ccdc/value/${id}`);
  return res.data as  StationValue;
};


export const getCurrentTime = (): Promise<number> => {
  return Promise.resolve(Date.now());
};

export const postCall = async (data: any) => {
  await apiClient.post("/xxx", data);
};
