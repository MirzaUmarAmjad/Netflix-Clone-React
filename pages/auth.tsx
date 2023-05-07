import Input from "@/components/input";
import {useCallback, useState} from "react";
import axios from "axios";

export default function Auth() {

    const loginOptions = {
        login: 'login',
        register: 'register'
    };

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [variant,setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant(currentVariant => {
            return currentVariant === loginOptions.login ? loginOptions.register : loginOptions.login;
        })
    },[]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register',{email, name, password});
        }
        catch (e) {
            console.log(e);
        }
    },[email,name,password]);

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" />
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-white text-4xl font-semibold">{ variant === loginOptions.login ? 'Sign In' : 'Create an account'}</h2>
                                {variant === loginOptions.register && (
                                <Input label="Username" onChange={(ev:any) => {setName(ev.target.value)}} value={name} id="name"/>
                                )}
                                <Input label="Email" onChange={(ev:any) => {setEmail(ev.target.value)}} value={email} id="email" type="email"/>
                                <Input label="Password" onChange={(ev:any) => {setPassword(ev.target.value)}} value={password} id="password" type="password"/>
                            </div>
                            <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === loginOptions.login ? 'Login' : 'Sign up' }</button>
                            <p className="text-neutral-500 mt-12">{variant === loginOptions.login ? 'First time using Netflix?' : 'Already have an account?' }
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                    {variant === loginOptions.login ? 'create an account?' : 'Login' }
                                </span>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
