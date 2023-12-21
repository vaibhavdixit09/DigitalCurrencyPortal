import React from 'react'
import 'src/views/directory/stacking/addfunds/table.scss'
import { Button } from 'reactstrap'
import styled from 'styled-components'
const LevelTeam = () => {
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
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row align-items-baseline justify-content-lg-between  my-2">
        <h5 className="text-white my-2">My Downline Report</h5>
        <div className="d-flex flex-column flex-lg-row gap-2   text-white align-items-start">
          <CustomSelect>
            <option value="option" disabled>
              Select Level
            </option>
            <option value="option1">level 1</option>
            <option value="option2">level 2</option>
            <option value="option3">level 3</option>
            <option value="option4">level 4</option>
            <option value="option5">level 5</option>
            <option value="option6">level 6</option>
            <option value="option7">level 7</option>
            <option value="option8">level 8</option>
            <option value="option9">level 9</option>
            <option value="option10">level 10</option>
            <option value="option11">level 11</option>
            <option value="option12">level 12</option>
            <option value="option13">level 13</option>
            <option value="option14">level 14</option>
            <option value="option15">level 15</option>
          </CustomSelect>
          <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
            Search
          </Button>
        </div>
      </div>
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead className="table-header">
            <tr>
              <th>Sr. No.</th>
              <th>Ambassador ID</th>
              <th>Member Name</th>
              <th>Level</th>
              <th>Reg. Date</th>
              <th>Activation Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Sponsor ID</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            <tr>
              <td>1</td>
              <td>2023-10-01</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>Approved</td>
              <td>Approved</td>
              <td>Payment received</td>
              <td>Payment received</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LevelTeam
