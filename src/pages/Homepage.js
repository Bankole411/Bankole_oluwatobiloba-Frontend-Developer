import React from 'react';
import SearchComponent from '../components/SearchComponent';

function Homepage() {
  return (
    <section className="hero">
      <div className="overlay">
        <article>
          <h1 className="heading text-center">SpaceX Capsules and Rockets</h1>
        </article>
        <SearchComponent />
      </div>
    </section>
  );
}

export default Homepage;
