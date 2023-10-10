"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addCustomDesign, uploadFile } from "@firebase/utils";
import UploadIcon from "./icons/Upload";
import { ECustomFormInputs } from "@utils/enums";

// todo: add eslint rule - remove unused imports

export type CustomFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  //   todo: change
  file: any;
};

// todo: change state of form after upload and submit -- successful banners
const Form = () => {
  const [filename, setFilename] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<CustomFormInputs>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      setFilename("");
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit: SubmitHandler<CustomFormInputs> = async (data) => {
    console.log(errors)
    uploadFile(data.file[0]).then((imageUrl) => {
      const formData = { ...data, file: imageUrl };
      addCustomDesign(formData);
    });
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
              {...register(name, {minLength: 2, required: true, ...(name===ECustomFormInputs.email && {pattern: /^\S+@\S+$/i})})}
            />
          );
        })}

        <label
          htmlFor="file-upload"
          className="custom-file-upload w-[400px] p-4 border border-black flex justify-start items-center gap-4"
        >
          <UploadIcon />
          <p>{filename ? filename : "Click to upload"}</p>
        </label>
        <input
          id="file-upload"
          className="hidden"
          type="file"
          {...register("file", {
            onChange: (event) => setFilename(event.target.files[0].name),
          })}
        />

        {/* todo: style error message and set timeout */}
        {errors.email && <span className="text-red-500">This field is required</span>}

        <input className="button" type="submit" onClick={() => console.log({errors})} />
      </div>
    </form>
  );
};

export default Form;
