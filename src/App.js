import React, { Component } from 'react';
import './App.css';

const thumbs = [
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    link: 'https://images.pexels.com/photos/1667005/pexels-photo-1667005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
]

class App extends Component {
  renderThumbs = thumbs => {
    return thumbs.map((thumb, index) => (
        <a
          href='#'
          key={index}
          style={{
            animationDelay: `${.5 * index / 2.2}s`,
            backgroundImage: `url(${thumb.link})`
          }}
          className="thumb"
        >
          {index}
        </a>
      )
    )
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="container">
            <h1>Css Animation Challenge</h1>
            <input type="text" name="search" className="search-bar" placeholder="Search.."></input>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="thumbs-container">
              { this.renderThumbs(thumbs) }
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
