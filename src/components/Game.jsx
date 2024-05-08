import { useState } from 'react'
import './Game.css'
import ModalContent from './ModalContent';

function Game() {
  const [showModal, setShowModal] = useState(false);
  const [strike, setStrike] = useState(false);

  const handleClick = () => {
    setStrike(!strike);
  };

  const openModal = () => {
    setShowModal(true);
  };



  return (
    <>
    <table>
      <thead>
        <tr>
          {/* TODO: re-build this list using a forEach loop based on an array of categories */}
          <th>who said what</th>
          <th>prophecies, dreams, miracles</th>
          <th>lesser prophets</th>
          <th>kings of judah/israel</th>
          <th>genealogy</th>
          <th>fill in the blank</th>
        </tr>
      </thead>

      <tbody>
        {/* TODO: re-build this entire tbody using a forEach loop based on an array of questions */}
        <tr>
          <td>
            <button id="200-col-1" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
          <td>
            <button id="200-col-2" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
          <td>
            <button id="200-col-3" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
          <td>
            <button id="200-col-4" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
          <td>
            <button id="200-col-5" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
          <td>
            <button id="200-col-6" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$200</button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="400-col-1" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
          <td>
            <button id="400-col-2" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
          <td>
            <button id="400-col-3" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
          <td>
            <button id="400-col-4" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
          <td>
            <button id="400-col-5" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
          <td>
            <button id="400-col-6" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$400</button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="600-col-1" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
          <td>
            <button id="600-col-2" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
          <td>
            <button id="600-col-3" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
          <td>
            <button id="600-col-4" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
          <td>
            <button id="600-col-5" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
          <td>
            <button id="600-col-6" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$600</button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="800-col-1" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
          <td>
            <button id="800-col-2" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
          <td>
            <button id="800-col-3" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
          <td>
            <button id="800-col-4" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
          <td>
            <button id="800-col-5" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
          <td>
            <button id="800-col-6" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$800</button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="1000-col-1" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
          <td>
            <button id="1000-col-2" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
          <td>
            <button id="1000-col-3" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
          <td>
            <button id="1000-col-4" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
          <td>
            <button id="1000-col-5" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
          <td>
            <button id="1000-col-6" onClick={openModal} style={{textDecoration: strike ? 'line-through' : 'none'}}>$1000</button>
          </td>
        </tr>
      </tbody>
    </table>

    {showModal && (
      <ModalContent onClose={() => { setShowModal(false); handleClick(); }}/>
    )}

  </>
)
}

export default Game

