import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Stethoscope, Users, Heart } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: 'Primary Prevention',
      description: 'Preventing mental health disorders among marginalized and vulnerable groups through education and community support.'
    },
    {
      icon: Stethoscope,
      title: 'Early Diagnosis',
      description: 'Identifying and treating acute mental health disorders at their earliest stages for better outcomes.'
    },
    {
      icon: Heart,
      title: 'Harm Reduction',
      description: 'Evidence-based support for people who use and inject drugs with compassion and dignity.'
    },
    {
      icon: Users,
      title: 'Chronic Care',
      description: 'Comprehensive diagnosis, treatment, rehabilitation and ongoing support for chronic mental illnesses.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Clients Served (2023)' },
    { number: '36', label: 'Linked to ART' },
    { number: '100+', label: 'Achieved Viral Load Suppression' },
    { number: '300+', label: 'Initiated on PrEP' }
  ];

  return (
    <>
      <section className="relative py-16 sm:py-24 overflow-hidden bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(/PHOTO-2025-11-20-17-11-00.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Promoting Mental Well-Being and Addiction Recovery
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              MIMHA is a community-based organization dedicated to enhancing access to prevention, early diagnosis, and high-quality mental health and addiction treatment services across Northern Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold shadow-lg"
              >
                Learn Our Story
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              >
                Get Involved
              </Link>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Four-Prong Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive strategies designed to meet the diverse mental health and addiction recovery needs of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg sm:text-xl text-teal-50 mb-8 leading-relaxed">
            To promote the mental well-being of all individuals and their families by enhancing availability and access to prevention, early diagnosis, and high-quality addiction and mental healthcare treatment and support services.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Discover More
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Integrated HIV Response</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our HIV response is deeply integrated with our commitment to mental health and harm reduction for vulnerable populations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">400+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HIV Testing Services</h3>
              <p className="text-gray-700">
                Comprehensive testing and screening for high-risk populations with follow-up support.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">ART Linkage</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment Connection</h3>
              <p className="text-gray-700">
                Ensuring newly identified HIV-positive clients are linked to antiretroviral therapy with wraparound support.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">Advocacy</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Engagement</h3>
              <p className="text-gray-700">
                Engaging leaders and law enforcement to reduce stigma and improve access to care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
