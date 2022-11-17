import axios from "axios";

export const getData = async (endpoint: any) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const postData = async ({ data, endpoint }: any) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const editData = async ({ data, endpoint }: any) => {
  try {
    const response = await axios.put(endpoint, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteData = async () => {
  try {
    const response = await axios.get(`/endpoint`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
