import { Button } from "@/components/ui/button";
import bannerImage from "../../assets/images/HomePageImages/bannerHuman.png";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="container-responsive mt-2 flex items-center justify-between">
      {/* text section  */}
      <section>
        <BannerText />
      </section>
      {/* image part  */}
      <div>
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;

const BannerText = () => {
  return (
    <div className="space-y-3 text-customGray-darker">
      <span className="text-lg text-primary-500">Keep Learning</span>
      <h1 className="text-7xl font-[500] text-additional-500">
        Best digital <br />
        <span className="text-primary-500">Onlineline</span> Courses
      </h1>
      <p className="text-lg">
        Acquire global knowledge and build your professional skills
      </p>
      <Button className="rounded-full bg-primary-500 p-6 text-lg hover:bg-primary-600">
        Find Courses <ArrowRight size={64} />
      </Button>
    </div>
  );
};
