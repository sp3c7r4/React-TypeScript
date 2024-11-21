import { useRef } from "react"

function FocusInput() {
  const input = useRef<HTMLInputElement>(null)
  const FocusInput = () => {
    input.current?.focus()
  }
  return (
    <div>
      <input type="text" ref={input}/>
      <button onClick={FocusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput