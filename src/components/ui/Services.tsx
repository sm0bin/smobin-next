import getAllServices from "@/utils/getAllServices";
import Image from "next/image";
import React from "react";

const Services = async () => {
  const services = await getAllServices();
  console.log(services);

  return (
    <div>
      <h1>Services</h1>
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
