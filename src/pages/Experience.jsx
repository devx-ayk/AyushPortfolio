import DSDA from '../assets/deepak self defence academy.png'
import PEH from '../assets/Pragya education hub.webp'
const Experience = () => {
    return (
        <div className="p-3 bg-[var(--page-bg)] text-[var(--page-text)]"> 
            <div className="flex flex-col gap-2">
                <p className="font-extrabold text-orange-600">[ MY PROFESSIONAL JOURNEY ]</p>

                <h1 className="font-bold text-3xl md-text-5xl">
                    Experience & <span className="text-orange-600">
                        Work.
                    </span>
                </h1>

                <p className="">
                    A collection of my professional experiences,
                    practical work and opportunities that have
                    contributed to my growth.
                </p>
            </div>
<br />
            <div>
                <div>

                <img src={PEH} alt="" />
                <div className="p-3 border-b-1 border-amber-500 flex flex-col gap-2">
                    <p className="font-bold text-xl">Computer / Data Operator</p>
                    <p className="text-orange-600 font-bold ">Pragya Education Hub</p>
                    <p className="leading-relaxed">Worked with data entry, information management and website forms, handling target-based tasks.</p>

                </div>

                </div>

<div>
       <img src={DSDA} alt="" />
                <div className=" p-3 flex flex-col gap-2">
                    <p className="font-bold text-xl">Computer Operator & Design Support</p>
                    <p className="text-orange-600 font-bold ">Deepak Self Defence Academy</p>
                    <p className="leading-relaxed">Supported computer operations, creative designs and social media poster creation</p>

                </div>
</div>

            </div>
        </div>
    )
}

export default Experience