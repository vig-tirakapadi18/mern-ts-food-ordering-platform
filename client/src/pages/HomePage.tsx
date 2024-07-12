import landing from "../assets/landing.png";
import apps from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-stone-800">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          src={landing}
          alt="phone images"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3x tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the VFoods App for fatser ordering and personalised
            recommendations!
          </span>
          <img
            src={apps}
            alt="apps"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
