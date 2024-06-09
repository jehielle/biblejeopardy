import './ModalContent.css'
import ReactDOM from 'react-dom';
import { tableArr } from './Arrays';

function ModalContent({ onClose, tableArr }) {


  return ReactDOM.createPortal(
    <>
      <div id="overlay">
        <div id="modal">
          <button onClick={onClose}>&times;</button>
          <br></br><br></br>

          TEST

        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default ModalContent

// if id="col..." in button == tableArr.id {
//   { tableArr.question }
// }