const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-100 m-1 p-2 px-3 rounded-lg">{name}</button>
    </div>
  );
};

const ButtonList = () => {
  const btnList = [
    "HTML",
    "Gaming",
    "Java",
    "Live",
    "Music",
    "Mixes",
    "Trailer",
    "Game shows",
    "Superheroes",
    "Action-adventure games",
    "Comedy",
    "Recently Uploaded",
    "Watched",
    "New to you",
  ];
  return (
    <div className=" flex  ">
      <button className="bg-black m-1 p-2 px-3 rounded-lg text-white">
        All{" "}
      </button>
      {btnList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
