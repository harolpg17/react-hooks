import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'test@google.com'
    })

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState change!');
    }, [formState]);

    useEffect(() => {
        // console.log('email change!');
    }, [email]);
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInputChange} />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="test@google.com"
                name="email"
                value={email}
                onChange={handleInputChange} />

            {
                username === 'strider2' && <Message />
            }
        </>
    )
}
