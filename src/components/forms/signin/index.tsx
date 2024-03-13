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
    </>
  );
}
