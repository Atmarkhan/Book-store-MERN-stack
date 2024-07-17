import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5555/books/${id}`);
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("An error occurred while deleting the book:", error);
      // alert('An error occurred while deleting the book. Please check the console.');
      enqueueSnackbar("Error", { variant: "error" });
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">Are You sure You want to Delete this Book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
