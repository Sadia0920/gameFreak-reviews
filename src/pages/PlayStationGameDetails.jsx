import React from 'react'
import { Link } from 'react-router-dom'

export default function PlayStationGameDetails() {
  return (
    <div className='p-14 text-center my-7 w-10/12 mx-auto rounded-xl bg-[rgb(46,134,222,0.2)]'>
    <h2 className="text-xl font-bold mb-5">PlayStation Games Details</h2>
    <p className="font-bold text-gray-600 text-left">
    PlayStation gaming involves playing games on Sony's PlayStation consoles, ranging from the PS1 to the latest PS5. It offers a diverse array of titles, including exclusives, AAA games, indie projects, and remastered classics.
    <br/>
    <br/>
    <span className=' text-xl font-bold text-gray-800'>1. Popular Game Genres on PlayStation</span>
    <br/>
    Action-Adventure: Blends exploration, combat, and storytelling.
    <br/>
    Role-Playing Games (RPGs): Focuses on character development and immersive narratives.
    <br/>
    First-Person and Third-Person Shooters: High-octane combat games.
    <br/>
    Sports and Racing: Realistic or arcade-style sports and vehicle games.
    <br/>
    Platformers: Games involving jumping, puzzle-solving, and exploration.
    <br/>
    <br/>
    <span className=' text-xl font-bold text-gray-800'>2. Popular PlayStation Games</span>
    <br/>
    <span className=' text-lg font-bold text-gray-800'>Action-Adventure Games</span>
    <br/>
    The Last of Us Part I & II: Post-apocalyptic survival games with deep storytelling.
    <br/>
    God of War (2018): A Norse mythology-inspired action game featuring Kratos and his son.
    <br/>
    Horizon Zero Dawn / Horizon Forbidden West: Open-world adventures set in a post-apocalyptic future.
    <br/>
    <span className=' text-lg font-bold text-gray-800'>Role-Playing Games (RPGs)</span>
    <br/>
    Final Fantasy VII Remake: A reimagining of the classic RPG with modern graphics and gameplay.
    <br/>
    Persona 5 Royal: A stylish turn-based RPG with social simulation elements.
    <br/>
    Elden Ring: A challenging open-world RPG with a dark fantasy setting.
    Shooter Games
    <br/>
    Call of Duty: Modern Warfare II: A high-intensity FPS with both campaign and multiplayer modes.
    <br/>
    Uncharted Series: Third-person shooters with cinematic storytelling and treasure-hunting adventures.
    <br/>
    Ratchet & Clank: Rift Apart: A family-friendly shooter-platformer hybrid.
    Sports and Racing Games.
    <br/>
    FIFA Series: Football simulation games with realistic gameplay.
    <br/>
    Gran Turismo 7: A realistic driving simulator with stunning visuals.
    <br/>
    NBA 2K Series: Basketball simulation games with career modes and online play.
    <br/>
    <span className=' text-lg font-bold text-gray-800'>Platformers</span>
    <br/>
    Sackboy: A Big Adventure: A whimsical platformer set in the LittleBigPlanet universe.
    <br/>
    Crash Bandicoot 4: It’s About Time: A colorful and challenging platformer.
    <br/>
    Astro’s Playroom: A delightful platformer designed to showcase the features of the PS5 DualSense controller.
    </p>
    <div className="card-actions justify-center">
  <Link to='/'><button className="mt-8 btn bg-[#0a3d62] text-white">Back To Home</button></Link>
</div>
</div>
  )
}
