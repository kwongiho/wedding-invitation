import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Metadata from "@/components/Metadata";
import Home from "@/components/Home";
import Intro from "@/components/Intro";
import Invitation from "@/components/Invitation";
import PhotoGallery from "@/components/PhotoGallery";
import Location from "@/components/Location";
import Menus from "@/components/Menus";

export default function IndexPage() {
  return (
    <>
      <Metadata />
      <main>
          <Home />
          <Menus />
          <Intro />
          <Invitation />
          <PhotoGallery />
          <Location />
      </main>
    </>
  );
}
