import Game1 from '../assets/Need for Speed.jpg'
import Game2 from '../assets/grand theft auto.jpg'
import Game3 from '../assets/resident evil.jpg'
import Game4 from '../assets/prince of persia.jpg'


export default function Hero() {
  return (
    <div className='w-10/12 mx-auto my-7'>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={Game1}
      className="w-full h-[450px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={Game2}
      className="w-full h-[450px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={Game3}
      className="w-full h-[450px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={Game4}
      className="w-full h-[450px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}
