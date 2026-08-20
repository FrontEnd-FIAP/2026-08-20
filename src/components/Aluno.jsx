

const Aluno = (props) => {
  return (
    <>
        <h5>Props</h5>
    <p>O Nome do aluno é: {props.nome}</p>
    <p>A Idade do aluno é: {props.idade}</p>
    </>
  )
}

export default Aluno
