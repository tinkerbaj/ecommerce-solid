import { createSignal, Show, Component } from "solid-js";
import { A  } from "solid-start";
import clickOutside from "~/directives/click-outside.jsx";


const Header: Component<{}> = (props) => {
    const [show, setShow] = createSignal(false);

  return <div class="2xl:mx-auto w-full">
            <div class="bg-white rounded shadow-lg py-5 px-7">
                <nav class="flex justify-between">
                    <div class="flex items-center space-x-3 lg:pr-16 pr-6">                     
                        <h2 class="font-normal text-2xl leading-6 text-gray-800">My LOGO</h2>
                    </div>
    
                    <ul class="hidden md:flex flex-auto space-x-2">
                        <A href={'/'} end={true} activeClass="ring-1 ring-cyan-400 focus:ring-1 focus:ring-cyan-400 active:ring-cyan-400 focus:outline-none "  inactiveClass="focus:ring-1 focus:ring-cyan-400 active:ring-cyan-400 focus:outline-none">Home</A>
                        <A href={'/about'} activeClass="focus:ring-1 focus:ring-cyan-400 active:ring-cyan-400" inactiveClass="border bg-red-400 ">About</A>
                        <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-5 py-3 font-normal text-xs leading-3 shadow-md rounded-full">Space</li>
                        <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-5 py-3 font-normal text-xs leading-3 shadow-md rounded-full">Game</li>
                        <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-5 py-3 font-normal text-xs leading-3 shadow-md rounded-full">Utility</li>
                        <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-5 py-3 font-normal text-xs leading-3 shadow-md rounded-full">Cards</li>
                    </ul>
                    <div class=" flex space-x-5 justify-center items-center pl-2">
                        <div class="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>    
                            <div class="animate-ping w-1.5 h-1.5 bg-cyan-500 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                            <div class=" w-1.5 h-1.5 bg-cyan-500 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                        </div>
                        
                        <svg class="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                    </div>
                </nav>
    
                <div class="block md:hidden w-full mt-5 ">
                    <div  class="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div class="flex space-x-2">
                            <span id="s1" class="font-semibold text-sm leading-3 hidden">Selected: </span><p id="textClicked" class="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer " onclick={() => setShow(!show())}>Collections</p>
                        </div>
                        <svg id="ArrowSVG" class=" transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                    
                    </div>
                    <Show when={show()}>
                    <div class=" relative">
                        <ul id="list" class=" font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                            <li class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Arts</li>
                            <li class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Space</li>
                            <li class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Game</li>
                            <li class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Utility</li>
                            <li class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Cards</li>
                        </ul>
                    </div>
                    </Show>
                </div>
            </div>
        </div>
};

export default Header