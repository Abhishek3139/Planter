import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectIsRegistered, selectLoginLoading } from '../../../store/reducers/authSlice';
import { RegisterInputs } from '../../../modals/registerModal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RegisterUser } from '../../../store/thunkApi/authApi';
import { PlantLoader } from '../../loaders/plantLoader';

export default function Signup() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterInputs>();
  const isRegistered = useAppSelector(selectIsRegistered);
  const isLoading = useAppSelector(selectLoginLoading);

  const handleRegister: SubmitHandler<RegisterInputs> = (data) => {
    dispatch(RegisterUser(data));
  };
  useEffect(() => {
    if (isRegistered) navigate('/thankYou');
  }, [isRegistered, navigate]);

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
            Sign up
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900 text-left'
              >
                Name
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  {...register('name', { required: true })}
                  placeholder='Please enter your name here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
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
                  {...register('email', { required: true })}
                  placeholder='Please enter your email here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900 text-left'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  {...register('password', { required: true })}
                  placeholder='Please enter your password here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium leading-6 text-gray-900 text-left'
              >
                Confirm Password
              </label>
              <div className='mt-2'>
                <input
                  id='confirmPassword'
                  {...register('passwordConfirm', { required: true })}
                  placeholder='Please enter your confirm password here'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
