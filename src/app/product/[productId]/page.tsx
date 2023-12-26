import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { PRODUCT_CATEGORIES } from "@/config/intex";
import { getPayloadClient } from "@/get-payload";
import { formalPrice } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface productIdProps {
  params: {
    productId: string;
  };
}
const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];
const Page = async ({ params: { productId } }: productIdProps) => {
  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: { equals: productId },
      approvedForSale: { equals: "approved" },
    },
  });
  const [product] = products;
  if (!product) return notFound();
  console.log(product);
  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.value;
  console.log(label);
  const validUrls = product.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];
  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white ">
        <div className="bg-white">
          <div className="mx-auto mx-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:max-w-lg lg:self-end">
              <ol className="flex items-center space-x-2">
                {BREADCRUMBS.map((breadcreams, i) => (
                  <li key={breadcreams.href}>
                    <div className="flex items-center text-sm">
                      <Link
                        href={breadcreams.href}
                        className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                      >
                        {breadcreams.name}
                      </Link>
                      {i !== BREADCRUMBS.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>
              </div>
              <section className="mt-4">
                <div className="flex items-center">
                  <p className="font-medium text-gray-900">
                    {formalPrice(product.price)}
                  </p>
                  <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                    {label}
                  </div>
                </div>
                <div className="mt-4 space-y-6">
                  <p className="text-base text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                  />
                  <p className="ml-2 text-sm text-muted-foreground">
                    Eligible for instant delivery
                  </p>
                </div>
              </section>
            </div>
            {/* product images */}
            <div className="mt-10 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:self-center">
              <div className="aspect-square rounded-lg">
                <ImageSlider urls={validUrls} />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
