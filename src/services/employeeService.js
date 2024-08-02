import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const header = {
  projectId: import.meta.env.VITE_PROJECT_ID,
  environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
};

const param = {
  offset: 0,
  limit: 50,
};

export const getEmployees = async () => {
  const response = await axios.get(`${BASE_URL}/employee`, {
    params: param,
    headers: header,
  });
  return response.data.data;
};

export const getEmployeeById = async (emp_id) => {
  const response = await axios.get(`${BASE_URL}/employee/${emp_id}`, {
    headers: header,
  });
  return response.data.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(`${BASE_URL}/employee`, employee, {
    headers: header,
  });
  return response.data.data;
};

export const deleteEmployee = async (emp_id) => {
  await axios.delete(`${BASE_URL}/employee/${emp_id}`, {
    data: {},
    headers: header,
  });
};
