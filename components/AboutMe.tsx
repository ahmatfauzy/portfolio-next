import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

function AboutMe() {
  return (
    <article className="animated-element container py-6 prose dark:prose-invert max-w-2xl mx-auto">
      <h1 className="font-semibold text-3xl md:text-4xl tracking-tight">
        Hi, I'm Ahmat Fauzi 👋
      </h1>

      <p className="tracking-tight text-md md:text-lg">MERN Stack Developer.</p>

      <p className="tracking-tight text-md md:text-lg">
        Lost in melodies 🎵 with a cup of coffee ☕ is my routine activity.
      </p>
      <p className="tracking-tight text-md md:text-lg">
        I also love to watch anime or TV series in the middle of the night 🌙.
        (if there is no{" "}
        <span className="text-red-600 font-medium">Liverpool</span> match)
      </p>
      <p className="tracking-tight text-md md:text-lg">
        <span className="font-bold text-red-600">#YNWA</span>
      </p>

      <p className="mt-10">Find me on</p>
      <div className="flex space-x-2">
        <Link
          aria-label="my instagram link"
          href={"https://www.instagram.com/ahmatfauzy_/"}
        >
          <Button aria-label="instagram button" variant={"outline"}>
            <FaInstagram size={20} />
          </Button>
        </Link>
        <Link
          aria-label="my linkedin link"
          href={"https://www.linkedin.com/in/ahmat-fauzi/"}
        >
          <Button aria-label="linkedin button" variant={"outline"}>
            <FaLinkedinIn size={20} />
          </Button>
        </Link>
        <Link
          aria-label="my github link"
          href={"https://github.com/ahmatfauzy"}
        >
          <Button aria-label="github button" variant={"outline"}>
            <FaGithub size={20} />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default AboutMe;
