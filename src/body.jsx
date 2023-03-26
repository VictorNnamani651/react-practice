function Body() {
  let blogs = [
    {
      title: "Starting Ministry",
      body: "lorem ipsum dolor...",
      author: "Adam",
      id: 1,
    },
    {
      title: "Running Ministry",
      body: "lorem ipsum dolor...",
      author: "Eve",
      id: 2,
    },
    {
      title: "Maintaining Ministry",
      body: "lorem ipsum dolor...",
      author: "Abel",
      id: 3,
    },
    {
      title: "Ruining Ministry",
      body: "lorem ipsum dolor...",
      author: "Cane",
      id: 4,
    },
  ];
  return (
    <div className="body-content">
      <div>
        {<h2>{blogs[0].title}</h2>}
        {<p>Written By {blogs[0].author}</p>}
      </div>
      <div>
        {<h2>{blogs[1].title}</h2>}
        {<p>Written By {blogs[1].author}</p>}
      </div>
      <div>
        {<h2>{blogs[2].title}</h2>}
        {<p>Written By {blogs[2].author}</p>}
      </div>
      <div>
        {<h2>{blogs[3].title}</h2>}
        {<p>Written By {blogs[3].author}</p>}
      </div>
    </div>
  );
}

export default Body;
