import { useParallax } from "react-scroll-parallax";

import imageClose from "../assets/tree-front.png";
import imageMid from "../assets/tree-middle.png";
import imageFar from "../assets/tree-back.png";
import imageBg from "../assets/clouds-top.png";

import "./Background.scss";

import { useContext, useRef } from "react";
import { THEME, ThemeContext } from "../hooks/theme-context";

export default function Background() {
    const theme = useContext(ThemeContext);
    const target = useRef(null);

    const mid = useParallax({
        speed: 60,
        targetElement: target.current,
    });
    const close = useParallax({
        speed: 120,
        targetElement: target.current,
    });

    const midExtend = 50 * 11 * -1;
    const closeExtend = 100 * 11 * -1;

    return (
        <div className="background" ref={target}>
            <div
                style={{
                    backgroundSize: "40%",
                    backgroundImage: `url(${imageBg})`,
                    left: 0,
                    right: 0,
                }}
                className={`background-layer ${
                    theme === THEME.LIGHT ? `opacity-80` : `opacity-50`
                }`}
            />
            <div
                style={{
                    backgroundPosition: "bottom 200px left 0",
                    backgroundSize: "auto 200px",
                    backgroundImage: `url(${imageFar})`,
                    left: 0,
                    right: 0,
                }}
                className={`background-layer ${
                    theme === THEME.DARK && `brightness-50`
                }`}
            />
            <div
                style={{
                    backgroundPosition: "bottom 95px left 0",
                    backgroundSize: "auto 250px",
                    backgroundImage: `url(${imageMid})`,
                    left: midExtend,
                    right: midExtend,
                }}
                className={`background-layer ${
                    theme === THEME.DARK && `brightness-50`
                }`}
                ref={mid.ref}
            />
            <div
                style={{
                    backgroundPosition: "bottom left 0",
                    backgroundSize: "auto 300px",
                    backgroundImage: `url(${imageClose})`,
                    left: closeExtend,
                    right: closeExtend,
                }}
                className={`background-layer ${
                    theme === THEME.DARK && `brightness-50`
                }`}
                ref={close.ref}
            />
        </div>
    );
}
