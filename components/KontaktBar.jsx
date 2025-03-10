export default function KontaktBar() {
    return (
      <div className=" bg-cyan-950 my-8 ">
        <div
          className="
        flex flex-row justify-around gap-10 mx-18"
        >
          <div className="flex flex-col items-center gap-10  py-4 w-1/3 max-w-[294px] bg-white rounded-2xl text-cyan-950 my-12">
            <img
              src="./icons/icon-location.png"
              className="w-1/4 mt-2"
              alt="adress pin icon"
            />
            <div className="flex flex-col items-center ">
              <h1 className="text-xl ">Adress</h1>
              <p> Vestre skostredet 2</p>
              <p>Bergen</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 py-8 w-1/3 max-w-[294px] bg-white rounded-2xl text-cyan-950 my-12">
            <img
              src="./icons/icon-mail.png"
              className="w-1/4 mt-2"
              alt="mail icon"
            />
            <div className="flex flex-col items-center ">
              <h1 className="text-xl ">Email</h1>
              <p> email@kodeverket.no</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 py-4 w-1/3 max-w-[294px] bg-white rounded-2xl text-cyan-950 my-12">
            <img
              src="./icons/icon-phone.png"
              className="w-1/4 mt-2"
              alt="adress pin icon"
            />
            <div className="flex flex-col items-center ">
              <h1 className="text-xl ">Phone</h1>
              <p> 999 99 99</p>
            </div>
          </div>
        </div>
      </div>
    );
    }