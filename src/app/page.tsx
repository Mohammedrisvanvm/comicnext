import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  BellIcon,
  BookA,
  Boxes,
  Clock1,
  Database,
  FastForward,
  LineChart,
  Paintbrush,
  PartyPopper,
  ShieldHalf,
  Smartphone,
  StarIcon,
  Users2,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

const perk = [
  {
    name: "risvan",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "fasttrack",
    Icon: FastForward,
    description:
      "Speed up your workflow with our fast-track option for quick access to premium features.",
  },
  {
    name: "premiumsupport",
    Icon: UtensilsCrossed,
    description:
      "Unlock premium support services to get personalized assistance whenever you need it.",
  },

  {
    name: "exclusivecontent",
    Icon: StarIcon,
    description:
      "Access exclusive content and updates that are available only to our premium members.",
  },
  {
    name: "earlyaccess",
    Icon: Clock1,
    description:
      "Be the first to experience new features with early access privileges.",
  },
  {
    name: "customization",
    Icon: Paintbrush,
    description:
      "Personalize your experience with advanced customization options.",
  },
  {
    name: "securityboost",
    Icon: ShieldHalf,
    description:
      "Enhance the security of your account with our premium security features.",
  },
  {
    name: "collaboration",
    Icon: Users2,
    description:
      "Collaborate seamlessly with team members using advanced collaboration tools.",
  },
  {
    name: "unlimitedstorage",
    Icon: Database,
    description: "Enjoy unlimited storage space for your files and projects.",
  },
  {
    name: "analyticsdashboard",
    Icon: LineChart,
    description:
      "Access detailed analytics and insights with our premium analytics dashboard.",
  },
  {
    name: "mobileaccess",
    Icon: Smartphone,
    description:
      "Stay connected on the go with exclusive mobile access to our platform.",
  },
  {
    name: "priorityupdates",
    Icon: BellIcon,
    description:
      "Receive priority updates on new features, improvements, and announcements.",
  },
  {
    name: "communityforum",
    Icon: Boxes,
    description:
      "Join our exclusive community forum to connect with other premium members.",
  },
  {
    name: "adfreeexperience",
    Icon: PartyPopper,
    description:
      "Enjoy an ad-free experience while using our platform as a premium member.",
  },
  {
    name: "trainingresources",
    Icon: BookA,
    description:
      "Access premium training resources and tutorials to enhance your skills.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality{" "}
            <span className="text-blue-400">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to ComicNext. Here every assets on our platform is verified
            by our team to ensure our highest quality standards{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perk.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center lg:mb-10 "
              >
                <div className="sm:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
            <Icons.logo className="w-10 h-10" />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
