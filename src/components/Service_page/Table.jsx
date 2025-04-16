import React from 'react';

const Table = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center bg-light p-5">
      <div
        className="p-5 bg-white rounded shadow-lg w-100"
        style={{ maxWidth: '1200px', overflowX: 'hidden' }}
      >
        <table className="table table-hover table-bordered text-center align-middle m-0" style={{ tableLayout: 'fixed' }}>
          <thead className="table-primary">
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark Anthony</td>
              <td>Otto von Bismarck</td>
              <td>@mdo_super_long_handle_example</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
