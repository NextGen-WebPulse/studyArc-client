import { Card } from "./ui/card";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function CategoryCard({}: CardProps) {
  return (
    <>
      <Card className="cursor-pointer transition hover:-translate-y-1 hover:border-primary-300"></Card>
    </>
  );
}
