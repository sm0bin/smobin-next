import getAllServices from "@/utils/getAllServices";
import React from "react";

interface Service {
  name: string;
}

interface ServicesPageProps {
  services: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service: Service) => (
          <li key={service.name}>
            <h2>{service.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;

export async function getServerSideProps() {
  const services = await getAllServices();

  return {
    props: {
      services,
    },
  };
}
