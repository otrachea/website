import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import FeaturedWork from "./FeaturedWork";
import Contact from "./Contact";

import Background from "./Background";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";
import Landing from "./Landing";

export default function App() {
    return (
        <ParallaxProvider scrollAxis="horizontal">
            <div
                className="w-[1200vw] bg-gradient-to-b from-[#78A7FF] via-[#78A7FF] to-white dark:bg-gradient-to-b dark:from-[#38285c] dark:via-[#38285c] dark:to-black sm:w-[885vw] md:w-[810vw] lg:w-[620vw] xl:w-[520vw]"
                onWheel={(e) => {
                    document.scrollingElement.scrollLeft += e.deltaY * 2.5;
                }}
            >
                <Header />
                <div className="z-10 flex h-[100vh]">
                    <div className="z-10 w-[100vw]" id="landing">
                        <Landing />
                    </div>

                    <div
                        className="z-10 w-[250vw] sm:w-[200vw] lg:w-[100vw]"
                        id="about"
                    >
                        <About />
                    </div>

                    <div
                        className="z-10 w-[300vw] sm:w-[185vw] md:w-[160vw] lg:w-[120vw] xl:w-[100vw]"
                        id="skills"
                    >
                        <Skills />
                    </div>

                    <div
                        className="z-10 w-[450vw] sm:w-[300vw] md:w-[250vw] lg:w-[200vw] xl:w-[120vw]"
                        id="featured-works"
                    >
                        <FeaturedWork />
                    </div>

                    <div className="z-10 w-[100vw]" id="contact">
                        <Contact />
                    </div>

                    <Background />
                </div>
            </div>
        </ParallaxProvider>
    );
}
