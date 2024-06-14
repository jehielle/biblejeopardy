import './ModalContent.css'
import ReactDOM from 'react-dom';
import { teams } from './Arrays';

function ModalContent({ setShowModal, question, dollarVal }) {

  const onCorrectAnswer = () => {
    addTeamResponse(1, question.id, dollarVal, true);
    setShowModal(false);
  }

  const onIncorrectAnswer = () => {
    addTeamResponse(1, question.id, dollarVal, false);
    setShowModal(false);
  }

  return ReactDOM.createPortal(
    <>
      <div id="overlay">
        <div id="modal">
          
          { question.question }

          <div id="isCorrect">
            <button id="correct" onClick={onCorrectAnswer}>Correct</button>
            <button id="incorrect" onClick={onIncorrectAnswer}>Incorrect</button>
          </div>
          
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

function addTeamResponse(teamId, questionId, dollarVal, isCorrect) {
  const team = teams.find(t => t.id === teamId);
  team.questions.push({questionId, dollarVal, isCorrect});
}

export default ModalContent

