/* eslint-disable @next/next/no-img-element */

const socialLinks = [
  { label: "Scholar", href: "https://scholar.google.com/citations?user=9IRPbVkAAAAJ&hl=en&oi=ao" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shifatearman/" },
  { label: "Facebook", href: "https://www.facebook.com/shifat.e.arman.2024/" },
  { label: "Instagram", href: "https://www.instagram.com/shifat_e_arman" },
  { label: "University of Dhaka", href: "https://www.du.ac.bd/faculty/faculty_details/RME/54715" },
];

const lifeEvents = [
  { year: "2025", text: <>Received the <em><strong>Dean&apos;s Award</strong></em> (2025 and 2023) as the youngest awardee and only lecturer to receive it twice.</> },
  { year: "2025", text: <>Promoted to <em><strong>Assistant Professor</strong></em>, Dept. of Robotics and Mechatronics Engineering, University of Dhaka.</> },
  { year: "2025", text: <>Received the <em><strong>Provost Award</strong></em> for securing 1st position in the MSc with a CGPA of 3.98 out of 4.00.</> },
  { year: "2025", text: <>Received the <em><strong>Dhaka University Research Excellence Award</strong></em> as one of the youngest awardees for impactful peer reviewed research.</> },
  { year: "2024", text: <>Received the <em><strong>Special Merit Award and Distinction</strong></em> for securing 2nd position among 58 faculty members in the Foundation Training Programme.</> },
  { year: "2022", text: <>Joined as <em><strong>Lecturer</strong></em>, Dept. of Robotics and Mechatronics Engineering, University of Dhaka.</> },
  { year: "2022", text: <>Joined as <em><strong>Adjunct Faculty</strong></em>, Dept. of Computer Science and Engineering, BRAC University.</> },
  { year: "2022", text: <>Completed <em><strong>MSc</strong></em> in Robotics & Mechatronics Engineering from University of Dhaka.</> },
  { year: "2021", text: <>Joined as <em><strong>Visiting Research Assistant</strong></em>, GIS and Remote Sensing Laboratory, Gazipur Agricultural University.</> },
  { year: "2020", text: <>Joined as <em><strong>Research Assistant</strong></em>, University of Dhaka.</> },
  { year: "2019", text: <>Completed <em><strong>BSc</strong></em> in Robotics & Mechatronics Engineering from University of Dhaka.</> },
  { year: "2019", text: <>Joined as <em><strong>AI Design and Development Intern</strong></em>, Datasoft Manufacturing and Assembly Limited.</> },
];

const featuredWorks = [
  {
    image: "/sugarcaneshuflenet.png",
    caption: <><em><strong>SugarcaneAI app</strong></em> for diagnosis of 15 prominent sugarcane leaf diseases using <em><strong>SugarcaneShuffleNet</strong></em>.</>,
  },
  {
    image: "/BananaSqueeze.png",
    caption: <><em><strong>BananaSqueezeNet</strong></em> for diagnosis of banana leaf diseases from mobile images.</>,
  },
  {
    image: "/CTscan.png",
    caption: <>Intracranial Hemorrhage Classification From CT Scan Using Deep Learning and Bayesian Optimization.</>,
  },
];

const researchHealthcare = [
  { text: "AI for COVID-19 Diagnosis from X-ray Images", href: "https://link.springer.com/article/10.1007/s42979-021-00980-3" },
  { text: "AI for Intracranial Hemorrhage Diagnosis from CT Scans", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10198438" },
  { text: "AI for Histological Cancer Cell Detection from Tissue Image" },
  { text: "AI for Retinal Disease Diagnosis from OCT Images" },
];

const researchAgriculture = [
  { text: "AI for Sugarcane Leaf Disease Diagnosis from Mobile Images" },
  { text: "AI for Banana Leaf Disease Diagnosis from Mobile Images (BananaSqueezeNet)", href: "https://www.sciencedirect.com/science/article/pii/S2772375523000448" },
  { text: "AI for Mango Leaf Disease Diagnosis from Mobile Images", href: "https://www.cell.com/action/showPdf?pii=S2405-8440%2824%2912392-4" },
  { text: "AI for Diverse Crop Leaf Diagnosis from Mobile Images (PlantCareNet)", href: "https://link.springer.com/article/10.1186/s13007-025-01366-9" },
  { text: "AI for Cotton Seedling Monitoring and Growth Stage Classification", href: "https://www.sciencedirect.com/science/article/pii/S2772375525008500" },
];

const researchNanophotonics = [
  { text: "AI for Inverse Design in Nanophotonics", href: "https://pubs.rsc.org/en/content/articlepdf/2024/nr/d4nr03081h" },
  { text: "Generative AI for Inverse Design in Nanophotonics", href: "https://pubs.rsc.org/en/content/articlepdf/2025/na/d4na00859f" },
];

const grants = [
  { year: "2025–26", text: <>Associate Investigator, <em><strong>Deep Learning and XAI for Interpretable Microscopic Tissue Image Analysis for Cancer Diagnosis</strong></em>, Ministry of Science and Technology, Bangladesh.</> },
  { year: "2024–25", text: <>Principal Investigator, <em><strong>Building Smart Biomimetic Robots for Underwater Operations</strong></em>, ICT Innovation Fund, ICT Division, Bangladesh.</> },
  { year: "2023–24", text: <>Co-Investigator, <em><strong>Rapid Assessment of Plant Responses to Climate-Induced Stress Using AI</strong></em>, University Grants Commission of Bangladesh.</> },
  { year: "2023–24", text: <>Co-Investigator, <em><strong>SmartPDE: Deep Learning Based Plant Disease Epidemiology and Forecasting</strong></em>, University Grants Commission of Bangladesh.</> },
];

const teachingAI = [
  "Artificial Intelligence",
  "Machine Learning",
  "Neural Networks and Deep Learning",
];

const teachingRobotics = [
  "Human-Robot Interaction",
  "Introduction to Robotics",
];

const teachingProgramming = [
  "Fundamentals of Programming",
  "Object Oriented Programming",
];

const teachingMechatronics = [
  "Advanced Mechatronics Engineering",
  "Programmable Logic Controller",
  "Engineering Drawing",
];

const collaborations = [
  "Ecology Lab, Dept. of Botany, University of Dhaka",
  "GIS & Remote Sensing Lab, Gazipur Agricultural University",
  "Microsystems & Nanoengineering Lab, Dept. of Electrical and Electronics Engineering, University of Dhaka",
  "Dept. of Geology, University of Dhaka",
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="notion-container flex items-center justify-between h-14">
          <a href="#" className="text-[18px] font-semibold text-text-primary">Shifat E. Arman</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#life-events" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Life Events</a>
            <a href="#featured-works" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Featured Works</a>
            <a href="#research" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Research</a>
            <a href="#education" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Education</a>
            <a href="#teaching" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Teaching</a>
          </div>
        </div>
      </nav>

      <div className="notion-container pt-20">
        {/* Title & Social Links */}
        <div className="mt-10 mb-2">
          <h1 className="text-[40px] font-bold text-text-primary leading-tight">
            Shifat E. Arman
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-x-1 text-[15px] text-text-secondary">
          {socialLinks.map((link, i) => (
            <span key={i}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-text-secondary hover:text-link-hover"
              >
                {link.label}
              </a>
              {i < socialLinks.length - 1 && <span className="mx-1">·</span>}
            </span>
          ))}
        </div>

        {/* Bio Section — Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-10 mb-4">
          {/* Left — Photo & Titles */}
          <div className="flex flex-col items-start">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-4">
              <img
                src="/shifatearman.jpg"
                alt="Shifat E. Arman"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <p className="text-[16px] italic font-semibold text-text-primary mb-1">Assistant Professor</p>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-3">
              Department of Robotics and Mechatronics Engineering, University of Dhaka
            </p>
            <p className="text-[16px] italic font-semibold text-text-primary mb-1">Founding Director</p>
            <p className="text-[15px] text-text-secondary">Redmond AI Research Group</p>
          </div>

          {/* Right — Bio paragraph */}
          <div className="text-[16px] leading-[1.7] text-text-primary">
            <p>
              I am an Assistant Professor in Robotics and Mechatronics Engineering specializing in developing artificial intelligence for real-world applications. I have authored <em><strong>13 peer-reviewed articles</strong></em>, including <em><strong>9 in Q1 venues</strong></em>, with <em><strong>over 280 citations</strong></em>, and have received <em><strong>multiple research awards</strong></em> and <em><strong>four competitive research grants</strong></em> totaling <em><strong>over 2 million BDT</strong></em>. I also founded the <em><strong>Redmond AI Research Group</strong></em>, which conducts cross-disciplinary work in medical imaging, agriculture and robotics through collaboration with academic and industry partners. My research interests include <em><strong>Agentic AI</strong></em>, <em><strong>Multimodal and Multitask Learning</strong></em>, and <em><strong>Vision Language Models</strong></em> with an emphasis on interpretable AI for real-world applications.
            </p>
          </div>
        </div>

        <div className="notion-divider" />

        {/* Life Events */}
        <section id="life-events" className="mb-2 scroll-mt-20">
          <h2 className="text-[26px] font-bold text-text-primary mb-4">🔥 Life Events</h2>
          <div className="space-y-3">
            {lifeEvents.map((event, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-text-primary">
                <strong>{event.year}</strong> {event.text}
              </p>
            ))}
          </div>
        </section>

        <div className="notion-divider" />

        {/* Featured Works */}
        <section id="featured-works" className="mb-2 scroll-mt-20">
          <h2 className="text-[26px] font-bold text-text-primary mb-2">💡 Featured Works</h2>
          <p className="text-[16px] text-text-primary mb-6">
            You can access my full list of published articles{" "}
            <a
              href="https://scholar.google.com/citations?user=9IRPbVkAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-text-secondary hover:text-link-hover"
            >
              here
            </a>.
          </p>
          <div className="space-y-8">
            {featuredWorks.map((work, i) => (
              <div key={i}>
                <div className="rounded-sm overflow-hidden border border-border mb-2 max-w-[100%]">
                  <img
                    src={work.image}
                    alt={`Featured work ${i + 1}`}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[15px] text-text-primary leading-[1.7]">
                  {work.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="notion-divider" />

        {/* Research Portfolio */}
        <section id="research" className="mb-2 scroll-mt-20">
          <h2 className="text-[26px] font-bold text-text-primary mb-4">🧑‍🔬 Research Portfolio</h2>

          <h3 className="text-[20px] font-bold text-text-primary mb-3">Artificial Intelligence in Healthcare</h3>
          <ol className="list-decimal pl-8 space-y-1 mb-6">
            {researchHealthcare.map((item, i) => (
              <li key={i} className="text-[16px] text-text-primary leading-[1.7]">
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline text-text-secondary hover:text-link-hover">{item.text}</a> : item.text}
              </li>
            ))}
          </ol>

          <h3 className="text-[20px] font-bold text-text-primary mb-3">Artificial Intelligence in Agriculture</h3>
          <ol className="list-decimal pl-8 space-y-1 mb-6">
            {researchAgriculture.map((item, i) => (
              <li key={i} className="text-[16px] text-text-primary leading-[1.7]">
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline text-text-secondary hover:text-link-hover">{item.text}</a> : item.text}
              </li>
            ))}
          </ol>

          <h3 className="text-[20px] font-bold text-text-primary mb-3">Artificial Intelligence in Nanophotonics</h3>
          <ol className="list-decimal pl-8 space-y-1 mb-2">
            {researchNanophotonics.map((item, i) => (
              <li key={i} className="text-[16px] text-text-primary leading-[1.7]">
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline text-text-secondary hover:text-link-hover">{item.text}</a> : item.text}
              </li>
            ))}
          </ol>
        </section>

        <div className="notion-divider" />

        {/* Research Grants */}
        <section className="mb-2">
          <h2 className="text-[26px] font-bold text-text-primary mb-4">Research Grants</h2>
          <div className="space-y-3">
            {grants.map((grant, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-text-primary">
                <strong>{grant.year}</strong> {grant.text}
              </p>
            ))}
          </div>
        </section>

        <div className="notion-divider" />

        {/* Education */}
        <section id="education" className="mb-2 scroll-mt-20">
          <h2 className="text-[26px] font-bold text-text-primary mb-4">🎓 Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-[16px] font-bold text-text-primary">MSc, Robotics & Mechatronics Engineering</p>
              <p className="text-[15px] text-text-secondary pl-6">Thesis: Algorithms for Fast and Efficient Neural Architecture Search</p>
            </div>
            <div>
              <p className="text-[16px] font-bold text-text-primary">BSc, Robotics & Mechatronics Engineering</p>
              <p className="text-[15px] text-text-secondary pl-6">Thesis: Deep Learning in Medical Image Analysis</p>
            </div>
          </div>
        </section>

        <div className="notion-divider" />

        {/* Teaching */}
        <section id="teaching" className="mb-2 scroll-mt-20">
          <h2 className="text-[26px] font-bold text-text-primary mb-2">🏛️ Teaching</h2>
          <p className="text-[16px] text-text-primary mb-5">I have taught the following courses in undergraduate and graduate level.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: AI */}
            <div>
              <h3 className="text-[18px] font-bold text-text-primary mb-3">Artificial Intelligence</h3>
              <ol className="list-decimal pl-6 space-y-1">
                {teachingAI.map((c, i) => (
                  <li key={i} className="text-[15px] text-text-primary leading-[1.7]">{c}</li>
                ))}
              </ol>
            </div>

            {/* Column 2: Robotics & Programming */}
            <div>
              <h3 className="text-[18px] font-bold text-text-primary mb-3">Robotics</h3>
              <ol className="list-decimal pl-6 space-y-1 mb-5">
                {teachingRobotics.map((c, i) => (
                  <li key={i} className="text-[15px] text-text-primary leading-[1.7]">{c}</li>
                ))}
              </ol>
              <h3 className="text-[18px] font-bold text-text-primary mb-3">Programming</h3>
              <ol className="list-decimal pl-6 space-y-1">
                {teachingProgramming.map((c, i) => (
                  <li key={i} className="text-[15px] text-text-primary leading-[1.7]">{c}</li>
                ))}
              </ol>
            </div>

            {/* Column 3: Mechatronics */}
            <div>
              <h3 className="text-[18px] font-bold text-text-primary mb-3">Mechatronics</h3>
              <ol className="list-decimal pl-6 space-y-1">
                {teachingMechatronics.map((c, i) => (
                  <li key={i} className="text-[15px] text-text-primary leading-[1.7]">{c}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <div className="notion-divider" />

        {/* Collaborations */}
        <section className="mb-2">
          <h2 className="text-[26px] font-bold text-text-primary mb-4">Collaborations</h2>
          <ul className="list-disc pl-6 space-y-2">
            {collaborations.map((c, i) => (
              <li key={i} className="text-[16px] text-text-primary leading-[1.7]">{c}</li>
            ))}
          </ul>
        </section>

        <div className="notion-divider" />

        {/* Footer */}
        <footer className="pb-12 pt-2 text-center">
          <p className="text-[15px] text-text-secondary">© Shifat E. Arman 2026</p>
        </footer>
      </div>
    </>
  );
}
