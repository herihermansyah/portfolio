import React from "react";

const ArticleHero = () => {
  return (
    <div>
      <section className="flex flex-col gap-2 xl:gap-6">
        <h1 className="font-bold capitalize text-[1.5rem] xl:text-4xl">
          Hey, I'm Heri Hermansyah
        </h1>
        <h2 className="font-semibold capitalize text-[1.25rem] xl:text-3xl">
          Frontend Developer
        </h2>

        <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.75rem] xl:leading-10">
          I specialize in creating modern,
          <span class="font-semibold"> responsive</span>, and user-friendly
          websites using <span class="font-semibold">React</span> and
          <span class="font-semibold"> Tailwind CSS</span>. With a strong focus
          on clean code and seamless user experiences, I transform designs into
          functional and engaging web interfaces across all devices.
        </p>
      </section>
    </div>
  );
};

export default ArticleHero;
