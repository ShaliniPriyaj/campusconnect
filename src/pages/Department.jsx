import React from "react";

const Department = () => {
  return (
    <div class="d-flex flex-column justify-content-start">
    <div class="wcu-section pt-5 pb-5" id="department">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <h1 class="wcu-section-heading">Department</h1>
            <div class="one">
                <h2>Class Time Table</h2>
              </div>
              <table>
                <thead>
                  <th>DAY/PERIOD</th>
                  <th>
                    <p>1</p>
                    <p>8.00-9.00</p>
                  </th>
                  <th>
                    <p>2</p>
                    <p>9.00-9.50</p>
                  </th>
                  <th>
                    <p>9.50-10.10</p>
                  </th>
                  <th>
                    <p>3</p>
                    <p>10.10-11.00</p>
                  </th>
                  <th>
                    <p>4</p>
                    <p>11.00-11.50</p>
                  </th>
                  <th>
                    <p>11.50-12.30</p>
                  </th>
                  <th>
                    <p>5</p>
                    <p>12.30-1:20</p>
                  </th>
                  <th>
                    <p>6</p>
                    <p>1.20-2.10</p>
                  </th>
                  <th>
                    <p>7</p>
                    <p>2.10-3.00</p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th>TUE</th>
                    <td colspan="2">SS</td>
                    <td rowspan="5">BREAK</td>
                    <td>TOC</td>
                    <td>POAI</td>
                    <td>LUNCH</td>
                    <td>IP</td>
                    <td colspan="2">RPA</td>
                  </tr>
                  <tr>
                    <th>WED</th>
                    <td>IP</td>
                    <td>POAI</td>
                    <td>LIB</td>
                    <td>LUNCH</td>
                    <td colspan="2">CN/POAI LAB</td>
                    <td>TOC</td>
                    <td>CN</td>
                  </tr>
                  <tr>
                    <th>THU</th>
                    <td>CN</td>
                    <td>IP</td>
                    <td colspan="2">IP/CN LAB</td>
                    <td>LUNCH</td>
                    <td>COUN</td>
                    <td>TOC</td>
                    <td>LIB</td>
                  </tr>
                  <tr>
                    <th>FRI</th>
                    <td colspan="2">RPA</td>
                    <td>CN</td>
                    <td>IP</td>
                    <td>LUNCH</td>
                    <td>NPTEL</td>
                    <td colspan="2">CN/IP LAB</td>
                  </tr>
                  <tr>
                    <th>SAT</th>
                    <td colspan="2">POAI/IP LAB</td>
                    <td>CN</td>
                    <td>POAI</td>
                    <td>LUNCH</td>
                    <td>TOC</td>
                    <td colspan="2">IP/CN LAB</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
              <h1 class="wcu-card-title mt-3">Computer Network</h1>
              <p class="wcu-card-title mt-3">CS 19542</p>
              <p class="wcu-card-title mt-3">Handled by: Mr.Ajay</p>
              <p class="wcu-card-title mt-3">Credit points: 5</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
                <h1 class="wcu-card-title mt-3">Principles Of AI</h1>
                <p class="wcu-card-title mt-3">CS 19541</p>
                <p class="wcu-card-title mt-3">Handled by: Mrs.Priya</p>
                <p class="wcu-card-title mt-3">Credit points: 4</p>
              </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="wcu-card p-3 mb-3">
                <h1 class="wcu-card-title mt-3">OOps using JAVA</h1>
                <p class="wcu-card-title mt-3">CS 19542</p>
                <p class="wcu-card-title mt-3">Handled by: Ms.Sanjana</p>
                <p class="wcu-card-title mt-3">Credit points: 4</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Department;