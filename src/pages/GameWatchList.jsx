import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

export default function GameWatchList() {
  const {user} = useContext(AuthContext)
  const loadedWatchList = useLoaderData();
  // const {_id,yourName,email,gameName,genres,details,photo,rating,year} = loadedWatchList
  const showWatchList = loadedWatchList.filter((email) => email.email == user.email)
  return (
    <div className='w-10/12 mx-auto py-7'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>Email</th>
        <th>Game Name</th>
        <th>photo</th>
        <th>Genres</th>
        <th>Rating</th>
        <th>Details</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody> 
      {/* row 1 */}
     {
      showWatchList.map((list,idx) =>  <tr key={list._id}>
        <th>{idx + 1}</th>
        <td>{list.yourName}</td>
        <td>{list.email}</td>
        <td>{list.gameName}</td>
        <td>{list.photo}</td>
        <td>{list.genres}</td>
        <td>{list.rating}</td>
        <td>{list.details}</td>
        <td>{list.year}</td>
    
        <td>
          <button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button>
          {/* <button onClick={()=>handleDeleteUser(user._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button>  */}
      </td>
      </tr>)
      }
      </tbody>
  </table>
</div>
    </div>
  )
}
