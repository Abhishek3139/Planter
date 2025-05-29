import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { decryptData } from '../../utils/utils';
import { User, UserForm } from '../../modals/userModals';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { GetUser, UpdateMe } from '../../store/thunkApi/user';
import { selectIsUserUpdated, selectUser, selectUserError } from '../../store/reducers/user';
import { toast } from 'react-toastify';

function UserProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loggedUser: User = decryptData('user');
  const error = useAppSelector(selectUserError);
  const isUserUpdated = useAppSelector(selectIsUserUpdated);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    dispatch(UpdateMe(data));
    setIsEditing(false);
  };    
  useEffect(() => {
    if (loggedUser?._id) {
      dispatch(GetUser(loggedUser._id));
    }
  }, [loggedUser._id, isUserUpdated]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  useEffect(() => {
    if (user) {
      reset({ name: user.name || '', email: user.email || '', address: user?.address });
    }
  }, [user, reset]);
  return (
    <div className='px-4 py-10 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold text-center text-green-800 mb-12'>🌿 My Profile</h1>

      <div className='bg-white p-8 rounded-2xl shadow-lg'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold text-green-700'>👤 Personal Information</h2>
          <button
            onClick={() => setIsEditing((prev) => !prev)}
            className='text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition'
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label className='block text-gray-600 mb-1 font-medium'>Name</label>
              <input
                type='text'
                {...register('name', { required: 'Name is required' })}
                className='w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
            </div>

            <div>
              <label className='block text-gray-600 mb-1 font-medium'>Email</label>
              <input
                type='email'
                {...register('email', { required: 'Email is required' })}
                className='w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
              <label className='block text-gray-600 mb-1 font-medium'>Address</label>
              <input
                type='text'
                {...register('address')}
                className='w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition'
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className='space-y-4'>
            <p>
              <span className='font-medium text-gray-600'>Name:</span>{' '}
              <span className='text-gray-800'>{user?.name}</span>
            </p>
            <p>
              <span className='font-medium text-gray-600'>Email:</span>{' '}
              <span className='text-gray-800'>{user?.email}</span>
            </p>
            <p>
              <span className='font-medium text-gray-600'>Address:</span>{' '}
              <span className='text-gray-800'>{user?.address}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
