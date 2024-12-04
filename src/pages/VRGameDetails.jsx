import React from 'react'
import { Link } from 'react-router-dom'

export default function VRGameDetails() {
  return (
        <div className='p-14 text-center my-7 w-10/12 mx-auto rounded-xl bg-[rgb(170,111,219,0.2)]'>
        <h2 className="text-xl font-bold mb-5">VR Games Details<i className="fa-solid fa-vr-cardboard ml-2 text-2xl"></i></h2>
        <p className="font-bold text-gray-600 text-left">
        VR gaming offers immersive gameplay experiences, allowing players to interact with virtual worlds through specialized hardware such as VR headsets, controllers, and motion tracking systems. These games span a variety of genres, from action-packed adventures to relaxing simulations.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-800'>1. Popular Game Genres in VR</span>
        <br/>
        Action and Adventure: Intense, story-driven experiences with dynamic gameplay.
        <br/>
        Simulation: Realistic virtual scenarios like flying, cooking, or building.
        <br/>
        Rhythm and Music: Games based on rhythm and timing.
        <br/>
        Puzzle and Exploration: Focused on solving challenges in immersive environments.
        <br/>
        Horror: Designed to scare with heightened immersion in creepy settings.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-800'>2. Popular VR Games</span>
        <br/>
        <span className=' text-lg font-bold text-gray-800'>Action and Adventure Games</span>
        <br/>
        Half-Life: Alyx: A critically acclaimed first-person shooter set in the Half-Life universe.
        <br/>
        The Walking Dead: Saints & Sinners: A survival-horror adventure in a zombie-filled world.
        <br/>
        Boneworks: A physics-based action-adventure game offering realistic interactions.
       <br/>
        <span className=' text-lg font-bold text-gray-800'>Simulation Games</span>
        <br/>
        Microsoft Flight Simulator (VR): A hyper-realistic flight simulation with VR support.
        <br/>
        Job Simulator: A comedic take on various real-world professions.
        <br/>
        No Man’s Sky (VR): An open-world space exploration game with VR integration.
        <br/>
        <span className=' text-lg font-bold text-gray-800'>Rhythm and Music Games</span>
        <br/>
        Beat Saber: A rhythm game where players slash glowing blocks to the beat of music.
        <br/>
        Pistol Whip: A rhythm-based FPS with stylish visuals and fast-paced action.
        <br/>
        Synth Riders: A VR rhythm game with a focus on dance-like movement.
        Puzzle and Exploration Games.
        <br/>
        Myst (VR): A reimagining of the classic puzzle-adventure game for VR.
        <br/>
        The Room VR: A Dark Matter: A gripping mystery game with intricate puzzles.
        <br/>
        I Expect You to Die: A spy-themed escape room game with clever challenges.
        <br/>
        <span className=' text-lg font-bold text-gray-800'>Horror Games</span>
        <br/>
        Resident Evil 4 VR: A VR adaptation of the classic survival horror game.
        <br/>
        Phasmophobia: A multiplayer ghost-hunting horror game with VR support.
        <br/>
        Dreadhalls: A terrifying dungeon-crawling horror experience.
        </p>
        <div className="card-actions justify-center">
      <Link to='/'><button className="mt-8 btn bg-[#0a3d62] text-white">Back To Home</button></Link>
    </div>
    </div>
  )
}
