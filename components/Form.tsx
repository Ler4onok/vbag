"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
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
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data });

    const formData = new FormData();
    formData.append("file", data.file[0]);

    console.log({ formData });

    // const res = await fetch("http://localhost:3000/upload-file", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center flex-col gap-4">
        {/* todo: iterate + validate email */}
        <input
          className="min-w-[400px] p-4 border border-black"
          defaultValue="Lera"
          {...register("firstName")}
        />
        <input
          className="min-w-[400px] p-4 border border-black"
          defaultValue="Chizh"
          {...register("lastName")}
        />
        <input
          className="min-w-[400px] p-4 border border-black"
          defaultValue="email@gmail.com"
          {...register("email", { required: true })}
        />

        <input
          className="min-w-[400px] p-4 border border-black"
          type="file"
          {...register("file")}
        />

        {/* todo: style error message */}
        {/* {errors.email && <span>This field is required</span>} */}

        <input className='button' type="submit" />
      </div>
    </form>
  );
};

export default Form;
