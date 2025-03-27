"use client";
import Header from "@/components/header";
import Mainbox from "@/components/Mainbox";
import Lower from "@/components/Lower";


const iwatchbox = () => {
    return (
        <div className="box">
            <Header />
            <div className="Main">
                <Mainbox />
                <Lower />
            </div>
        </div>
    )
};

export default iwatchbox;