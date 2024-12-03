import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { BiLogoGmail } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";

const Resume = () => {
  return (
    <section className="container mx-auto px-4 py-3">
      <div className="flex flex-col  gap-10 sm:flex-row justify-between">
        <div>
          <div className="w-full bg-primary-milk p-4 rounded-xl text-center md:text-center  ">
            <p className=" text-xl font-semibold md:font-normal md:text-2xl xl:text-4xl mb-2">
              Anastasiia Motsukh
            </p>
            <p className="text-sm md:text-lg xl:text-xl">Frontend developer</p>
          </div>
          <div className=" mt-10">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-3xl mb-5 font-semibold">Contacts</p>
                <ul className="">
                  <li>
                    <a
                      href="tel:+380505731261"
                      className="flex gap-2 items-center"
                    >
                      <FcPhoneAndroid />
                      +380-50-573-12-61
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:anastasiia.motsukh@gmail.com?subject=Hello&body=I would like to..."
                      className="flex gap-2 items-center"
                    >
                      <BiLogoGmail className="text-red-500" />
                      anastasiia.motsukh@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex gap-2 items-center"
                      target="_blank"
                      href="https://t.me/AnastasiiaMotsukh"
                    >
                      <FaTelegramPlane className="text-blue-400" />
                      @AnastasiiaMotsukh
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex gap-2 items-center"
                      target="_blank"
                      href="https://www.linkedin.com/in/anastasiia-motsukh/"
                    >
                      <FaLinkedin className="text-blue-600" />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex gap-2 items-center"
                      target="_blank"
                      href="https://github.com/Elostay"
                    >
                      <FaGithub />
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-3xl mb-5 font-semibold">Education</p>
                <ul className="flex flex-col gap-5">
                  <li>
                    <p className="font-semibold">
                      Kyiv International University{" "}
                    </p>
                    <p className="mb-1">2020 - 2024</p>
                    <p>Bachelor of Computer Science</p>
                    <p>Faculty of Information Technologies</p>
                  </li>
                  <li>
                    <p className="font-semibold">IT School GoIT </p>
                    <p className="mb-1">2023 - 2024</p>
                    <p>Fullstack Developer</p>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-3xl mb-5 font-semibold">Languages</p>
                <ul>
                  <p>English: upper-intermediate</p>
                  <p>Ukranian: native</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-5 font-semibold text-center">Skills</p>
          <div className="flex  lg:gap-64">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xl font-semibold mb-6">Frontend</p>
                <ul className="list-with-dots flex flex-col gap-3">
                  <li>React</li>
                  <li>React Router</li>
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Firebase</li>
                  <li>MUI</li>
                  <li>Formik</li>
                  <li>Axios</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-semibold mb-4">Another</p>
                <ul className="list-with-dots flex flex-col gap-1">
                  <li>Git</li>
                  <li>Webpack/Parcel/Vite</li>
                  <li>REST API</li>
                  <li>React hooks</li>
                  <li>Figma</li>
                  <li>Responsive layout</li>
                  <li>Technical documentation</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xl font-semibold mb-4">Backend</p>
                <ul className="list-with-dots flex flex-col gap-3">
                  <li>Node.js</li>
                  <li>Nest.js</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                  <li>JWT</li>
                  <li>Jest</li>
                  <li>Joi</li>
                  <li>Prisma</li>
                  <li>Postman</li>
                  <li>Pactum</li>
                  <li>PostgreSQL</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-semibold mb-4">Soft skills</p>
                <ul className="list-with-dots flex flex-col gap-1">
                  <li>Teamwork</li>
                  <li>Communicative</li>
                  <li>Critical thinking</li>
                  <li>Meeting deadlines</li>
                  <li>Creativity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default Resume;
