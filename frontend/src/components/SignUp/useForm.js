import { useState, useEffect } from "react";
import APIService from "../../APIService";
import Login from "../loginForm/Login";

function useForm(validate, callback) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        checkPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);

        // now send this setRecords to backend. Frontend work is done
        APIService.RegisterUser(values)
            .then((resp) => console.log(resp))
            .then(() => Login.handleLoginSubmit())
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
        // eslint-disable-next-line
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;
