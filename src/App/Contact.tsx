export default function Contact() {
    return (
        <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900 dark:text-white">
            <div className="mt-[17vh] flex h-[50vh] w-[85%] flex-col justify-between text-center">
                <div>
                    <h1>Contact</h1>
                </div>  
                <div>
                    <h1 className="text-base leading-loose sm:text-2xl">
                        Please feel free to contact me via email at
                    </h1>
                </div>
                <div className="mx-auto">
                    <a
                        href="mailto:francesca.ho459@gmail.com"
                        className="text-black no-underline"
                    >
                        <button className="delay-80 flex rounded-md bg-white py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-purple-300">
                            <h1 className="text-sm sm:text-2xl">
                                francesca.ho459@gmail.com
                            </h1>
                        </button>
                    </a>
                </div>
                <div>
                    <h1 className="text-base leading-loose sm:text-2xl">
                        or on my socials on
                    </h1>
                </div>
                <div className="mx-auto flex flex-col content-center justify-center sm:flex-row">
                    <div className="mx-auto mb-6 sm:mx-3">
                        <a
                            href="https://github.com/the-code-raccoon"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black no-underline"
                        >
                            <button className="delay-80 flex rounded-md bg-slate-500 py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-400">
                                <h1 className="text-base sm:text-2xl">
                                    Github
                                </h1>
                            </button>
                        </a>
                    </div>
                    <div className="sm:mx-3">
                        <a
                            href="https://www.linkedin.com/in/francesca-h-111714174/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-black no-underline transition hover:text-purple-500"
                        >
                            <button className="delay-80 flex rounded-md bg-[#0072b1] py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-500">
                                <h1 className="text-base sm:text-2xl">
                                    Linkedin
                                </h1>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
