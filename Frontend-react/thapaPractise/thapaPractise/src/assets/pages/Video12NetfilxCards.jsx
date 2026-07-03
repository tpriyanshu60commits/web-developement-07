import React from "react";
import seriesData from "../../api/seriesData.json";
import { Fragment } from "react";

const Video12NetfilxCards = () => {
  return (
    <Fragment>
      {seriesData.map((items) => {
        return (
            <ul  key={items.id}>
              <li >
                <img src={items.img_url} alt="" width="30%" />
                <p>{items.name}</p>
                <p>{items.rating}</p>
                <p>{items.description}</p>
                <p>{items.cast}</p>
                <p>{items.genre}</p>
                <button>
                  <a href={items.watch_url}>Watch now</a>
                </button>
                <hr />
              </li>
            </ul>
        );
      })}
    </Fragment>
  );
};

export default Video12NetfilxCards;
