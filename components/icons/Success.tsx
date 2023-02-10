import React from 'react';

const Success = (props: { width?: string; height?: string }) => {
  return (
    <svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.9995 11.9995C23.9995 15.1821 22.7352 18.2344 20.4848 20.4848C18.2344 22.7352 15.1821 23.9995 11.9995 23.9995C8.81691 23.9995 5.76467 22.7352 3.51423 20.4848C1.26379 18.2344 -0.000488281 15.1821 -0.000488281 11.9995C-0.000488281 8.81691 1.26379 5.76467 3.51423 3.51423C5.76467 1.26379 8.81691 -0.000488281 11.9995 -0.000488281C15.1821 -0.000488281 18.2344 1.26379 20.4848 3.51423C22.7352 5.76467 23.9995 8.81691 23.9995 11.9995ZM18.0445 7.45451C17.9374 7.34774 17.8098 7.26367 17.6694 7.20733C17.529 7.151 17.3787 7.12355 17.2275 7.12663C17.0763 7.12971 16.9272 7.16326 16.7892 7.22526C16.6513 7.28727 16.5272 7.37647 16.4245 7.48751L11.215 14.125L8.07551 10.984C7.86225 10.7853 7.58018 10.6771 7.28873 10.6822C6.99728 10.6874 6.7192 10.8055 6.51308 11.0116C6.30696 11.2177 6.18889 11.4958 6.18375 11.7872C6.17861 12.0787 6.28679 12.3608 6.48551 12.574L10.4545 16.5445C10.5614 16.6512 10.6888 16.7353 10.8289 16.7918C10.969 16.8482 11.1191 16.8759 11.2701 16.8731C11.4212 16.8703 11.5701 16.8371 11.7081 16.7755C11.846 16.7139 11.9701 16.6251 12.073 16.5145L18.061 9.02951C18.2652 8.81726 18.3779 8.53342 18.3751 8.23895C18.3723 7.94447 18.2542 7.66284 18.046 7.45451H18.0445Z'
        fill='#0F5132'
      />
    </svg>
  );
};

export default Success;
