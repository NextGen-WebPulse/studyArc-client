import { Button } from "@/components/ui/button";
import bannerImage from "../../assets/images/bannerHuman.png";
import { ArrowRight } from "lucide-react";

const BannerText = () => {
  return (
    <div className="space-y-3 text-customGray-darker">
      <span className="text-lg text-primary-500">Keep Learning</span>
      <h1 className="text-additional-500 text-7xl font-[500]">
        Best digital <br />
        <span className="text-primary-500">Onlineline</span> Courses
      </h1>
      <p className="text-lg">
        Acquire global knowledge and build your professional skills
      </p>
      <Button className="rounded-full bg-primary-500">
        Find Courses <ArrowRight />
      </Button>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="mx-auto mt-2 flex w-[90%] max-w-[1400px] items-center justify-between">
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
