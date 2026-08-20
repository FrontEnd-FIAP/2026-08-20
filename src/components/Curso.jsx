

const Curso = (props) => {
  return (
    <>
        <h5>Curso props</h5>
    <p>Nome do curso: {props.nome}</p>
    <p>Descrição do curso: {props.descrição}</p>
    <p>Data de inicio do curso: {props.data}</p>
    </>
  )
}

export default Curso
