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

    const commands = {
        home: () => {
            return mooArt + "\n" + asciiPicture + "\nType 'help' to see available commands.";
        },
        about: () => {
            return `
About Me
Who am I?
I am a Full Stack Developer, AI/ML Specialist, and a Technological Enthusiast. I am a Computer Science student at the Netaji Subash Institute of Technology. I have a passion for technology and I am always looking for new ways to learn and grow. I am a quick learner and I am always looking for new challenges to tackle.

What are my skills?
I have experience with a variety of programming languages and technologies including Python, Java, C++, JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, SQL, Git, and more. I have experience with machine learning and artificial intelligence and I am always looking for new ways to apply these technologies to solve real-world problems.

What are my interests?
I am interested in a variety of topics including technology, artificial intelligence, machine learning, data science, web development, and more. I am always looking for new ways to learn and grow and I am excited to see what the future holds.

What are my goals?
My goal is to continue to learn and grow as a developer and to work on projects that challenge me and allow me to use my skills to make a positive impact on the world. I am always looking for new opportunities to learn and grow and I am excited to see where my career takes me.

What are my strengths?
My strengths include my ability to learn quickly, my attention to detail, my problem-solving skills, and my ability to work well with others. I am always looking for new ways to improve my skills and I am excited to see where my career takes me.

What are my accomplishments?
Some of my accomplishments include winning hackathons, completing projects, and receiving awards for my work. I am always looking for new ways to challenge myself and I am excited to see where my career takes me.

That’s the gist of who I am—part code wizard, part snack enthusiast, and full-time internet explorer (not the browser, though). If you’re still reading this, congrats—you’ve unlocked the secret level of my life story! Do check out my previous works and resume to see what I’ve been up to. Now, let’s connect and create something amazing… or at least trade bad tech jokes. Your call!
`;
        },
        projects: () => {
            const projectsContent = `
Projects
--------
1. GFG AI Chatbot
Description: An advanced AI chatbot system featuring emotion analysis, ethical monitoring, and digital twin integration, with comprehensive backend and frontend components.
Technologies: Python, Flask, JavaScript, HTML, CSS
GitHub:<a href="https://github.com/s7g4/gfg-ai-chatbot" target="_blank" style="color:#00ff00; text-decoration: underline;">gfg-ai-chatbot</a><br>

2. Accenture Hackathon Project
Description: A project developed for the Accenture Hackathon, focusing on enhancing job screening processes using AI and data intelligence.
Technologies: JavaScript, Node.js, HTML, CSS
GitHub:<a href="https://github.com/s7g4/Accenture-Hackathon" target="_blank" style="color:#00ff00; text-decoration: underline;">Accenture-Hackathon</a><br>

3. AI Terminal Project
Description: A terminal-based AI project integrating conversational AI capabilities within a command-line interface.
Technologies: Python, OpenAI API, Terminal UI
GitHub:<a href="https://github.com/s7g4/ai-terminal" target="_blank" style="color:#00ff00; text-decoration: underline;">ai-Terminal</a><br>
`;
            return Promise.resolve(projectsContent);
        },
        project: () => {
            // Alias for projects command
            return commands.projects();
        },
        work: () => {
            const workContent = `
Work Projects
-------------
1. SpaceCAN – Rust Implementation
Description: A Rust-based implementation of the SpaceCAN protocol for small spacecraft systems, focusing on efficient and reliable communication between subsystems.
Technologies: Rust, Embedded Systems, CAN Protocol, Concurrency, Error Handling
GitHub:<a href="https://github.com/s7g4/rust-spacecan" target="_blank" style="color:#00ff00; text-decoration: underline;">rust-spacecan</a><br>

2. Arti-KeyMgmt
Description: A project aimed at managing cryptographic keys securely, possibly integrating with the Arti Tor client for enhanced privacy.
Technologies: Rust, Cryptography, Key Management
GitHub:<a href="https://github.com/s7g4/arti-keymgmt" target="_blank" style="color:#00ff00; text-decoration: underline;">arti-keymgmt</a><br>

3. Personal Portfolio Website
Description: A terminal-inspired portfolio website showcasing projects, skills, and experiences.
Technologies: JavaScript, HTML, CSS
GitHub: <a href="https://github.com/s7g4/Portfolio" target="_blank" style="color:#00ff00; text-decoration: underline;">Portfolio Website</a><br>
`;
            return Promise.resolve(workContent);
        },
        resume: () => {
            const resumeContent = `
Resume:
-------
<a href="https://drive.google.com/file/d/1goSTXfmkYw4YWa9h6jdQ58JWIFeM5PQK/view?usp=sharing" target="_blank" style="color:#00ff00; text-decoration: underline;">View my resume here</a>
`;
            return Promise.resolve(resumeContent);
        },
        contact: () => {
            return `
Contact Me:
-----------
LinkedIn: <a href="https://www.linkedin.com/in/shaurya-gaur-353a7828a/" target="_blank" style="color:#00ff00; text-decoration: underline;">https://www.linkedin.com/in/shaurya-gaur-353a7828a/</a><br>
GitHub: <a href="https://github.com/s7g4" target="_blank" style="color:#00ff00; text-decoration: underline;">https://github.com/s7g4</a><br>
Instagram: <a href="https://www.instagram.com/_idk._.afk_/" target="_blank" style="color:#00ff00; text-decoration: underline;">https://www.instagram.com/_idk._.afk_/</a><br>
Email: <a href="mailto:shauryagaur07@gmail.com" target="_blank" style="color:#00ff00; text-decoration: underline;">shauryagaur07@gmail.com</a><br>
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
Skills:
-------
- Programming Languages: Rust, Python, JavaScript
- Web Development: HTML, CSS, Flask, Node.js
- AI & Machine Learning: OpenAI API, Emotion Analysis, Ethical AI
- Embedded Systems: CAN Protocol, Concurrency, Error Handling
- Tools & Platforms: GitHub, Terminal UI, Cryptography
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
Available Commands:
-------------------
home      - Go to the home page
about     - Learn more about me
resume    - View my resume
ls        - List items in work, project, or skills sets (usage: ls --work, ls --project, ls --skills)
whoami    - Display user identity information
clear     - Clear the terminal output
date      - Show current date and time
contact   - Get in touch with me
help      - Show this help message
exit      - Exit the terminal
`;
        },
        ls: (args) => {
            if (args.length === 0) {
                return 'Usage: ls --work | --project | --skills';
            }
            const subcommand = args[0];
            switch (subcommand) {
                case '--work':
                    return `
Work Projects
-------------
1. SpaceCAN – Rust Implementation
Description: A Rust-based implementation of the SpaceCAN protocol for small spacecraft systems, focusing on efficient and reliable communication between subsystems.
Technologies: Rust, Embedded Systems, CAN Protocol, Concurrency, Error Handling
GitHub:<a href="https://github.com/s7g4/rust-spacecan" target="_blank" style="color:#00ff00; text-decoration: underline;">rust-spacecan</a><br>

2. Arti-KeyMgmt
Description: A project aimed at managing cryptographic keys securely, possibly integrating with the Arti Tor client for enhanced privacy.
Technologies: Rust, Cryptography, Key Management
GitHub:<a href="https://github.com/s7g4/arti-keymgmt" target="_blank" style="color:#00ff00; text-decoration: underline;">arti-keymgmt</a><br>

3. Personal Portfolio Website
Description: A terminal-inspired portfolio website showcasing projects, skills, and experiences.
Technologies: JavaScript, HTML, CSS
GitHub: <a href="https://github.com/s7g4/Portfolio" target="_blank" style="color:#00ff00; text-decoration: underline;">Portfolio Website</a><br>
`;
                case '--project':
                    return `
Projects
--------
1. GFG AI Chatbot
Description: An advanced AI chatbot system featuring emotion analysis, ethical monitoring, and digital twin integration, with comprehensive backend and frontend components.
Technologies: Python, Flask, JavaScript, HTML, CSS
GitHub:<a href="https://github.com/s7g4/gfg-ai-chatbot" target="_blank" style="color:#00ff00; text-decoration: underline;">gfg-ai-chatbot</a><br>

2. Accenture Hackathon Project
Description: A project developed for the Accenture Hackathon, focusing on enhancing job screening processes using AI and data intelligence.
Technologies: JavaScript, Node.js, HTML, CSS
GitHub:<a href="https://github.com/s7g4/Accenture-Hackathon" target="_blank" style="color:#00ff00; text-decoration: underline;">Accenture-Hackathon</a><br>

3. AI Terminal Project
Description: A terminal-based AI project integrating conversational AI capabilities within a command-line interface.
Technologies: Python, OpenAI API, Terminal UI
GitHub:<a href="https://github.com/s7g4/ai-terminal" target="_blank" style="color:#00ff00; text-decoration: underline;">ai-Terminal</a><br>
`;
                case '--skills':
                    return `
Skills:
-------
-Programming Languages: Rust, Python, JavaScript
-Web Development: HTML, CSS, Flask, Node.js
-AI & Machine Learning: OpenAI API, Emotion Analysis, Ethical AI
-Embedded Systems: CAN Protocol, Concurrency, Error Handling
-Tools & Platforms: GitHub, Terminal UI, Cryptography
`;
                default:
                    return 'Invalid subcommand. Usage: ls --work | --project | ls --skills';
            }
        },
        whoami: () => {
            return "Portfolio@viewer";
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
                input.style.display = 'none';
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
