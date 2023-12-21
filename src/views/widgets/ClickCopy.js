import React from 'react'
import PropTypes from 'prop-types'
import 'src/scss/_custom.scss'
import { CCol, CRow, CContainer } from '@coreui/react'
const ClickCopy = () => {
  return (
    <CContainer fluid className="">
      <CRow className="d-flex justify-content-between ">
        <CCol sm={12} lg={6} className="box   position-relative">
          <span
            style={{
              letterSpacing: '0.2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            My Referral Link
          </span>
          <a href="#" className="referal-link">
            http://localhost:3000/dashboard
          </a>
          <span className="position-absolute end-0 top-0 p-1">
            <a className="mx-2" href="#">
              copy
            </a>
          </span>
        </CCol>
        <CCol sm={12} lg={6} className="box   position-relative">
          <span
            style={{
              letterSpacing: '0.2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            ENFI Token Contract
          </span>
          <a href="#" className="referal-link">
            http://localhost:3000/dashboard
          </a>
          <span className="position-absolute end-0 top-0 p-1">
            <a className="mx-2" href="#">
              copy
            </a>
          </span>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ClickCopy
