import { Close } from 'components';
import { FormWrapperProps } from './types';

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  return (
    <div
      className={`${props.className} ${
        props.mode === 'mobile modal' ? 'h-max w-max' : ''
      } md:top-1/2 md:-translate-y-1/2 h-screen md:left-1/2 md:-translate-x-1/2  md:rounded-[0.6rem] w-full fixed bg-custom-zinc-800 z-[6] flex justify-center items-center px-2`}
    >
      <div
        className={`absolute top-8 right-10 cursor-pointer ${
          props.mode === 'mobile modal' && 'hidden'
        }`}
        onClick={props.onClose}
      >
        <Close />
      </div>
      {props.children}
    </div>
  );
};

export default FormWrapper;
