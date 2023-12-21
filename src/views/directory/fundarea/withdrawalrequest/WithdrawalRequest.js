import React from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'

const WithdrawalRequest = () => {
  return (
    <div
      className="col-12  d-flex flex-column bg-danger  align-items-start "
      style={{
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundImage: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
      }}
    >
      <h4>withdrawal Request</h4>
      <div className="d-flex w-100 gap-2 mt-2 flex-lg-row flex-column ">
        <div className="w-100 d-flex flex-column ">
          <label htmlFor="">Balance Enfi</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
        <div className="w-100 d-flex flex-column">
          <label htmlFor="">Req. Income Wallet Amount Enfi</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
      </div>
      <div className=" mt-4">
        <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
          Submit
        </Button>
      </div>{' '}
    </div>
  )
}

export default WithdrawalRequest
