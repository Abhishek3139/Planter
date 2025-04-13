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
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-16"
            src="./static/planterlogo.png"
            alt="Planter Logo"
          />
          <h2 className="mt-6 text-2xl font-bold text-green-800">
            Welcome Back, Plant Lover 🌱
          </h2>
          <p className="mt-2 text-sm text-green-600">
            Sign in to continue growing your collection
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-green-800">Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-green-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800">Password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="********"
              className="mt-1 block w-full rounded-md border border-green-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between text-sm text-green-700 font-medium">
            <button
              type="button"
              onClick={() => navigate('/forgotPassword')}
              className="hover:underline"
            >
              Forgot password?
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="hover:underline"
            >
              No account? Sign up
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {loginError && (
          <div className="mt-4 text-center text-sm text-red-500">
            {loginError}
          </div>
        )}
      </div>
    </div>
  );
}
