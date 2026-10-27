/* eslint-disable react/prop-types */
const VideoTitle =({title, overview})=>{

  return<>
    <div className="pt-[20%] px-12 absolute text-white w-screen aspect-video">
      <h3 className="text-2xl font-bold ">{title}</h3>
      <p className="py-6 text-xs w-1/4 font-semibold">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-2 px-10 text-s bg-opacity-50 rounded-lg">Play</button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-10 text-x bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>

  </>
}
export default VideoTitle