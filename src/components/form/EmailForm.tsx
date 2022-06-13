import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { IEmailFormInputs } from '@/utils/interfaces/IEmailFormInputs';

import NormalButton from '../misc/NormalButton';
import { FormSchema } from './FormSchema';

type IEmailFormProps = {
  onSubmit: (res: any) => void;
};

const EmailForm = (props: IEmailFormProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailFormInputs>({
    resolver: yupResolver(FormSchema),
  });

  const [isCaptchaValid, setIsCaptchaValid] = React.useState(false);

  const onSubmit = (data: IEmailFormInputs) => {
    axios
      .post('/api/email', { data })
      .then((res) => {
        props.onSubmit(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (value: any) => {
    setIsCaptchaValid(value !== null);
    setValue('recaptcha', true);
  };

  React.useEffect(() => {
    register('recaptcha', {
      required: true,
      validate: (value: any) => value === true,
    });
  }, []);

  return (
    <div className="flex flex-col text-left">
      <h3 className="mb-4 -mt-9 text-center text-2xl font-bold text-[#082446] md:text-left lg:text-[22px]">
        Gratis account aanmaken
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full text-[#082446]">
        <div className="mb-6">
          <label htmlFor="firstName" className="mb-1 inline-block text-[17px]">
            Voornaam *
          </label>
          <input
            {...register('firstName')}
            id="firstName"
            className={`m-0 block w-full rounded  border border-solid 
                border-gray-300 bg-white bg-clip-padding px-3 py-1.5 
                text-base font-normal transition ease-in-out  focus:border-blue-600 
                focus:bg-white focus:text-gray-700 focus:outline-none
                ${errors.firstName && 'border-red-600'}`}
            placeholder="Rick"
          />
          {errors.firstName && (
            <p className="ml-4 text-red-300">
              <small>{errors.firstName.message}</small>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="lastName" className="mb-1 inline-block  text-[17px]">
            Achternaam *
          </label>
          <input
            {...register('lastName')}
            id="lastName"
            className={`m-0 block w-full rounded  border border-solid 
                border-gray-300 bg-white bg-clip-padding px-3 py-1.5 
                text-base font-normal transition ease-in-out  focus:border-blue-600 
                focus:bg-white focus:text-gray-700 focus:outline-none
                ${errors.lastName && 'border-red-600'}`}
            placeholder="Karens"
          />
          {errors.lastName && (
            <p className="ml-4 text-red-300">
              <small>{errors.lastName.message}</small>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="duty" className="mb-1 inline-block  text-[17px]">
            Functie *
          </label>
          <input
            {...register('duty')}
            id="duty"
            className={`m-0 block w-full rounded  border border-solid 
                border-gray-300 bg-white bg-clip-padding px-3 py-1.5 
                text-base font-normal transition ease-in-out  focus:border-blue-600 
                focus:bg-white focus:text-gray-700 focus:outline-none
                ${errors.duty && 'border-red-600'}`}
            placeholder="Barista"
          />
          {errors.duty && (
            <p className="ml-4 text-red-300">
              <small>{errors.duty.message}</small>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-1 inline-block  text-[17px]">
            E-mailadres *
          </label>
          <input
            type="email"
            {...register('email')}
            id="email"
            className={`m-0 block w-full rounded  border border-solid 
                border-gray-300 bg-white bg-clip-padding px-3 py-1.5 
                text-base font-normal transition ease-in-out  focus:border-blue-600 
                focus:bg-white focus:text-gray-700 focus:outline-none
                ${errors.email && 'border-red-600'}`}
            placeholder="rickkarens@gmail.com"
          />
          {errors.email && (
            <p className="ml-4 text-red-300">
              <small>{errors.email.message}</small>
            </p>
          )}
        </div>
        <div className="mb-6">
          <ReCAPTCHA
            // sitekey="6LdBFFUUAAAAALvBqeGewkqZ1m1WEssi2lu9z9Vk"
            sitekey="6Lf-IGcgAAAAAEh9ONfDHOCozNK0ej9CXAMow70N"
            onChange={handleChange}
          />
          {errors.recaptcha && (
            <p className="ml-4 text-red-300">
              <small>{errors.recaptcha.message}</small>
            </p>
          )}
        </div>
        <NormalButton
          type="submit"
          onClick={() => {}}
          className="mt-8 w-10/12 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={!isCaptchaValid}
        >
          Verstuur
        </NormalButton>
      </form>
    </div>
  );
};

export default EmailForm;
