function Career() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Careers at Business Buddies and new line for test
            dfjdfjhdjfhdjf
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Join our team and help individuals and businesses learn, grow, and
            succeed together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title mb-12 fade-in">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth-Oriented Culture",
                desc: "We focus on learning, skill development, and career growth.",
              },
              {
                title: "Flexible Work Environment",
                desc: "Work remotely or on flexible schedules with supportive teams.",
              },
              {
                title: "Real Impact",
                desc: "Your work helps people build skills, income, and businesses.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title mb-12 fade-in">
            Open Positions
          </h2>

          <div className="space-y-6">
            {[
              {
                role: "Business Development Executive",
                type: "Full-Time / Remote",
                desc: "Identify opportunities, onboard partners, and drive growth.",
              },
              {
                role: "Digital Marketing Executive",
                type: "Full-Time / Hybrid",
                desc: "Manage campaigns, SEO, social media, and brand growth.",
              },
              {
                role: "Web Developer (Frontend)",
                type: "Internship / Part-Time",
                desc: "Build modern user interfaces using React and Tailwind CSS.",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {job.role}
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">
                    {job.type}
                  </p>
                  <p className="text-slate-600">
                    {job.desc}
                  </p>
                </div>

                <a
                  href="/contact"
                  className="mt-4 md:mt-0 btn-primary px-6 py-2"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="section-title mb-4">
              Internships & Training
            </h2>
            <p className="text-slate-600 mb-6">
              We provide hands-on internships and training programs for students
              and freshers who want real-world experience and practical skills.
            </p>

            <ul className="space-y-2 text-slate-600">
              <li>✔ Web Development & IT Training</li>
              <li>✔ Digital Marketing Internships</li>
              <li>✔ Business & Sales Training</li>
              <li>✔ Certification & Mentorship</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-8 rounded-2xl shadow-sm fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Who Can Apply?
            </h3>
            <p className="text-slate-600">
              Students, fresh graduates, professionals, and anyone eager to
              learn and grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="section-title mb-4">
            How to Apply
          </h2>
          <p className="text-slate-600 mb-10">
            Send your resume and details, and our HR team will contact you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@businessbuddies.online"
              className="btn-primary"
            >
              Email Your Resume
            </a>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Grow Your Career With Business Buddies
          </h2>
          <p className="text-indigo-100 mb-8">
            Be part of a growing platform focused on learning, opportunities,
            and success.
          </p>
          <a
            href="/contact"
            className="btn-primary bg-white text-indigo-700 hover:bg-gray-100"
          >
            Join Our Team
          </a>
        </div>
      </section>
    </div>
  );
}

export default Career;
