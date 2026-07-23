const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-10 pt-[20%] pb-[240px] rounded-2xl pl-5 text-white bg-gradient-to-r from-black/70">
        <div className='m-auto '>
            <h2 className=" font-bold text-3xl p-2 drop-shadow-lg ">{title}</h2>
            <p className=" w-5/12 p-2">{overview}</p>
        </div>
        <div className="flex">
            <button className="bg-white rounded-3xl py-2 px-5 m-2 w-30 font-semibold text-black text-lg hover:bg-opacity-80">
              {/* <i className="bi bi-play-fill text-black" style={{ color: "black", fontSize: "24px" }}></i> */}
              ▶️Play</button>
            <button className="bg-white rounded-3xl p-2 m-2 font-semibold text-lg bg-opacity-45 hover:bg-opacity-30">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle