import React, { lazy, Suspense } from 'react';
import { ExternalLink, Code2, Boxes, Monitor, Database, ArrowDown, Mail, Github, Linkedin, MapPin, Quote } from 'lucide-react';
import LazyImage from '../components/LazyImage';

// Lazy load sections
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ProjectsSection = lazy(() => import('../components/ProjectsSection'));

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 relative">
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                Available for freelance work
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 text-transparent bg-clip-text">
              Crafting Digital Experiences Through Code
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Hi, I'm <span className="text-indigo-400 font-semibold">Sanjan B M</span>. I transform ideas into elegant, 
              user-centric applications that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="#contact" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                Let's work together
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#projects" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 backdrop-blur-sm">
                View my projects
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8" />, title: 'Frontend Development', desc: 'React, Vue, TypeScript, Tailwind CSS' },
              { icon: <Database className="w-8 h-8" />, title: 'Backend Development', desc: 'Node.js, Python, PostgreSQL, MongoDB' },
              { icon: <Monitor className="w-8 h-8" />, title: 'UI/UX Design', desc: 'Figma, Adobe XD, Responsive Design' },
              { icon: <Boxes className="w-8 h-8" />, title: 'DevOps', desc: 'Docker, AWS, CI/CD, Git' },
            ].map((skill, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <ProjectsSection />
      </Suspense>

      {/* Testimonials Section - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6">
                    <div className="h-24 bg-gray-200 rounded mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }>
        <TestimonialsSection />
      </Suspense>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email Contact */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:sanjanacharaya1234@gmail.com" 
                  className="text-indigo-600 hover:text-indigo-700 break-all"
                >
                  sanjanacharaya1234@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/sanjanb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  github.com/sanjanb
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/sanjan-bm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  linkedin.com/in/sanjan-bm
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6 opacity-90">
                Have a project in mind? Let's discuss how we can bring your ideas to life.
              </p>
              <a
                href="mailto:sanjanacharaya1234@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Send me a message
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;