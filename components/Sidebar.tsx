import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiPagesFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div>
      <img src='https://i.ibb.co/pjttKzJ/ofrei-ttas.png' alt='Profile Image'
        className='w-32 h-32 rounded-full mx-auto'
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Will</span>
        Freittas
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full' >Frontend developer</p>
      <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
        href=''
        download='name'>
        <GiTie className='w-6 h-6' /> Download resume</a>
      {/* //social icons */}
      <div className='flex justify-around w-9/12 text-green-500 my-5 mx-auto' >
        <a href="">
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href="">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href="">
          <RiPagesFill className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/*  Adress */}
      <div className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Minas Gerai, Brasil</span>
        </div>
        <p className="my-2" >afreittaswill@gmail,com</p>
        <p className="my-2" >55 31 982699558</p>
      </div>
      {/* Email Button */}
      <button className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none">Email</button>
      <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 ">Toogle theme</button>
    </div>
  )
}

export default Sidebar;
