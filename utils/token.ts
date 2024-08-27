"use client";

const setToken = (token: string) => {
  if (window !== undefined) {
    return localStorage.setItem("token", token);
  }

  return null;
};

const getToken = () => {
  if (window !== undefined) {
    const token = localStorage.getItem("token");
    console.log({ token });
    return token;
  }

  return null;
};

const authHeader = (token: string) => ({ Authorization: `Bearer ${token}` });

export { authHeader, getToken, setToken };
