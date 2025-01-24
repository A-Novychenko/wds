'use client';

import { useState } from 'react';
// import dynamic from 'next/dynamic';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { FormField, FormTextField, Loader } from '@/components/ui';

import { cn, generateEmailHTML, sendEmail, sendTG } from '@/utils';

// import { sendEmail } from '@/utils/sendEmail';
// import { generateEmailHTML } from '@/utils/generateEmailHTML';

import staticData from '@/data/common.json';

import { ContactFormProps } from './types';
import { makeTgMsg } from '@/utils/makeTgMsg';

export const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const {
    submitBtnLabel,
    inputs,
    // select,
    textArea,
    successSubmit,
    errorSubmit,
  } = data;

  const {
    emailData: { subjectMailUser, subjectMailWDS },
  } = staticData as IStaticData;

  const [pending, setPending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<IContactsFormFields>();

  useFormPersist('contactForm', { watch, setValue });

  const onSubmit: SubmitHandler<IContactsFormFields> = async ({
    name,
    email,
    message,
  }) => {
    const mailDataWDS = {
      subject: `${subjectMailWDS} ${name}`,
      html: generateEmailHTML({
        recipient: 'wds',
        name,
        email,
        msg: message,
      }),
    };
    const mailDataUser = {
      subject: subjectMailUser,
      to: email,
      html: generateEmailHTML({
        recipient: 'user',
        name,
        email,
        msg: message,
      }),
    };

    const msg = makeTgMsg({ name, email, message });
    try {
      setPending(true);
      await Promise.all([
        await sendEmail(mailDataWDS),
        await sendEmail(mailDataUser),
        await sendTG(msg),
      ]);
      reset();
      window.sessionStorage.removeItem('contactForm');
      toast.success(successSubmit, {
        closeButton: false,
        className: 'toast-custom',
      });
    } catch (e) {
      console.log('e', e);
      toast.error(errorSubmit, {
        closeButton: false,
        className: 'toast-custom',
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="xl:w-full">
        <div className="">
          {inputs.map((inputConfig, idx) => (
            <FormField
              key={idx}
              register={register}
              errors={errors}
              trigger={trigger}
              config={inputConfig}
            />
          ))}
        </div>

        <FormTextField
          config={textArea}
          register={register}
          errors={errors}
          trigger={trigger}
        />

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0 || pending}
          className={cn(
            'flex w-full items-center justify-center rounded-[16px] bg-accentBg p-3.5 transition-colors',
            '2xl:py-5 2xl:leading-[1.5]',
            'text-center text-base/normal font-semibold text-strongDarkText',
            'hover:bg-accentBgEffect',
          )}
        >
          {submitBtnLabel}

          <Loader size={20} visible={pending} strokeWidth={1.5} color="#000" />
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
