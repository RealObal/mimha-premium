import { TrendingUp, Users, Heart, Shield } from 'lucide-react';

export default function OurWorkPage() {
  const accomplishments = [
    {
      icon: Users,
      stat: '400+',
      title: 'Clients Served',
      description: 'Through HIV Testing Services with focus on high-risk populations and comprehensive screening.'
    },
    {
      icon: Heart,
      stat: '36',
      title: 'Linked to ART',
      description: 'Newly identified HIV-positive clients successfully connected to antiretroviral therapy.'
    },
    {
      icon: TrendingUp,
      stat: '44',
      title: 'Viral Load Suppression',
      description: 'Clients achieved viral load suppression through integrated care and psychosocial support.'
    },
    {
      icon: Shield,
      stat: '61',
      title: 'PrEP Initiated',
      description: 'Individuals began Pre-Exposure Prophylaxis for HIV prevention as part of comprehensive care.'
    }
  ];

  const initiatives = [
    {
      title: 'HIV Testing Services (HTS)',
      description: 'Comprehensive and accessible HIV testing for high-risk populations including people who use drugs, sex workers, and LGBTQ individuals. Our HTS program integrates mental health screening and referral for clients with co-occurring mental health and substance use disorders.'
    },
    {
      title: 'ART Linkage & Adherence Support',
      description: 'We ensure newly diagnosed HIV-positive individuals are connected to antiretroviral therapy. Through integrated care addressing mental health and substance use, we support consistent treatment adherence and help clients achieve and maintain viral load suppression.'
    },
    {
      title: 'PrEP Outreach & Education',
      description: 'Working with high-risk populations to increase awareness, access, and uptake of Pre-Exposure Prophylaxis. We provide education, navigation support, and ongoing clinical follow-up to improve retention and adherence.'
    },
    {
      title: 'Mental Health Integration',
      description: 'Recognizing that mental health conditions often co-occur with HIV and substance use, we provide integrated psychosocial support, trauma-informed care, and mental health treatment to all our HIV program participants.'
    },
    {
      title: 'Stigma Reduction & Advocacy',
      description: 'Through community training workshops, engagement with local leaders and law enforcement, and media engagement, we work to reduce HIV-related stigma and create supportive environments for testing, treatment, and prevention.'
    },
    {
      title: 'Harm Reduction Services',
      description: 'Evidence-based harm reduction services for people who use and inject drugs, including needle and syringe programs, drug checking services, and pathways to substance use treatment when individuals are ready.'
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
            <p className="text-lg text-gray-700">
              2023 Accomplishments and Integrated HIV Response
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">2023 Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accomplishments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    {item.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Integrated HIV Response</h2>
          <p className="text-lg text-teal-50 mb-8 leading-relaxed">
            Our HIV response is deeply integrated with our commitment to mental health and harm reduction, recognizing the complex intersections of HIV, mental health conditions, and substance use among vulnerable and marginalized populations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach to Stigma Reduction</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Community Training</h3>
              <p className="text-gray-700">
                We conduct comprehensive training workshops in communities to increase understanding of HIV, mental health, and addiction as health issues deserving compassion and support rather than judgment.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Leadership Engagement</h3>
              <p className="text-gray-700">
                We engage local leaders, government officials, law enforcement, and community influencers to foster supportive policies and practices that enable access to HIV testing, treatment, and prevention services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Media & Advocacy</h3>
              <p className="text-gray-700">
                Through strategic media engagement and high-level advocacy, we shift narratives around HIV, mental health, and substance use to promote inclusion, dignity, and evidence-based approaches to health and social policy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Harm Reduction Network Engagement</h3>
              <p className="text-gray-700">
                We work within harm reduction networks to ensure the voices and experiences of people who use drugs are centered in discussions about HIV prevention and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Programs and Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 text-left">
              <h3 className="text-xl font-bold text-white mb-3">Mental Health Awareness Campaign</h3>
              <p className="text-blue-50">
                Community education and awareness initiatives to reduce stigma, increase understanding, and promote early intervention for mental health challenges.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 text-left">
              <h3 className="text-xl font-bold text-white mb-3">Harm Reduction</h3>
              <p className="text-blue-50">
                Evidence-based services and support for people who use and inject drugs, including safer use education, needle exchange, and pathways to treatment.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 text-left">
              <h3 className="text-xl font-bold text-white mb-3">Climate Justice</h3>
              <p className="text-blue-50">
                Addressing the intersection of environmental challenges and mental health, recognizing climate impacts on vulnerable communities' well-being.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 text-left">
              <h3 className="text-xl font-bold text-white mb-3">Research and Advocacy</h3>
              <p className="text-blue-50">
                Conducting research to inform policy and practice while advocating for systemic changes that improve mental health and addiction services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Target Beneficiaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">People Living with Mental Illnesses</h3>
              <p className="text-gray-700">
                Comprehensive support, treatment, and rehabilitation services for individuals experiencing mental health challenges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">People Who Use and Inject Drugs (PWUIDs)</h3>
              <p className="text-gray-700">
                Integrated mental health, HIV, and harm reduction services designed specifically for people who use and inject drugs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Adolescent Girls and Young Women (AGYW)</h3>
              <p className="text-gray-700">
                Targeted mental health support, education, and prevention services for adolescent girls and young women facing unique challenges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Vulnerable Youths and Children</h3>
              <p className="text-gray-700">
                Early intervention and support services for young people at risk of or experiencing mental health and addiction challenges.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Vulnerable Groups</h3>
              <p className="text-gray-700">
                Specialized services for prisoners, trauma victims, and other marginalized populations who face barriers to mental health care.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Family Members and Friends</h3>
              <p className="text-gray-700">
                Support, education, and resources for family members and friends of people living with mental illness and addiction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
