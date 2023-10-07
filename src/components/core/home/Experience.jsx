import { infos } from "../../../utils/constants";

const Experience = () => {
  return (
    <div className="bg-btblack rounded-3xl py-10 grid md:grid-cols-2 xl:grid-cols-4 text-center gap-6 xl:px-8">
      {infos.map((info) => (
        <div className="space-y-3" key={info.id}>
          <p className="text-4xl md:text-5xl text-bgray">{info.amount}</p>
          <p className="  text-lightblack px-2">{info.service}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
