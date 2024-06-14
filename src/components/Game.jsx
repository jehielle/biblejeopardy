import { useState } from 'react'
import './Game.css'
import ModalContent from './ModalContent';
import { ListHeaders } from './ListHeaders';
import { categoryArr, dollarValArr, tableArr } from './Arrays';

function Game() {
  const [showModal, setShowModal] = useState(false);
  const [strike, setStrike] = useState(false);

  const handleClick = () => {
    setStrike(!strike);
  };

  const openModal = (dollarValId, categoryId) => {
    setShowModal(true);
  };


  return (
    <>
    <table>

      <thead>
        <tr>
          <ListHeaders/>
        </tr>
      </thead>

      <tbody>
        { dollarValArr.map(dollar => {
          return (
            <tr key={dollar.id}>
              { categoryArr.map(category => {
                return (
                  <td key={category.id}>
                    <button 
                      id={`${dollar.id}-${category.id}`} 
                      onClick={() => openModal(dollar.id, category.id)}
                      style={{textDecoration: strike ? 'line-through' : 'none'}}
                    >
                      ${dollar.dollarVal}
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>


    </table>

    {showModal && (
      <ModalContent onClose={() => { setShowModal(false); handleClick(); }}/>
    )}

  </>
)
}

export default Game

