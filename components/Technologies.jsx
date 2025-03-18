export default function Technologies() {
  return (
    <div className="flex flex-col my-8 mx-18">
      <h1 className="text-2xl font-bold text-center py-6">
        {" "}
        Teknologier vi bruker
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 my-8 xl:text-xl">
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-[50px] "
            src="/iconsTech/react.svg"
            alt="react icon"
          />
          <p> React</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[50px]" src="/iconsTech/tailwind.svg" alt="" />
          <p> Tailwind.css </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="w-[50px]" src="/iconsTech/javascript.png" alt="" />
          <p> JavaScript </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[50px]" src="/iconsTech/next.png" alt="" />
          <p> Next.js </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[50px]" src="/iconsTech/sanity.svg" alt="" />
          <p> Sanity </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[50px]" src="/iconsTech/python.png" alt="" />
          <p> Python </p>
        </div>
      </div>
    </div>
  );
}
