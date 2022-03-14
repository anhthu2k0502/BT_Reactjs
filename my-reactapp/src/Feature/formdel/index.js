import { TextField } from '@mui/material';
import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';

const Formdel = ({ props }) => {



    return (
        props.length > 0 && (
            <div>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((p, index) => (
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                            <td>
                                <button >Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </div>
        )

    )

}
export default Formdel



