import { useEffect } from "react";
import { useState } from "react";
import SarvicsCard from "./SarvicsCard";


const Sarvicess = () => {
  const [sarvicess, setSarvicess] = useState([]);

  useEffect(() => {
    fetch('sarvicess.json')
    .then(res =>res.json())
    .then(data => setSarvicess(data))
  }, []);

  return (
    <div className=" mt-5">
      <div className=" text-center space-y-4 ">
        <h1 className=" text-3xl text-orange-500"> sarvicess</h1>
        <h1 className=" text-5xl font-semibold"> our sarvicess aria</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
<div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{
    sarvicess.map(sarvics=><SarvicsCard key={sarvics._id} sarvics={sarvics} ></SarvicsCard>)
}
</div>

    </div>
  );
};

export default Sarvicess;
