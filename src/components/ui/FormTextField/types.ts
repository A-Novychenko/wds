import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

export type FormTextFieldProps = {
  config: IContactFormDataTextarea;
  register: UseFormRegister<IContactsFormFields>;
  errors: FieldErrors<IContactsFormFields>;
  trigger: UseFormTrigger<IContactsFormFields>;
};
