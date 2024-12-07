import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileGameDetails() {
  return (
    <div className='p-14 text-center my-7 w-10/12 mx-auto rounded-xl bg-[rgb(170,111,219,0.2)]'>
        <h2 className="text-xl font-bold mb-5">Mobile Games Details<i class="fa-solid fa-mobile-screen ml-2 text-2xl"></i></h2>
        <p className="font-semibold  text-left">
        Mobile gaming involves playing video games on smartphones or tablets. It caters to casual players as well as competitive gamers, offering a wide variety of genres, from puzzles to battle royale. The platform is supported by app stores like Google Play (Android) and the Apple App Store (iOS).
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-900'>1. Popular Game Genres on Mobile</span>
        <br/>
        Battle Royale: Large-scale multiplayer matches where the last player/team standing wins.
        <br/>
        Puzzle Games: Simple, addictive gameplay with problem-solving challenges.
        <br/>
        RPGs (Role-Playing Games): Character development and immersive storytelling.
        <br/>
        Simulation: Games that mimic real-life scenarios, like building or managing systems.
        <br/>
        Casual Games: Easy-to-learn games for short bursts of play.
        <br/>
        <br/>
        <span className=' text-xl font-bold text-gray-900'>2. Popular Mobile Games</span>
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Battle Royale Games</span>
        <br/>
        PUBG Mobile: A battle royale shooter with realistic graphics and mechanics.
        <br/>
        Call of Duty: Mobile: Offers a mix of battle royale and traditional multiplayer modes.
        <br/>
        Free Fire: A fast-paced battle royale game optimized for lower-end devices.
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Casual and Puzzle Games</span>
        <br/>
        Candy Crush Saga: A popular match-three puzzle game with hundreds of levels.
        <br/>
        Among Us: A social deduction game where players work together to identify impostors.
        <br/>
        Subway Surfers: An endless runner game with vibrant graphics.
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Role-Playing and Adventure Games</span>
        <br/>
        Genshin Impact: An open-world RPG with stunning visuals and engaging combat.
        <br/>
        AFK Arena: A hero-collection RPG with idle gameplay mechanics.
        <br/>
        Fate/Grand Order: A narrative-driven RPG featuring strategic turn-based combat.
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Simulation Games</span>
        <br/>
        The Sims Mobile: A life simulation game where players create and manage virtual characters.
        <br/>
        SimCity BuildIt: A city-building game where players construct and manage their dream metropolis.
        <br/>
        Plague Inc.: A strategy game where players design pathogens to infect the world.
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Competitive and Esports Games</span>
        <br/>
        Clash Royale: A strategy-based card and tower defense game.
        <br/>
        Mobile Legends: Bang Bang: A multiplayer online battle arena (MOBA) game similar to League of Legends.
        <br/>
        Brawl Stars: A multiplayer action game with various modes and unique characters.
        <br/>
        <span className=' text-lg font-bold text-gray-900'>Sports and Racing Games</span>
        <br/>
        FIFA Mobile: A football (soccer) simulation game with realistic gameplay.
        <br/>
        Asphalt 9: Legends: An arcade racing game with stunning visuals and intense races.
        <br/>
        Real Racing 3: A more realistic racing simulator with licensed cars and tracks.
        </p>
        <div className="card-actions justify-center">
      <Link to='/'><button className="mt-8 btn bg-[#0a3d62] text-white">Back To Home</button></Link>
    </div>
    </div>
  )
}
