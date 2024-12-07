import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

export default function GameWatchList() {
  const {user} = useContext(AuthContext)
  const loadedWatchList = useLoaderData();
  
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
    
      </tr>)
      }
      </tbody>
  </table>
</div>
    </div>
  )
}
