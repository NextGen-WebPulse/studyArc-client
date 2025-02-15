import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function CategoryCard({ title, description, image }: CardProps) {
  return (
    <>
      <Card className="cursor-pointer transition hover:-translate-y-1 hover:border-primary-300">
        <CardHeader>
          <CardContent className="px-0 py-2">
            <img src={image} alt={`image for ${title}`} className="w-10" />
          </CardContent>
        </CardHeader>
        <CardFooter className="flex-col items-start justify-start gap-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardFooter>
      </Card>
    </>
  );
}
