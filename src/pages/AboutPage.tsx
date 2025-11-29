import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const approaches = [
    {
      prong: 'Prong One',
      title: 'Primary Prevention',
      description: 'Primary prevention of mental health disorders among the marginalized and vulnerable groups through education,climate-informed education, community awareness, and protective interventions.'
    },
    {
      prong: 'Prong Two',
      title: 'Early Diagnosis & Treatment',
      description: 'Early diagnosis and treatment of acute mental health disorders to prevent escalation and improve recovery outcomes.'
    },
    {
      prong: 'Prong Three',
      title: 'Harm Reduction',
      description: 'Harm reduction for people who use and inject drugs (PWUIDs) through evidence-based, compassionate support strategies.'
    },
    {
      prong: 'Prong Four',
      title: 'Chronic Care',
      description: 'Diagnosis, treatment, rehabilitation and ongoing support care for individuals living with chronic mental illnesses.'
    }
  ];

  const values = [
    {
      title: 'Confidentiality',
      description: 'We preserve authorized restrictions on access and disclosure of any privileged information.'
    },
    {
      title: 'Integrity',
      description: 'We are accountable, transparent, and ethical in all of our actions.'
    },
    {
      title: 'Quality',
      description: 'We aggressively implement processes that advance quality and client safety.'
    },
    {
      title: 'Professionalism',
      description: 'We uphold and adhere to all medical and human rights standards.'
    },
    {
      title: 'Accountability',
      description: 'We take full responsibility for our actions and their outcomes, ensuring that we deliver on our commitments.'
    },
    {
      title: 'Creativity',
      description: 'We embrace innovation and new ideas to improve service delivery and address emerging challenges.'
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About MIMHA</h1>
            <p className="text-lg text-gray-700">
              Founded by survivors, dedicated to healing and recovery
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              It is more than ten years ever since peace was restored in Northern Uganda after going through twenty years of insurgency. However, the impact of the insurgency is still evidenced by the high prevalence of mental health disorders such as post-traumatic stress disorders, suicide, depression, drug and substance abuse, and gambling. Other psychosocial challenges include high crime rates, low economic status, early pregnancies, HIV, high school dropouts, gender-based violence, and rare disorders such as nodding syndrome.
            </p>
            <p>
              Much as several NGOs came up to help, most of them did not focus on addressing the psychological challenges of the people traumatized as a result of the war. This resulted in the high prevalence of mental and addictive disorders in Northern Uganda today.
            </p>
            <p>
              The Mouthpiece Initiative for Mental Health and Addiction (MIMHA) is an indigenous, independent, non-partisan, not-for-profit non-governmental organization established in post-war Northern Uganda (Gulu) by survivors of post-war related mental health disorders, drug and substance abuse disorders. We were founded by those who understand firsthand the challenges facing our communities.
            </p>
            <p>
              MIMHA is legally registered with Uganda Registration Services Bureau as Mouthpiece Initiative for Mental Health and Addiction (MIMHA) Limited, with registration number 80020003603151 and with Gulu City Council as a Community Based Organization, with registration number 0242.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Vision</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-200">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              A Uganda in which the healthcare needs of people living with mental illness, addiction-related disorders, and the emotional well-being of their families are met.
            </p>
            <div className="bg-teal-100 rounded-lg p-4 border-l-4 border-teal-600">
              <p className="text-lg font-semibold text-teal-900">
                Our Motto: Peace of mind for all
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Four-Prong Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-sm font-semibold text-teal-600 uppercase mb-2">
                  {approach.prong}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-teal-100 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-teal-50 ml-8">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Objectives</h2>
          <div className="space-y-6 text-gray-700">
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Community Participation</h3>
              <p>
                Promotion of community participation in mental health service development and increase of efforts towards self-help in the community.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Accessible Mental Health Care</h3>
              <p>
                To ensure availability and accessibility to minimum mental health care for all, particularly to the most vulnerable and underprivileged sections of the population.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Stigma Reduction</h3>
              <p>
                To reduce the stigma associated with mental illness and addiction through education, awareness, and community engagement.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dispelling Myths</h3>
              <p>
                To dispel myths about mental illnesses, addiction, and people affected by sharing stories of recovery and by celebrating the success of recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why MIMHA Matters</h2>
          <div className="space-y-6 text-gray-700">
            <div className="p-6 bg-white rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Survivor-Led Leadership</h3>
              <p>
                Founded and led by people with lived experience of mental health and addiction challenges, ensuring our work is grounded in authentic understanding and empathy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Community-Centered Approach</h3>
              <p>
                We work alongside community members, local leaders, and stakeholders to develop culturally appropriate and effective interventions that address real community needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Integrated Services</h3>
              <p>
                We recognize the intersection of mental health, addiction, HIV, and social determinants, providing holistic care that addresses the full spectrum of our clients' needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Advocacy & Systems Change</h3>
              <p>
                Beyond direct services, we advocate for policy changes and systemic improvements to ensure lasting impact and increased accessibility to mental health services across Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
