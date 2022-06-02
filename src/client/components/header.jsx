import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useUserInfo, useLogout } from '@/client/api'
import { DownArrow, Notification } from '@/client/assets'
import { getInitials } from '@/client/utils'

export const Header = () => {
  const [visible, setVisible] = useState(false)
  const { data } = useUserInfo()
  const navigate = useNavigate()
  const { logout } = useAuth0();

  const handleProfileClick = () => {
    navigate('/profile')
    setVisible(false)
  }

  const handleLogout = () => {
    useLogout()
    logout()
    setVisible(false)
  }

  // To close modal when clicking outside
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, visible])
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <header>
      <p>{`Hello, ${data?.name}! 👋`}</p>
      <div className="utilityContainer">
        <div >
          <Notification />
        </div>
        {/* <div>
          {getInitials(data?.nickname).toUpperCase()}
        </div> */}
        <div onClick={() => setVisible(!visible)}>
          <DownArrow />
        </div>

        {visible ?
          <ul className='dropdownItems' ref={wrapperRef}>
            <li onClick={handleProfileClick}>
              Profile
            </li>
            <li onClick={handleLogout}>
              Log out
            </li>
          </ul> : null}
      </div>
    </header>
  )
}

export const HeaderLoading = () => {
  return (
    <header className='headerLoading'>
      <div className='nameLoading'></div>
      <div className="utilityContainer">
        <div></div>
        <div></div>
      </div>
    </header>
  )
}