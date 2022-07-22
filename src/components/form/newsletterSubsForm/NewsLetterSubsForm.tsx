import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useSubscribeToNewsletter } from '@/utils/hooks/useSubscribeToNewsletter';
import { INewsLetterSubsFormInputs } from '@/utils/interfaces/INewsLetterSubsInputs';
import { FormSubmitStates } from '@/utils/types/FormState';

import NormalButton from '../../misc/NormalButton';

type IProps = {
  onSubmit: (res: any) => void;
};

const FormSchema = yup
  .object({
    name: yup
      .string()
      .required('Naam is verplicht')
      .min(3, 'Naam moet minimaal 3 tekens bevatten'),
    email: yup
      .string()
      .required('E-mailadres is verplicht')
      .email('Email moet een geldig e-mailadres zijn'),
  })
  .required();

const NewsLetterSubsForm = (props: IProps) => {
  const { form, subscribe } = useSubscribeToNewsletter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewsLetterSubsFormInputs>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data: INewsLetterSubsFormInputs) => {
    subscribe(data).then(() => {
      if (form.state === FormSubmitStates.Success) {
        props.onSubmit(data);
        reset();
      }
    });
  };

  return (
    <div className="flex flex-col text-left">
      <h3 className="mb-4 -mt-9 text-center text-2xl font-bold text-cBlue-500 md:text-left lg:text-[22px]">
        Gratis account aanmaken
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full text-cBlue-500">
        <div className="mb-6">
          <label htmlFor="firstName" className="mb-1 inline-block text-[17px]">
            Je naam
          </label>
          <input
            {...register('name')}
            id="firstName"
            className={`m-0 block w-full rounded  border border-solid 
                border-gray-300 bg-white bg-clip-padding px-3 py-1.5 
                text-base font-normal transition ease-in-out  focus:border-blue-600 
                focus:bg-white focus:text-gray-700 focus:outline-none
                ${errors.name && 'border-red-600'}`}
            placeholder="Rick"
          />
          {errors.name && (
            <p className="ml-4 text-red-300">
              <small>{errors.name.message}</small>
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-1 inline-block  text-[17px]">
            E-mailadres
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
        <NormalButton
          type="submit"
          onClick={() => {}}
          className="mt-8 w-10/12 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Inschrijven
        </NormalButton>
      </form>
    </div>
  );
};

export default NewsLetterSubsForm;
