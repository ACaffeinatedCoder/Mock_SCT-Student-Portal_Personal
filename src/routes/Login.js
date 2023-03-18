import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const verify = () => {
        navigate("/main")
    }
    return(
        <div>
            <h1> Login </h1>
            <button onClick={() => verify()}> Login </button>   
        </div>
        
    )
}