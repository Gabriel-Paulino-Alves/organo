import './CampoTexto.css'

const CampoTexto = (props) =>{

    const placeholdermodificada = `${props.placeholder}...`

    //let valor = ''
    
    //const [valor, setValor] = useState('')

    const aoDigitado = (evento) =>{
       // setValor (evento.target.value)
       // console.log(valor)
       props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdermodificada}/>
        </div>
    )
}

export default CampoTexto