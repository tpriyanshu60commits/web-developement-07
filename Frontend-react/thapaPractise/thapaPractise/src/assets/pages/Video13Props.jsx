import Video12NetfilxCards from "./Video12NetfilxCards";
import seriesData from "../../api/seriesData.json"
const Video13Props = ()=>
{
    return(
        <>
        {seriesData.map((items)=>
        {
            return(
                <Video12NetfilxCards key={items.id} items={items}/>

            )
        })}
        </>
    )
}
export default Video13Props;