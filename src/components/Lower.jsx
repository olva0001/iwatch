"use client";
import "../app/globals.css";

const Lower = () => {
    return (
        <section className="LowerLeft">
            <div className="p">
                <p>← 1 →</p>
            </div>
            <div className="images_flex">
                <span></span>
                <span></span>
                <span></span>
                <img className="lower_img" src="/images/4.png" alt="" />
                <img className="lower_img" src="/images/3.png" alt="" />
                <img className="lower_img" src="/images/2.png" alt="" />
            </div>
        </section>
    )
}

export default Lower;