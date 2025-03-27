"use client";
import "../app/globals.css";

const Mainbox = () => {
    return (
        <section className="Main">
            <div className="MainLeft">
                <h1>The Perfect Moment</h1>
                <h2>Between Past And Future</h2>
                <button>Buy Now</button>
            </div>
            <div className="MainMiddle">
                <img src="/images/5.png" alt="test" />
            </div>
            <div className="MainRight">
                <img src="/images/Colors.png" alt="" />
            </div>
        </section>
    )
}

export default Mainbox;