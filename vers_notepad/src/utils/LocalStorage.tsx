export const KEYS = {
  access_token: "access_token",
  } as const;
  type KEYS = typeof KEYS[keyof typeof KEYS];

export const getItem = (KEYS:KEYS) =>  {
  const value:string | null = localStorage.getItem(KEYS);
  if(value !== null){
    return value;
  };
  return "";
};

export const removeItem = (KEYS:KEYS) => {
  localStorage.removeItem(KEYS);
};

export const setItem = (KEYS:KEYS, value:string,) => {
  localStorage.setItem(KEYS, value);
};