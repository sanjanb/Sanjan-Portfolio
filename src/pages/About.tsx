import React from 'react';
import { Briefcase, GraduationCap, Coffee, Globe, Heart } from 'lucide-react';

function About() {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-indigo-200">Passionate developer, continuous learner, and problem solver.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Quick Info */}
              <div>
                <div className="sticky top-24">
                  <div className="relative mb-12">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80" 
                        alt="Alex Chen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Coffee className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">Coffee Enthusiast</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Briefcase className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Experience</h3>
                        <p className="text-gray-600">8+ years in tech</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Education</h3>
                        <p className="text-gray-600">M.S. Computer Science</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Globe className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Heart className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Interests</h3>
                        <p className="text-gray-600">Tech, Coffee, Travel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Content */}
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6">My Story</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Hello! I'm Alex, a passionate Full Stack Developer based in San Francisco. My journey in tech began with a simple curiosity about how things work on the internet, which quickly evolved into a deep fascination with web development.
                    </p>
                    <p className="mb-4">
                      With over 8 years of experience in the tech industry, I've had the privilege of working with diverse teams and technologies. My expertise spans across the full stack, from crafting intuitive user interfaces to designing robust backend systems.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and creating solutions that not only solve problems but also provide exceptional user experiences. My approach combines technical expertise with a deep understanding of user needs.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
                  <div className="space-y-8">
                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
                      <p className="text-indigo-600 mb-3">TechCorp Inc. • 2020 - Present</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Led development of enterprise-scale web applications</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                        <li>Implemented CI/CD pipelines and improved deployment processes</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                      <p className="text-indigo-600 mb-3">WebSolutions Co. • 2017 - 2020</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Developed and maintained multiple client projects</li>
                        <li>Implemented responsive designs and optimized performance</li>
                        <li>Collaborated with design team to improve UX</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                      <p className="text-indigo-600 mb-3">StartupX • 2015 - 2017</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Built interactive user interfaces using React</li>
                        <li>Implemented responsive designs and animations</li>
                        <li>Worked closely with UX team to implement designs</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Education</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Master of Science in Computer Science</h3>
                      <p className="text-indigo-600 mb-2">Stanford University • 2013 - 2015</p>
                      <p className="text-gray-600">Specialized in Software Engineering and Distributed Systems</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
                      <p className="text-indigo-600 mb-2">UC Berkeley • 2009 - 2013</p>
                      <p className="text-gray-600">Minor in Mathematics</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;