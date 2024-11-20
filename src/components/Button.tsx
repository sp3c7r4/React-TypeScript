type btnChecks = {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

function Button({label, onClick, disabled}: btnChecks) {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button;