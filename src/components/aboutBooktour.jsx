import Footers from "./Footers";
const aboutBooktour = () => {
  return (
    <>
      <div className="w-full sm:w-3/4 sm:ml-52 ml-8 mt-8">
        <div className="">
          <p className=" text-blue-500 underline underline-offset-8 font-semibold text-2xl">
            About
          </p>
          <div className="flex mt-5">
            <p className="text-blue-600 font-semibold mr-6 bg-slate-200 px-2 rounded-lg">
              Backdrops
            </p>
            <p className="text-blue-600 font-semibold mx-6 bg-slate-200 px-2 rounded-lg">
              LightEquipment
            </p>
            <p className="text-blue-600 font-semibold ml-6 bg-slate-200 px-2 rounded-lg">
              Props
            </p>
          </div>
          <div className="mt-5 font-semibold">
            <p className="text-lg">Description</p>
            <p className=" text-slate-400 sm:w-3/4 mt-4">
              Discover our state-of-the-art Photography Studio, a haven for
              photo- graphers and creatives alike. Equipped with professional
              lighting, a range of backdrops, and an array of props, our studio
              offers endless possibilities for capturing the perfect shot.
              Whether you're a seasoned photographer or just starting your
              creative journey ,
              <span className=" text-blue-500 underline underline-offset-1">
                Read More
              </span>
            </p>
          </div>
          <div className="mt-5">
            <p className="text-blue-500 underline underline-offset-8 font-semibold text-2xl">
              Gallery
            </p>
            <div className="flex flex-col sm:flex-row mt-5">
              <div>
                <div className="relative">
                  <img
                    className="sm:h-80 h-auto"
                    src="./images/booktour1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  className="h-auto sm:h-40"
                  src="./images/booktour2.svg"
                  alt=""
                />

                <div class="relative flex justify-center items-center">
                  <div class="absolute text-center">
                    <p class="text-6xl text-white font-bold">+6</p>
                  </div>
                  <img
                    class="h-auto sm:h-40"
                    src="./images/booktour3.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* //review */}
            <div className="mt-5">
              <p className=" text-blue-500 underline underline-offset-8 font-semibold text-2xl">
                About
              </p>
              <p className="font-semibold mt-5">Add detailed review</p>
              <input
                class="bg-slate-200 text-slate-400 w-full sm:w-3/5 h-20 px-4 py-2 placeholder-top-left rounded-lg mt-3"
                type="text"
                placeholder="Enter Review...."
              />
              <div className="mt-4 flex sm:w-3/5">
                <img
                  className="w-4 h-4 mt-1"
                  src="./images/camera.svg"
                  alt=""
                />
                <p className="text-blue-500 text-sm font-semibold mx-2">
                  add photo
                </p>
                <button className=" bg-blue-600 text-white px-4 py-1 rounded-xl ml-auto">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5 flex">
              <button className="flex w-20 bg-slate-200 px-2 py-1 rounded-xl">
                <img className="w-4 h-4 mx-1 mt-1" src="./images/filter.svg" />
                <p>Filter</p>
              </button>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-lg ml-10">
                All
              </button>
            </div>

            {/* review */}

            <div className="mt-6 w-full sm:w-3/5">
              <div className="flex">
                <img
                  className="h-10 w-10"
                  src="./images/reviewimg1.svg"
                  alt=""
                />
                <p className="mx-3 font-semibold mt-1">Dale Theil</p>
                <p className="ml-auto text-slate-400">11 months ago</p>
              </div>
              <p className="text-slate-500 ml-3 mt-2">
                Discover our state-of-the-art Photography Studio, a haven for
                photographers and creatives a like
              </p>
              <div className="flex">
                <img
                  className="w-4 h-4 mt-1 ml-4"
                  src="./images/star.svg"
                  alt=""
                />
                <p className=" text-xs font-semibold text-slate-500 mt-1 mx-1">
                  {" "}
                  4.0
                </p>
              </div>
            </div>
            <div className="mt-6 w-full sm:w-3/5">
              <div className="flex">
                <img
                  className="h-10 w-10"
                  src="./images/reviewimg2.svg"
                  alt=""
                />
                <p className="mx-3 font-semibold mt-1">John Doe</p>
                <p className="ml-auto text-slate-400">11 months ago</p>
              </div>
              <p className="text-slate-500 ml-3 mt-2">
                Discover our state-of-the-art Photography Studio, a haven for
                photographers and creatives a like
              </p>
              <div className="flex">
                <img
                  className="w-4 h-4 mt-1 ml-4"
                  src="./images/star.svg"
                  alt=""
                />
                <p className=" text-xs font-semibold text-slate-500 mt-1 mx-1">
                  {" "}
                  4.0
                </p>
              </div>
            </div>
            <div className="mt-6 w-full sm:w-3/5">
              <div className="flex">
                <img
                  className="h-10 w-10"
                  src="./images/reviewimg3.svg"
                  alt=""
                />
                <p className="mx-3 font-semibold mt-1">Dale Theil</p>
                <p className="ml-auto text-slate-400">11 months ago</p>
              </div>
              <p className="text-slate-500 ml-3 mt-2">
                Discover our state-of-the-art Photography Studio, a haven for
                photographers and creatives a like
              </p>
              <div className="flex">
                <img
                  className="w-4 h-4 mt-1 ml-4"
                  src="./images/star.svg"
                  alt=""
                />
                <p className=" text-xs font-semibold text-slate-500 mt-1 mx-1">
                  {" "}
                  4.0
                </p>
              </div>
            </div>
            <div className="my-6 w-full sm:w-3/5">
              <div className="flex">
                <img
                  className="h-10 w-10"
                  src="./images/reviewimg4.svg"
                  alt=""
                />
                <p className="mx-3 font-semibold mt-1">John Doe</p>
                <p className="ml-auto text-slate-400">11 months ago</p>
              </div>
              <p className="text-slate-500 ml-3 mt-2">
                Discover our state-of-the-art Photography Studio, a haven for
                photographers and creatives a like
              </p>
              <div className="flex">
                <img
                  className="w-4 h-4 mt-1 ml-4"
                  src="./images/star.svg"
                  alt=""
                />
                <p className=" text-xs font-semibold text-slate-500 mt-1 mx-1">
                  {" "}
                  4.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default aboutBooktour;
