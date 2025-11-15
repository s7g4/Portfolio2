document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");

    // Command history array and index
    const commandHistory = [];
    let historyIndex = -1;

    // ASCII art for name and profession (moo art style)
    const mooArt = `
      __  __                 _                 
     |  \\/  | ___  _ __ ___ | |__   ___  _ __  
     | |\\/| |/ _ \\| '_ \` _ \\| '_ \\ / _ \\| '_ \\ 
     | |  | | (_) | | | | | | |_) | (_) | | | |
     |_|  |_|\\___/|_| |_| |_|_.__/ \\___/|_| |_|
                                              
    Shaurya Gaur
    Full Stack Developer, AI/ML Specialist and a Technological Enthusiast
    `;

    // ASCII art picture (simple example)
    const asciiPicture = `
      .-''''-.
     /        \\
    |          |
    |  .--.  .-|
    | (    )(  )
    |  '--'  '--'
     \\        /
      '-.__.-'
    `;

    // New banner art
    const bannerArt = `
   _____ _                                   
  / ____| |                                  
 | (___ | |__   __ _ _   _ _ __ _   _  __ _ 
  \\___ \\| '_ \\ / _\` | | | | '__| | | |/ _\` |
  ____) | | | | (_| | |_| | |  | |_| | (_| |
 |_____/|_| |_|\\__,_|\\__,_|_|   \\__, |\\__,_|
                                 __/ |      
                                |___/       
    <span style="color: #22c55e;">Full Stack Developer | AI/ML Specialist | Tech Enthusiast</span>
`;

    const matrixRain = `
<span style="color: #22c55e; animation: matrix-glow 2s ease-in-out infinite;">
╔═══════════════════════════════════════╗
║  Wake up, Neo...                      ║
║  The Matrix has you...                ║
║  Follow the white rabbit.             ║
║                                       ║
║  Knock, knock, Neo.                   ║
╚═══════════════════════════════════════╝
</span>`;

    const neofetchOutput = `
<span style="color: #22c55e;">shaurya@portfolio</span>
<span style="color: #666;">-----------------</span>
<span style="color: #22c55e;">OS:</span> Portfolio Linux
<span style="color: #22c55e;">Host:</span> Terminal v2.0
<span style="color: #22c55e;">Kernel:</span> React 18.3.1
<span style="color: #22c55e;">Uptime:</span> Always Online
<span style="color: #22c55e;">Shell:</span> bash 5.0.0
<span style="color: #22c55e;">Resolution:</span> Responsive
<span style="color: #22c55e;">Theme:</span> Matrix [Dark]
<span style="color: #22c55e;">CPU:</span> Coffee-powered
<span style="color: #22c55e;">Memory:</span> Infinite Ideas
`;

    const commands = {
        home: () => {
            return mooArt + "\n" + asciiPicture + "\nType 'help' to see available commands.";
        },
        welcome: () => {
            return `${bannerArt}
<span style="color: #666;">Welcome to my interactive terminal portfolio!</span>

Type <span style="color: #22c55e;">'help'</span> to see all available commands.
Type <span style="color: #22c55e;">'about'</span> to learn more about me.

<span style="color: #666;">Tip: Use ↑/↓ arrow keys to navigate command history.</span>
`;
        },
        about: () => {
            return `
<span style="color: #22c55e; font-weight: bold;">About Me</span>

Hey there! 👋 I'm <span style="color: #22c55e;">Shaurya Gaur</span>, a passionate Full Stack Developer and AI/ML Specialist.

I'm a Computer Science student at Netaji Subash Institute of Technology with a 
deep love for creating innovative solutions. Whether it's building scalable web 
applications, training machine learning models, or exploring the latest tech trends, 
I'm always eager to learn and grow.

<span style="color: #fbbf24;">What drives me?</span>
→ Solving complex problems with elegant code
→ Building products that make a real impact
→ Continuous learning and experimentation
→ Collaborating with talented people

<span style="color: #fbbf24;">Quick Facts:</span>
→ ☕ Coffee enthusiast (fuel for coding)
→ 🎮 Gamer in spare time
→ 📚 Always reading tech blogs
→ 🚀 Open source contributor

<span style="color: #fbbf24;">More Details:</span>
I am a Full Stack Developer, AI/ML Specialist, and a Technological Enthusiast. I have a passion for technology and I am always looking for new ways to learn and grow. I am a quick learner and I am always looking for new challenges to tackle.

<span style="color: #fbbf24;">My Skills:</span>
I have experience with a variety of programming languages and technologies including Python, Java, C++, JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, SQL, Git, and more. I have experience with machine learning and artificial intelligence and I am always looking for new ways to apply these technologies to solve real-world problems.

<span style="color: #fbbf24;">My Interests:</span>
I am interested in a variety of topics including technology, artificial intelligence, machine learning, data science, web development, and more. I am always looking for new ways to learn and grow and I am excited to see what the future holds.

<span style="color: #fbbf24;">My Goals:</span>
My goal is to continue to learn and grow as a developer and to work on projects that challenge me and allow me to use my skills to make a positive impact on the world.

That's the gist of who I am—part code wizard, part snack enthusiast, and full-time internet explorer (not the browser, though). If you're still reading this, congrats—you've unlocked the secret level of my life story! Do check out my previous works and resume to see what I've been up to.

Type <span style="color: #22c55e;">'skills'</span> to see my technical expertise!
`;
        },
        projects: () => {
            const projectsContent = `
<span style="color: #22c55e; font-weight: bold;">Projects</span>
--------

<span style="color: #fbbf24;">1. GFG AI Chatbot</span>
   An advanced AI chatbot system featuring emotion analysis, ethical monitoring, and digital twin integration
   <span style="color: #666;">Tech:</span> Python, Flask, JavaScript, HTML, CSS, OpenAI
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/gfg-ai-chatbot" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/gfg-ai-chatbot</a>

<span style="color: #fbbf24;">2. Accenture Hackathon Project</span>
   A project developed for the Accenture Hackathon, focusing on enhancing job screening processes using AI
   <span style="color: #666;">Tech:</span> JavaScript, Node.js, HTML, CSS, AI/ML
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/Accenture-Hackathon" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/Accenture-Hackathon</a>

<span style="color: #fbbf24;">3. Q-Safe</span>
   A quantum-inspired secure communication system designed to ensure confidentiality and resilience
   <span style="color: #666;">Tech:</span> Rust, Cryptography, Quantum-Inspired Algorithms, Secure Communication
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/qsafe" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/qsafe</a>

<span style="color: #fbbf24;">4. Thelinkify</span>
   Smart link shortener with analytics
   <span style="color: #666;">Tech:</span> JavaScript, MongoDB, Express
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/thelinkify" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/thelinkify</a>

<span style="color: #fbbf24;">5. Blog Website</span>
   Full-featured blogging platform
   <span style="color: #666;">Tech:</span> Python, Flask, PostgreSQL
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/Blog-Website" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/Blog-Website</a>

Type <span style="color: #22c55e;">'github'</span> to see all my projects!
`;
            return Promise.resolve(projectsContent);
        },
        project: () => {
            return commands.projects();
        },
        work: () => {
            const workContent = `
<span style="color: #22c55e; font-weight: bold;">Work Projects</span>
-------------

<span style="color: #fbbf24;">1. SpaceCAN – Rust Implementation</span>
   A Rust-based implementation of the SpaceCAN protocol for small spacecraft systems
   <span style="color: #666;">Tech:</span> Rust, Embedded Systems, CAN Protocol, Concurrency, Error Handling
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/rust-spacecan" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/rust-spacecan</a>

<span style="color: #fbbf24;">2. Zed-Pluto</span>
   Adds support for the Pluto scripting language in the Zed code editor via a custom Tree-sitter grammar
   <span style="color: #666;">Tech:</span> Rust, Tree-sitter, Zed Editor, Language Grammar
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/zed-pluto" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/zed-pluto</a>

<span style="color: #fbbf24;">3. AI Terminal Project</span>
   A terminal-based AI project integrating conversational AI capabilities within a command-line interface
   <span style="color: #666;">Tech:</span> Python, OpenAI API, Terminal UI
   <span style="color: #22c55e;">→</span> <a href="https://github.com/s7g4/ai-terminal" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4/ai-Terminal</a>
`;
            return Promise.resolve(workContent);
        },
        experience: () => {
            return `
<span style="color: #22c55e; font-weight: bold;">Work Experience</span>

<span style="color: #fbbf24;">🏢 Tech Innovator</span>
   <span style="color: #666;">Role:</span> Full Stack Developer & AI/ML Specialist
   <span style="color: #666;">Duration:</span> Ongoing
   
   → Built and deployed multiple full-stack applications
   → Developed AI-powered solutions using modern ML frameworks
   → Participated in hackathons and coding competitions
   → Collaborated on open-source projects

<span style="color: #fbbf24;">🎓 Academic Projects</span>
   <span style="color: #666;">Institution:</span> Netaji Subash Institute of Technology
   
   → Lead developer for multiple capstone projects
   → Research in AI/ML applications
   → Teaching assistant for programming courses

<span style="color: #fbbf24;">🏆 Achievements:</span>
   → Won multiple hackathons
   → Published technical articles
   → Active open-source contributor
   → Built portfolio of 20+ projects
`;
        },
        education: () => {
            return `
<span style="color: #22c55e; font-weight: bold;">Education</span>

<span style="color: #fbbf24;">🎓 Bachelor of Technology - Computer Science</span>
   <span style="color: #666;">Institution:</span> Netaji Subash Institute of Technology
   <span style="color: #666;">Status:</span> Currently Pursuing
   
   <span style="color: #666;">Relevant Coursework:</span>
   → Data Structures & Algorithms
   → Machine Learning & AI
   → Database Management Systems
   → Web Technologies
   → Operating Systems
   → Computer Networks

<span style="color: #fbbf24;">📚 Certifications & Learning:</span>
   → Full Stack Web Development
   → Machine Learning Specialization
   → Cloud Computing Fundamentals
   → Advanced Python Programming
   → React & Modern JavaScript

<span style="color: #fbbf24;">🏆 Academic Achievements:</span>
   → Dean's List Scholar
   → Hackathon Winner
   → Research Paper Publications
`;
        },
        resume: () => {
            const resumeContent = `
<span style="color: #22c55e; font-weight: bold;">Resume / CV</span>

📄 Download my resume:
→ <a href="https://drive.google.com/file/d/1goSTXfmkYw4YWa9h6jdQ58JWIFeM5PQK/view?usp=sharing" target="_blank" style="color:#00ff00; text-decoration: underline;">View my resume here</a>

Or view online sections:
→ Type <span style="color: #22c55e;">'about'</span> for bio
→ Type <span style="color: #22c55e;">'skills'</span> for technical skills
→ Type <span style="color: #22c55e;">'experience'</span> for work history
→ Type <span style="color: #22c55e;">'education'</span> for academic background
→ Type <span style="color: #22c55e;">'projects'</span> for portfolio

<span style="color: #fbbf24;">💡 Tip:</span> Type <span style="color: #22c55e;">'contact'</span> to get in touch directly!
`;
            return Promise.resolve(resumeContent);
        },
        contact: () => {
            return `
<span style="color: #22c55e; font-weight: bold;">Contact Me:</span>
-----------

<span style="color: #fbbf24;">💼 LinkedIn:</span>
   → <a href="https://www.linkedin.com/in/shaurya-gaur-353a7828a/" target="_blank" style="color:#00ff00; text-decoration: underline;">linkedin.com/in/shaurya-gaur-353a7828a/</a>

<span style="color: #fbbf24;">🐙 GitHub:</span>
   → <a href="https://github.com/s7g4" target="_blank" style="color:#00ff00; text-decoration: underline;">github.com/s7g4</a>

<span style="color: #fbbf24;">📷 Instagram:</span>
   → <a href="https://www.instagram.com/_idk._.afk_/" target="_blank" style="color:#00ff00; text-decoration: underline;">instagram.com/_idk._.afk_/</a>

<span style="color: #fbbf24;">📧 Email:</span>
   → <a href="mailto:shauryagaur07@gmail.com" target="_blank" style="color:#00ff00; text-decoration: underline;">shauryagaur07@gmail.com</a>

<span style="color: #666;">Quick commands:</span> <span style="color: #22c55e;">email</span>, <span style="color: #22c55e;">github</span>, <span style="color: #22c55e;">linkedin</span>, <span style="color: #22c55e;">instagram</span>
`;
        },
        clear: () => {
            output.innerHTML = '';
            return '';
        },
        date: () => {
            return new Date().toString();
        },
        skills: () => {
            const skillsContent = `
<span style="color: #22c55e; font-weight: bold;">Technical Skills</span>

<span style="color: #fbbf24;">💻 Languages:</span>
  ▹ Python       ████████████ Expert
  ▹ JavaScript   ███████████░ Advanced
  ▹ TypeScript   ██████████░░ Advanced
  ▹ Java         █████████░░░ Intermediate
  ▹ C++          ████████░░░░ Intermediate
  ▹ Rust         ████████░░░░ Intermediate
  ▹ SQL          ██████████░░ Advanced

<span style="color: #fbbf24;">🚀 Frontend:</span>
  ▹ React.js     ███████████░ Advanced
  ▹ Next.js      ██████████░░ Advanced
  ▹ HTML/CSS     ████████████ Expert
  ▹ Tailwind CSS ███████████░ Advanced
  ▹ Redux        █████████░░░ Intermediate

<span style="color: #fbbf24;">⚙️ Backend:</span>
  ▹ Node.js      ██████████░░ Advanced
  ▹ Express.js   ██████████░░ Advanced
  ▹ Flask        █████████░░░ Intermediate
  ▹ MongoDB      ██████████░░ Advanced
  ▹ PostgreSQL   █████████░░░ Intermediate

<span style="color: #fbbf24;">🤖 AI/ML:</span>
  ▹ TensorFlow   █████████░░░ Intermediate
  ▹ PyTorch      ████████░░░░ Intermediate
  ▹ Scikit-learn ██████████░░ Advanced
  ▹ OpenAI API   ███████████░ Advanced
  ▹ Langchain    ██████████░░ Advanced

<span style="color: #fbbf24;">🛠️ Tools & Platforms:</span>
  ▹ Git          ████████████ Expert
  ▹ Docker       ████████░░░░ Intermediate
  ▹ AWS          ███████░░░░░ Basic
  ▹ VS Code      ████████████ Expert
  ▹ Cryptography ████████░░░░ Intermediate
`;
            return Promise.resolve(skillsContent);
        },
        projectsJson: () => {
            return fetch('projects.json')
                .then(res => res.json())
                .then(projects => {
                    let projectList = "Projects:\n---------\n";
                    projects.forEach(p => {
                        projectList += `Title: ${p.title}\nDescription: ${p.description}\nTech: ${p.tech.join(', ')}\nGitHub: ${p.github}\n\n`;
                    });
                    return projectList;
                })
                .catch(() => "Failed to load projects.");
        },
        exit: () => {
            return 'Are you sure you want to exit? (y/n)';
        },
        help: () => {
            return `
<span style="color: #22c55e; font-weight: bold;">Available Commands:</span>

<span style="color: #fbbf24;">📋 PORTFOLIO</span>
  <span style="color: #22c55e;">home</span>        - Go to the home page
  <span style="color: #22c55e;">welcome</span>     - Show welcome banner
  <span style="color: #22c55e;">about</span>       - Learn about me
  <span style="color: #22c55e;">skills</span>      - View my technical skills
  <span style="color: #22c55e;">projects</span>    - See my projects
  <span style="color: #22c55e;">work</span>        - View work projects
  <span style="color: #22c55e;">experience</span>  - View work experience
  <span style="color: #22c55e;">education</span>   - Academic background
  <span style="color: #22c55e;">contact</span>     - Get in touch with me
  <span style="color: #22c55e;">resume</span>      - View my resume

<span style="color: #fbbf24;">🔗 SOCIAL</span>
  <span style="color: #22c55e;">github</span>      - Visit my GitHub
  <span style="color: #22c55e;">linkedin</span>    - Connect on LinkedIn
  <span style="color: #22c55e;">instagram</span>   - Follow on Instagram
  <span style="color: #22c55e;">email</span>       - Send me an email

<span style="color: #fbbf24;">💻 SYSTEM</span>
  <span style="color: #22c55e;">clear</span>       - Clear terminal
  <span style="color: #22c55e;">history</span>     - Command history
  <span style="color: #22c55e;">whoami</span>      - Current user info
  <span style="color: #22c55e;">date</span>        - Display current date
  <span style="color: #22c55e;">echo</span>        - Print text
  <span style="color: #22c55e;">neofetch</span>    - System information
  <span style="color: #22c55e;">tree</span>        - Directory structure
  <span style="color: #22c55e;">ls</span>          - List directory contents
  <span style="color: #22c55e;">pwd</span>         - Print working directory
  <span style="color: #22c55e;">cat</span>         - Display file contents

<span style="color: #fbbf24;">🎮 FUN</span>
  <span style="color: #22c55e;">matrix</span>      - Enter the Matrix
  <span style="color: #22c55e;">hack</span>        - Hacking simulation
  <span style="color: #22c55e;">coffee</span>      - Make coffee
  <span style="color: #22c55e;">joke</span>        - Random tech joke
  <span style="color: #22c55e;">quote</span>       - Inspirational quote
  <span style="color: #22c55e;">fortune</span>     - Fortune cookie
  <span style="color: #22c55e;">cowsay</span>      - Cow says...
  <span style="color: #22c55e;">sudo</span>        - Try sudo...
  <span style="color: #22c55e;">rickroll</span>   - Never gonna...
  <span style="color: #22c55e;">secret</span>      - ???
`;
        },
        ls: (args) => {
            if (args && args.length > 0) {
                const subcommand = args[0];
                switch (subcommand) {
                    case '--work':
                        return commands.work();
                    case '--project':
                        return commands.projects();
                    case '--skills':
                        return commands.skills();
                    default:
                        return 'Invalid subcommand. Usage: ls --work | --project | --skills';
                }
            }
            return `
<span style="color: #3b82f6;">about.txt</span>      <span style="color: #3b82f6;">skills.txt</span>     <span style="color: #3b82f6;">projects.txt</span>
<span style="color: #3b82f6;">experience.txt</span> <span style="color: #3b82f6;">education.txt</span>  <span style="color: #3b82f6;">contact.txt</span>
<span style="color: #22c55e;">resume.pdf</span>     <span style="color: #f59e0b;">README.md</span>

Usage: ls --work | --project | --skills
`;
        },
        whoami: () => {
            return `shaurya
<span style="color: #666;">Full Stack Developer | AI/ML Specialist</span>
Portfolio@viewer`;
        },
        // Social Commands
        github: () => {
            window.open("https://github.com/s7g4", "_blank");
            return "Opening GitHub profile...";
        },
        linkedin: () => {
            window.open("https://www.linkedin.com/in/shaurya-gaur-353a7828a/", "_blank");
            return "Opening LinkedIn profile...";
        },
        instagram: () => {
            window.open("https://www.instagram.com/_idk._.afk_/", "_blank");
            return "Opening Instagram profile...";
        },
        email: () => {
            window.location.href = "mailto:shauryagaur07@gmail.com";
            return "Opening email client...";
        },
        // Additional System Commands
        echo: (args) => {
            return args?.join(" ") || "";
        },
        pwd: () => {
            return `/home/shaurya/portfolio`;
        },
        cat: (args) => {
            if (!args || args.length === 0) {
                return "Usage: cat <filename>";
            }
            const file = args[0].toLowerCase().replace('.txt', '');
            if (commands[file]) {
                return commands[file]();
            }
            return `cat: ${args[0]}: No such file or directory`;
        },
        tree: () => {
            return `
<span style="color: #22c55e;">.</span>
├── <span style="color: #3b82f6;">portfolio/</span>
│   ├── about.txt
│   ├── skills.txt
│   ├── projects.txt
│   ├── work.txt
│   ├── experience.txt
│   └── education.txt
├── <span style="color: #3b82f6;">contact/</span>
│   ├── email.txt
│   ├── github.txt
│   ├── linkedin.txt
│   └── instagram.txt
└── <span style="color: #22c55e;">resume.pdf</span>
`;
        },
        history: () => {
            return `Command history feature enabled! Use ↑/↓ arrows to navigate.`;
        },
        neofetch: () => {
            return neofetchOutput;
        },
        // Fun Commands
        matrix: () => {
            return matrixRain;
        },
        hack: () => {
            return `
<span style="color: #22c55e;">Initiating hack sequence...</span>
<span style="color: #666;">[████████████████████] 100%</span>

<span style="color: #ef4444;">ACCESS DENIED</span>
Just kidding! I'm a developer, not a hacker 😄

But I can hack together some awesome code!
Type <span style="color: #22c55e;">'projects'</span> to see what I've built.
`;
        },
        sudo: (args) => {
            return `
<span style="color: #ef4444;">[sudo] password for shaurya:</span> 
Nice try! But you'll need more than sudo to access my secrets 😏

<span style="color: #666;">Hint: Try 'help' for actual commands that work!</span>
`;
        },
        coffee: () => {
            const coffees = [
                "☕ Brewing fresh coffee... Done! *sip*",
                "☕ Espresso shot ready! Double shot for extra productivity!",
                "☕ Making cappuccino... Perfect foam achieved!",
                "☕ Pour-over coffee in progress... Patience is key!",
                "☕ Cold brew ready! Smooth and strong!"
            ];
            return coffees[Math.floor(Math.random() * coffees.length)];
        },
        joke: () => {
            const jokes = [
                "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
                "Why did the developer go broke?\nBecause he used up all his cache! 💸",
                "How many programmers does it take to change a light bulb?\nNone. It's a hardware problem! 💡",
                "Why do Java developers wear glasses?\nBecause they don't C#! 👓",
                "What's a programmer's favorite hangout place?\nFoo Bar! 🍺",
                "Why did the programmer quit his job?\nBecause he didn't get arrays! 📊"
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        },
        quote: () => {
            const quotes = [
                '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
                '"First, solve the problem. Then, write the code." - John Johnson',
                '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
                '"The best error message is the one that never shows up." - Thomas Fuchs',
                '"Simplicity is the soul of efficiency." - Austin Freeman',
                '"Make it work, make it right, make it fast." - Kent Beck'
            ];
            return `<span style="color: #fbbf24;">${quotes[Math.floor(Math.random() * quotes.length)]}</span>`;
        },
        fortune: () => {
            const fortunes = [
                "🔮 A bug-free code awaits you in your future...",
                "🔮 Your next project will be a great success!",
                "🔮 Coffee and code will lead you to enlightenment.",
                "🔮 Stack Overflow has the answer you seek.",
                "🔮 Your code will compile on the first try... eventually.",
                "🔮 A merge conflict approaches... be prepared!"
            ];
            return fortunes[Math.floor(Math.random() * fortunes.length)];
        },
        cowsay: (args) => {
            const message = args?.join(" ") || "Hello from the terminal!";
            return `
 ${"_".repeat(message.length + 2)}
< ${message} >
 ${"-".repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
        },
        rickroll: () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            return `
<span style="color: #22c55e;">Never gonna give you up! 🎵</span>
<span style="color: #666;">You've been rickrolled! Opening video...</span>
`;
        },
        secret: () => {
            return `
<span style="color: #fbbf24;">🎉 You found a secret command!</span>

Here's a secret: I built this entire portfolio terminal to showcase
my skills in a unique way. Pretty cool, right?

Want to see the code? Check out my GitHub!
Type <span style="color: #22c55e;">'github'</span> to visit.
`;
        }
    };

    window.addEventListener("touchstart", () => {
        input.focus();
    });

    let exitConfirmation = false;
    let typingInterval = null;

    // Function to simulate typing effect
    let isTyping = false;
    let stopTyping = false;
    
    async function typeText(html, callback) {
        if (isTyping) return; // Prevent overlapping typing
        isTyping = true;
        stopTyping = false;
    
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html.replace(/\n/g, '<br>');
        const nodes = Array.from(tempDiv.childNodes);
    
        for (let node of nodes) {
            if (stopTyping) break;
    
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                let span = document.createElement('span');
                output.appendChild(span);
                for (let char of text) {
                    if (stopTyping) break;
                    span.textContent += char;
                    await new Promise(r => setTimeout(r, 10)); // typing delay
                }
                // Scroll once after finishing typing this text node
                output.scrollTo({ top: output.scrollHeight, behavior: 'smooth' });
    
            } else {
                output.appendChild(node.cloneNode(true));
                // Scroll after appending element node
                output.scrollTo({ top: output.scrollHeight, behavior: 'smooth' });
            }
        }
    
        isTyping = false;
        if (callback && !stopTyping) callback();
    }

    output.addEventListener("click", (event) => {
        const anchor = event.target.closest('a'); // Find the closest <a> element
        if (anchor && anchor.href) {
            event.preventDefault(); // Prevent default navigation
            window.open(anchor.href, '_blank'); // Open the link in a new tab
        }
    });

    const processCommand = (input) => {
        if (exitConfirmation) {
            if (input.toLowerCase() === 'y') {
                output.innerHTML = 'Thank you for visiting my Portfolio Website.\n~Shaurya Gaur\nSession terminated. Please reload to interact but you may lose your progress.';
                document.getElementById('terminal-input').style.display = 'none';
                return '';
            } else if (input.toLowerCase() === 'n') {
                exitConfirmation = false;
                return 'Exit cancelled. You may continue.';
            } else {
                return 'Please enter y or n.';
            }
        }

        const parts = input.split(' ');
        const command = parts[0];
        const args = parts.slice(1);

        if (command === 'exit') {
            exitConfirmation = true;
            return commands.exit();
        }

        if (commands[command]) {
            return commands[command](args);
        } else {
            return `Command not found: ${command}\nType "help" for a list of available commands.`;
        }
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value.trim();
            if (command) {
                // Add command to history
                commandHistory.push(command);
                historyIndex = commandHistory.length; // Reset history index
            }
            output.innerHTML += `shaurya@portfolio:~$ ${command}\n`;
            input.value = "";
            input.disabled = true;
            const response = processCommand(command);
            if (response instanceof Promise) {
                response.then(res => typeText(res + "\n", () => {
                    input.disabled = false;
                    input.focus();
                }));
            } else {
                typeText(response + "\n", () => {
                    input.disabled = false;
                    input.focus();
                });
            }
        } else if (e.key === "ArrowUp") {
            // Navigate up in command history
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === "ArrowDown") {
            // Navigate down in command history
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length; // Reset to empty input
                input.value = '';
            }
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "c" && e.ctrlKey) {
            if (isTyping) {
                stopTyping = true; // Interrupt typing immediately
                output.innerHTML += '^C\n'; // Show ^C on terminal
                input.disabled = false;
                input.value = '';
                input.focus();
                e.preventDefault();
            }
        }
    });

    function openLink(event, url) {
        event.preventDefault();
        if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }

    typeText("Welcome to Shaurya's Terminal Portfolio!\nType 'help' to get started.\n");
});