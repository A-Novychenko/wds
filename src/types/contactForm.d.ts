interface IContactFormData {
  submitBtnLabel: string;
  successSubmit: string;
  errorSubmit: string;
  inputs: IContactFormDataField[];
  textArea: IContactFormDataTextarea;
}

interface IContactFormDataField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  validationOptions: IContactFormDataValidationOptions;
}

interface IContactFormDataValidationOptions {
  required: IContactFormDataValidationOptionsValues;
  pattern: IContactFormDataValidationOptionsValues;
  minLength?: IContactFormDataValidationOptionsValues;
  maxLength: IContactFormDataValidationOptionsValues;
}

interface IContactFormDataValidationOptionsValues {
  value: number | string | boolean;
  message: string;
}

interface IContactsFormFields {
  name: string;
  email: string;
  message: string;
}

interface IContactFormDataTextarea {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  validationOptions: IContactFormDataValidationOptionsTextarea;
}

interface IContactFormDataValidationOptionsTextarea {
  required: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
}
