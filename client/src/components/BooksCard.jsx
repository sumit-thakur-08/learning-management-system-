const BooksCard = () => {
  return (
    <div className="bg-white rounded shadow p-2">
      <img
        src="https://via.placeholder.com/200x260"
        alt="book"
        className="rounded"
      />

      <h3 className="font-semibold mt-2">Book Name</h3>
      <p className="text-sm text-gray-500">Author Name</p>

      <span className="text-xs text-green-600">Available</span>
    </div>
  );
};

export default BooksCard;
