import React from 'react'

export default function Boton(props) {
    const {color, texto} = props
  return (
    <button>Botón de alerta {color} {texto}</button>
  )
}
