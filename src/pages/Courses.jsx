function Courses() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Courses & Training
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            Learn practical skills, upgrade your career, and grow your business
            with industry-focused training programs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title mb-6 fade-in">
            IT Courses & Training
          </h2>
          <p className="text-slate-600 mb-12 max-w-3xl">
            Our IT courses are designed to provide real-world technical skills
            with hands-on practice and expert guidance.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Web Development Fundamentals",
              "Frontend & Backend Technologies",
              "Software Tools & Applications",
              "Practical IT Training",
              "Project-Based Learning",
              "Career-Oriented Skill Development",
            ].map((course, i) => (
              <div
                key={i}
                className="bg-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-indigo-700">
                  {course}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="section-title mb-4">
              Web Development
            </h2>
            <p className="text-slate-600 mb-6">
              Learn how to build modern, responsive, and secure websites
              using the latest web technologies and frameworks.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>✔ HTML, CSS & JavaScript</li>
              <li>✔ React & Modern Frontend</li>
              <li>✔ Backend Development</li>
              <li>✔ Live Projects & Practice</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm fade-up">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              What You’ll Gain
            </h3>
            <p className="text-slate-600">
              Hands-on experience, industry exposure, and the confidence
              to work on real-world projects or start your own web solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-14 fade-in">
            Business Training
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrepreneurship Training",
                desc: "Learn how to start, manage, and grow your own business.",
              },
              {
                title: "Business Strategy & Planning",
                desc: "Understand market strategies, planning, and execution.",
              },
              {
                title: "Digital Business Skills",
                desc: "Grow your business using digital tools and online platforms.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Start Learning Today
          </h2>
          <p className="mb-8 text-indigo-100">
            Upgrade your skills, grow your business, and create new opportunities.
          </p>
          <button className="btn-primary bg-white text-indigo-700 hover:bg-gray-100">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Courses;
