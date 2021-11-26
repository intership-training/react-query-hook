import apiClient from "./api/http-common";

export const getAll = async () => {
  const res = await apiClient.get("/Cases/today-cases-all");
  return res.data;
};

export const getCurrentTime = (): Promise<number> => {
  return Promise.resolve(Date.now());
};

export const postCall = async (data: any) => {
  await apiClient.post("/xxx", data);
};
