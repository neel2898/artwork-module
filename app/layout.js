import './globals.css'

export const metadata = {
  title: 'Artwork Module — FoLSol',
  description: 'Multi-department artwork review and management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
