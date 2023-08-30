import axios from 'axios'
import {useState} from 'react'
import {API_URI} from '../libs/globals'
import Cookie from 'js-cookie'

export default ()=>{
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const handleForm = async (e)=>{
        
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if(username === ''){
            setMessage({message: 'Enter your username!', variant: 'alert'})
            return 0
        }
        if (password === '') {
            setMessage({message: "Enter your password!", variant: "alert"})
            return 0
        }
        setLoading(true)
        await axios.post(API_URI + '/login', {username, password})
            .then(e => {
                const res = e.data
                if(res.admin){
                    setMessage({message:'Logged successfully!', variant: 'success'})
                    Cookie.set('cloud-admin', JSON.stringify(res.admin),{expires: 10})
                    window.location.reload()
                }else{
                    setMessage({message: 'Failed to sign in. please check your username or password!', variant: 'danger'})
                }
                console.log(res)
                setLoading(false)
            })
            .catch(e =>{console.error(e);setLoading(false);setMessage({message: e.message, variant: 'danger'})})
    }
    return <div className="login fade-in">
        <h2>Admin Login</h2>
        <form onSubmit={handleForm}>
            <label htmlFor='username'>Enter your username or email address.</label>
            <input type="text" id="username" name="username" placeholder="E.g. john"/>
            <label htmlFor="password">Enter your password</label>
            <input type="password" id="password" name="password" placeholder="min 8 character password here..."/>
            {message && 
                <span className={'inline-message ' +  message.variant}>{message.message}</span>
            }
            <button type="submit" disabled={loading}>
                {loading ? <img src="/media/spinner.gif" alt="loading..."/> : "Sign In"}
            </button>
        </form>
    </div>
}
