import React from 'react';

export interface LoginProps {
  email: string;
  password: string;
}

export interface ErrorLogin {
  email: string;
  password: string;
}

export interface FormReturnLogin<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorLogin | undefined;
}

export interface RegisterProps {
  name: string;
  email: string;
  address?: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
