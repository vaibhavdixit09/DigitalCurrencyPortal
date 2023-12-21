import React from 'react'
import userImg from 'src/assets/images/PngItem_307416.png'
import { Link } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilUser,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilAccountLogout,
  cilLockLocked,
  cilSettings,
  cilTask,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={userImg} size="sm" />
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0"
        style={{ backgroundColor: '#e9d4ff', color: 'black', overflow: 'hidden' }}
        placement="bottom-end"
      >
        <CDropdownHeader
          className="text-white fw-semibold py-2"
          style={{ backgroundColor: '#543279' }}
        >
          My Account
        </CDropdownHeader>
        {/* <CDropdownItem> */}
        <Link
          to="/directory/updateProfile"
          style={{ textDecoration: 'none', padding: '0.5rem', color: 'black' }}
        >
          <CIcon icon={cilUser} className="me-2" />
          My Profile
        </Link>
        {/* </CDropdownItem> */}
        {/* <CDropdownItem> */}
        <Link to="/" style={{ textDecoration: 'none', padding: '0.5rem', color: 'black' }}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </Link>
        {/* </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
