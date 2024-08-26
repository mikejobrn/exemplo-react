import './Botao.css'

export default function Botao(props) {
    let className;
    if (props.subtrair === true) {
        className = 'subtrair';
    } else {
        className = 'adicionar';
    }
    
    return <button className={className} onClick={props.fn}>
        {props.texto}
    </button>
}