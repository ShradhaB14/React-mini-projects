// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ResCard, { withPromotedLabel} from "./ResCard"
import { restaurantData } from "@/utils/data"

const RestaurantList =()=>{
const ResPromotedLabel = withPromotedLabel(ResCard);
return(
<div className="p-4 space-y-4">
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Search
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        restaurantData.map((res)=>
           res.info.promoted ? <ResPromotedLabel resDetail={res.info}/> : <ResCard  resDetail={res.info}/>
        )
      } 
      {/* {
        restaurantData.map((res)=>
          res.info.discount ? <ResDiscountLabel resDetail={res.info} /> 
          : res.info.promoted ? <ResPromotedLabel resDetail={res.info}/> 
          : <ResCard  resDetail={res.info}/>
        )
      } */}
      {/* {
        restaurantData.map((res)=>{
          const { discount, promoted } = res.info;
          if(discount) return <ResDiscountLabel resDetail={res.info} /> 
          if(promoted) return <ResPromotedLabel resDetail={res.info}/>
          return <ResCard  resDetail={res.info}/>
        })
      } */}

      

{/* {restaurantData.map((res) => {
  const { promoted, discount } = res.info;

  let CardComponent = ResCard;

  if (promoted) {
    CardComponent = withPromotedLabel(CardComponent);
  }

  if (discount) {
    CardComponent = discountedCard(CardComponent);
  }

  return (
    <CardComponent
      key={res.info.id}
      resDetail={res.info}
    />
  );
})} */}

  


    </div>
</div>
 )
}
export default RestaurantList
