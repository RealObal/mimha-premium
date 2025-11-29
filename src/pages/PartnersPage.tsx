import { Link } from 'react-router-dom';
import { MapPin, Globe } from 'lucide-react';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Uganda Harm Reduction Network (UHRN)',
      description: 'A network of organizations working to reduce the harms associated with substance use through evidence-based interventions and advocacy.',
      focus: 'Harm Reduction Coordination'
    },
    {
      name: 'Peace of Mind Foundation',
      description: 'A foundation dedicated to promoting mental health awareness and providing support for individuals living with mental health conditions.',
      focus: 'Mental Health Support'
    },
    {
      name: 'Freya International School of Research and Implementation (FISORI)',
      description: 'A research and implementation organization focused on advancing evidence-based practices in health and social services.',
      focus: 'Research & Implementation'
    },
    {
      name: 'Infectious Disease Institute (IDI)',
      description: 'A leading institution in infectious disease research, training, and clinical care, with a focus on HIV and related conditions.',
      focus: 'HIV & Infectious Disease'
    },
    {
      name: 'Ember Mental Health',
      description: 'An organization committed to improving mental health services and reducing barriers to care for vulnerable populations.',
      focus: 'Mental Health Services'
    },
    {
      name: 'Makcinga Alliance',
      description: 'A collaborative alliance working to address health and social challenges through community-based interventions and advocacy.',
      focus: 'Community Health'
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <p className="text-lg text-gray-700">
              Collaborating to create lasting change in mental health and addiction services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Strength Through Partnership</h2>
          <p className="text-lg text-teal-50 leading-relaxed">
            MIMHA's impact is amplified through strategic partnerships with organizations that share our commitment to health equity, human rights, and community-led solutions. Together, we work to strengthen systems, reduce barriers to care, and advocate for policy changes that benefit all people.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium text-teal-700">
                        {partner.focus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Collaborative Design</h3>
              <p className="text-gray-700">
                We co-design programs and initiatives with partners, ensuring that the voices and expertise of all stakeholders are valued and integrated into our work.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Knowledge Sharing</h3>
              <p className="text-gray-700">
                We actively participate in networks and forums to share learnings, best practices, and evidence about what works in mental health, addiction, and harm reduction.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Advocacy Alignment</h3>
              <p className="text-gray-700">
                Together with partners, we advocate for systemic changes and policies that address the root causes of mental health and addiction challenges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resource Optimization</h3>
              <p className="text-gray-700">
                Strategic partnerships allow us to pool resources, reduce duplication, and ensure that our collective efforts reach more people in need of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Partnership Impact</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Expanded Reach</h3>
              <p className="text-gray-700">
                Through partnerships, MIMHA can extend services and support to more communities and populations than would be possible working alone.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Enhanced Quality</h3>
              <p className="text-gray-700">
                Collaborating with specialized organizations ensures that each component of our integrated approach meets the highest standards of quality and effectiveness.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-700">
                Partnerships strengthen the sustainability of our work by diversifying funding sources, building institutional capacity, and creating accountability mechanisms.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Policy Influence</h3>
              <p className="text-gray-700">
                United with partners, MIMHA has greater influence in advocacy efforts, contributing to changes in health policies and practices at local, national, and international levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Partnering?</h2>
          <p className="text-lg text-gray-300 mb-8">
            We welcome inquiries from organizations aligned with our mission and values.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
