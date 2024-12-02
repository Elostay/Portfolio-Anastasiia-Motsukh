const Resume = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <p>Anastasiia Motsukh</p>
        <p>Frontend developer</p>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <p>Contacts</p>
            <ul>
              <li>
                <a type="tel">+380-50-573-12-61</a>
              </li>
              <li>
                <a type="mail">anastasiia.motsukh@gmail.com</a>
              </li>
              <li>
                <a href="https://t.me/AnastasiiaMotsukh">@AnastasiiaMotsukh</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anastasiia-motsukh/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Elostay">Github</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Education</p>
            <ul>
              <li>
                <p>Kyiv International University </p>
                <p>2020 - 2024</p>
                <p>Bachelor of Computer Science</p>
              </li>
              <li>
                <p>IT School GoIT </p>
                <p>2023 - 2024</p>
                <p>Fullstack Developer</p>
              </li>
            </ul>
          </div>
          <div>
            <p>Languages</p>
            <ul>
              <p>English: upper-intermediate</p>
              <p>Ukranian: native</p>
            </ul>
          </div>
        </div>

        <div>
          <p>Skills</p>
          <div>
            <div>
              <p>Frontend</p>
              <ul>
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
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <p>Backend</p>
              <ul>
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
              <p>Another</p>
              <ul>
                <li>Git</li>
                <li>Webpack/Parcel/Vite</li>
                <li>REST API</li>
                <li>React hooks</li>
                <li>Figma</li>
                <li>Responsive layout</li>
                <li>Technical documentation</li>
              </ul>
            </div>
            <div>
              <p>Soft skills</p>
              <ul>
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
  );
};

export default Resume;
