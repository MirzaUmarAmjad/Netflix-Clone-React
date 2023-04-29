import Input from "@/components/input";
import {useState} from "react";

export default function Auth() {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" />
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md w-full">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-white text-4xl font-semibold">Sign In</h2>
                                <Input label="Email" onChange={(ev:any) => {setEmail(ev.target.value)}} value={email} id="email" type="email"/>
                                <Input label="Username" onChange={(ev:any) => {setName(ev.target.value)}} value={name} id="name"/>
                                <Input label="Password" onChange={(ev:any) => {setPassword(ev.target.value)}} value={password} id="password" type="password"/>
                            </div>
                            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
