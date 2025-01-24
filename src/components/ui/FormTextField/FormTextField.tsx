'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import RequiredIcon from '~/icons/required.svg';

import { FormTextFieldProps } from './types';

export const FormTextField: React.FC<FormTextFieldProps> = ({
  config,
  register,
  errors,
  trigger,
}) => {
  const [symbolsCount, setSymbolsCount] = useState(0);

  const { label, name: nameData, placeholder, validationOptions } = config;

  const required = validationOptions.required.value;
  const maxLength =
    typeof validationOptions.maxLength?.value === 'number'
      ? validationOptions.maxLength.value
      : 1024;
  const name = nameData as 'message';
  const isError = errors?.[name];
  const errorMessage = errors?.[name]?.message;

  return (
    <label className="mb-4 flex flex-col text-base/normal font-medium text-lightText xl:mb-5 2xl:mb-6">
      <span className="mb-1 flex">
        <span className="">{label}</span>

        <RequiredIcon width={8} height={8} />
      </span>

      <textarea
        aria-required={required ? true : false}
        aria-invalid={isError ? 'true' : 'false'}
        aria-describedby={isError ? `errorMessage${name}` : undefined}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cn(
          'mb-1 h-[180px] resize-none rounded-[16px] border border-solid border-transparent px-4 py-[14px] font-light text-secondaryText',
          '2xl:h-[208px] 2xl:p-4',
          { 'border-error outline-error': isError },
        )}
        {...register(name as 'message', {
          required: required
            ? { value: true, message: validationOptions.required?.message }
            : undefined,
          pattern: validationOptions.pattern?.value
            ? {
                value: new RegExp(validationOptions.pattern?.value),
                message: validationOptions.pattern?.message,
              }
            : undefined,
          minLength: validationOptions.minLength?.value,
          maxLength: validationOptions.maxLength?.value,

          onChange: e => {
            setSymbolsCount(e.target.value.length);
            trigger(name);
          },
          onBlur: () => {
            trigger(name);
          },
        })}
      />

      <div className="flex items-center justify-between text-[10px]">
        {isError && (
          <span id={`errorMessage${name}`} className="text-error">
            {errorMessage}
          </span>
        )}

        <span className="ml-auto">
          {symbolsCount}/{maxLength}
        </span>
      </div>
    </label>
  );
};
