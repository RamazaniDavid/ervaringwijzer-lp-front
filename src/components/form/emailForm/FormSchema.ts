import * as yup from 'yup';

export const FormSchema = yup
  .object({
    firstName: yup
      .string()
      .required('Voornaam is verplicht')
      .min(3, 'Voornaam moet minimaal 3 tekens bevatten'),
    lastName: yup
      .string()
      .required('Achternaam is verplicht')
      .min(3, 'Achternaam moet minimaal 3 tekens bevatten'),
    duty: yup
      .string()
      .required('Functie is verplicht')
      .min(3, 'Functie moet minimaal 3 tekens bevatten'),
    email: yup
      .string()
      .required('E-mailadres is verplicht')
      .email('Email moet een geldig e-mailadres zijn'),
    recaptcha: yup
      .boolean()
      .required('recaptcha is verplicht')
      .test('recaptcha', ' reCAPTCHA is verplicht', (value) => value === true),
  })
  .required();
