import React from 'react'
import { Link } from 'react-router-dom'

export default function PCGameDetails() {
  return (
    <div className='p-14 text-center my-7 w-10/12 mx-auto rounded-xl bg-[rgb(46,134,222,0.2)]'>
        <h2 className="text-xl font-bold mb-5">PC Games Details</h2>
        <p className="font-bold text-gray-600 text-left">PC gaming is one of the most versatile forms of gaming, offering superior performance, a vast game library, and modding opportunities. Whether you're into high-end AAA titles, indie masterpieces, or competitive esports, PC gaming has something for everyone.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-800'>1. Key Features of PC Gaming</span>
        <br/>
        Customizable Hardware: Gamers can upgrade components (GPU, CPU, RAM) to achieve the best performance.
        <br/>
        Modding: Many games allow modifications to add custom content or enhance gameplay.
        <br/>
        Broad Compatibility: PCs support a wide variety of peripherals, from gaming keyboards and mice to VR headsets.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-800'>2. Popular Game Genres on PC</span>
        <br/>
        First-Person Shooters (FPS): Known for immersive action and competitive multiplayer.
        <br/>
        Role-Playing Games (RPGs): Deep narratives and customizable characters.
        <br/>
        Real-Time Strategy (RTS): Tactical gameplay, managing armies and resources.
        <br/>
        Simulation: Realistic experiences like building cities or flying planes.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-800'>3. Popular PC Games</span>
        <br/>
        Cyberpunk 2077: A futuristic RPG set in a dystopian world.
        <br/>
        Red Dead Redemption 2: An open-world western adventure with incredible storytelling.
        <br/>
        Assassin’s Creed Valhalla: An action-adventure RPG in the Viking era.
        Competitive Multiplayer
        <br/>
        Valorant: A character-based tactical shooter.
        <br/>
        League of Legends: A MOBA (Multiplayer Online Battle Arena) game with a global competitive scene.
        <br/>
        Stardew Valley: A relaxing farming and life simulation game.
        <br/>
        Hollow Knight: A challenging 2D platformer with stunning visuals.
        <br/>
        The Sims 4: A life simulation game with endless creativity.
        <br/>
        Cities: Skylines: A city-building simulator with deep customization.
        <br/>
        The Witcher 3: Wild Hunt: A story-driven RPG with an expansive world.
        <br/>
        Elden Ring: A challenging action RPG with an open-world twist.
        VR-Compatible Games
        <br/>
        Half-Life: Alyx: A VR-exclusive FPS from the Half-Life series.
        <br/>
        Beat Saber: A rhythm-based game using VR motion controls.
        </p>
        <div className="card-actions justify-center">
      <Link to='/'><button className="mt-8 btn bg-[#0a3d62] text-white">Back To Home</button></Link>
    </div>
    </div>
  )
}
