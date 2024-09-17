import React from "react";
import FormularioSenha from "./componets/FormularioSenha";


function App() {
  const [Senha, setSenha] = React.useState('');




  return(
    <>

      <div className="container-main">
        <h2 className="title">Deixe sua senha mais forte</h2>

        <FormularioSenha setSenhaState={setSenha}/>

        {
          Senha?
            <div className="senha-gerada">
              {Senha}
            </div>
          :
            <div className="possivel-senha">
              <h3>Sua senha vai ser gerada aqui</h3>
            </div>
        }
    
      </div>
   
    </>
  )

  
}

export default App
