import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectIsLoggedIn,
  selectLoginError,
  selectLoginLoading,
} from '../../../store/reducers/authSlice';
import { useEffect } from 'react';
import { loginUser } from '../../../store/thunkApi/authApi';
import { PlantLoader } from '../../loaders/plantLoader';
type Inputs = {
  email: string;
  password: string;
};

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loginError = useAppSelector(selectLoginError);
  const isLoading = useAppSelector(selectLoginLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);
  if (isLoading) return <PlantLoader />;
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900 text-left'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  {...register('email', { required: 'Email Address is required' })}
                  placeholder='Please enter your email here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                <div className='text-red-500 text-left'>
                  {errors.email && errors?.email?.message}
                </div>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  {...register('password', { required: 'Password is required' })}
                  placeholder='Please enter your password here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                <div className='text-red-500 text-left'>
                  {errors.password && errors?.password?.message}
                </div>
              </div>
            </div>
            <div className='font-semibold text-indigo-600 hover:text-indigo-500'>
              <button onClick={() => navigate('/forgotPassword')}>Forgot password?</button> |{' '}
              <button onClick={() => navigate('/signup')}>No Account</button>
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>
          {loginError && <h1>{loginError}</h1>}
        </div>
      </div>
      {/* <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://www.svgrepo.com/show/301692/login.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm leading-5 text-blue-500 max-w'>
            {`Or `}
            <a
              href='#'
              className='font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150'
            >
              create a new acccount
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-5  text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <input
                    id='email'
                    name='email'
                    placeholder='user@example.com'
                    type='email'
                    value=''
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                  <div className='hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fill-rule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-5 text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1 rounded-md shadow-sm'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  />
                </div>
              </div>

              <div className='mt-6 flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember_me'
                    name='remember'
                    type='checkbox'
                    value='1'
                    className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                  />
                  <label
                    htmlFor='remember_me'
                    className='ml-2 block text-sm leading-5 text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm leading-5'>
                  <a
                    href='#'
                    className='font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className='mt-6'>
                <span className='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}
