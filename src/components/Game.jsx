import { useState } from 'react'
import './Game.css'
import ModalContent from './ModalContent';
import { ListHeaders } from './ListHeaders';
import { categoryArr, dollarValArr, tableArr, teams } from './Arrays';

function Game() {
  const [showModal, setShowModal] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(false);

  const openModal = (question) => {
    setCurrQuestion(question);
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
                  const question = getQuestion(dollar.id, category.id);

                  return (
                    <td key={category.id}>
                      {!isUsed(question.id) && 
                        <button 
                          id={`${dollar.id}-${category.id}`} 
                          onClick={() => openModal(question, dollar.dollarVal)}
                        >
                          ${dollar.dollarVal}
                        </button>
                      }
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <ModalContent setShowModal={setShowModal} question={currQuestion} />
      )}

    </>
  )
}

function isUsed(questionId) {
  return teams.some(team => team.questions.some(question => question.questionId === questionId));
}

function getQuestion(dollarValId, categoryId) {
  return tableArr.find(question => question.dollarValId === dollarValId && question.categoryId === categoryId);
}



export default Game