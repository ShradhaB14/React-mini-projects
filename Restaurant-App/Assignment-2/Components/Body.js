import RestaurantList from "./RestaurantList"

export const Body = () =>{
  return (
    <div className="body">
      <div className='search'>
        <input type="text" />
      </div>
      <div className="res-container">
        <RestaurantList/>
      </div>
    </div>
  )
}