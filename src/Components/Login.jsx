import React from 'react'

import { useState } from 'react'
import logo from '/src/assets/logo_cortada-removebg-preview.png';



import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

        console.log("teste", username, password);

    }


  return (
    <div className="container">

        

        <form onSubmit={handleSubmit}>

            <div className="container-logo">
            <img src={logo} alt="Logo do sistema" className="logo" style={{height:100, width:400}}/>
            </div>
            
            <p>Olá, bem vindo(a) de volta!</p>

            <div className="input-field">
                <input type="e-mail" placeholder="E-mail"
                onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="input-field">
                <input type='senha' placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}/>
                

            </div> 

            <div className="lembrar-me">
                <label className='check'>
                    <input type='checkbox' />  Lembrar-me                    
                </label>      

                <a href="#">Esqueceu sua senha?</a>    

            </div>     
            
            {/* <div className='Esqueceu_a_senha'>

                <a href="#">Esqueceu a senha?</a>                

            </div> */}
            
            <div className="Entrar">

                <button>Entrar</button>
                
            </div>

            <div className='Cadastro'>

                <a href='#'>Ainda não tem cadastro? Cadastre-se aqui</a>
                
            </div>
            

    
        </form>
    </div>
  )
}

export default Login


