import CategoryCard from "./CategoryCard";
import CategoryImage from "../../assets/images/HomePageImages/categories-image.webp";

interface ICardContent {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cardContent: ICardContent[] = [
  {
    id: 1,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 2,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 3,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 4,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 5,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 6,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 7,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
  {
    id: 8,
    title: "development",
    description: "Code with us & be the best in it",
    image: CategoryImage,
  },
];

export default function Categories() {
  return (
    <section className="capitalize">
      <div className="py-8 text-center text-primary-500">
        <h1 className="text-xl">top categories</h1>
        <h2 className="text-5xl font-medium">
          <span className="text-additional-500">Most demanding </span>Categories
          <span className="text-additional-500">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cardContent.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
