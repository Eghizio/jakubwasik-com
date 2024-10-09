import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/jakubwasik.jpeg";

type Link = { name: string; url: string; Icon: JSX.Element };

interface Props {
  name: string;
  description: string;
  links: Link[];
}

export const ProfileCard = ({ name, description, links }: Props) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={128}
            height={129}
            className="object-cover"
            priority
          />
        </div>

        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <p className="text-gray-500">{description}</p>
      </CardHeader>

      <CardContent className="grid gap-4">
        {links.map(({ name, url, Icon }, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full text-lg font-semibold"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              {React.cloneElement(Icon, { className: "mr-2 h-5 w-5" })}
              {name}
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
