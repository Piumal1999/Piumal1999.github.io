import Image from "next/image";
import socialLinks from "../../../data/social";

export default function Banner() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex items-center">
      <div className="text-center lg:text-left">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent ">
          Piumal Rathnayake
        </h1>
        <p className="mt-4 sm:text-xl/relaxed font-extralight">
          Computer Engineering Undergraduate, <br />
          Open Source Enthusiast, and Full-Stack Developer.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-normal">
          <a
            className="block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="https://drive.google.com/file/d/1KbrbOhpW5GQ63Hl-DOO9IdlD6qQjufYv/view?usp=drive_link"
          >
            View Resume
          </a>
          <a
            className="block rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
            href="#experience"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="mt-12 mx-auto lg:mr-0 lg:pl-12 lg:w-4/12 w-full justify-center text-center">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/25">
          <div className="rounded-[10px] p-4 sm:p-6 bg-gray-900">
            <Image
              alt=""
              width={389}
              height={389}
              src="/me.jpeg"
              className="mx-auto size-20 rounded-full object-cover"
            />
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-white">
                @Piumal1999
              </h3>
            </a>
            <p className="mt-1 text-sm text-gray-400">📍 Kandy, Sri Lanka</p>
            <div className="mt-4 flex gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  className="text-white transition hover:text-white/75"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox={link.viewBox}
                  >
                    {link.svgPath}
                  </svg>
                </a>
              ))}
            </div>

            <div className="my-5 border-t border-gray-800" />

            <p className="mt-1 text-sm text-gray-400">
              👨‍💻 Full Stack Developer
            </p>
            <p className="mt-1 text-sm text-gray-400">
              📧 piumal1999@gmail.com
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                Java
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                JavaScript
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                Python
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                Springboot
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                ReactJs
              </span>
              <span className="px-2 py-1 text-xs font-medium text-white border border-blue-600 rounded-full">
                NodeJs
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
