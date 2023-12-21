import React from 'react'
import coin from 'src/assets/brand/101-07.png'
import './Buyenfi.scss'
import usdt from 'src/assets/brand/usdt.png'
import swapBG from 'src/assets/brand/swapBG.jpg'
import exc from 'src/assets/brand/exc.png'
import styled from 'styled-components'
const Buyenfi = () => {
  const CustomSelect = styled.select`
    ${'' /* box-sizing: border-box; */}
    text-align: left;
    padding: 10px;
    ${'' /* background-color: red; */}
    border: none;
    border-bottom: 3px solid #7f4eb5;
    border-radius: 0;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    min-width: 10vw;
    outline: none;
    cursor: pointer;
    transition: border-bottom 0.3s ease;
    ${'' /* appearance: none; */}
    /* Remove the default dropdown arrow */

    option {
      padding: 10px; /* Add padding to the options */
      background-color: #3c215e;
      color: #fff;
    }
  `

  // const CustomSelectWrapper = styled.div`
  //   position: relative;
  //   width: 100%;
  // `

  // const CustomSelectIcon = styled.span`
  //   position: absolute;
  //   top: 50%;
  //   right: 12px;
  //   transform: translateY(-50%);
  //   pointer-events: none;
  // `

  return (
    <div className="d-flex justify-content-center align-items-center h">
      <div
        className=" text-white col-12 col-md-8 buyenfi-main pb-3"
        style={{ backgroundImage: `url(${swapBG})`, backgroundSize: 'cover' }}
      >
        <div
          className="py-2 h1"
          style={{ color: 'white', fontSize: '1.6rem', fontWeight: 'bolder', marginLeft: '1rem' }}
        >
          SWAP
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column ">
          <div className="d-flex justify-content-between w-75 bg align-items-center">
            <div className="d-flex align-items-center justify-content-start">
              <img src={coin} height={33} alt="" />
              <label className="label mx-2" htmlFor="">
                ENFI
              </label>
            </div>
            <div className="">
              {/* <select style={{ color: '#ffc919', fontSize: '1.2rem', fontWeight: '500' }}>
                <option value="" disabled selected>
                  Amount
                </option>
                <option value="Option 1">50</option>
                <option value="Option 2">100</option>
                <option value="Option 3">150</option>
              </select> */}
              {/* <CustomSelectWrapper> */}
              <CustomSelect>
                <option value="option1">Amount</option>
                <option value="option1">50</option>
                <option value="option2">100</option>
                <option value="option3">150</option>
              </CustomSelect>
              {/* <CustomSelectIcon>&#9660;</CustomSelectIcon> */}
              {/* </CustomSelectWrapper> */}
            </div>
          </div>
          <img className="my-1" src={exc} alt="" height={60} loading="lazy" />
          <div className="d-flex justify-content-between bg w-75 align-items-center">
            <div className="d-flex align-items-center justify-content-start">
              <img src={usdt} height={28} alt="" />
              <label className="label mx-2" htmlFor="">
                USDT
              </label>
            </div>
            <div className="">
              {/* <CustomSelectWrapper> */}
              <CustomSelect disabled></CustomSelect> {/* </CustomSelectWrapper> */}
            </div>
          </div>
        </div>

        <button className="button-87 mx-auto mt-5" role="button">
          Confirm Swap
        </button>
      </div>
    </div>
  )
}

export default Buyenfi
