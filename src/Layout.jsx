import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SkeletonScreen from './components/SkeletonScreen.jsx'

function Layout() {
  const [isMounted, setIsMounted] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <SkeletonScreen isVisible={!isMounted} />
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((dark) => !dark)} />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout