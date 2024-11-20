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

export { type Info, type AdminInfoList, type UserProfileInformation }