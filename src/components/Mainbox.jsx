"use client";

const Mainbox = () => {
    return (
        <section className="grid grid-cols-[auto_auto_auto] -mt-5">
            <div className="col-start-1 row-start-1 pl-8 pt-32">
                <h1 className="text-[3.5rem] font-bold">The Perfect Moment</h1>
                <h2 className="text-[3.5rem] font-light max-w-[500px]">Between Past And Future</h2>
                <button className="rounded-[100px] border-3 border-white px-16 py-4 text-base mt-16 hover:bg-white hover:text-[#b6ccda]">Buy Now</button>
            </div>
            <div className="col-start-2 row-start-1 mt-12 flex">
                <img className="w-full scale-90" src="/images/5.png" alt="test" />
            </div>
            <div className="col-start-3 mt-56">
                <img src="/images/Colors.png" alt="" />
            </div>
        </section>
    )
}

export default Mainbox;