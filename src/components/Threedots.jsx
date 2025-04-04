"use client";

const Threedots = ({ onClick }) => { // Receive onClick as a prop
    const handleImageClick = (imageSrc) => {
        onClick(imageSrc); // Call the passed function to update the image
    };

    return (
        <div className="flex flex-col items-center">
            <span
                className="w-[30px] h-[30px] rounded-[2rem] bg-[#434558] cursor-pointer border-white border-[3px]"
                onClick={() => handleImageClick("/images/5.png")}
            ></span>
            <div className="w-[2px] h-[30px] bg-[repeating-linear-gradient(to_bottom,white_0px,white_2px,transparent_2px,transparent_6px)]"></div>
            <span
                className="w-[30px] h-[30px] bg-[#6ADDCC] rounded-[2rem] cursor-pointer border-white border-[3px]"
                onClick={() => handleImageClick("/images/mint.png")}
            ></span>
            <div className="w-[2px] h-[30px] bg-[repeating-linear-gradient(to_bottom,white_0px,white_2px,transparent_2px,transparent_6px)]"></div>
            <span
                className="w-[30px] h-[30px] bg-[#c0daea] rounded-full cursor-pointer border-white border-[3px]"
                onClick={() => handleImageClick("/images/ocean.png")}
            ></span>
        </div>
    );
};

export default Threedots;
