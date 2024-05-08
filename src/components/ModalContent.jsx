
import ReactDOM from 'react-dom';

function ModalContent({ onClose }) {

  const tableArr =
    [ 
      { id: "200-col-1", question: "'I am the light of the world.'", answer: "Jesus" },
      { id: "200-col-2", question: "This person fulfilled a prophecy spoken by Deborah.", answer: "Jael" },
      { id: "200-col-3", question: "", answer: "" },
      { id: "200-col-4", question: "This is how many stones David put in his pouch before killing Goliath.", answer: "5" },
      { id: "200-col-5", question: "", answer: "" },
      { id: "200-col-6", question: "", answer: "" },

      { id: "400-col-1", question: "'We have believed and have come to know that you are the Holy One of God.'", answer: "Peter" },
      { id: "400-col-2", question: "", answer: "" },
      { id: "400-col-3", question: "", answer: "" },
      { id: "400-col-4", question: "This person was the last earthly king in the Davidic line when Jerusalem was destroyed.", answer: "Zedekiah" },
      { id: "400-col-5", question: "This person's mother was Rahab.", answer: "Boaz" },
      { id: "400-col-6", question: "", answer: "" },
                  
      { id: "600-col-1", question: "'For all things I have the strength through the one who gives me power.'", answer: "Paul" },
      { id: "600-col-2", question: "Jehovah brought lasting judgment on this man's house because 'his sons are cursing God, but he has not rebuked them.'", answer: "Eli" },
      { id: "600-col-3", question: "", answer: "" },
      { id: "600-col-4", question: "This king had the shortest reign (3 months and 10 days).", answer: "Jehoiachin" },
      { id: "600-col-5", question: "Asenath bore Joseph two sons. This was the brother of Manasseh.", answer: "Ephraim" },
      { id: "600-col-6", question: "He gave his parents honey to eat, and 'did not tell them he had scraped [it] out of the carcass of a ___.'", answer: "Lion" },

      { id: "800-col-1", question: "'Do not imagine that because you are in the king's household you are any more likely to escape than all the other Jews.'", answer: "Mordecai" },
      { id: "800-col-2", question: "This person dreamt of 'the sun and the moon and 11 stars bowing down to [him].'", answer: "Joseph" },
      { id: "800-col-3", question: "", answer: "" },
      { id: "800-col-4", question: "These two kings have the same name, were brothers-in-law, and ruled at the same time.", answer: "Jehoram" },
      { id: "800-col-5", question: "This person's name meant 'One Seizing the Heel; Supplanter', and his brother's name meant 'Hairy'.", answer: "Jacob" },
      { id: "800-col-6", question: "", answer: "" },

      { id: "1000-col-1", question: "'Alas, O Sovereign Lord Jehovah! I do not know how to speak, for I am just a boy.'", answer: "Jeremiah" },
      { id: "1000-col-2", question: "This is what the promised Seed was called, which means 'He Whose It Is; He To Whom It Belongs'.", answer: "Shiloh" },
      { id: "1000-col-3", question: "", answer: "" },
      { id: "1000-col-4", question: "This is how old Josiah was when Zebidah gave birth to his second son, Jehoiakim.", answer: "14" },
      { id: "1000-col-5", question: "Two Jacobs in the Bible both had a son with this name.", answer: "Joseph" },
      { id: "1000-col-6", question: "", answer: "" }
  ];

  const MODAL_STYLES={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000,
    height: "85vh",
    width: "90vw",
    backgroundColor: "#4b2463",
    textAlign: "center",
    fontSize: "70px",
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&times;</button>
        <br></br><br></br>

        { tableArr[0].question }

      </div>
    </>,
    document.getElementById('portal')
  );
}

export default ModalContent



// if id="col..." in button == tableArr.id {
//   { tableArr.question }
// }