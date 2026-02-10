function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-32">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Grow Your Business <br /> With Smart Learning
          </h1>

          <p className="text-lg md:text-xl mb-10 text-indigo-100">
            Business growth, IT courses, digital marketing & professional
            training
          </p>

          <div className="flex justify-center gap-4">
            <button className="btn-primary bg-white text-indigo-700 hover:bg-gray-100">
              Get Started
            </button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        <div className="absolute -top-16 -left-16 w-56 h-56 bg-violet-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl"></div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="section-title mb-4">About Us</h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              We help businesses and individuals grow through practical business
              training, IT courses, and smart digital solutions.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              At{" "}
              <span className="font-semibold text-indigo-600">
                Business Buddies
              </span>
              , learning is simple, affordable, and result-driven.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-5 rounded-xl">
                <h4 className="font-semibold text-indigo-700 mb-1">
                  Our Mission
                </h4>
                <p className="text-sm text-slate-600">
                  Empower individuals with skills and growth opportunities.
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-xl">
                <h4 className="font-semibold text-indigo-700 mb-1">
                  Our Vision
                </h4>
                <p className="text-sm text-slate-600">
                  A trusted platform for learning and business success.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 fade-up">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Business growth and teamwork"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                Why Choose Us?
              </h3>

              <ul className="text-slate-600 space-y-2">
                <li>✔ Practical & job-ready learning</li>
                <li>✔ Business-focused training</li>
                <li>✔ Expert mentors</li>
                <li>✔ Affordable pricing</li>
                <li>✔ Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-14 fade-in">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Business Growth", desc: "Scale faster with smart plans." },
              { title: "Business Training", desc: "Professional team training." },
              { title: "IT Courses", desc: "Industry-ready tech skills." },
              { title: "Digital Marketing", desc: "SEO & online growth." },
              { title: "Customer Support", desc: "Improve customer trust." },
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
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="section-title mb-14 fade-in">Simple Pricing</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-indigo-50 p-8 rounded-2xl shadow zoom-in">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-700">
                Free Plan
              </h3>
              <p className="text-4xl font-bold mb-6 text-indigo-600">₹0</p>

              <ul className="text-slate-600 space-y-3 mb-8">
                <li>✔ Free courses</li>
                <li>✔ Business resources</li>
                <li>✔ Community support</li>
              </ul>

              <button className="btn-primary">Get Started</button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-8 rounded-2xl text-white shadow-xl zoom-in">
              <h3 className="text-2xl font-semibold mb-3">Premium Plan</h3>
              <p className="text-4xl font-bold mb-1">₹1000</p>
              <p className="mb-6 text-indigo-100">Per Year</p>

              <ul className="space-y-3 mb-8">
                <li>✔ All courses</li>
                <li>✔ Business & IT training</li>
                <li>✔ Marketing support</li>
                <li>✔ Priority support</li>
              </ul>

              <button className="btn-primary bg-white text-indigo-700 hover:bg-gray-100">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center fade-up">
          <h2 className="text-4xl font-extrabold mb-4">
            Let’s Grow Together
          </h2>

          <p className="mb-12 text-indigo-100 max-w-2xl mx-auto">
            Business Buddies helps individuals and businesses learn, grow, and
            succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card">
              <p className="text-2xl mb-2">📧</p>
              <p className="font-semibold">Email</p>
              <p className="text-indigo-100">
                info@businessbuddies.online
              </p>
            </div>

            <div className="glass-card">
              <p className="text-2xl mb-2">📞</p>
              <p className="font-semibold">Phone</p>
              <p className="text-indigo-100">+91 90234 97335</p>
            </div>

            <div className="glass-card">
              <p className="text-2xl mb-2">📍</p>
              <p className="font-semibold">Location</p>
              <p className="text-indigo-100">
                Zirakpur, Chandigarh, India
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@businessbuddies.online"
              className="btn-primary bg-white text-indigo-700 hover:bg-gray-100"
            >
              Email Us
            </a>

            <a href="tel:+919023497335" className="btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
