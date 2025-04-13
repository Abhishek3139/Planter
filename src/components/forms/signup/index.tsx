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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

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
    <div className='min-h-screen bg-green-50 flex items-center justify-center px-6 py-12 lg:px-8'>
      <div className='w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-md'>
        <div className='text-center'>
          <img
            className='mx-auto h-12 w-auto'
            src='/assets/logo-green.svg' // Replace with your logo
            alt='Planter Co.'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-green-800'>
            Create your Planter account
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Start your plant journey with us 🌱
          </p>
        </div>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit(handleRegister)}>
          {/* Name */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 text-left'>
              Name
            </label>
            <input
              id='name'
              {...register('name', { required: 'Name is required' })}
              placeholder='e.g. Jane Doe'
              className='mt-1 block w-full rounded-md border border-green-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
            />
            <p className='text-red-500 text-sm mt-1'>{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 text-left'>
              Email
            </label>
            <input
              id='email'
              {...register('email', { required: 'Email is required' })}
              placeholder='e.g. jane@plants.com'
              className='mt-1 block w-full rounded-md border border-green-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
            />
            <p className='text-red-500 text-sm mt-1'>{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 text-left'>
              Password
            </label>
            <input
              id='password'
              type='password'
              {...register('password', { required: 'Password is required' })}
              placeholder='Create a strong password'
              className='mt-1 block w-full rounded-md border border-green-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
            />
            <p className='text-red-500 text-sm mt-1'>{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor='confirmPassword'
              className='block text-sm font-medium text-gray-700 text-left'
            >
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              type='password'
              {...register('passwordConfirm', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
              placeholder='Confirm your password'
              className='mt-1 block w-full rounded-md border border-green-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm'
            />
            <p className='text-red-500 text-sm mt-1'>{errors.passwordConfirm?.message}</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full flex justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition'
            >
              Sign up
            </button>
          </div>

          {/* Redirect to Login */}
          <p className='text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <span
              className='font-medium text-green-700 hover:text-green-900 cursor-pointer'
              onClick={() => navigate('/signin')}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
