import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              EduFlow
            </h1>
          </div>

          <a
            href="/login"
            className="px-5 py-2.5 rounded-xl bg-white text-black font-medium hover:scale-105 transition-all duration-300"
          >
            Login
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">
                Smart School Content Management
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Manage.
              <br />
              Approve.
              <br />
              Publish.
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              A modern platform for teachers and principals to
              manage educational content, approvals, live
              classrooms, and student engagement — all in one
              place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="/login"
    className="
      px-7 py-4 rounded-2xl
      bg-white text-black
      font-semibold
      hover:scale-105
      transition-all duration-300
      shadow-2xl
    "
  >
    Get Started
  </a>

  <a
    href="/live/demo"
    className="
      px-7 py-4 rounded-2xl
      border border-white/10
      bg-blue-500/10
      text-white
      backdrop-blur-xl
      hover:bg-blue-500/20
      hover:scale-105
      transition-all duration-300
    "
  >
    Live Demo Class
  </a>

  <a
    href="/live/science"
    className="
      px-7 py-4 rounded-2xl
      border border-white/10
      bg-purple-500/10
      text-white
      backdrop-blur-xl
      hover:bg-purple-500/20
      hover:scale-105
      transition-all duration-300
    "
  >
    Science Live Session
  </a>

</div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-sm text-white/60 mt-1">
                  Active Users
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-white/60 mt-1">
                  Schools
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-sm text-white/60 mt-1">
                  Approval Accuracy
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-40" />

            <div className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
              {/* Top */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-semibold">
                    Content Approval Dashboard
                  </h3>
                  <p className="text-sm text-white/60 mt-1">
                    Principal Control Panel
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/20">
                  Live
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-4 mt-6">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between hover:translate-x-1 transition-all duration-300">
                  <div>
                    <h4 className="font-medium">
                      Physics Live Class
                    </h4>
                    <p className="text-sm text-white/60 mt-1">
                      Submitted by Rahul Sharma
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                    Pending
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between hover:translate-x-1 transition-all duration-300">
                  <div>
                    <h4 className="font-medium">
                      Chemistry Assignment
                    </h4>
                    <p className="text-sm text-white/60 mt-1">
                      Submitted by Priya Singh
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                    Approved
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between hover:translate-x-1 transition-all duration-300">
                  <div>
                    <h4 className="font-medium">
                      Biology Notes
                    </h4>
                    <p className="text-sm text-white/60 mt-1">
                      Submitted by Ayesha Khan
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                    Rejected
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <p className="text-white/60 text-sm">
                    Pending Approvals
                  </p>
                  <h3 className="text-4xl font-bold mt-2">
                    24
                  </h3>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <p className="text-white/60 text-sm">
                    Published Today
                  </p>
                  <h3 className="text-4xl font-bold mt-2">
                    128
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl mb-5">
              📚
            </div>

            <h3 className="text-2xl font-semibold">
              Content Workflow
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed">
              Teachers can submit educational content for
              seamless approval and publication.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold">
              Real-Time Dashboard
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed">
              Track approvals, rejections, live classes, and
              activity instantly.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-2xl mb-5">
              🔒
            </div>

            <h3 className="text-2xl font-semibold">
              Role Based Access
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed">
              Secure teacher and principal authentication with
              protected workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

