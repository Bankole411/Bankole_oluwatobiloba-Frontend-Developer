import {useState, useEffect} from "react";
import Loading from "../components/Loading"

export default function Capsules(){
    const [capsuleData, setCapsuleData] = useState([]);

    useEffect(() => {
        const fetchCapsules = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/capsules")
            const data = await res.json()
            setCapsuleData(data)
        } 

        fetchCapsules()
    }, [])
    return(
        <>
           {!capsuleData ? <Loading /> :<section className="py-32">
                <h1 className="heading text-center mb-5 mb-3">Capsules</h1>
                <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
              {capsuleData.map(
                ({
                  reuse_count,
                  water_landings,
                  land_landings,
                  last_update,
                  launches,
                  serial,
                  status,
                  type,
                  id,
                }) => (
                  <article key={id} className="articles p-5">
                    <h2 className="text-white font-bold text-xl">
                      {type},{" "}
                      <span className="opacity-75 text-lg font-normal">
                        {serial}
                      </span>
                    </h2>
                    <ul className="text-sm opacity-75 text-white mt-3">
                      <li>Reused {reuse_count} times</li>
                      <li>{launches.length} launches</li>
                      <li>{water_landings} water landings</li>
                      <li>{land_landings} land landings</li>
                      <li
                        className={`capitalize ${
                          status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Status: {status}
                      </li>
                    </ul>
                    <p className="text-white text-sm opacity-75 mt-3">
                      {last_update}
                    </p>
                  </article>
                )
              )}
            </div>
            </section>} 
        </>
    )
}