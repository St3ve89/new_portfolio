import React from "react";
import { BentoGrid, BentoGridItem } from "../ui";
import gridItems from "@/data/gridItems.json";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            className,
            description,
            img,
            imgClassName,
            spareImg,
            title,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};
