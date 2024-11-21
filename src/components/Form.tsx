import { FormEvent, useRef, useState } from "react"

type formData = {
  name: string;
  email: string;
  password: string
}
function Form() {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: '',
    email: '',
    password: ''
  })
  //Wer're using the HTMLInput Element because e're using it inside and HTML INput element
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameValue = name.current!.value
    const emailValue = email.current!.value
    const passwordValue = password.current!.value

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>
    <section>
      <h1>Name: {submittedData.name}</h1>
      <h1>Email: {submittedData.email}</h1>
      <h1>Password: {submittedData.password}</h1>
    </section>
    </form>

  )
}

export default Form