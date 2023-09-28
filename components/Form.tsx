"use client";

import db from "@firebase/config";
import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addDoc, collection, getDocs } from "firebase/firestore";

enum EInputs {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  file = "file",
}

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

  // useEffect(() => {
  //   const getCollection = async () => {
  //     const querySnapshot = await getDocs(collection(db, "custom"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   };

  //   getCollection();
  // }, []);

  // const formRef = useRef<HTMLFormElement | null>(null); 

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log({ data });

    const formData = new FormData();
    formData.append("file", data.file[0]);

    console.log({ formData });

    const newData = {...data, file: data.file[0]?.name}
    await addDoc(collection(db, "custom"), newData);
 
    // (formRef.current as HTMLFormElement | null)?.reset();
  };

  const inputs: Array<{ name: EInputs; placeholder: string }> = [
    { name: EInputs.firstName, placeholder: "First name" },
    { name: EInputs.lastName, placeholder: "Last name" },
    { name: EInputs.email, placeholder: "Email" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center flex-col gap-4">
        {inputs.map(({ name, placeholder }) => {
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
