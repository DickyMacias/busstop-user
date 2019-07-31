import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Lugares = ({ lugares }) => {
  return (
    <div>
      {lugares.map((lugar) => (
        <p>
        {(() => {
            switch(lugar.check) {
            case '0':
                return <Badge pill variant="secondary"> Waiting </Badge>;
            case '1':
                return <Badge pill variant="success"> On Time </Badge>;
            case '2':
                return <Badge pill variant="danger"> Delay </Badge>;
            default:
                return null;
            }
        })()}
        </p>
      ))}
    </div>
  )
};

export default Lugares    