interface ITypogrophyProps {
  children: React.ReactNode
  className?: string
}

function P({ children, className }: ITypogrophyProps) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  )
}

function H1({ children, className }: ITypogrophyProps) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight ${className}`}>
      {children}
    </h1>
  )
}

function Muted({ children, className }: ITypogrophyProps) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  )
}

export { P, H1, Muted }
