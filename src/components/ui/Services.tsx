import getAllServices from "@/utils/getAllServices";
import React from "react";

const Services = async () => {
  const services = await getAllServices();
  console.log(services);

  return (
    <div>
      <h1>Services</h1>
      <div>
        {services.map((service: { name: string; description: string }) => (
          <div key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
