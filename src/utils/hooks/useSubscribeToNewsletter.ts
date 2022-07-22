import { useState } from 'react';

import { INewsLetterSubsFormInputs } from '../interfaces/INewsLetterSubsInputs';
import { FormSubmitState, FormSubmitStates } from '../types/FormState';

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormSubmitState>({
    state: FormSubmitStates.Initial,
  });

  async function subscribe(data: INewsLetterSubsFormInputs) {
    setForm({ state: FormSubmitStates.Loading });

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: data.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: FormSubmitStates.Error,
        message: error,
      });
      return;
    }

    setForm({
      state: FormSubmitStates.Success,
      message: `Success! You've been added to the list!`,
    });
  }

  return { subscribe, form };
}
