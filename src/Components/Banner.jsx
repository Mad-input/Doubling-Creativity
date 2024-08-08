export default function Banner ({ children, title, text }) {
  return (
    <div className="banner">
      <h1 className="title-banner">{title}</h1>
      <p className="text-banner">{text}</p>
      {children}
    </div>
  )
}
