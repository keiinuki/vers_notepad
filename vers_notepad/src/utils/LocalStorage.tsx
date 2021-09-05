export const KEYS = {
  Token: "Token",
} as const;
type KEYS = typeof KEYS[keyof typeof KEYS];

export const getItem = (key:KEYS) =>  {
  const value:string | null = localStorage.getItem(key);
  if(value !== null){
    return value;
  };
  return "";
};

export const removeItem = (key:KEYS) => {
  localStorage.removeItem(key);
};

export const setItem = (key:KEYS, value:string,) => {
  localStorage.setItem(key, value);
};