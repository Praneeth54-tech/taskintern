import React from "react";
//infiniteScrollcomponent
import InfiniteScroll from "react-infinite-scroll-component";
//context APi
import { useGlobalContext } from "../context";

//component
import Loading from "./Loading";
//css
import "./Posts.css";

function Posts() {
  const { data, fetchNext } = useGlobalContext();
  return (
    <div className="Posts">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchNext}
        hasMore={true}
        loader={<Loading />}
      >
        {data.map((x) => {
          const { _id, name, trips, airline } = x;
          return (
            <section className="card" key={_id}>
              <h4>{name}</h4>
              <p>
                Trips: <span>{trips}</span>
              </p>
              {airline.map((x) => {
                const { id, name, website, country } = x;
                return (
                  <div className="airline" key={id}>
                    <p>company : {name}</p>
                    <p>
                      country : <span>{country}</span>
                    </p>
                    <a href={website} target="_blank">
                      details
                    </a>
                  </div>
                );
              })}
            </section>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Posts;
