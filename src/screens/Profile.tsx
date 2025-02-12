import React, { useState } from 'react'
import badge from '../assets/badge.png'
import rate from '../assets/rate.png'
// import { Message } from '../assets/svg'

function Profile() {
  return (
    <div className=''>
      <div className="min-h-1/3 bg-[#f8f8f8] px-16 pt-16 gap-6 border-b-1 border-b-gray-200 mb-3">

        <div className="flex gap-6">
          <img
            className='h-56 w-56 object-cover rounded-2xl'
            src="https://st3.depositphotos.com/16122460/18966/i/450/depositphotos_189668580-stock-photo-young-male-teacher-with-book.jpg" alt='image.png' />

          <div className="p-2 flex flex-col items-start justify-center gap-1 w-full">
            <span className='text-3xl block font-bold capitalize'>Thoppum padi bhaskaran</span>
            <span className='text-[#707177] text-xl font-semibold'>Creative UI/UX Designer Crafting Teacher</span>

            <div className="flex items-center gap-2">
              {/* <Message className="w-8 h-8 text-blue-500" /> */}
              <p className='p-0 m-0 text-[#909296]'>Speaks: English, Turkish, Japanese</p>
            </div>

            <div className="flex gap-2">
              <div className="border-1 border-gray-300 shadow-md px-3 mt-2 flex py-2 rounded-4xl gap-2 items-center">
                <img src={badge} className='w-10 h-8' alt="image.png" />
                <div>
                  <span className='block font-semibold text-[#333] text-sm'>A highly rated and experienced tutor</span>
                  <span className='block text-gray-500 text-xs uppercase'>Super tutor</span>
                </div>
              </div>

              <div className="border-1 border-gray-300 px-3 mt-2 shadow-md flex py-1 rounded-4xl gap-2 items-center">
                <img src={rate} className='w-10 h-8' alt="image.png" />
                <div>
                  <span className='block font-semibold text-[#333] text-xs'>Top 1%</span>
                  <span className='block text-gray-500 text-xs uppercase'>english tutor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 cursor-pointer  border-[#06BBCC] h-fit px-3 py-1 rounded-xl flex items-center gap-1">
            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z" stroke="#06BBCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='text-[#06BBCC] font-semibold'>Edit</span>
          </div>
        </div>

        <Tabs>
          <Tab>About</Tab>
          <Tab>Education</Tab>
          <Tab>Availability</Tab>
        </Tabs>
      </div>
    </div>
  )
}

const Tab = ({ onClick, isActive, children }) => (
  <li onClick={onClick} className={`cursor-pointer ${isActive && 'border-b-[#06bbcc] pb-2 border-b-2  text-[#06bbcc]'}`}>
    {children}
  </li>
)

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <ul className='flex m-0 pt-12 gap-4 text-[#9a9a9a] font-medium'>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            onClick: () => setActiveTab(index),
          })
        )}
      </ul>

      <div className="py-6 bg-white">
        <div className='w-2/3'>
          <h4 className='font-bold mb-16'>{React.Children.toArray(children)[activeTab].props.children}</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius repellat corporis? Earum recusandae eaque illo error similique, maxime reiciendis quam suscipit impedit? A molestias excepturi possimus debitis provident molestiae.
            Quo incidunt ipsum sapiente laborum neque distinctio! Voluptatibus quia sunt incidunt sit velit quasi earum nostrum, quas aliquam numquam vero assumenda accusantium accusamus illum voluptatem veritatis maiores doloremque cum. Quam.
            Quaerat dolor veniam quis aut reiciendis, harum voluptatibus neque dolores magnam accusamus iusto tempore eaque tempora ratione possimus, molestias quo? Deserunt quos, blanditiis quaerat expedita sit tenetur aspernatur cupiditate quasi!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile