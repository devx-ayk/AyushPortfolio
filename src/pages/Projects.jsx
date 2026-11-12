import Flappy from '../assets/Flappy.mp4'
import Memory from '../assets/Memory.mp4'
import Snake from '../assets/Snake.mp4'
import StudySync from '../assets/study-sync.mp4'
import Blender from '../assets/blender-vid.mp4'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
const Projects = () => {
    return (
        <div className="bg-[var(--page-bg)] text-[var(--page-text)] p-3">
            <div className="flex flex-col gap-10 ">
                <div>
                    <p className="text-2xl text-orange-500 font-extrabold">[ Projects ]</p>

                    <p className="text-4xl font-bold">Some of <span className="text-orange-600">My Work.</span> </p>
                </div>

                <div className="flex gap-4 flex-col">
                    <div className="bg[var(--box-bg)] h-90 rounded-2xl flex flex-col gap-4 justify-center items-center p-5 relative bg-[var(--box-bg)]">
                        <video className='h-30 rounded-2xl' src={Flappy} autoPlay muted loop playsInline></video>
                        <div><h1 className="text-2xl font-bold">Flappy Bird – Game Development</h1>
                            <p>A simple yet engaging arcade game where players navigate a bird through obstacles. Built to explore game logic, user interaction and collision handling.</p></div>
                       <a href="/projects/FLAPPY BIRD/flappybird.html"><button className='absolute top-4 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'>< MdArrowOutward /></button></a> 
                        <Link to="https://github.com/devx-ayk/Flappy_bird"><button className='absolute top-15 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'><FaGithub /></button></Link>
                    </div>
                    <div className="bg[var(--box-bg)] h-90 rounded-2xl flex flex-col gap-4 justify-center items-center p-5 relative bg-[var(--box-bg)]">
                        <video className='h-30 rounded-2xl' src={Memory} autoPlay muted loop playsInline></video>
                        <div><h1 className="text-2xl font-bold">Memory Card – Interactive Game</h1>
                            <p>An interactive memory-matching game that challenges players to find matching pairs. Developed to practice JavaScript logic, state management and interactive UI.</p></div>
                     <a href="/projects/memoryCardgame/index.html"><button className='absolute top-4 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'>< MdArrowOutward /></button></a>   
                        <Link to="https://github.com/devx-ayk/Memory_Card"><button className='absolute top-15 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'><FaGithub /></button></Link>

                    </div>
                    <div className="bg[var(--box-bg)] h-90 rounded-2xl flex flex-col gap-4 justify-center items-center p-5 relative bg-[var(--box-bg)]">
                        <video className='h-30 rounded-2xl' src={Snake} autoPlay muted loop playsInline></video>
                        <div><h1 className="text-2xl font-bold">Snake Game – Classic Arcade</h1>
                            <p>A recreation of the classic Snake game, where players control the snake, collect food and avoid collisions. Focused on movement logic, game mechanics and keyboard controls.</p></div>
                        <a href="/projects/SnakeGame/snake.html"><button className='absolute top-4 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'>< MdArrowOutward /></button></a>
                        <Link to="https://github.com/devx-ayk/Snake-game"><button className='absolute top-15 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'><FaGithub /></button></Link>
                    </div>
                    <div className="bg[var(--box-bg)] h-90 rounded-2xl flex flex-col gap-4 justify-center items-center p-5 relative bg-[var(--box-bg)]">
                        <video className='h-25 rounded-2xl' src={StudySync} autoPlay muted loop playsInline></video>
                        <div><h1 className="text-2xl font-bold">StudySync – Educational Website</h1>
                            <p>A modern educational website concept designed to make digital learning more accessible. Focuses on a clean interface, responsive layouts and an engaging user experience.</p></div>
                        <a href="/projects/StudySync/nav.html"><button className='absolute top-4 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'>< MdArrowOutward /></button></a>
                        <Link to="https://github.com/devx-ayk/study-sync-template"><button className='absolute top-15 right-4 text-2xl  p-1 rounded-2xl cursor-pointer hover:bg-orange-500'><FaGithub /></button></Link>
                    </div>
                    <div className="bg[var(--box-bg)] h-90 rounded-2xl flex flex-col gap-4 justify-center items-center p-5 relative bg-[var(--box-bg)]">
                        <video className='h-30 rounded-2xl' src={Blender} autoPlay muted loop playsInline></video>
                        <div><h1 className="text-2xl font-bold">Blender Clone – 3D Software Interface UI</h1>
                            <p>A frontend recreation of Blender's interface, designed to explore complex layouts, tool panels and professional 3D software aesthetics.</p></div>
                        <Link><button className='absolute top-4 right-4 text-2xl  p-1 rounded-2xl'>< MdArrowOutward /></button></Link>
                        <Link><button className='absolute top-15 right-4 text-2xl  p-1 rounded-2xl'><FaGithub /></button></Link>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Projects