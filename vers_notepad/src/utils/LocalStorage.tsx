export const Keys = {
  access_token: "access_token",
  } as const;
export type Keys = typeof Keys[keyof typeof Keys];  

export const getItem = (Keys:Keys) =>  {
  const value:string | null = localStorage.getItem(Keys);
  if(value !== null){
    return value;
  };
  return "";
};

export const removeItem = (Keys:Keys) => {
  localStorage.removeItem(Keys);
};

export const setItem = (Keys:Keys, value:string,) => {
  localStorage.setItem(Keys, value);
};