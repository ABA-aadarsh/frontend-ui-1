// import { Inter, Mulish } from 'next/font/google'
import {Mulish} from "next/font/google"
import "../../styles/globals.css"

const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend UI 1',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
