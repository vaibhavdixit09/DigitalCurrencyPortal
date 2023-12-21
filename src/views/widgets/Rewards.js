import React from 'react'
import { CRow, CCol } from '@coreui/react'
import { TbUsersGroup } from 'react-icons/tb'
import { GiTeamIdea } from 'react-icons/gi'
import { AiOutlineTrophy, AiOutlineUsergroupAdd } from 'react-icons/ai'
import 'src/scss/_custom.scss'
const Rewards = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <div
          className="info p-3 mb-3 hover-class"
          style={{
            // backgroundImage: `url(${texture})`,
            // backgroundSize: 'cover',
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(260deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                10.00<span className="px-1 fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Direct Referal Reward
              </p>
            </div>
            <span className="mx-2">
              <GiTeamIdea size={35} color="#ffcb6b"></GiTeamIdea>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="warning p-3 mb-3 hover-class "
          style={{
            // backgroundImage: `url(${texture})`,
            // backgroundSize: 'cover',
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(150deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                20.00<span className="px-1 fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total Reward
              </p>
            </div>
            <span className="mx-2">
              <AiOutlineTrophy size={35} color="#ffcb6b"></AiOutlineTrophy>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="danger p-3 mb-3 hover-class "
          style={{
            // backgroundImage: `url(${texture})`,
            // backgroundSize: 'cover',
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(70deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                5<span className="px-1 fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Team Building Reward
              </p>
            </div>
            <span className="mx-2">
              <AiOutlineUsergroupAdd size={35} color="#ffcb6b"></AiOutlineUsergroupAdd>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="primary p-3 mb-3 hover-class "
          style={{
            // backgroundImage: `url(${texture})`,
            // backgroundSize: 'cover',
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(10deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                0.00<span className="px-1 fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Community Reward
              </p>
            </div>
            <span className="mx-2">
              <TbUsersGroup size={35} color="#ffcb6b"></TbUsersGroup>
            </span>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default Rewards
