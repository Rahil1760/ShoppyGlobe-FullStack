function Reviews({ item }) {
  return (
    <div className="mt-5">
      <div className="md:w-1/2 w-full shadow-sm shadow-black md:m-5 h-10 flex items-center px-2">
        <h4>{item.comment}</h4>
      </div>
    </div>
  );
}
export default Reviews;
