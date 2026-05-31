import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScreenWeave",
  description: "Engineered backgrounds, organic beauty.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <h1 className="text-5xl font-semibold">
        ScreenWeave - Engineered backgrounds, organic beauty.
      </h1>
    </section>
  );
};

export default page;
