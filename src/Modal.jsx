import './App.css';
export default function Modal({ setVisible }) {
    return (
            <div className="modal" id="modals">
                <div className="modal-header">
                    <span className="closemodal" onClick={() => {
                        setVisible(false);
                    }}>&nbsp;&times;&nbsp;</span>
                </div>
                <div className="modal-content">
                    <h2>Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis ab est placeat eius eligendi doloribus ipsa nobis eos nesciunt vel, commodi dolorum facilis similique cupiditate libero, reprehenderit in. Similique?
                    </p>
                </div>
            </div>
    )
}