import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "@/redux/store";
import { register } from "@/redux/auth/authSlice";
import { RegisterType } from "@/types";

export function useRegister() {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<RegisterType>({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    dispatch(register(form));
  }

  return { form, handleChange, handleRegister };
}
