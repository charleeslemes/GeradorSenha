import React from "react";
import Input from "./Input";


type formProps = {
    setSenhaState: React.Dispatch<React.SetStateAction<string>>;
}

function FormularioSenha(props: formProps){

    const [check, setCheck] = React.useState(false);
    const [inputSenha, setInputSenha] = React.useState('');


    function GerarSenha(){
        if(!inputSenha) return alert('digitar uma senha por favor!');

        const nRadom = (Math.floor(Math.random() * 10));
        const simbolos = ['@', '$', '!', '&', '#'];
        const randomSimbolos = Math.floor(Math.random() * simbolos.length);
        const randomSimbolos2 = Math.floor(Math.random() * simbolos.length);

           
        if(check) return props.setSenhaState(`${simbolos[randomSimbolos]}${inputSenha[0].toUpperCase() + inputSenha.substring(1)}${simbolos[randomSimbolos2]}${nRadom}`);
        if(!check) return props.setSenhaState(`${simbolos[randomSimbolos]}${inputSenha}${nRadom}${simbolos[randomSimbolos2]}`);
    }

    return(
        <>
          

            <div className="form-password"> 
                <Input name="senha" type="text" onChange={({currentTarget}) => setInputSenha(currentTarget.value)}/>
                    <div className="containerBtnSenha">
                        <button onClick={GerarSenha}>Gerar</button>
                    </div>
            </div>
            <div className="containerCheck">
                <Input type="checkbox" className="checkInput" name="checkedUppercase" label="Colocar uma letra MAIÚSCULA" checked={check} onChange={({currentTarget}) => setCheck(currentTarget.checked)}  />
            </div>

           
        </>
    )
}




export default FormularioSenha;