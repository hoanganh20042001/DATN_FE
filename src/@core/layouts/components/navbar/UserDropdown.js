// ** React Imports
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import { getMe } from '@store/action/profile'
// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { handleLogout } from '@store/reducers/authentication'

// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const dataUser = useSelector((state) => {
    return state.profile.dataUser
  })
  
  // useEffect(() => {
  //   // console.log(2)
  //   dispatch(getMe())
  // }, [dispatch])
  const full_name = localStorage.getItem('full_name')

  //** Vars
  const userAvatar = (dataUser && dataUser.avatar) || defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold' style={{color:'white', fontSize:'18px'}}>{(full_name) || ''}</span>
          {/* <span className='user-status'>{userData && userData.roleid === 3 ? 'Học viên' : userData.roleid === 2 ? 'Giáo viên' : 'Admin'}</span> */}
        </div>
        <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/pages/profile'>
          <User size={14} className='me-75' />
          <span className='align-middle'>Thông tin cá nhân</span>
        </DropdownItem>
        {/* <DropdownItem tag={Link} to='/apps/email'>
          <Mail size={14} className='me-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/todo'>
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/chat'>
          <MessageSquare size={14} className='me-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem> */}
        {/* <DropdownItem divider />
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='me-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='me-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem> */}
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Đăng xuất</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
