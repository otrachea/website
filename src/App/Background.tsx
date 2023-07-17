import { useParallax } from "react-scroll-parallax";

import "./Background.scss";

import { useContext, useRef } from "react";
import { THEME, ThemeContext } from "../hooks/theme-context";

export default function Background() {
    const theme = useContext(ThemeContext);
    const target = useRef(null);

    const mid = useParallax({
        speed: 60,
        // @ts-ignore
        targetElement: target.current,
    });
    const close = useParallax({
        speed: 120,
        // @ts-ignore
        targetElement: target.current,
    });

    const midExtend = 50 * 11 * -1;
    const closeExtend = 100 * 11 * -1;

    return (
        <div className="background" ref={target}>
            {/* background image */}
            <div
                className={`background-layer clouds ${
                    theme === THEME.DARK && `dark`
                }`}
            />
            {/* back set of trees */}
            <div
                className={`background-layer back ${
                    theme === THEME.DARK && `dark`
                }`}
            />
            {/* middle set of trees */}
            <div
                style={{
                    left: midExtend,
                    right: midExtend,
                }}
                className={`background-layer middle ${
                    theme === THEME.DARK && `dark`
                }`}
                // @ts-ignore
                ref={mid.ref}
            />
            {/* front set of trees */}
            <div
                style={{
                    left: closeExtend,
                    right: closeExtend,
                }}
                className={`background-layer close ${
                    theme === THEME.DARK && `dark`
                }`}
                // @ts-ignore
                ref={close.ref}
            />
        </div>
    );
}
