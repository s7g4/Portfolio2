document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");

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
        work: () => {
            return `
Work:
-----
1. Project 1: AI Chatbot
2. Portfolio Website
3. E-commerce Platform
`;
        },
        resume: () => {
            return `
Resume:
-------
<a href="https://drive.google.com/file/d/1fPgOeEYSdQK4-_Qcl0Iu8RUpiIgEJea4/view?usp=sharings" target="_blank" style="color:#00ff00; text-decoration: underline;">View my resume here</a>
`;
        },
        contact: () => {
            return `
Contact Me:
-----------
LinkedIn: <a href="https://linkedin.com" href="#" onclick="openLink(event, 'https://linkedin.com')" target="_blank" style="color:#00ff00; text-decoration: underline;">https://linkedin.com</a><br>
GitHub: <a href="https://github.com" href="#" onclick="openLink(event, 'https://github.com')" target="_blank" style="color:#00ff00; text-decoration: underline;">https://github.com</a><br>
Instagram: <a href="https://instagram.com" href="#" onclick="openLink(event, 'https://instagram.com')" target="_blank" style="color:#00ff00; text-decoration: underline;">https://instagram.com</a><br>
Email: <a href="mailto:shauryagaur07@gmail.com" href="#" onclick="openLink(event, 'mailto:shauryagaur07@gmail.com')" target="_blank" style="color:#00ff00; text-decoration: underline;">shauryagaur07@gmail.com</a><br>
`;
        },
        clear: () => {
            output.innerHTML = '';
            return '';
        },
        date: () => {
            return new Date().toString();
        },
        time: () => {
            return new Date().toLocaleTimeString();
        },
        skills: () => {
            return `
Skills:
-------
- JavaScript, Python, Java
- React, Node.js, Express
- Machine Learning, AI
- SQL, NoSQL Databases
- Docker, Kubernetes
`;
        },
        projects: () => {
            return `
Projects:
---------
1. AI Chatbot - An intelligent chatbot using NLP.
2. Portfolio Website - Personal portfolio showcasing projects.
3. E-commerce Platform - Full-stack e-commerce application.
`;
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
contact   - Get in touch with me
clear     - Clear the terminal output
date      - Show current date and time
time      - Show current time
ls        - List items in work, project, or skills sets (usage: ls --work, ls --project, ls --skills)
whoami    - Display user identity information
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
Work Items:
-----------
1. Project 1: AI Chatbot
2. Portfolio Website
3. E-commerce Platform
`;
                case '--project':
                    return `
Projects:
---------
1. AI Chatbot - An intelligent chatbot using NLP.
2. Portfolio Website - Personal portfolio showcasing projects.
3. E-commerce Platform - Full-stack e-commerce application.
`;
                case '--skills':
                    return `
Skills:
-------
- JavaScript, Python, Java
- React, Node.js, Express
- Machine Learning, AI
- SQL, NoSQL Databases
- Docker, Kubernetes
`;
                default:
                    return 'Invalid subcommand. Usage: ls --work | --project | --skills';
            }
        },
        whoami: () => {
            return "I am Shaurya Gaur, a Full Stack Developer, AI/ML Specialist, and Technological Enthusiast.";
        }
    };

    let exitConfirmation = false;

    // Function to simulate typing effect
    const typeText = (text, callback) => {
        // If text contains HTML tags, set innerHTML directly without typing effect
        if (/<[a-z][\s\S]*>/i.test(text)) {
            output.innerHTML += text;
            output.scrollTop = output.scrollHeight;
            if (callback) callback();
            return;
        }
        let i = 0;
        const interval = setInterval(() => {
            // Replace newline characters with <br> for HTML line breaks
            const char = text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            output.innerHTML += char;
            i++;
            output.scrollTop = output.scrollHeight;
            if (i >= text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 20);
    };

    const processCommand = (input) => {
        if (exitConfirmation) {
            if (input.toLowerCase() === 'y') {
                output.innerHTML = 'Session terminated. Please reload to interact but you may lose your progress.';
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
            return `Command not found: \${command}\nType "help" for a list of available commands.`;
        }
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value.trim();
            output.innerHTML += `shaurya@portfolio:~$ \${command}\n`;
            input.value = "";
            input.disabled = true;
            const response = processCommand(command);
            typeText(response + "\n", () => {
                if (exitConfirmation && response.startsWith('Session terminated')) {
                    // Hide input and show exit message
                    input.style.display = 'none';
                } else {
                    input.disabled = false;
                    input.focus();
                }
            });
        }
    });

    // Helper function to open links and mailto in new tab or mail client
    function openLink(event, url) {
        event.preventDefault();
        if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }

    // Add event listener to open links with target="_blank" in a new tab on click
    document.getElementById("output").addEventListener("click", (event) => {
        const target = event.target;
        if (target.tagName === "A" && target.target === "_blank") {
            event.preventDefault();
            window.open(target.href, "_blank");
        }
    });

    // Initial welcome message with typing effect
    typeText("Welcome to Shaurya's Terminal Portfolio!\nType 'help' to get started.\n");
});
