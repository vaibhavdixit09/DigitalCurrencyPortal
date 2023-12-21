import React from 'react'
import 'src/scss/_custom.scss'
import logo from 'src/assets/brand/enfilogoCrop.png'
import bnblogo from 'src/assets/brand/logo.png'
import buylogo from 'src/assets/brand/buy.png'
import connectlogo from 'src/assets/brand/connect.png'
import { Link, Router, Route } from 'react-router-dom'
const Default = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 ">
        <div className="strip">
          <span className="price strip-box">
            <span className="d-flex">
              <img src={logo} height={30} alt="" />
              &nbsp;
              <p className="">Enfi Price :</p>
            </span>
            &nbsp;
            <p className="">200.00</p>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="bnb strip-box">
            {' '}
            <span className="d-flex">
              <img src={bnblogo} height={30} alt="" />
              &nbsp;
              <p className="">BNB Smart Chain</p>
            </span>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="connect strip-box">
            {' '}
            <span className="d-flex">
              <img src={connectlogo} height={30} alt="" />
              &nbsp;
              <p className="">Connect wallet</p>
            </span>
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="strip">
          <span className="buyenfi strip-box">
            {' '}
            <span className="d-flex">
              <img src={buylogo} height={30} alt="" />
              &nbsp;
              <Link to="/directory/buyenfi" style={{ textDecoration: 'none', color: 'white' }}>
                <p className=" ">Buy Enfi</p>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Default
