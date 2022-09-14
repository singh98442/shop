import React from 'react'
import { tableDataRow } from '../data/Data';

const Table = () => {
  return (
    <div className='tableContainer'>
      <table className=' bg-orange-300 p-6 rounded-md'>
        <thead>
         <tr className=' text-center'>
          <th>employee_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Address</th>
         </tr>
        </thead>
        <tbody className=' text-center gap-4'>
        {tableDataRow.map((data,index)=>{
          return(
            <tr key={index}>
              <td className=' font-bold'>{data.id}</td>
              <td>{data.nane}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      
    </div>
  )
}

export default Table;
