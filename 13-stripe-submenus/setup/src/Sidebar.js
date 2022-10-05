import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link, linkIndex) => {
                  const { url, icon, label } = link
                  return (
                    <a key={linkIndex} href={url}>
                      {icon} {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
