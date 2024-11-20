import { FC } from "react"
// import { ReactNode } from "react"
type Checks = { 
  name: string; 
  age: number; 
  isStudent: boolean
}
// interface Checks {
//   name: string;
//   age: number;
//   isStudent: boolean
// }
// interface children {
//   children: ReactNode
// }
const User: FC<Checks> = ({name, age, isStudent}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  )
}

export default User;