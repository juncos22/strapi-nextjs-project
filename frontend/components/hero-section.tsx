import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { STRAPI_BASE_URL } from "@/lib/strapi";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function HeroSection({
  data,
}: {
  readonly data: {
    id: number;
    heading: string;
    subheading: string;
    image: { url: string; alternativeText: string };
    link: { href: string; label: string; isExternal: boolean };
  };
}) {
  if (!data) return null;
  return (
    <div className="flex flex-col gap-6">
      <Item key={data.id} variant="outline" className="w-full">
        <ItemHeader>
          <img
            src={`${data.image.url}`}
            alt={data.image.alternativeText || "Image"}
            className="aspect-square w-full h-80 rounded-sm object-cover"
          />
        </ItemHeader>
        <ItemContent>
          <ItemTitle>{data.heading}</ItemTitle>
          <ItemDescription>{data.subheading}</ItemDescription>
          <Button className="w-fit">
            <Link
              href={data.link.href}
              target={data.link.isExternal ? "_blank" : "_self"}
            >
              {data.link.label}
            </Link>
          </Button>
        </ItemContent>
      </Item>
    </div>
  );
}
