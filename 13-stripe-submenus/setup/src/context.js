import React, { useState, useContext } from 'react'
import sublinks from './data'

export const Appcontext = React.createContext()

export const AppPorvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  const AppContextValue = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isSubmenuOpen,
    openSubmenu,
    closeSubmenu,
    location,
    page,
  }

  return (
    <Appcontext.Provider value={AppContextValue}>
      {children}
    </Appcontext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Appcontext)
}
