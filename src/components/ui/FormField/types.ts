import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

export type FormFieldProps = {
  config: IContactFormDataField;
  register: UseFormRegister<IContactsFormFields>;
  errors: FieldErrors<IContactsFormFields>;
  trigger: UseFormTrigger<IContactsFormFields>;
};
