const TOKEN = "token";
export const setToken = async (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => localStorage.getItem(TOKEN);
