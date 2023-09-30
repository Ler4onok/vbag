"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addCustomDesign, uploadFile } from "@firebase/utils";

// todo: add eslint rule - remove unused imports
enum ECustomFormInputs {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  file = "file",
}

export type CustomFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  //   todo: change
  file: any;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomFormInputs>();

  const onSubmit: SubmitHandler<CustomFormInputs> = async (data) => {
    uploadFile(data.file[0]).then((imageUrl) => {
      const formData = { ...data, file: imageUrl };
      addCustomDesign(formData);
    });

    // todo: reset form
  };

  const CustomFormInputs: Array<{
    name: ECustomFormInputs;
    placeholder: string;
  }> = [
    { name: ECustomFormInputs.firstName, placeholder: "First name" },
    { name: ECustomFormInputs.lastName, placeholder: "Last name" },
    { name: ECustomFormInputs.email, placeholder: "Email" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center flex-col gap-4">
        {CustomFormInputs.map(({ name, placeholder }) => {
          return (
            <input
              key={name}
              className="w-[400px] p-4 border border-black"
              placeholder={placeholder}
              {...register(name)}
            />
          );
        })}
        <input
          className="w-[400px] p-4 border border-black"
          type="file"
          {...register("file")}
        />

        {/* todo: style error message */}
        {/* {errors.email && <span>This field is required</span>} */}

        <input className="button" type="submit" />
      </div>
    </form>
  );
};

export default Form;
