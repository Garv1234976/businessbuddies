function About() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Business Buddies
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Empowering individuals and businesses to learn, earn, and grow
            together through smart opportunities and digital solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="section-title mb-4">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Business Buddies is a business growth and opportunity platform
              designed for students, professionals, entrepreneurs, and
              business owners.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our platform focuses on real-world learning, business training,
              IT courses, digital marketing, and customer support solutions —
              all under one roof.
            </p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-2xl shadow-sm fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 mb-6">
              To empower individuals with knowledge, skills, and opportunities
              that help them achieve financial independence and long-term
              business growth.
            </p>

            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600">
              To build a trusted digital ecosystem where learning, earning,
              and business success go hand in hand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-14 fade-in">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Growth",
                desc: "Helping businesses scale with smart strategies and digital tools.",
              },
              {
                title: "Business Training",
                desc: "Practical training programs for entrepreneurs and professionals.",
              },
              {
                title: "IT Courses",
                desc: "Job-oriented IT courses designed for real-world skills.",
              },
              {
                title: "Digital Marketing",
                desc: "SEO, social media, and online marketing solutions.",
              },
              {
                title: "Customer Support",
                desc: "Reliable support services to improve customer satisfaction.",
              },
              {
                title: "Earning Opportunities",
                desc: "Referral-based income opportunities with growth potential.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="section-title mb-12 fade-in">
            Why Choose Business Buddies?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Practical & skill-based learning",
              "Affordable pricing & free access",
              "Business-focused growth model",
              "Trusted community & support",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-indigo-50 p-6 rounded-2xl shadow-sm fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="font-semibold text-indigo-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="mb-8 text-indigo-100">
            Have questions or want to grow with us? We’re here to help.
          </p>

          <div className="space-y-2 text-lg">
            <p>📧 info@businessbuddies.online</p>
            <p>📞 +91 90234 97335</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
