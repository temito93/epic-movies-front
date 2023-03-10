import { ErrorMessage } from '@hookform/error-message';
import {
  ArrowLeft,
  Button,
  Input,
  Message,
  useForgotPassword,
} from 'components';
import { FormProvider } from 'react-hook-form';
import { ForgotPasswordTypes } from './types';

const ForgotPassword: React.FC<ForgotPasswordTypes> = (props) => {
  const {
    t,
    errors,
    form,
    checkEmailHandler,
    isLoading,
    handleSubmit,
    emailOptions,
  } = useForgotPassword();

  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white font-medium text-3.5'>
          {t('forgotPassword.about')}
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          {t('forgotPassword.description')}
        </p>
      </div>
      <div className='w-full'>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(checkEmailHandler)}>
            <Input
              options={emailOptions}
              containerClass='mt-8'
              label={t('forgotPassword.email')}
              type='email'
              name='email'
              placeholder={t('forgotPassword.emailPlaceholder')!}
            />

            <div className='h-7 mt-1'>
              <ErrorMessage
                name='email'
                errors={errors}
                render={({ message }) => <Message message={message} />}
              />
            </div>

            <Button
              type='submit'
              className={`${
                isLoading
                  ? 'bg-custom-rose-500'
                  : 'bg-custom-red-600 hover:bg-custom-red-700'
              } w-full text-white text-center h-[2.4rem] mt-3 rounded`}
              disabled={isLoading}
            >
              {t('forgotPassword.btn')}
            </Button>
          </form>
        </FormProvider>
        <div
          className='mt-6 flex justify-center items-center cursor-pointer'
          onClick={props.backToLoginClick}
        >
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500 ml-3'>
            {t('forgotPassword.backToLogin')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
