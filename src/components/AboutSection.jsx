import { MonitorCog, Code, Merge, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              👋 Hi, I'm Krutik Patel, a passionate Full Stack Developer with 3+
              years of experience building web applications using technologies
              like React.js, Vue.js, Node.js, MongoDB, and Express.js.
            </p>

            <p className="text-muted-foreground">
              I've worked on multiple real-world projects — from building
              scalable dashboards and e-commerce platforms to designing secure
              authentication systems and integrating third-party APIs.
            </p>
            <p className="text-muted-foreground">
              I enjoy turning complex problems into elegant, Merge-friendly
              solutions. Whether it's frontend design or backend logic, I love
              every step of the development process.
            </p>
            <p className="text-muted-foreground">
              I'm currently exploring new challenges in automation, AI
              integration, and cloud deployment to level up my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using modern technologies
                    like Vue.js, React.js, Nuxt.js, Next.js, Node.js,
                    Feathersjs,MySQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Merge className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    API Integration & Automation
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting systems with third-party APIs and automating
                    repetitive tasks to improve efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Technical Project Leadership
                  </h4>
                  <p className="text-muted-foreground">
                    Leading cross-functional teams and delivering features on
                    time using agile practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
