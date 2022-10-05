import React, { useState, useContext } from 'react'
import sublinks from './data'

export const Appcontext = React.createContext()

export const AppPorvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = () => {
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  const AppContextValue = {
    isSidebarOpen,
    isSubmenuOpen,
    openSidebar,
    openSubmenu,
    closeSidebar,
    closeSubmenu,
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
