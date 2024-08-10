import { useEffect, useState } from "react";
import Service from "./Service";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center w-1/2 mx-auto">
        <div className="space-y-5">
          <h4 className="text-xl text-p-color">Services</h4>
          <h2 className="text-5xl font-bold">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
