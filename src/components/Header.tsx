import React from 'react'
import logo from 'assets/coding_portfolio_logo.png'

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-center py-4">
        <img src={logo} alt="Logo" className="w-1/4 p-2 md:w-1/6" />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="p-10 font-poppins text-6xl font-bold">
          Jack Ho&apos;s Portfolio Page
        </h1>
      </div>
    </div>
  )
}
