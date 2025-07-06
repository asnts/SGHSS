
import { useState } from 'react'
import logo from '/src/assets/logo_cortada-removebg-preview.png';



import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")


     const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

    const handleSubmit = (event) => {

        event.preventDefault();  
        
        console.log("handleSubmit chamado!")


        if (!validateEmail(username)) {
      setEmailError("Digite um e-mail válido.")
      return
    } else {
      setEmailError("") // limpa o erro se válido
    }
   
    
    }


  return (
    <div className="container">

        

        <form onSubmit={handleSubmit}>

            <div className="container-logo">
            <img src={logo} alt="Logo do sistema" className="logo" style={{height:100, width:400}}/>
            </div>
            
            <p>Olá, bem vindo(a) de volta!</p>

            <div className="input-field">
                <input type="email" placeholder="E-mail" 
                onChange={(e) => setUsername(e.target.value)} required />
            </div>

             {emailError && <span className="error">{emailError}</span>}

            <div className="input-field">
                <input type='password' placeholder="Senha" required
                onChange={(e) => setPassword(e.target.value)}/>
                

            </div> 

            <div className="lembrar-me">
                <label className='check'>
                    <input type='checkbox' />  Lembrar-me                    
                </label>      

                <a href="#">Esqueceu sua senha?</a>    

            </div>     
            
                       
            <div className="Entrar">

                <button type="submit">Entrar</button>
                
            </div>

            <div className='Cadastro'>

                <a href='#'>Ainda não tem cadastro? Cadastre-se aqui</a>
                
            </div>
            

    
        </form>
    </div>
  )
}

export default Login


