import { Link, Outlet } from 'react-router-dom'
import mydata from '../data/data'
import './pagesyle/Home.css'
const Home = () => {

  function handleClick(id) {
    getID(id);
  }

  return (
    <>
      <div className='home'>
        {
          mydata.map(({ id, title, image, description, price }) => {
            return (
              <div key={id} className='card'>
                <Link to={id.toString()} onClick={handleClick}>
                  <h1>{title}</h1>
                  <img src={image} alt="" />
                  <p>{description}</p>
                  <p>{price}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
