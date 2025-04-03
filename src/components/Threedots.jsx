"use client";

const Threedots = () => {
    return (
            <div className="flex flex-col items-center">
              <span className="w-[30px] h-[30px] rounded-[2rem] bg-[#434558] cursor-pointer border-white border-[3px]"></span>
                <div className="w-[2px] h-[30px] bg-[repeating-linear-gradient(to_bottom,white_0px,white_2px,transparent_2px,transparent_6px)]"></div>
              <span className="w-[30px] h-[30px] bg-[#6ADDCC] rounded-[2rem] cursor-pointer border-white border-[3px]"></span>
                <div className="w-[2px] h-[30px] bg-[repeating-linear-gradient(to_bottom,white_0px,white_2px,transparent_2px,transparent_6px)]"></div>
              <span className="w-[30px] h-[30px] bg-[#c0daea] rounded-full cursor-pointer border-white border-[3px]"></span>
            </div>
    )
}

export default Threedots;