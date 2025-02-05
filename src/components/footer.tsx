import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Trinity Future Technologies
            </h3>
            <p className="mb-4 text-slate-300">
              Empowering South Texas with advanced technology solutions since
              2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (956) 536-2617
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@trifutec.com
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                2020 Doval Ave., Suite 26
                <br />
                Harlingen, TX
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Service Area</h3>
            <p className="text-slate-300">
              Serving South Texas from San Antonio to Brownsville, including:
            </p>
            <ul className="mt-2 list-inside list-disc text-slate-300">
              <li>Corpus Christi</li>
              <li>Laredo</li>
              <li>McAllen</li>
              <li>Mission</li>
              <li>South Padre Island</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Trinity Future Technologies. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
