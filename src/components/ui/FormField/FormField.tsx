import { cn } from '@/utils';

import RequiredIcon from '~/icons/required.svg';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  config,
  register,
  errors,
  trigger,
}) => {
  const {
    type,
    label,
    name: nameData,
    placeholder,
    validationOptions,
  } = config;

  const required = validationOptions.required.value;
  const name = nameData as 'name' | 'email' | 'phone';
  const isError = errors?.[name as keyof IContactsFormFields];
  const errorMessage = isError?.message as string | undefined;

  return (
    <label className="relative mb-4 flex flex-col text-base/normal font-medium text-lightText">
      <span className="mb-1 flex 2xl:mb-2">
        <span className="">{label}</span>

        <RequiredIcon width={8} height={8} />
      </span>

      <input
        aria-required={required ? true : false}
        aria-invalid={
          errors[name as keyof IContactsFormFields] ? 'true' : 'false'
        }
        aria-describedby={
          errors[name as keyof IContactsFormFields]
            ? `errorMessage${name}`
            : undefined
        }
        type={type}
        placeholder={placeholder}
        className={cn(
          'rounded-[16px] border border-solid border-transparent px-4 py-[14px] font-light text-secondaryText',
          '2xl:p-4',
          { 'border-error outline-error': isError },
        )}
        {...register(name as keyof IContactsFormFields, {
          required: validationOptions.required.value
            ? true
            : validationOptions.required.message,
          minLength:
            validationOptions.minLength?.value &&
            typeof validationOptions.minLength.value === 'number'
              ? {
                  value: validationOptions.minLength.value,
                  message: validationOptions.minLength.message,
                }
              : undefined,
          maxLength:
            validationOptions.maxLength?.value &&
            typeof validationOptions.maxLength.value === 'number'
              ? {
                  value: validationOptions.maxLength.value,
                  message: validationOptions.maxLength.message,
                }
              : undefined,
          onChange: e => {
            if (type === 'tel') {
              e.target.value = e.target.value.replace(/[^0-9+\-() ]/g, '');
            }
            trigger(name as keyof IContactsFormFields);
          },
          onBlur: () => {
            trigger(name as keyof IContactsFormFields);
          },
          pattern: {
            value:
              typeof validationOptions?.pattern?.value === 'string'
                ? new RegExp(validationOptions.pattern.value)
                : /.*/,
            message: validationOptions?.pattern?.message || '',
          },
        })}
      />

      {isError && errorMessage && (
        <span className="absolute bottom-0 left-0 translate-y-[12px] text-[10px] text-error">
          <span className="">{errorMessage}</span>
        </span>
      )}
    </label>
  );
};
