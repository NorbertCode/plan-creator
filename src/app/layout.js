import "./style.css"

export const metadata = {
  title: 'Plan'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
