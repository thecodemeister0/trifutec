import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Get in touch with us for all your technology needs. We're here to
            help!
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-300">(956) 536-2617</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-300">info@trifutec.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-300">
                    2020 Doval Ave., Suite 26
                    <br />
                    Harlingen, TX
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2 bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      placeholder="Name"
                      className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="min-h-[150px] bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
