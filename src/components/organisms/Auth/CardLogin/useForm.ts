import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../app/features/auth/authApiSlice';
import {
  setIsLoggedIn,
  setUser,
} from '../../../../app/features/auth/authSlice';
import {
  useGetProfileQuery,
  useLazyGetProfileQuery,
} from '../../../../app/features/profile/profileApiSlice';
import { useAppDispatch } from '../../../../app/hooks';
import { FormReturnAuth, LoginProps } from '../../../../helpers/types';

function useForm(): FormReturnAuth<LoginProps> {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [getProfile, { data: profile }] = useLazyGetProfileQuery();
  const [login, { isError, isLoading }] = useLoginMutation();
  const [error, setError] = useState<Error>();

  const handleSubmit = async (values: LoginProps) => {
    try {
      const body = {
        email: values.email,
        password: values.password.trim(),
      };

      await login(body).unwrap();
      await getProfile().unwrap();
      dispatch(setUser(profile));
      dispatch(setIsLoggedIn(true));

      navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, isError, isLoading, error };
}

export default useForm;
