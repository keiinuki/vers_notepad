export type Memo = {
  id: string,
  title: string,
  category: string,
  description: string,
  date: string,
  mark_div: number,
};

export type ModalButton = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;  
};
