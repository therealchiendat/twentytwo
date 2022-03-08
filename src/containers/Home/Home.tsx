import React, { useEffect, useState } from "react";
import "./Home.css";
import casePhoto from "../../assets/media/case.png";
import dashboardScreenshot from "../../assets/media/MainAppScreenShot.png";
import statScreenVideo from "../../assets/media/statsScreenVideo.mp4";
import { Lego } from "../../components/lego";
import { welcomeStringList } from "../../components/strings";

const ProfileCard = ({ coor }: { coor: any }) =>
    <div id="wrapper" className="wrapper" >
        <div className="card">
            <Lego id="legoGuy" />
            <img className="screenshot invisible" id="dashboardScreenshot" src={dashboardScreenshot} alt="screenshots" />
            <video className="screenshot invisible" id="statScreen" autoPlay loop playsInline aria-hidden>
                <source src={statScreenVideo} type="video/mp4" />
            </video>
            <img className="case-photo invisible" id="casePhoto" src={casePhoto} alt="case photo" />
        </div>
    </div>

export default function Home() {
    let validHappyEmotion = [0, 1, 2];
    let lFollowX = 5;
    let lFollowY = 10;
    let lMouseX;
    let lMouseY;
    const friction = 1 / 13;

    const [coor, setCoor] = useState({ x: 0, y: 0 });
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        clearInterval();
        setInterval(() => handleEmotion(validHappyEmotion[Math.floor(Math.random() * 4)]), 1000)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleScroll(e));
        };
    }, [y]);


    function handleMouseMove(e: any) {
        e.preventDefault();
        lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
        lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
        lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;
        const xcoor = coor.x + (lFollowX - coor.x) * friction;
        const ycoor = coor.y + (lFollowY - coor.y) * friction;
        let elem = document.getElementById("wrapper");
        setCoor({ x: xcoor, y: ycoor });
        if (elem) elem.style.transform = `translate(-50%, -50%) perspective(600px) rotateY(${-coor.x}deg) rotateX(${coor.y}deg)`;
    };

    function handleSelect() {
        // document.getElementById("header").style.zIndex = -1;
    }

    function handleMouseIn(id: string) {
        let elem = document.getElementById(id);
        if (elem) elem.style.opacity = '1';
    }

    function handleMouseOut(id: string) {
        let elem = document.getElementById(id);
        if (elem) elem.style.opacity = '0';
    }

    function handleScroll(e: any) {
        const card = document.getElementById('wrapper');
        const legoGuy = document.getElementById('legoGuy');
        const dashboardScreenshot = document.getElementById('dashboardScreenshot');
        const casePhoto = document.getElementById('casePhoto');
        const statScreen = document.getElementById('statScreen');
        const window = e.currentTarget;
        const scrollValue = window.scrollY;
        setY(scrollValue);
        if (scrollValue > 1000) {
            if (card) card.style.boxShadow = 'rgba(64, 62, 61, 0.15) 0px 5px 15px';
            if (legoGuy) legoGuy.style.opacity = `0`;
            if (dashboardScreenshot) dashboardScreenshot.style.opacity = `${1 - scrollValue / 1000}`;
            if (statScreen) statScreen.style.opacity = `${scrollValue / 2000}`;
            if (casePhoto) casePhoto.style.opacity = `1`;
        } else if (scrollValue > 200) {
            if (card) card.style.boxShadow = `rgba(${scrollValue * 3 / 50 + 4}, ${scrollValue * 3 / 50 + 2}, ${scrollValue * 3 / 50 + 1}, ${scrollValue * 1 / 6000}) 0px ${scrollValue / 200}px ${scrollValue * 15 / 1000}px`;
            if (legoGuy) legoGuy.style.opacity = `${1 - scrollValue / 1000}`;
            if (dashboardScreenshot) dashboardScreenshot.style.opacity = `${scrollValue / 1000}`;
            if (casePhoto) casePhoto.style.opacity = `${scrollValue / 1000}`;
        } else if (scrollValue > 2000) {
            if (statScreen) statScreen.style.opacity = `1`;
        } else {
            if (card) card.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px';
            if (legoGuy) legoGuy.style.opacity = `1`;
            if (dashboardScreenshot) dashboardScreenshot.style.opacity = `0`;
            if (casePhoto) casePhoto.style.opacity = `0`;
            if (statScreen) statScreen.style.opacity = `0`;
        }
    };

    /**
     * if you make Lego guy cry, it's on you!
     */
    function handleEmotion(emotion: number) {
        let faces = document.getElementById('faces');
        let emotionValue = 0;
        if (faces) faces.style.transform = `translateX(${-115 * emotion}px`
    }

    return (
        <div className="Home">
            <div className="header-container">
                <div id="header" className="header" onMouseDown={handleSelect} onMouseMove={handleMouseMove}>
                    <ProfileCard coor={coor} />
                </div>
                <div className="sub-header">
                    <div className="hello" >
                        <span id="hellomsg">
                            Hi, we're TwentyTwo<br />
                            scroll down <br />
                            to see more<br />
                        </span>
                        <div id="selectmsg" className="select">
                            so you are &nbsp; &nbsp; &nbsp; &nbsp; <br />
                            that kind of person &nbsp; &nbsp; &nbsp; <br />
                            that love to select  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
                            everything &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
                            in a website. &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; <br />
                            think about it. &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        </div>
                        <span className="prompt-container">
                            {welcomeStringList.map((r, i) =>
                                <div className="prompts" key={i}>
                                    <h1>{r.title}</h1>
                                    <p>{r.text}</p>
                                </div>
                            )}
                        </span>
                    </div>
                </div>


            </div>
            <div className="body">
                <div id="img-wrap" className="img-wrap">
                </div>
                {/* <div className="section">
                    <ul className="slide-buttons">
                    </ul>
                </div> */}

            </div>
        </div>
    );
}