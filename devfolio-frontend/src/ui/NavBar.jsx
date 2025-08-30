import React, { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This will be managed by context later

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className='max-container padding-x py-6 flex justify-between items-center gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624] border-b border-border'>
      <a href='/' className='text-[#141624] text-2xl font-bold dark:text-[#ffffff]'>
        DevFolio
      </a>
      
      <ul className='flex items-center justify-end gap-6 text-[#383C4A] lg:flex-1 max-md:hidden dark:text-[#ffffff]'>
        {isLoggedIn ? (
          <>
            <li>Hi, Rohit</li>
            <li><Button variant="ghost" size="sm">Logout</Button></li>
            <li><Button variant="default" size="sm">Create Post</Button></li>
          </>
        ) : (
          <>
            <li><Button variant="ghost" size="sm">Login</Button></li>
            <li><Button variant="default" size="sm">Register</Button></li>
          </>
        )}
      </ul>
      
      <div className='flex items-center gap-4'>
        <Switch 
          className='cursor-pointer' 
          checked={isDark}
          onCheckedChange={toggleTheme}
        />
        <FaBars 
          className='text-2xl cursor-pointer hidden max-md:block dark:text-white' 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white dark:bg-[#141624] border-b border-border md:hidden'>
          <div className='flex flex-col gap-4 p-4'>
            {isLoggedIn ? (
              <>
                <span>Hi, Rohit</span>
                <Button variant="ghost" size="sm">Logout</Button>
                <Button variant="default" size="sm">Create Post</Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">Login</Button>
                <Button variant="default" size="sm">Register</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
