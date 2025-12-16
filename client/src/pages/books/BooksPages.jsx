import BooksCard from "../../components/BooksCard/BooksCard";

const BooksPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Books</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded">Total: 120</div>
        <div className="bg-white p-4 rounded">Available: 80</div>
        <div className="bg-white p-4 rounded">Rented: 30</div>
        <div className="bg-white p-4 rounded">Sold: 10</div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-5 gap-6">
        {[1,2,3,4,5].map(book => (
          <BooksCard key={book} />
        ))}
      </div>
    </>
  );
};

export default BooksPage;
