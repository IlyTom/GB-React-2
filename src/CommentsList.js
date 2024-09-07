import React, { useState } from "react";

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ]);

    const handleDelete = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div >
            <h2 >Комментарии</h2>
            <ul >
                {comments.map(comment => (
                    <li key={comment.id} >
                        <span>{comment.text}</span>
                        <button
                            onClick={() => handleDelete(comment.id)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;  