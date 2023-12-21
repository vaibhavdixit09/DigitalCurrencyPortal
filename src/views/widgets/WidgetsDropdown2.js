import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { TbWorldShare, TbUserShare } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdGroupOff } from 'react-icons/md'
import 'src/scss/_custom.scss'

const WidgetsDropdown2 = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <div
          className="info p-3 mb-3 hover-class "
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
                0
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total Referal
              </p>
            </div>
            <span className="mx-2">
              <TbWorldShare size={35} color="#ffcb6b"></TbWorldShare>
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
            background: 'linear-gradient(60deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                0
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Active Referal
              </p>
            </div>
            <span className="mx-2">
              <TbUserShare size={35} color="#ffcb6b"></TbUserShare>
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
            background: 'linear-gradient(290deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                5
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total Active Teams
              </p>
            </div>
            <span className="mx-2">
              <HiOutlineUserGroup size={35} color="#ffcb6b"></HiOutlineUserGroup>
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
            background: 'linear-gradient(120deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                20
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total In-Active Teams
              </p>
            </div>
            <span className="mx-2">
              <MdGroupOff size={35} color="#ffcb6b"></MdGroupOff>
            </span>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown2
