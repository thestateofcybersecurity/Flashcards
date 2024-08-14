(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary purpose of a vulnerability scan?",
        choices: [
            "A. To identify security weaknesses in a system",
            "B. To eliminate all security threats",
            "C. To monitor network traffic",
            "D. To encrypt sensitive data"
        ],
        correctAnswer: "A. To identify security weaknesses in a system"
    },
    {
        question: "Which of the following tools is commonly used for packet sniffing?",
        choices: [
            "A. Nmap",
            "B. Wireshark",
            "C. Metasploit",
            "D. Nessus"
        ],
        correctAnswer: "B. Wireshark"
    },
    {
        question: "What does the term 'footprinting' refer to in ethical hacking?",
        choices: [
            "A. Gaining unauthorized access to a network",
            "B. Collecting information about a target system or network",
            "C. Exploiting vulnerabilities in software",
            "D. Installing malware on a system"
        ],
        correctAnswer: "B. Collecting information about a target system or network"
    },
    {
        question: "Which of the following is a common use of the tool Metasploit?",
        choices: [
            "A. Scanning for open ports",
            "B. Conducting penetration tests",
            "C. Encrypting network traffic",
            "D. Monitoring system performance"
        ],
        correctAnswer: "B. Conducting penetration tests"
    },
    {
        question: "What is the main purpose of using a firewall?",
        choices: [
            "A. To encrypt sensitive data",
            "B. To filter incoming and outgoing network traffic",
            "C. To perform vulnerability assessments",
            "D. To back up data regularly"
        ],
        correctAnswer: "B. To filter incoming and outgoing network traffic"
    },
    {
        question: "Which of the following is an example of social engineering?",
        choices: [
            "A. SQL injection",
            "B. Phishing",
            "C. Buffer overflow",
            "D. Cross-site scripting"
        ],
        correctAnswer: "B. Phishing"
    },
    {
        question: "Which of the following tools is used for wireless network auditing?",
        choices: [
            "A. Burp Suite",
            "B. John the Ripper",
            "C. Aircrack-ng",
            "D. Cain & Abel"
        ],
        correctAnswer: "C. Aircrack-ng"
    },
    {
        question: "What is the primary goal of a Denial-of-Service (DoS) attack?",
        choices: [
            "A. To steal sensitive data",
            "B. To disrupt the availability of a service or network",
            "C. To gain administrative access to a system",
            "D. To create a backdoor in the system"
        ],
        correctAnswer: "B. To disrupt the availability of a service or network"
    },
    {
        question: "Which of the following is a common method of cracking passwords?",
        choices: [
            "A. DNS poisoning",
            "B. SQL injection",
            "C. Brute force attack",
            "D. Man-in-the-middle attack"
        ],
        correctAnswer: "C. Brute force attack"
    },
    {
        question: "What is the purpose of a honeypot in network security?",
        choices: [
            "A. To secure sensitive data",
            "B. To detect and analyze potential attackers",
            "C. To encrypt network traffic",
            "D. To perform regular system backups"
        ],
        correctAnswer: "B. To detect and analyze potential attackers"
    },
    {
        question: "Which of the following best describes a phishing attack?",
        choices: [
            "A. An attempt to gain unauthorized access to a system by guessing passwords",
            "B. An attack that redirects users to a malicious website",
            "C. An attempt to trick users into revealing sensitive information",
            "D. An attack that encrypts files and demands a ransom"
        ],
        correctAnswer: "C. An attempt to trick users into revealing sensitive information"
    },
    {
        question: "Which of the following is a characteristic of a Trojan horse?",
        choices: [
            "A. It replicates itself to spread to other systems",
            "B. It disguises itself as legitimate software",
            "C. It monitors network traffic",
            "D. It encrypts data on the system"
        ],
        correctAnswer: "B. It disguises itself as legitimate software"
    },
    {
        question: "Which of the following is a common use of the Nmap tool?",
        choices: [
            "A. Password cracking",
            "B. Network scanning",
            "C. SQL injection",
            "D. Data encryption"
        ],
        correctAnswer: "B. Network scanning"
    },
    {
        question: "What is the purpose of using a VPN in network security?",
        choices: [
            "A. To secure remote access to a network",
            "B. To perform vulnerability assessments",
            "C. To encrypt files on a system",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To secure remote access to a network"
    },
    {
        question: "Which of the following is an example of a passive reconnaissance technique?",
        choices: [
            "A. SQL injection",
            "B. Sniffing network traffic",
            "C. Social engineering",
            "D. Scanning open ports"
        ],
        correctAnswer: "B. Sniffing network traffic"
    },
    {
        question: "Which of the following is a key feature of a worm?",
        choices: [
            "A. It requires user interaction to spread",
            "B. It replicates itself without user intervention",
            "C. It disguises itself as legitimate software",
            "D. It encrypts files on a system"
        ],
        correctAnswer: "B. It replicates itself without user intervention"
    },
    {
        question: "What does the acronym SQL stand for in the context of SQL injection attacks?",
        choices: [
            "A. Secure Query Language",
            "B. Standard Query Language",
            "C. Structured Query Language",
            "D. Sequential Query Language"
        ],
        correctAnswer: "C. Structured Query Language"
    },
    {
        question: "Which of the following is the best defense against brute force attacks?",
        choices: [
            "A. Strong password policies",
            "B. Encrypted communication channels",
            "C. Regular data backups",
            "D. Firewalls"
        ],
        correctAnswer: "A. Strong password policies"
    },
    {
        question: "What is the primary function of a network-based intrusion detection system (NIDS)?",
        choices: [
            "A. To prevent unauthorized access to a network",
            "B. To detect malicious activity on a network",
            "C. To encrypt network traffic",
            "D. To perform vulnerability scans"
        ],
        correctAnswer: "B. To detect malicious activity on a network"
    },
    {
        question: "Which of the following attacks involves intercepting and altering communications between two parties?",
        choices: [
            "A. Phishing",
            "B. SQL injection",
            "C. Man-in-the-middle (MitM)",
            "D. Cross-site scripting (XSS)"
        ],
        correctAnswer: "C. Man-in-the-middle (MitM)"
    },
    {
        question: "Which of the following is a key characteristic of a rootkit?",
        choices: [
            "A. It is easy to detect and remove",
            "B. It hides its presence and activities on the system",
            "C. It encrypts data and demands a ransom",
            "D. It only targets network devices"
        ],
        correctAnswer: "B. It hides its presence and activities on the system"
    },
    {
        question: "What is the primary purpose of penetration testing?",
        choices: [
            "A. To eliminate all security threats",
            "B. To assess the security of a system by simulating an attack",
            "C. To back up critical data",
            "D. To monitor network traffic for malicious activity"
        ],
        correctAnswer: "B. To assess the security of a system by simulating an attack"
    },
    {
        question: "Which of the following is a common tool used for password cracking?",
        choices: [
            "A. Wireshark",
            "B. John the Ripper",
            "C. Nmap",
            "D. Burp Suite"
        ],
        correctAnswer: "B. John the Ripper"
    },
    {
        question: "Which of the following is a common method for securing a wireless network?",
        choices: [
            "A. Using WEP encryption",
            "B. Using WPA2 encryption",
            "C. Disabling SSID broadcast",
            "D. Enabling MAC address filtering"
        ],
        correctAnswer: "B. Using WPA2 encryption"
    },
    {
        question: "Which of the following is an example of a phishing attack?",
        choices: [
            "A. Sending a malicious attachment in an email",
            "B. Guessing a user's password",
            "C. Redirecting users to a fake website to steal credentials",
            "D. Injecting malicious code into a website"
        ],
        correctAnswer: "C. Redirecting users to a fake website to steal credentials"
    },
    {
        question: "Which of the following is a key feature of a botnet?",
        choices: [
            "A. It encrypts files on a system",
            "B. It is controlled by a central command server",
            "C. It spreads through email attachments",
            "D. It requires user interaction to activate"
        ],
        correctAnswer: "B. It is controlled by a central command server"
    },
    {
        question: "Which of the following tools is commonly used for web application testing?",
        choices: [
            "A. Nmap",
            "B. Burp Suite",
            "C. Wireshark",
            "D. Aircrack-ng"
        ],
        correctAnswer: "B. Burp Suite"
    },
    {
        question: "What is the primary goal of a ransomware attack?",
        choices: [
            "A. To steal sensitive data",
            "B. To encrypt files and demand a ransom for decryption",
            "C. To gain administrative access to a system",
            "D. To disrupt network communications"
        ],
        correctAnswer: "B. To encrypt files and demand a ransom for decryption"
    },
    {
        question: "Which of the following is a characteristic of a logic bomb?",
        choices: [
            "A. It spreads without user interaction",
            "B. It is triggered by a specific event or condition",
            "C. It encrypts data on the system",
            "D. It monitors network traffic"
        ],
        correctAnswer: "B. It is triggered by a specific event or condition"
    },
    {
        question: "Which of the following is the primary purpose of a security policy?",
        choices: [
            "A. To define the rules and guidelines for protecting information",
            "B. To monitor network traffic for malicious activity",
            "C. To encrypt sensitive data",
            "D. To perform vulnerability assessments"
        ],
        correctAnswer: "A. To define the rules and guidelines for protecting information"
    },
    {
        question: "What is a common use of the tool Cain & Abel?",
        choices: [
            "A. Password cracking and network packet sniffing",
            "B. Encrypting data on a system",
            "C. Performing network scans",
            "D. Monitoring network traffic"
        ],
        correctAnswer: "A. Password cracking and network packet sniffing"
    },
    {
        question: "Which of the following best describes a buffer overflow attack?",
        choices: [
            "A. An attack that fills up a system's memory to cause a crash",
            "B. An attack that exploits software vulnerabilities to execute malicious code",
            "C. An attack that redirects users to a malicious website",
            "D. An attack that encrypts files and demands a ransom"
        ],
        correctAnswer: "B. An attack that exploits software vulnerabilities to execute malicious code"
    },
    {
        question: "Which of the following is an effective way to protect against social engineering attacks?",
        choices: [
            "A. Regularly updating software",
            "B. Implementing strong encryption protocols",
            "C. Conducting security awareness training",
            "D. Using firewalls to block malicious traffic"
        ],
        correctAnswer: "C. Conducting security awareness training"
    },
    {
        question: "Which of the following is the primary function of a proxy server?",
        choices: [
            "A. To encrypt data in transit",
            "B. To filter and control access to the internet",
            "C. To monitor network traffic",
            "D. To perform vulnerability assessments"
        ],
        correctAnswer: "B. To filter and control access to the internet"
    },
    {
        question: "Which of the following tools is commonly used for network scanning?",
        choices: [
            "A. Wireshark",
            "B. Nmap",
            "C. John the Ripper",
            "D. Aircrack-ng"
        ],
        correctAnswer: "B. Nmap"
    },
    {
        question: "Which of the following best describes a SQL injection attack?",
        choices: [
            "A. An attack that injects malicious code into a website",
            "B. An attack that exploits vulnerabilities in web applications to execute SQL commands",
            "C. An attack that redirects users to a fake website",
            "D. An attack that encrypts data and demands a ransom"
        ],
        correctAnswer: "B. An attack that exploits vulnerabilities in web applications to execute SQL commands"
    },
    {
        question: "Which of the following is a common feature of spyware?",
        choices: [
            "A. It encrypts files on the system",
            "B. It monitors user activity and sends the information to a third party",
            "C. It spreads through email attachments",
            "D. It requires user interaction to activate"
        ],
        correctAnswer: "B. It monitors user activity and sends the information to a third party"
    },
    {
        question: "What is the purpose of a rootkit?",
        choices: [
            "A. To create a backdoor for unauthorized access",
            "B. To encrypt sensitive data",
            "C. To monitor network traffic",
            "D. To conduct penetration tests"
        ],
        correctAnswer: "A. To create a backdoor for unauthorized access"
    },
    {
        question: "Which of the following is a characteristic of a Distributed Denial-of-Service (DDoS) attack?",
        choices: [
            "A. It targets a single user",
            "B. It uses multiple systems to overwhelm a network or service",
            "C. It encrypts files on the system",
            "D. It exploits software vulnerabilities"
        ],
        correctAnswer: "B. It uses multiple systems to overwhelm a network or service"
    },
    {
        question: "Which of the following is a key component of a digital certificate?",
        choices: [
            "A. Private key",
            "B. Digital signature",
            "C. Firewall rules",
            "D. Encryption algorithm"
        ],
        correctAnswer: "B. Digital signature"
    },
    {
        question: "Which of the following best describes a cross-site scripting (XSS) attack?",
        choices: [
            "A. An attack that injects malicious scripts into web pages",
            "B. An attack that redirects users to a fake website",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that floods a network with traffic"
        ],
        correctAnswer: "A. An attack that injects malicious scripts into web pages"
    },
    {
        question: "Which of the following is the best defense against SQL injection attacks?",
        choices: [
            "A. Regularly updating software",
            "B. Using input validation and prepared statements",
            "C. Encrypting sensitive data",
            "D. Monitoring network traffic"
        ],
        correctAnswer: "B. Using input validation and prepared statements"
    },
    {
        question: "Which of the following is an example of a DoS attack?",
        choices: [
            "A. Stealing user credentials through phishing",
            "B. Flooding a server with requests to overload it",
            "C. Redirecting users to a malicious website",
            "D. Injecting malicious code into a web application"
        ],
        correctAnswer: "B. Flooding a server with requests to overload it"
    },
    {
        question: "Which of the following is a common use of the tool Nikto?",
        choices: [
            "A. Password cracking",
            "B. Web server vulnerability scanning",
            "C. Wireless network auditing",
            "D. Packet sniffing"
        ],
        correctAnswer: "B. Web server vulnerability scanning"
    },
    {
        question: "Which of the following best describes a rainbow table?",
        choices: [
            "A. A tool used for brute force attacks",
            "B. A precomputed table of hashes used to crack passwords",
            "C. A method for encrypting data",
            "D. A tool for monitoring network traffic"
        ],
        correctAnswer: "B. A precomputed table of hashes used to crack passwords"
    },
    {
        question: "Which of the following is a primary goal of an ethical hacker?",
        choices: [
            "A. To perform unauthorized attacks on systems",
            "B. To exploit vulnerabilities for personal gain",
            "C. To identify and fix security weaknesses",
            "D. To disrupt business operations"
        ],
        correctAnswer: "C. To identify and fix security weaknesses"
    },
    {
        question: "Which of the following is a common feature of ransomware?",
        choices: [
            "A. It spreads through email attachments",
            "B. It encrypts files and demands payment for decryption",
            "C. It monitors user activity",
            "D. It requires user interaction to spread"
        ],
        correctAnswer: "B. It encrypts files and demands payment for decryption"
    },
    {
        question: "Which of the following best describes the use of a botnet?",
        choices: [
            "A. To encrypt sensitive data",
            "B. To conduct distributed denial-of-service (DDoS) attacks",
            "C. To monitor network traffic",
            "D. To perform vulnerability assessments"
        ],
        correctAnswer: "B. To conduct distributed denial-of-service (DDoS) attacks"
    },
    {
        question: "Which of the following is a key characteristic of spear phishing?",
        choices: [
            "A. It targets a specific individual or organization",
            "B. It spreads through email attachments",
            "C. It encrypts data on the system",
            "D. It requires user interaction to activate"
        ],
        correctAnswer: "A. It targets a specific individual or organization"
    },
    {
        question: "Which of the following is a common use of the tool Hydra?",
        choices: [
            "A. Password cracking",
            "B. Network scanning",
            "C. Packet sniffing",
            "D. Wireless network auditing"
        ],
        correctAnswer: "A. Password cracking"
    },
    {
        question: "Which of the following is a key characteristic of a Trojan horse?",
        choices: [
            "A. It encrypts files on the system",
            "B. It disguises itself as legitimate software",
            "C. It spreads through network vulnerabilities",
            "D. It monitors network traffic"
        ],
        correctAnswer: "B. It disguises itself as legitimate software"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. An attack that systematically tries all possible password combinations",
            "B. An attack that injects malicious code into a website",
            "C. An attack that redirects users to a fake website",
            "D. An attack that encrypts data and demands a ransom"
        ],
        correctAnswer: "A. An attack that systematically tries all possible password combinations"
    },
    {
        question: "Which of the following is a characteristic of a rootkit?",
        choices: [
            "A. It hides its presence and activities on the system",
            "B. It encrypts data and demands a ransom",
            "C. It monitors network traffic",
            "D. It spreads through email attachments"
        ],
        correctAnswer: "A. It hides its presence and activities on the system"
    },
    {
        question: "Which of the following is a common method used in social engineering attacks?",
        choices: [
            "A. SQL injection",
            "B. Phishing",
            "C. Buffer overflow",
            "D. Cross-site scripting"
        ],
        correctAnswer: "B. Phishing"
    },
    {
        question: "Which of the following best describes a watering hole attack?",
        choices: [
            "A. An attack that targets a specific individual or organization",
            "B. An attack that exploits vulnerabilities in popular websites",
            "C. An attack that redirects users to a fake website",
            "D. An attack that encrypts data and demands a ransom"
        ],
        correctAnswer: "B. An attack that exploits vulnerabilities in popular websites"
    },
    {
        question: "Which of the following is a key feature of a worm?",
        choices: [
            "A. It replicates itself to spread to other systems",
            "B. It encrypts files on the system",
            "C. It disguises itself as legitimate software",
            "D. It monitors network traffic"
        ],
        correctAnswer: "A. It replicates itself to spread to other systems"
    },
    {
        question: "Which of the following is the primary purpose of a firewall?",
        choices: [
            "A. To encrypt sensitive data",
            "B. To filter incoming and outgoing network traffic",
            "C. To monitor network traffic for malicious activity",
            "D. To perform vulnerability assessments"
        ],
        correctAnswer: "B. To filter incoming and outgoing network traffic"
    },
    {
        question: "Which of the following is a common use of the tool Aircrack-ng?",
        choices: [
            "A. Password cracking",
            "B. Wireless network auditing",
            "C. Network scanning",
            "D. Packet sniffing"
        ],
        correctAnswer: "B. Wireless network auditing"
    },
    {
        question: "Which of the following best describes a denial-of-service (DoS) attack?",
        choices: [
            "A. An attack that redirects users to a fake website",
            "B. An attack that floods a server with traffic to overload it",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that injects malicious code into a website"
        ],
        correctAnswer: "B. An attack that floods a server with traffic to overload it"
    },
    {
        question: "Which of the following best describes a man-in-the-middle (MitM) attack?",
        choices: [
            "A. An attack that intercepts and alters communications between two parties",
            "B. An attack that redirects users to a fake website",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that injects malicious code into a website"
        ],
        correctAnswer: "A. An attack that intercepts and alters communications between two parties"
    },
    {
        question: "Which of the following is a common tool used for web application testing?",
        choices: [
            "A. Burp Suite",
            "B. Wireshark",
            "C. Aircrack-ng",
            "D. Nmap"
        ],
        correctAnswer: "A. Burp Suite"
    },
    {
        question: "Which of the following best describes a logic bomb?",
        choices: [
            "A. A piece of code that is triggered by a specific event or condition",
            "B. A tool used for brute force attacks",
            "C. A method for encrypting data",
            "D. A tool for monitoring network traffic"
        ],
        correctAnswer: "A. A piece of code that is triggered by a specific event or condition"
    },
    {
        question: "Which of the following is a primary goal of an ethical hacker?",
        choices: [
            "A. To disrupt business operations",
            "B. To identify and fix security weaknesses",
            "C. To perform unauthorized attacks on systems",
            "D. To exploit vulnerabilities for personal gain"
        ],
        correctAnswer: "B. To identify and fix security weaknesses"
    },
    {
        question: "Which of the following is a common feature of ransomware?",
        choices: [
            "A. It encrypts files and demands payment for decryption",
            "B. It monitors user activity",
            "C. It spreads through email attachments",
            "D. It requires user interaction to spread"
        ],
        correctAnswer: "A. It encrypts files and demands payment for decryption"
    },
    {
        question: "Which of the following best describes a cross-site scripting (XSS) attack?",
        choices: [
            "A. An attack that injects malicious scripts into web pages",
            "B. An attack that redirects users to a fake website",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that floods a network with traffic"
        ],
        correctAnswer: "A. An attack that injects malicious scripts into web pages"
    },
    {
        question: "Which of the following is a characteristic of a rootkit?",
        choices: [
            "A. It hides its presence and activities on the system",
            "B. It encrypts data and demands a ransom",
            "C. It monitors network traffic",
            "D. It spreads through email attachments"
        ],
        correctAnswer: "A. It hides its presence and activities on the system"
    },
    {
        question: "Which of the following best describes a SQL injection attack?",
        choices: [
            "A. An attack that exploits vulnerabilities in web applications to execute SQL commands",
            "B. An attack that redirects users to a fake website",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that floods a network with traffic"
        ],
        correctAnswer: "A. An attack that exploits vulnerabilities in web applications to execute SQL commands"
    },
    {
        question: "Which of the following best describes a phishing attack?",
        choices: [
            "A. An attack that injects malicious code into a website",
            "B. An attack that redirects users to a fake website",
            "C. An attack that encrypts data and demands a ransom",
            "D. An attack that tricks users into revealing sensitive information"
        ],
        correctAnswer: "D. An attack that tricks users into revealing sensitive information"
    },
    {
        question: "Which of the following is a common use of the tool John the Ripper?",
        choices: [
            "A. Password cracking",
            "B. Network scanning",
            "C. Packet sniffing",
            "D. Wireless network auditing"
        ],
        correctAnswer: "A. Password cracking"
    },
    {
        question: "Which of the following is a common method used in a DoS attack?",
        choices: [
            "A. Flooding a server with traffic to overload it",
            "B. Redirecting users to a fake website",
            "C. Encrypting data and demanding a ransom",
            "D. Injecting malicious code into a website"
        ],
        correctAnswer: "A. Flooding a server with traffic to overload it"
    },
    {
        question: "Which of the following best describes a watering hole attack?",
        choices: [
            "A. An attack that targets a specific individual or organization",
            "B. An attack that exploits vulnerabilities in popular websites",
            "C. An attack that redirects users to a fake website",
            "D. An attack that encrypts data and demands a ransom"
        ],
        correctAnswer: "B. An attack that exploits vulnerabilities in popular websites"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. An attack that systematically tries all possible password combinations",
            "B. An attack that injects malicious code into a website",
            "C. An attack that redirects users to a fake website",
            "D. An attack that encrypts data and demands a ransom"
        ],
        correctAnswer: "A. An attack that systematically tries all possible password combinations"
    }
];
    
    let currentFlashcardIndex = 0;

    // Shuffle the flashcards array using the Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(flashcards); // Shuffle the questions once at the beginning

    let currentFlashcard = flashcards[currentFlashcardIndex];

    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const choiceButtons = [
        document.getElementById('choice0'),
        document.getElementById('choice1'),
        document.getElementById('choice2'),
        document.getElementById('choice3')
    ];
    const resultElement = document.getElementById('result');
    const showAnswerButton = document.getElementById('show-answer');
    const nextQuestionButton = document.getElementById('next-question');
    const progressElement = document.getElementById('progress');

    // Load user progress from localStorage
    let userProgress = JSON.parse(localStorage.getItem('userProgress')) || { correct: 0, total: 0 };

    function updateProgress() {
        progressElement.textContent = `Correct Answers: ${userProgress.correct} / ${userProgress.total}`;
    }

    function loadFlashcard(index) {
        if (index < 0 || index >= flashcards.length) {
            console.error('Invalid flashcard index');
            return;
        }

        currentFlashcard = flashcards[index];
        resultElement.textContent = '';
        questionElement.textContent = escapeHTML(currentFlashcard.question);

        if (currentFlashcard.choices) {
            answerElement.style.display = 'none';
            showAnswerButton.style.display = 'none';
            choiceButtons.forEach((button, i) => {
                if (i < currentFlashcard.choices.length) {
                    button.textContent = escapeHTML(currentFlashcard.choices[i]);
                    button.style.display = 'inline-block';
                    button.disabled = false;
                    button.classList.remove('correct', 'incorrect');
                } else {
                    button.style.display = 'none';
                }
            });
        } else {
            answerElement.textContent = '';
            answerElement.style.display = 'none';
            showAnswerButton.style.display = 'inline-block';
            choiceButtons.forEach(button => {
                button.style.display = 'none';
            });
        }
    }

    function handleChoiceClick(event) {
        const selectedChoice = event.target.textContent;
        userProgress.total++;
        if (selectedChoice === currentFlashcard.correctAnswer) {
            resultElement.textContent = 'Correct!';
            event.target.classList.add('correct');
            userProgress.correct++;
        } else {
            resultElement.textContent = `Incorrect! The correct answer is ${escapeHTML(currentFlashcard.correctAnswer)}.`;
            event.target.classList.add('incorrect');
        }
        choiceButtons.forEach(button => button.disabled = true);

        // Save progress to localStorage
        localStorage.setItem('userProgress', JSON.stringify(userProgress));

        updateProgress();
    }

    function showAnswer() {
        answerElement.textContent = currentFlashcard.answer ? escapeHTML(currentFlashcard.answer) : 'No answer provided.';
        answerElement.style.display = 'block';
    }

    function nextQuestion() {
        currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
        loadFlashcard(currentFlashcardIndex);
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (char) {
            const escapeChars = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return escapeChars[char];
        });
    }

    choiceButtons.forEach(button => {
        button.addEventListener('click', handleChoiceClick);
    });

    showAnswerButton.addEventListener('click', showAnswer);
    nextQuestionButton.addEventListener('click', nextQuestion);

    // Initial load with validation
    if (flashcards.length > 0) {
        loadFlashcard(currentFlashcardIndex);
    } else {
        console.error('No flashcards available');
    }

    // Update progress on page load
    updateProgress();
})();
