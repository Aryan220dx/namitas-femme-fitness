import { SERVICES } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ServiceCard } from "../ui/ServiceCard";

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading title="Our Specialized Services" subtitle="Expertly crafted programs for every stage of your life." />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
