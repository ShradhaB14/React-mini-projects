
interface RescardProps  {
  cloudinaryImageId: string,
  sla: {
    deliveryTime: number;
  };
  cuisines: string[],
  locality: string,
  name: string,
  avgRating: number
}


const ResCard=({ resDetail }: { resDetail: RescardProps })=>{
  const { cloudinaryImageId, sla, cuisines, locality, name, avgRating } = resDetail

 return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:scale-105 transition duration-300 cursor-pointer">
      
      
  {/* Image Container */}
      <div className="relative">
        <img
          src={cloudinaryImageId}
          alt="restaurant"
          className="w-full h-44 object-cover"
        />

        {/* 🔥 Name on Image */}
        <p className="absolute bottom-2 left-2 text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded-md">
          {name}
        </p>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        
        
<div className="flex items-center justify-between">
          
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
            ⭐ {avgRating}
          </span>

          <span className="text-sm text-gray-700 font-medium">
           {sla?.deliveryTime} mins
          </span>

        </div>


        <p className="text-sm text-gray-600 truncate">
          🍽️ {cuisines.join(',')}
        </p>

        <p className="text-xs text-gray-500 truncate">
          📍 {locality}
        </p>

      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const withPromotedLabel = (ResCard: React.ComponentType<any>) =>{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return(props: any)=>{
    console.log(props)
    return(
      <div className="relative">
        <label htmlFor="" className="absolute top-2 left-2 z-50 bg-black text-white">Promoted</label>
        {props?.resDetail?.discount && <label htmlFor="" className="absolute top-2 right-2 z-50 bg-black text-white">Discount</label>}
        <ResCard {...props}/>
      </div>
    )
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const discountedCard = ()=>{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return(props: any)=>{
    return(
      <div className="relative">
        <label className="absolute bottom-20 right-10 z-50 bg-black text-white">50% Off</label>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard