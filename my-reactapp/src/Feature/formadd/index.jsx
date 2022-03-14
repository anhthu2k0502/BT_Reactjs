import { TextField } from '@mui/material';
import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';

const Formadd = ({ props }) => {
    console.log(props)
    const {
        register,
        handleSubmit,

    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        props.push(data)
        alert("thêm thành công")

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name='name' {...register('name')} />
            <TextField name='age' {...register('age')} />
            <TextField type="submit" />
        </form>
    )
}
export default Formadd