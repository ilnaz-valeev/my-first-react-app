import './Message.css'

function Message(props) {
    return ( 
        <div>
            <h1>{props.text}</h1>
        </div>
     );
}

export default Message;