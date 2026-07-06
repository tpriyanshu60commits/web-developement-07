import React from "react";
import seriesData from "../../api/seriesData.json";
import { Fragment } from "react";

const Video12NetfilxCards = ({ items }) => {
  console.log(items);
  const{img_url , name , rating , description , cast , genre} = items
  
  return (
    <ul>      
      <li>
        <img src={img_url} alt="" width="30%" />

        <p>{name}</p>
        <p>{rating}</p>
        <p>{description}</p>
        <p>{cast}</p>
        <p>{genre}</p>

        <button>
          <a href={items.watch_url}>Watch Now</a>
        </button>

        <hr />
      </li>
    </ul>
  );
};

export default Video12NetfilxCards;
