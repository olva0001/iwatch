"use client";
import Header from "@/components/header";
import Mainbox from "@/components/Mainbox";
import Lower from "@/components/lower";

const iwatchbox = () => {
    return (
        <div className="bg-slate-300 p-5 text-white m-40 rounded-2xl scale-[0.8]">
            <Header />
            <div className="Main">
                <Mainbox />
                <Lower />
            </div>
        </div>
    )
};

export default iwatchbox;