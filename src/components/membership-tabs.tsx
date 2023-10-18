import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
export const Memberships = () => (
  <Tabs defaultValue="memberships">
    <TabsList className="grid w-full grid-cols-2 ">
      <TabsTrigger value="memberships">Memberships</TabsTrigger>
      <TabsTrigger value="passes">One day Passes</TabsTrigger>
    </TabsList>
    <TabsContent
      value="memberships"
      className="flex sm:flex-row flex-col gap-6 sm:content-center py-3"
    >
      <Membership
        title="Muay Thai"
        description="Monthly membership"
        included={["3 Group Classes", "Unlimited Gym Access"]}
        price={200}
      />
      <Membership
        title="Jiu Jitsu"
        description="Monthly membership"
        included={["3 Group Classes", "Unlimited Gym Access"]}
        price={175}
      />
      <Membership
        title="Muay Thai + Jiu Jitsu"
        description="Monthly membership"
        included={["Unlimited Group Classes", "Unlimited Gym Access"]}
        price={300}
      />
    </TabsContent>
    <TabsContent value="passes">
      <Membership
        title="Day Pass"
        description="Full Day Pass"
        included={["Single Class", "Unlimited Gym Access"]}
        price={25}
      />
    </TabsContent>
  </Tabs>
);
type MembershipProps = {
  title?: string;
  description?: string;
  included: string[];
  price?: number;
};
export const Membership = ({
  title,
  description,
  included,
  price,
}: MembershipProps) => {
  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <h3 className="text-xl font-bold sm:text-2xl">What's included</h3>
          <ul className="grid gap-2 text-sm  ">
            {included.map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-3 ">
          <div>
            <h4 className="text-7xl font-bold">${price}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
