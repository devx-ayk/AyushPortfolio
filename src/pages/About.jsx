import { FaCode } from "react-icons/fa6";
import { GiHistogram } from "react-icons/gi";
import Ayush from '../assets/Ayush.png'
import webd from '../assets/web-d.png'
import AI from '../assets/ai.png'
const About = () => {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--page-text)] p-3 flex flex-col gap-3">

      <div className="flex items-center ">

        <div className="flex flex-col gap-4">
          <p className="text-orange-600 font-extrabold">[ About Me ]</p>

          <p className="text-4xl font-bold">
            Curious by nature. <span className="text-orange-600">Developer</span> by passion.
          </p>


        </div>

        <div>
          <img src={Ayush} alt="" />
        </div>

      </div>
      <div>
        <p>
          I'm Ayush Kumar, a BCA graduate with a specialization in Artificial Intelligence & Data Analytics. I enjoy solving problems, building useful web apps and learning new technologies.
        </p>
      </div>
      <div className="flex flex-col  gap-4">
        <div className="bg-orange-300 h-60 rounded-2xl flex gap-4 justify-center items-center p-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${webd})` }}>
          {/* <FaCode className="text-5xl bg-orange-200 p-1 rounded-full text-orange-600" /> */}
          <div className="text-white"><h1 className="text-2xl font-bold">Web Development</h1>
            <p>Practical experience in building responsive and interactive web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS, with a focus on modern frontend development.</p></div>

        </div>

        <div className="bg-orange-300 h-60 rounded-2xl flex gap-4 justify-center items-center p-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${AI})`}}>
          {/* <GiHistogram className="text-5xl  bg-orange-200 p-1 rounded-full text-orange-600" /> */}
          <div className="text-white"><h1 className="text-2xl font-bold">Data Analytics & Artificial Intelligence</h1>
            <p>Academic exposure to data analysis, data interpretation, AI concepts, and machine learning fundamentals through my BCA specialization in Artificial Intelligence & Data Analytics.</p></div>

        </div>
      </div>


    </div>
  )
}

export default About