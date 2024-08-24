// uso da prop children
// function Filho({ children }) {
//   return <div className="filho">
//     {children}
//   </div>
// }

// uso da prop de tipo number
// function Filho ({ idade }) {
//   return <p>{idade}</p>
// }

function Filho({ approved }) {
  return (
    <>
      {approved ? <img src="https://i.pinimg.com/474x/49/25/2b/49252b06c6512dae0548700c963c37d7.jpg" alt="" />  : <img src="https://img.freepik.com/fotos-premium/pessoa-3d-com-o-simbolo-negativo-vermelho-nas-maos-em-um-fundo-branco_476612-6617.jpg" alt="" /> }
    </>
  )

}

// isso é verdadeiro ? retorno : (se não) retorno
export default function App() {
  return <Filho approved={true} />;
}