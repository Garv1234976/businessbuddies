function Services() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Smart solutions, practical training, and digital support to help
            individuals and businesses grow faster and smarter.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center fade-in">
          <h2 className="section-title mb-4">
            What We Offer
          </h2>
          <p className="text-slate-600 leading-relaxed">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Business Buddies
            </span>
            , we provide end-to-end services designed to support learning,
            earning, and business growth. Our services are practical,
            affordable, and focused on real results.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Business Growth
            </h3>
            <p className="text-slate-600 mb-4">
              We help businesses scale through strategic planning, digital
              presence, branding, and growth-oriented solutions.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ Business strategy & planning</li>
              <li>✔ Brand visibility & promotion</li>
              <li>✔ Customer growth solutions</li>
            </ul>
          </div>

          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Business Training
            </h3>
            <p className="text-slate-600 mb-4">
              Practical training programs designed for entrepreneurs,
              professionals, and startups.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ Entrepreneurship training</li>
              <li>✔ Business management skills</li>
              <li>✔ Sales & marketing basics</li>
            </ul>
          </div>

          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              IT Courses & Training
            </h3>
            <p className="text-slate-600 mb-4">
              Job-oriented IT courses that focus on hands-on learning
              and real-world applications.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ Web & software skills</li>
              <li>✔ Practical projects</li>
              <li>✔ Career-ready training</li>
            </ul>
          </div>

          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Web Development
            </h3>
            <p className="text-slate-600 mb-4">
              Professional website development services to help
              businesses build a strong online presence.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ Responsive websites</li>
              <li>✔ Modern UI & UX</li>
              <li>✔ Secure & scalable solutions</li>
            </ul>
          </div>

          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Digital Marketing
            </h3>
            <p className="text-slate-600 mb-4">
              Data-driven digital marketing solutions to increase reach,
              engagement, and conversions.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ SEO & social media marketing</li>
              <li>✔ Paid ads & campaigns</li>
              <li>✔ Online brand promotion</li>
            </ul>
          </div>

          <div className="card fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Customer Support
            </h3>
            <p className="text-slate-600 mb-4">
              Reliable customer support solutions to improve customer
              satisfaction and retention.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✔ Dedicated support team</li>
              <li>✔ Query & issue handling</li>
              <li>✔ Customer relationship management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow With Business Buddies?
          </h2>
          <p className="mb-8 text-indigo-100">
            Let us help you build skills, grow your business, and create
            new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="btn-primary bg-white text-indigo-700 hover:bg-gray-100"
            >
              Contact Us
            </a>

            <a
              href="/courses"
              className="px-8 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-indigo-700 transition-all duration-300"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
