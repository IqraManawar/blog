// "use client"
// import { useState } from "react";

// export default function CommentSection() {
//   const [comments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//     //   setComments([...comments, newComment]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h3 className="text-xl font-bold mb-4">Comments</h3>
//       <ul className="space-y-2">
//         {comments.map((comment, index) => (
//           <li key={index} className="bg-gray-100 p-2 rounded">
//             {comment}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <textarea
//           className="w-full border p-2 rounded rows-3"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         ></textarea>
//         <button
//           className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700"
//           onClick={handleAddComment}
//         >
//           Add Comment
//         </button>
       
//       </div>
//     </div>
//   );
// }
"use client"
import { useState } from "react";

export default function CommentSection() {
  const [comments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      // setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-4">Comments</h3>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
            {comment}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <textarea
          className="w-full border p-2 rounded-sm text-sm sm:text-base lg:text-lg"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700 focus:outline-none"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
