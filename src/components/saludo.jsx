import React from "react";

// export default function saludo(props) {
//     const = {name} = props
//   return (
//     <div>saludo {name}</div>
//   )
// }

// export default function saludo(props) {
//     return(
//         <div> Hola, {props.name} {props.apellido}</div>
//     )
// }



export default function saludo(props) {
    const {name, children} = props

  return (
    <div>Hola {name}
     {children}
    </div>
  )
}

