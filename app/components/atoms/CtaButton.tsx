import { ElementType } from "react"
import clsx from 'clsx'

interface CtaButtonProps extends React.ComponentProps<'button'> {
  text?: string,
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  iconLeft?: ElementType
  iconRight?: ElementType
}

function CtaButton({
  variant = "primary",
  size = "medium",
  iconLeft: IconLeft,
  iconRight: IconRight,
  text,
  ...props
}: CtaButtonProps) {
  const classes = clsx(
    "rounded px-4 py-2 flex items-center gap-2",
    {
      "bg-blue-500 text-white": variant === "primary",
      "bg-gray-500 text-white": variant === "secondary",
      "text-sm": size === "small",
      "text-md": size === "medium",
      "text-lg": size === "large",
    }
  )

  return (
    <button type="submit" className={classes} {...props}>
      {IconLeft && <IconLeft className="w-5 h-5" />}
      {text}
      {IconRight && <IconRight className="w-5 h-5" />}
    </button>
  )
}

export { CtaButton }