import Video12NetfilxCards from "./Video12NetfilxCards";
import seriesData from "../../api/seriesData.json";
import Video16ChildComponent from "./Video16ChildComponent";
import challenge from "../../api/challenge.json";

const Video13Props = () => {
  return (
    <>
      {seriesData.map((items) => {
        return (
          <>
            <Video12NetfilxCards key={items.id} items={items} />
          </>
        );
      })}
      {
        challenge.map((items)=>
        {
           return <Video16ChildComponent  key={items.name} items={items}/>
        })
      }
    </>
  );
};
export default Video13Props;
