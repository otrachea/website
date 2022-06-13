import { useState } from "react";

type Mode = "LIGHT" | "DARK";

export default function Header() {
  const [mode, setMode] = useState<Mode>("LIGHT");

  const navlinks = [
    { element: "about", text: "About" },
    { element: "skills", text: "Skills" },
    { element: "featured-works", text: "Featured Works" },
    { element: "contact", text: "Contact" },
  ];

  return (
    <nav className="w-100 fixed z-10 z-20 flex flex-row items-center justify-between px-4 py-2">
      <div
        className="flex flex-row hover:cursor-pointer"
        onClick={() => {
          console.log("click");
          const element = document.getElementById("landing");
          if (!element) {
            return;
          }
          element.scrollIntoView();
        }}
      >
        <h1 className="font-bold text-purple-700 dark:text-maroon">F. Ho</h1>
      </div>
      <div className="align-center hidden flex-row flex-col justify-center text-slate-900 dark:text-white lg:flex">
        {navlinks.map((link) => {
          return (
            <div
              key={link.text}
              className="mx-4 cursor-pointer text-2xl"
              onClick={() => {
                const element = document.getElementById(link.element);
                if (!element) {
                  return;
                }
                element.scrollIntoView();
              }}
            >
              {link.text}
            </div>
          );
        })}
      </div>
      <div className="flex w-[130px] justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill={mode === "LIGHT" ? "#ffffff" : ""} d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
        </svg>
        <div
          className="flex h-7 w-14 cursor-pointer items-center rounded-full border border-black bg-gray-300 p-1"
          onClick={() => {
            const html = document.querySelector("html")!;

            if (html.classList.contains("dark")) {
              html.classList.remove("dark");
              setMode("LIGHT");
            } else {
              html.classList.add("dark");
              setMode("DARK");
            }
          }}
        >
          <div
            className={
              "h-5 w-5 rounded-full bg-purple-900 shadow-md transition ease-in-out " +
              (mode === "LIGHT" ? "" : " translate-x-6 transform")
            }
          ></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill={mode === "DARK" ? "#ffffff" : ""} d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
        </svg>
      </div>
    </nav>
  );
}
