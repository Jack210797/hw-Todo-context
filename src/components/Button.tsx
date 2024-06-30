import { ButtonPropsInterface } from '../types/ButtonProps.interface'

const Button = ({ children, ...props }: Partial<ButtonPropsInterface>) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
}

export default Button
