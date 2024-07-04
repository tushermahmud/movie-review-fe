"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { TypographyH2, TypographyP } from "../ui/Typography";
import { Card, CardContent } from "../ui/card";
import useAllAPI from "@/context/API/allAPI";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const CommentSection = ({ movieId }) => {
  const [comments, setComments] = useState(undefined);

  // const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const { loggedInUser } = useContext(AuthContext);
  const { getComments, addComment, loading } = useAllAPI();

  useEffect(() => {
    getComments(movieId).then((res) => {
      setComments(res.data);
    });
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, newCommentObj]);
    const payload = {
      content: newComment,
      userId: loggedInUser?._id,
      movieId: movieId,
    };
    addComment(movieId, payload).then((res) => {
      console.log({ commentAdded: res });
    });
    setNewComment("");
  };

  if (loading) {
    return <>Loading......</>;
  }
  return (
    <div className="mt-8">
      <TypographyH2 variant="h3" className="mb-4">
        Comments
      </TypographyH2>
      <form onSubmit={handleCommentSubmit} className="mb-4 ">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          fullWidth
          className="mb-2"
        />
        <Button
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 w-[200px]"
          text="Comment"
          fill
          type="submit"
          //   onClick={handleSubmit}
          //   disabled={loading}
        />
      </form>
      {comments?.map((comment) => (
        <Card key={comment.id} className="mb-4">
          <CardContent>
            <TypographyP variant="body1">{comment?.content}</TypographyP>
            <TypographyP variant="body2" color="gray">
              {new Date(comment.createdAt).toLocaleString()}
            </TypographyP>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentSection;
