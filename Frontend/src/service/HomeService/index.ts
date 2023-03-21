import { axiosInstance } from "config";

export const fetchData = async (
  query: string,
): Promise<{ ip: string; domain: string }> => {
  const URL = `lookup/${query}`;
  try {
    const response = await axiosInstance.get(URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
