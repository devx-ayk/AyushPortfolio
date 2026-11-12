import Lnct from '../assets/lnct-grp-of-clg.jpg'
import Rdps from '../assets/rdps school.avif'
const Education = () => {
  return (
    <div className="p-3 bg-[var(--page-bg)] text-[var(--page-text)]">
      <div className="flex flex-col gap-4">
        <p className="font-extrabold text-orange-600">[ MY ACADEMIC JOURNEY ]</p>
        <div>
        <h1 className="font-bold text-3xl">Education & Learning.</h1>
        <p>Every step of learning has shaped the person and developer i am becoming.</p>

        </div>
        
        <div className='flex flex-col gap-4 '>
          <div><img src={Lnct} alt="" /></div>
          <div className='flex flex-col gap-2 items-start'>
               <span className="bg-green-300 p-1 pr-2 pl-2 rounded-2xl font-bold text-green-900">Completed-2025</span>
              <h2 className="font-extrabold text-[1.2rem]">Bachelor of Computer Applications (BCA)</h2>
              <p className="text-amber-700 font-bold text-[.8rem]">Artificial Intelligence & Data Analytics</p>
              <p>
                LNCT University, Bhopal <br />
                A journey into programming, data Analytics computer applications and emerging technologies.
              </p>
          </div>
        </div>

<div className='h-[1px] bg-amber-800 m-3'>

</div>

      <div className='flex flex-col gap-4'>
          <div><img src={Rdps} alt="" /></div>
          <div className='flex flex-col gap-2 items-start'>
               <span className="bg-green-300 p-1 pr-2 pl-2 rounded-2xl font-bold text-green-900">Completed-2022</span>
              <h2 className="font-extrabold text-[1.2rem]">Bachelor of Computer Applications (BCA)</h2>
              <p className="text-amber-700 font-bold text-[.8rem]">Commerce + Computer Science</p>
              <p>
                Renaissance divine public school<br />
                A journey into programming, data Analytics computer applications and emerging technologies.
              </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Education