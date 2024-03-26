// HomePage.js
import React from 'react';
import './App.css'; // Import CSS file for styling

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV series</a></li>
            <li><a href="#">Most Popular</a></li>
            <li><a href="#">Top Airing</a></li>
          </ul>
        </nav>
        <img class="link" src="https://images.sftcdn.net/images/t_app-icon-m/p/282cf8a3-1fac-46c6-b8b3-f6c682edb1d5/1466158043/aniwatch-logo" alt="" />
        <div className="log">
          <button>Login</button>
        </div>
        <img class="img" src="https://uchi.imgix.net/properties/anime2.png?crop=focalpoint&domain=uchi.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=558&ixlib=php-3.3.1&q=82&usm=20&w=992" alt="" />
        <div>
          <h2>"The Greatest Anime in the World"</h2>
          <p>Anime,a style of animation originating from Japan,<br />encompasses a diverse range of genres including <br /> action,
             romance,fantasy, science fiction, and slice of life.</p>
        </div>
      </header>
         <div className="button">
          <button>Watch Now</button>
         </div>
    </div>
  
  );
}

export default HomePage;

