"use client";

const Lower = () => {
    return (
        <section className="col-start-1 row-start-2 mt-4 pl-[30px] flex justify-between items-center pb-5">
            <div>
                <p>← 1 →</p>
            </div>
            <div className="flex gap-12 mr-[120px] relative">
                <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[-1rem] bg-[#43455880]"></span>
                <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[7.5rem] bg-[#6addccbf]"></span>
                <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[16.2rem] bg-[#f9cdc480]"></span>
                <img className="relative" src="/images/4.png" alt="" />
                <img className="relative" src="/images/3.png" alt="" />
                <img className="relative" src="/images/2.png" alt="" />
            </div>
        </section>
    )
}

export default Lower;