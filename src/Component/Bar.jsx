import { Link } from "react-router-dom";
export default function Bar() {
  return (
    <div className="bg-indigo-300 text-white flex  justify-center rounded ">
      <div className=" font-semibold w-[50%] py-3 hover:text-blue-500">
        <Link to="/"><p className="text-center" >Text Detail</p></Link>
      </div>
      <div className=" font-semibold w-[50%] py-3  hover:text-blue-500">
        <Link to="/chart"><p className="text-center">Chart Detail</p></Link>
      </div>
    </div>
  );
}
