import spinner from "../../../assets/img/spinner.gif";

export default function Spinner() {
  return (
    <div className=" w-8 h-full mx-auto">
      <img className="w-full" src={spinner} alt="" />
    </div>
  );
}
