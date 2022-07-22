export enum FormSubmitStates {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormSubmitState = {
  state: FormSubmitStates;
  message?: string;
};
