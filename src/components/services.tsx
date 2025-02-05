import { Monitor, Network, Shield, Speaker } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Comprehensive technology solutions tailored to your needs. From home
            theater systems to enterprise networking, we deliver excellence in
            every project.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-slate-900/50 border-slate-800"
            >
              <CardHeader>
                <service.icon className="h-10 w-10 text-blue-500" />
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Audio/Visual",
    description: "Professional home theater and audio solutions",
    icon: Speaker,
    features: [
      "Home Theater Design",
      "Sound System Installation",
      "Smart Home Integration",
      "Commercial AV Solutions",
    ],
  },
  {
    title: "Networking",
    description: "Enterprise-grade network solutions",
    icon: Network,
    features: [
      "Network Design",
      "Wireless Solutions",
      "Infrastructure Setup",
      "Network Security",
    ],
  },
  {
    title: "Security",
    description: "Comprehensive security systems",
    icon: Shield,
    features: [
      "CCTV Installation",
      "Access Control",
      "Remote Monitoring",
      "Security Consulting",
    ],
  },
  {
    title: "Business IT",
    description: "Complete IT solutions for businesses",
    icon: Monitor,
    features: [
      "IT Support",
      "Cloud Services",
      "Data Backup",
      "Hardware Solutions",
    ],
  },
];
