import React from 'react'
import logo from 'assets/coding_portfolio_logo.png'

export default function Header() {
  return (
    <div className="flex items-center justify-center py-4">
      <img
        src={logo}
        alt="Logo"
        className="w-1/4 p-2 transition duration-300 hover:scale-105 md:w-1/6"
      />
    </div>
  )
}
