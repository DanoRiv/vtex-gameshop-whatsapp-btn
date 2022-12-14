import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  return (
    <>
      <div className='fixed bottom-2 right-2 flex flexColumn'>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Whatsapp logo" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3128924610",
  message: "estás comunicandote con gameshop",
  width: 60,
  height: 60
}

WhatsappButton.schema = {
  title: "Botón de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de Whatsapp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que verá tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Ancho del botón",
      description: "Agrega el ancho del botón",
      type: "number"
    },
    height: {
      title: "Ancho del botón",
      description: "Agrega el ancho del botón",
      type: "number"
    }
  }
}

export default WhatsappButton
