import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'
const WithdrawalHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState('Withdrawal Pending')

  const handleStatusClick = (status) => {
    setSelectedStatus(status)
  }

  return (
    <div>
      <h5 className="text-white mb-3">Withdrawal Request Report</h5>
      <div className="d-flex flex-wrap gap-2">
        <Button
          className={`px-4 py-2 me-2 ${selectedStatus === 'Withdrawal Pending' ? 'selected' : ''}`}
          style={{
            backgroundColor: selectedStatus === 'Withdrawal Pending' ? '#2d164f' : '#543279',
            color: 'white',
          }}
          onClick={() => handleStatusClick('Withdrawal Pending')}
        >
          Withdrawal Pending
        </Button>
        <Button
          className={`px-4 py-2 me-2 ${selectedStatus === 'Withdrawal Approved' ? 'selected' : ''}`}
          style={{
            backgroundColor: selectedStatus === 'Withdrawal Approved' ? '#2d164f' : '#543279',
            color: 'white',
          }}
          onClick={() => handleStatusClick('Withdrawal Approved')}
        >
          Withdrawal Approved
        </Button>
        <Button
          className={`px-4 py-2 me-2 ${selectedStatus === 'Withdrawal Rejected' ? 'selected' : ''}`}
          style={{
            backgroundColor: selectedStatus === 'Withdrawal Rejected' ? '#2d164f' : '#543279',
            color: 'white',
          }}
          onClick={() => handleStatusClick('Withdrawal Rejected')}
        >
          Withdrawal Rejected
        </Button>
      </div>
      <div className="mt-3">
        <h5 className="text-white">{selectedStatus}</h5>
        <div style={{ overflow: 'auto' }}>
          <table className="custom-table mt-2">
            <thead className="table-header">
              <tr>
                <th>Sr. No.</th>
                <th>Member ID</th>
                <th>Name</th>
                <th>Current Wallet</th>
                <th>Req. Wallet</th>
                <th>Deduction</th>
                <th>Payable</th>
                <th>Request Date</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows with data here */}
              <tr>
                <td>1</td>
                <td>Approved</td>
                <td>Payment received</td>
                <td>1</td>
                <td>Approved</td>
                <td>Payment received</td>
                <td>1</td>
                <td>Approved</td>
                <td>Payment received</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pending</td>
                <td>Waiting for confirmation</td>
                <td>2</td>
                <td>Pending</td>
                <td>Waiting for confirmation</td>
                <td>2</td>
                <td>Pending</td>
                <td>Waiting for confirmation</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>{' '}
        </div>
      </div>
    </div>
  )
}

export default WithdrawalHistory
