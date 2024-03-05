import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  return (
    <section>
      <div className=' text-white grid grid-cols-1 md:grid-cols-2 bg-[#f2f2f2]'>
        <div className='hidden md:block shop-now-background'></div>

        <div className='text-center md:text-left p-16 my-auto'>
          <h1 className='text-4xl m-2 text-black'>For The True</h1>
          <h1 className='text-4xl m-2 text-black'>Plant Lovers</h1>
          <button className='bg-green-700 w-36 h-10 m-4' onClick={() => navigate('/products')}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
