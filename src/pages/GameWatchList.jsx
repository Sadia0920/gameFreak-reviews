import React from 'react'

export default function GameWatchList() {
  return (
    <div className='w-10/12 mx-auto py-7'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation Time</th>
        <th>Last Login Time</th>
        <th>Action</th>
      </tr>
    </thead>
    {/* <tbody> */}
      {/* row 1 */}
     {/* {
      users.map(user =>  <tr key={user._id}>
        <th>1</th>
        <td>Sadia</td>
        <td>sadiaafrin0920@gmail.com</td>
        <td>01,12,2024</td>
        <td>05,12,2024</td>
        // <td>{user.createdAt}</td>
        // <td>{user.lastSignInTime}</td>
        <td>
          <button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button>
          {/* <button onClick={()=>handleDeleteUser(user._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button> */}
        {/* </td> */}
      {/* </tr>) */}
     {/* } */}
      
    {/* </tbody> */}
  </table>
</div>
    </div>
  )
}
