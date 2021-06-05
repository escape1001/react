import './App.css';
import PropTypes from 'prop-types';

function Thumb({name, image, rating}){
  return <div className='thumb'>
    <h2>I love {name}</h2>
    <img src={image} alt={name}/>
    <p>{rating}</p>
  </div>;  
}

Thumb.propTypes = {
  name : PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};

const artist = [
  {
    id : 0,
    name:"SEVENTEEN",
    image:"https://cdn-contents.weverse.io/static/community/svt/semicolon/home_web.jpg",
    rating:5
  },
  {
    id : 1,
    name:"Dreamcatcher",
    image:"https://cdn-contents.weverse.io/admin/xlx2048/png/7ee41bf52bc84908b2b3a1c83f68ebb8654.png",
    rating:4.5
  },
  {
    id : 2,
    name:"Weeekly",
    image:"	https://cdn-contents.weverse.io/admin/xlx2048/png/b9fa6cef03cb4fef958c6d43f7aa0542409.png",
    rating:4.8
  },
  {
    id : 3,
    name:"NU'EST",
    image:"		https://cdn-contents.weverse.io/admin/xlx2048/png/4b551253c138403f945663f9228b4a76198.png",
    rating:4.6
  }
];

function renderThumb(item){
    return <Thumb name={item.name} image={item.image} key={item.id} rating={item.rating}/>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {artist.map(renderThumb)}
    </div>  
  );
}

export default App;
