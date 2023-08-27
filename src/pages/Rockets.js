import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function Rockets() {
  const [rockets, setRockets] = useState(null);
  const [selectedRocket, setSelectedRocket] = useState(null);

  useEffect(() => {
    const fetchRockets = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/rockets`);
      const data = await res.json();
      setRockets(data);
    };

    fetchRockets();
  }, []);

  return (
    <>
      {!rockets ? (
        <Loading />
      ) : (
        <section className="pages-showcase">
          <div className="overlay py-20 lg:pt-32">
            <h1 className="heading ml-5">Rockets</h1>

            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {rockets.map(({ id, name, description, flickr_images, wikipedia }) => (
                <div
                  key={id}
                  onClick={() => setSelectedRocket(id)}
                  className="rocket-card"
                >
                  <article className="articles">
                    <img
                      src={flickr_images[0]}
                      alt={name}
                      className="h-72 w-full object-cover"
                    />
                    <div className="p-5">
                      <h2 className="text-white font-bold text-xl my-1">
                        {name}
                      </h2>
                      <p className="text-white opacity-75 text-sm mb-5">{`${description.substring(
                        0,
                        100
                      )}...`}</p>
                      <Link to="#" className="btn">
                        Details
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          {selectedRocket && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2 className="popup-heading">
                  {rockets.find((rocket) => rocket.id === selectedRocket)?.name}
                </h2>
                <p className="popup-description">
                  {rockets.find((rocket) => rocket.id === selectedRocket)?.description}
                </p>
                <a
                  href={rockets.find((rocket) => rocket.id === selectedRocket)?.wikipedia}
                  className="popup-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rockets.find((rocket) => rocket.id === selectedRocket)?.wikipedia}
                </a>
                <button className="popup-close" onClick={() => setSelectedRocket(null)}>Close</button>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
