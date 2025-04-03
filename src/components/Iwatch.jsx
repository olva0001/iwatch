"use client";
import { useState } from "react";
import Header from "@/components/header";
import Mainbox from "@/components/Mainbox";
import Lower from "@/components/lower";

const Iwatchbox = () => {
    const [currentImage, setCurrentImage] = useState("/images/5.png"); // Initial image

    const handleImageChange = (imageSrc) => {
        setCurrentImage(imageSrc); // This will update the image
    };

    return (
        <div className="bg-[#C8DCE5] p-5 text-white m-40 rounded-2xl scale-[0.8]">
            <Header />
            <div className="Main">
                {/* Pass currentImage and handleImageChange to both Mainbox and Lower */}
                <Mainbox currentImage={currentImage} />
                <Lower onClick={handleImageChange} /> {/* Ensure the onClick function is passed */}
            </div>
        </div>
    );
};

export default Iwatchbox;
