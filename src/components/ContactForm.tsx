import { FormEvent, useRef, useState } from "react"

type formDetailsType = {
  name: string;
  email: string;
  message: string;
}
function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLInputElement>(null)
  const [formDetails, setFormDetails] = useState<formDetailsType>({
    name: '',
    email: '',
    message: '',
  })
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameValue = nameRef.current!.value
    const emailValue = emailRef.current!.value
    const messageValue = messageRef.current!.value
    setFormDetails({
      name: nameValue,
      email: emailValue,
      message: messageValue
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Enter your name" 
      name="name" ref={nameRef}/>
      <input type="text" 
      placeholder="Enter your email" 
      name="email" ref={emailRef}/>
      <input type="text" 
      placeholder="Enter your message" 
      name="message" ref={messageRef}/>
      <button type="submit">Submit Data</button>

      <section>
        <h1>Name: {formDetails.name}</h1>
        <h1>Email: {formDetails.email}</h1>
        <h1>Message: {formDetails.message}</h1>
      </section>
    </form>
  )
}

export default ContactForm