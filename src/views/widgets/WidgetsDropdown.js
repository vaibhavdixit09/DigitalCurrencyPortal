import React from 'react'
import { AiFillLock, AiOutlineTrophy } from 'react-icons/ai'
import { BiMoneyWithdraw, BiWallet } from 'react-icons/bi'
import { LiaHandshakeSolid } from 'react-icons/lia'
import { VscCompassActive } from 'react-icons/vsc'
import { CRow, CCol } from '@coreui/react'
import 'src/scss/_custom.scss'

const WidgetsDropdown = () => {
  return (
    <CRow className="">
      <CCol sm={6} lg={3}>
        <div
          className="info p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(7deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                22-sept-2023
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Joining Date
              </p>
            </div>
            <span className="mx-2">
              <LiaHandshakeSolid size={35} color="#ffcb6b"></LiaHandshakeSolid>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="warning p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(220deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                22-sept-2023
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Activation Date
              </p>
            </div>
            <span className="mx-2">
              <VscCompassActive size={35} color="#ffcb6b"></VscCompassActive>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="danger p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(12deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                20.00 <span className="fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Locked ENFI
              </p>
            </div>
            <span className="mx-2">
              <AiFillLock size={35} color="#ffcb6b"></AiFillLock>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="primary p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(191deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                20.00 <span className="fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Wallet Balanace
              </p>
            </div>
            <span className="mx-2">
              <BiWallet size={35} color="#ffcb6b"></BiWallet>
            </span>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
