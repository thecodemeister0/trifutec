import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="py-24 bg-slate-900/50" id="about">
      <div className="px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            About Trinity Future Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Your trusted technology partner in South Texas since 2005
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300">
                Trinity Future Technologies (Trifutec) is dedicated to providing
                the best technology solutions and customer service in South
                Texas. Our expertise and commitment to excellence make us the
                preferred choice for businesses and individuals seeking reliable
                technology services.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                Service Area
              </h3>
              <p className="text-slate-300">
                We proudly serve South Texas from San Antonio to Corpus Christi,
                Laredo, McAllen, Mission, Los Fresnos, South Padre Island,
                Brownsville, and everywhere in between. Our extensive coverage
                ensures that quality technology services are accessible
                throughout the region.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
