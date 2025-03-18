import React, {useState} from "react";


const CommentsList = () => {
    const [comments, setComments] = useState([
        {id: 1, text: "Этот первый коментарий"},
        {id: 2, text: "Этот второй коментарий"},
        {id: 3, text: "Этот третий коментарий"}
    ])
    const handleDeleted = (id) => {
      setComments(comments.filter((comment) => comment.id !== id));
    };

    return (
      <div>
        <h2>Список комментариев</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.text}
              <button onClick={() => handleDeleted(comment.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default CommentsList;

