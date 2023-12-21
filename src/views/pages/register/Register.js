import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCardGroup,
  CRow,
} from '@coreui/react'
import regBG from 'src/assets/brand/5068893.jpg'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilPhone, cilSend, cilBuilding } from '@coreui/icons'
import reglogo from 'src/assets/brand/reglogo.png'
const Register = () => {
  return (
    <div
      className="bg-light min-vh-100 py-2 d-flex flex-row align-items-center"
      style={{ backgroundImage: `url(${regBG})`, backgroundSize: 'cover' }}
    >
      <CContainer className="">
        <CRow className="  justify-content-center">
          <CCol sm={11} md={10} lg={8} xl={8} className="">
            <CCardGroup className=" d-flex flex-column flex-md-row h-100">
              {/* card1 */}
              <CCard
                className=" "
                style={{
                  background: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
                }}
              >
                <CCardBody className="  d-flex flex-column justify-content-center align-items-center text-center">
                  {' '}
                  <img src={reglogo} style={{ width: '10rem' }} alt="" />
                  <div>
                    <h2 className="text-white mt-2">Sign Up Now !!</h2>
                    <br />
                    <p className="mb-1" style={{ color: '#dbdbdb' }}>
                      Not Signed in yet !{' '}
                    </p>

                    <p className="mb-5" style={{ color: '#dbdbdb' }}>
                      Register yourself to join us
                    </p>
                    <p className="mb-0" style={{ color: '#dbdbdb' }}>
                      Already Have An Account !
                    </p>
                    <Link to="/">
                      <CButton color="warning" className="mt-3 px-5 " active tabIndex={-1}>
                        login
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
              {/* card2 */}
              <CCard className="col-lg-6 col-md-6 col-12">
                <CCardBody className=" py-2">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Sponser ID" autoComplete="Sponser ID" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="Sponser Name" autoComplete="Sponser Name" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="User Name" autoComplete="User Name" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilSend}></CIcon>
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="Email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilBuilding}></CIcon>
                      </CInputGroupText>
                      <CFormInput placeholder="Country" autoComplete="Country" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone}></CIcon>
                      </CInputGroupText>
                      <CFormInput placeholder="Mobile" autoComplete="Mobile" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton style={{ backgroundColor: '#543279' }}>Create Account</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
