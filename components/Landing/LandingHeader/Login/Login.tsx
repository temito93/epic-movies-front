import { ErrorMessage } from '@hookform/error-message';
import { Button, Google, Input, Message } from 'components';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';
import { LoginProps } from './types';
import useLogin from './useLogin';

const Login: React.FC<LoginProps> = (props) => {
  const {
    t,
    form,
    handleLogin,
    errors,
    handleGoogleLogin,
    handleSubmit,
    loginOptions,
    passwordOptions,
  } = useLogin();
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl md:text-3.5 font-medium'>
          {t('logIn.about')}
        </h2>
        <p className='text-custom-gray-500  font-normal mt-3 text-base'>
          {t('logIn.description')}
        </p>
      </div>
      <div className='w-full'>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input
              options={loginOptions}
              containerClass='mt-8'
              label={t('logIn.emailOrUsername')}
              type='text'
              name='login'
              placeholder={t('logIn.emailOrUserNamePlaceholder')!}
            />
            <div className='h-7 mt-1'>
              <ErrorMessage
                name='login'
                errors={errors}
                render={({ message }) => <Message message={message} />}
              />
            </div>
            <Input
              options={passwordOptions}
              containerClass='mt-2'
              label={t('logIn.password')}
              type='password'
              name='password'
              placeholder={t('logIn.passwordPlaceholder')!}
            />

            <div className='h-7 mt-1'>
              <ErrorMessage
                name='password'
                errors={errors}
                render={({ message }) => <Message message={message} />}
              />
            </div>

            <div className='flex items-center justify-between mt-2'>
              <Input
                type='checkbox'
                name='remember'
                value='1'
                label={t('logIn.remember')}
                containerClass='flex items-center h-4'
              />

              <Link
                href='/'
                className='text-custom-blue-600 cursor-pointer  underline text-base font-normal'
                onClick={props.onForgotPassword}
              >
                {t('logIn.forgotPassword')}
              </Link>
            </div>

            <Button
              type='submit'
              className='bg-custom-red-600 hover:bg-custom-red-700 w-full text-white text-center h-[2.4rem] mt-10 rounded'
            >
              {t('logIn.btn')}
            </Button>
          </form>
        </FormProvider>
        <Button
          className='w-full mt-4 border h-[2.4rem] rounded hover:bg-white hover:text-black'
          onClick={handleGoogleLogin}
        >
          <div className='flex items-center justify-center'>
            <Google />
            <span className='ml-2'>{t('logIn.googleBtn')}</span>
          </div>
        </Button>
        <div className='mt-8 flex justify-center'>
          <p className='text-base font-normal text-custom-gray-500'>
            {t('logIn.dontHaveAnAccount')}
            <span
              className='text-custom-blue-600 underline ml-1 cursor-pointer'
              onClick={props.onSignUpClick}
            >
              {t('logIn.signUp')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
