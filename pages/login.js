import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Login() {

    const router = useRouter()

    const [login, setlogin] = useState("");

    const [data, setdata] = useState({
        email_id:'',
        password:''
    });

    const onEmailChange =(e)=>{setdata({...data,email_id:e.target.value})}
    const onPasswordChange = (e)=>{setdata({...data,password:e.target.value})}

    //* To Redirect the User
    const handleLogin = (event) => {
        event.preventDefault()
        router.push('/dashboard')
    }

    //* Prefetching the dashboard Page 
    useEffect(() => {
        router.prefetch('/dashboard')

        return {}
      }, [])

    return (
        <>
            <Head>
                <title>{'Login'}</title>
            </Head>
        
        <div>
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user" onSubmit={handleLogin}>
                                <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"  onChange={onEmailChange} aria-describedby="emailHelp" placeholder="Enter Email Address..." autoComplete="email_id" required/>
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control form-control-user" id="exampleInputPassword"  onChange={onPasswordChange} placeholder="Password"  autoComplete="password" required/>
                                </div>
                                <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                                <hr />
                                
                            </form>
                            <hr />
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                            <Link href="/"><a className="small">Create an Account!</a></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
    </>
    )
}
