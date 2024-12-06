import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

export default function GameWatchList() {
  const {user} = useContext(AuthContext)
  const loadedWatchList = useLoaderData();
  // const {_id,yourName,email,gameName,genres,details,photo,rating,year} = loadedWatchList
  const setWatchList = loadedWatchList.filter((email) => email.email == user.email)
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
        <th>Game Name</th>
        <th>Genres</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody> 
      {/* row 1 */}
     {
      setWatchList.map((list,idx) =>  <tr key={list._id}>
        <th>{idx + 1}</th>
        <td>{list.yourName}</td>
        <td>{list.email}</td>
        <td>{list.gameName}</td>
        <td>{list.genres}</td>
    
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
