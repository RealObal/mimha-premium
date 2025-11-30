import { Users } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Opio Joel',
      position: 'Executive Director',
      bio: 'Leading MIMHA\'s strategic vision and overall organizational management, bringing extensive experience in mental health and community-based healthcare.',
      photo: '/team/dr-opiyo-joel.jpg'
    },
    {
      name: 'Dr. Anena Caroline',
      position: 'Programs Manager',
      bio: 'Overseeing all program operations and implementation, ensuring quality delivery of mental health and addiction services across initiatives.'
    },
    {
      name: 'Mr. Obal Ronald',
      position: 'MEAL Manager',
      bio: 'Overseeing Monitoring, Evaluation, Accountability and Learning (MEAL) systems to ensure evidence-based programming and continuous improvement.',
      photo: '/team/mr-obal-ronald.jpg'
    },
    {
      name: 'Dr. Okema James Nelson',
      position: 'Project Coordinator',
      bio: 'Coordinating project activities and ensuring seamless implementation of mental health and addiction recovery programs.'
    },
    {
      name: 'Ms. Acan Flavia',
      position: 'Outreach Coordinator',
      bio: 'Leading community outreach efforts to connect vulnerable populations with mental health and addiction services.'
    },
    {
      name: 'Ms. Ajok Winnie',
      position: 'Finance Manager',
      bio: 'Managing financial operations and ensuring fiscal responsibility and transparency in all organizational activities.'
    },
    {
      name: 'Dr. Okot Jerome',
      position: 'Research and Advocacy Officer',
      bio: 'Conducting research and leading advocacy efforts to influence mental health policy and practice in Northern Uganda.'
    },
    {
      name: 'Ms. Larubi Christine',
      position: 'Referral and Networking Officer',
      bio: 'Building strategic partnerships and managing referral systems to ensure comprehensive care for clients.'
    },
    {
      name: 'Mr. Okene Denish Wokorach',
      position: 'Peer Coordinator',
      bio: 'Coordinating peer support programs and leveraging lived experience to support recovery and healing.'
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-lg text-gray-700">
              Dedicated professionals committed to mental health and addiction recovery
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our leadership team brings diverse expertise and passion for improving mental health and addiction services in Northern Uganda and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                {member.photo ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-4 border-teal-500">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg" style={{ display: 'none', marginTop: '-96px' }}>
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {member.position}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Team's Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <h3 className="text-lg font-bold text-white mb-2">Excellence</h3>
              <p className="text-teal-50">
                Delivering high-quality services with integrity and professionalism.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <h3 className="text-lg font-bold text-white mb-2">Compassion</h3>
              <p className="text-teal-50">
                Approaching every individual with empathy and respect for their dignity.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
              <p className="text-teal-50">
                Creating meaningful, measurable change in mental health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
