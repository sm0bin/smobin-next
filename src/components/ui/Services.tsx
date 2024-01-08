import getAllServices from "@/utils/getAllServices";
import Image from "next/image";
import React from "react";
import Title from "../shared/Title";

const Services = async () => {
  const services = await getAllServices();
  console.log(services);

  return (
    <div>
      <div className="divider"></div>
      <Title
        heading="Services"
        subHeading="Elevate Your Brand with my Expert Design and Development Services"
      />
      <div>
        {services.map(
          (service: {
            name: string;
            description: string;
            thumbnail: string;
          }) => (
            <div key={service.name}>
              <Image
                src={service.thumbnail}
                alt={service.name}
                style={{ width: "100%", height: "auto" }}
                width={1920}
                height={1080}
              />
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
