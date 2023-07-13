export default function About() {
    return (
        <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900 dark:text-white">
            <div className="mt-[17vh] flex w-[85%] flex-row text-left">
                <div className="mx-3 w-[80vw] sm:w-[100%]">
                    <h1>About</h1>
                    <h1 className="mt-3 text-[0.875rem] leading-relaxed sm:text-[1rem]">
                        I'm a full-stack developer based out of Toronto,
                        Ontario. I specialize in front-end development and have
                        a passion for making user-end applications that perform
                        fast and look amazing. When I'm not coding, I am
                        stacking blocks in Tetris, giving myself carpal tunnel
                        through rhythm games, or spending too much time making
                        my Minecraft house look like my dream home.
                    </h1>
                    <h1 className="mt-3 text-[0.875rem] leading-relaxed sm:text-[1rem]">
                        Link to my{" "}
                        <a
                            href="https://resume.creddle.io/resume/h7quggpp1wb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            resume!
                        </a>
                    </h1>
                </div>
                <div className="mx-3 w-[80vw] sm:w-[100%]">
                    <h1>Lore</h1>
                    <h1 className="mt-3 text-[0.875rem] leading-relaxed sm:text-[1rem]">
                        The first time I ever picked up the proverbial coding
                        pen I was 11 years old at a 'Girls Who Code' workshop
                        happening at my middle school - and the rest was
                        history. After a few years at the University of
                        Toronto's Computer Science program, the area I found I
                        was lacking the most was practical, hands-on skills. I
                        decided to attended a short yet intensive full-stack web
                        development bootcamp at Lighthouse Labs. After such a
                        hands-on experience, I am more sure than ever that
                        coding and web development is where my future lies.
                        {/* After a few years at the University of Toronto's Computer Science
            program, I decided to take a leap of faith. I took a year off and
            worked in hospitality where my itch for coding came back. Instead of
            boring myself in an academic setting, I attended a short yet
            intensive full-stack web development bootcamp at Lighthouse Labs.
            After such a hands-on experience, I am more sure than ever that
          coding and web development is where my future lies. */}
                    </h1>
                </div>
            </div>
        </div>
    );
}
