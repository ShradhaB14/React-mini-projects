const RestaurantCard =()=>{
return(
  <div className="rescard-container">
    <div className="img-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/4e9571f5-b769-468b-825c-e32a5ef68c63_414835.JPG" alt="" />
    </div>
    <div>
      <div>
       <div> <div className="restaurant-card-text-container">Pizza Hut</div> </div>
        <div className="restaurant-card-subtext-container">
            <div className="star-container">4.2</div>
            <div className="duration">45-50mins</div>
        </div>
        <div className="restaurant-card-description-container">
            <div className="cuisine-container">Pizzas</div>
            <div className="location-container">Pune</div>
        </div>
      </div>
    </div>
  </div>
)
}
export default RestaurantCard