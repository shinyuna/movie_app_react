import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    count: 1
  }
  plus = () => {
    this.state.count ++
  };
  minus = () => {
    this.state.count --
  };
  render() {
    return(
      <div>
        <p>The number is {this.state.count}</p>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// const foodILike = [
//   {
//     id: 1,
//     name: "Jelly",
//     image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_26BEA238AA34570D29F9FC113FCA10C5.jpg",
//     rating: "3.0"
//   },
//   {
//     id: 2,
//     name: "Jjuggumi",
//     image: "https://foodyap.co.kr/shopimages/goldplate1/049003000012.jpg?1579764539",
//     rating: "5.0"
//   },
//   {
//     id: 3,
//     name: "samgupsal",
//     image: "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg",
//     rating: "2.5"
//   },
//   {
//     id: 4,
//     name: "tuppokki",
//     image: "https://www.menupan.com/restaurant/restimg/003/zzmenuimg/b4028831_z.jpg",
//     rating: "4.0"
//   }
// ]

// function Food({ name, picture, rating }) { 
//   return (
//     <div className="food">
//       <h2>I like { name }</h2>
//       <p>⭐️ {rating}/5.0</p>
//       <img src={picture} alt={name}/>
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired
// }

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} rating={dish.rating} key={dish.id}/>
// }

// function App() {
//   return (
//     <div>{ foodILike.map(renderFood) }</div>
//   );
// }

export default App;
