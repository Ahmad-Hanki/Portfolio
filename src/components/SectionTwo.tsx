import Image from "next/image";
import square from "@/assets/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Github from "@/assets/github.svg";
import Chatgpt from "@/assets/chatgpt.svg";
import Chrome from "@/assets/chrome.svg";
import CreativeCloud from "@/assets/creativecloud.svg";
import Figma from "@/assets/figma.svg";
import Framer from "@/assets/framer.svg";
import Notion from "@/assets/notion.svg";
import Youtube from "@/assets/youtube.svg";

import Discord from "@/assets/discord.svg";
import Insta from "@/assets/insta.svg";
import Linkedin from "@/assets/linkedin.svg";
import Pinterest from "@/assets/Pinterest.png";
import X from "@/assets/twitter.svg";
import Twitch from "@/assets/Twitch.png";
import Spotify from "@/assets/Spotify.png";
import { Button } from "./ui/button";
import MotionDiv from "./ui/MotionDiv";
const SectionTwo = () => {
  const icons = [
    Github,
    Chatgpt,
    Chrome,
    CreativeCloud,
    Figma,
    Framer,
    Notion,
    Pinterest,
    Discord,
    Youtube,
  ];

  const socialMedia = [
    {
      id: 1,
      icon: Insta,
      name: "Instagram",
      username: "@xviiu",
      link: "https://www.instagram.com/xviiu/",
    },
    {
      id: 2,
      icon: X,
      name: "X / Twitter",
      username: "@ravzs",
      link: "https://twitter.com/Rvazs",
    },
    {
      id: 3,
      icon: Linkedin,
      name: "Linkedin",
      username: "@ahmad-hanki",
      link: "https://www.linkedin.com/in/ahmad-hanki-798128287/",
    },
    {
      id: 4,
      icon: Github,
      name: "Github",
      username: "@ahmad-hanki",
      link: "https://github.com/Ahmad-Hanki",
    },
    {
      id: 5,
      icon: Twitch,
      name: "Twitch",
      username: "@togya",
      link: "https://www.twitch.tv/togya",
    },
  ];

  const spo = {
    id: 6,
    icon: Spotify,
    name: "Spotify",
    username: "@togya",
    link: "  https://open.spotify.com/playlist/4MpHBOOl7dtPE5Dorc6ij2?si=41e29f71ef3a4582",
  };

  const demoVariants = {
    animate: {
      opacity: [0.3, 0.7, 1],
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent>
            <MotionDiv
              className="flex flex-wrap gap-4"
              variants={demoVariants}
              initial={{ opacity: 0 }}
              whileInView={"animate"}
              viewport={{ amount: 0.3 }}
            >
              {icons.map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0 }}
                  variants={demoVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: Math.random() > 0.5 ? 1.2 : -1.2,
                  }}
                >
                  <Image src={item} alt="Icon" className="w-16 h-16" />
                </MotionDiv>
              ))}
            </MotionDiv>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.9 }}
            >
              <Card className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none">
                <Image src={item.icon} alt="Icon" className="w-16 h-16" />
                <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                <p className="text-muted-foreground">{item.username}</p>
                <Button className="mt-4" size="sm" asChild>
                  <a href={item.link}>Follow</a>
                </Button>
              </Card>
            </MotionDiv>
          ))}

          <MotionDiv
            key={spo.id}
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ duration: 0.9 }}
          >
            <Card className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none">
              <Image src={spo.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{spo.name}</h1>
              <p className="text-muted-foreground">{spo.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={spo.link}>Play list</a>
              </Button>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
