export type PlantsTypes = {
  _id: {};
  name: string;
  nickname: string;
  desc: string;
  date: Date;
  water: number;
  sun: number;
  flower: boolean;
  condition: number;
  category: string;
  imgName: string;
};

export type DiaryTypes = {
  _id: {};
  content: string;
  date: Date;
  name: string;
  plantId: string;
};
