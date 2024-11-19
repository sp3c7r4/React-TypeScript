// type Checks = { 
//   name: string; 
//   age: number; 
//   isStudent: boolean
// }
// interface Checks {
//   name: string;
//   age: number;
//   isStudent: boolean
// }

function User({name, age, isStudent}: Checks) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{`${isStudent}`}</p>
    </div>
  )
}

export default User