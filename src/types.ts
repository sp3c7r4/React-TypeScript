type Info = {
  id: number;
  name: string;
  email: string
}

type AdminInfoList = Info & {
  role: string;
  lastlogin: Date;
}

type UserProfileInformation = {
  age: number;
  name: string;
  email:  string;
}

type Todo = {
  id: number;
  task: string;
  completed: boolean;
}
export { type Todo, type Info, type AdminInfoList, type UserProfileInformation }