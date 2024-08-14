(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "Which of the following is a security control that prevents an unauthorized individual from gaining physical access to a building?",
        choices: [
            "A. Firewall",
            "B. Intrusion detection system",
            "C. Security guard",
            "D. Encryption"
        ],
        correctAnswer: "C. Security guard"
    },
    {
        question: "Which type of malware is designed to gain administrator-level control over a computer system without being detected?",
        choices: [
            "A. Virus",
            "B. Rootkit",
            "C. Worm",
            "D. Trojan horse"
        ],
        correctAnswer: "B. Rootkit"
    },
    {
        question: "Which protocol is used to securely browse the web?",
        choices: [
            "A. HTTP",
            "B. HTTPS",
            "C. FTP",
            "D. SMTP"
        ],
        correctAnswer: "B. HTTPS"
    },
    {
        question: "What does the acronym CIA stand for in the context of information security?",
        choices: [
            "A. Central Intelligence Agency",
            "B. Confidentiality, Integrity, Availability",
            "C. Certified Information Auditor",
            "D. Cyber Intelligence Agency"
        ],
        correctAnswer: "B. Confidentiality, Integrity, Availability"
    },
    {
        question: "Which of the following is an example of a strong password?",
        choices: [
            "A. password123",
            "B. P@ssw0rd!",
            "C. 123456",
            "D. admin"
        ],
        correctAnswer: "B. P@ssw0rd!"
    },
    {
        question: "Which of the following is used to verify the integrity of a file?",
        choices: [
            "A. Firewall",
            "B. Digital signature",
            "C. Hashing",
            "D. Encryption"
        ],
        correctAnswer: "C. Hashing"
    },
    {
        question: "Which of the following attacks is most likely to be carried out by an insider?",
        choices: [
            "A. Phishing",
            "B. Tailgating",
            "C. DDoS",
            "D. Man-in-the-middle"
        ],
        correctAnswer: "B. Tailgating"
    },
    {
        question: "Which protocol provides secure file transfer capabilities?",
        choices: [
            "A. FTP",
            "B. TFTP",
            "C. SFTP",
            "D. HTTP"
        ],
        correctAnswer: "C. SFTP"
    },
    {
        question: "What type of attack involves sending an overwhelming amount of traffic to a target to render it unavailable?",
        choices: [
            "A. Phishing",
            "B. Man-in-the-middle",
            "C. SQL injection",
            "D. Denial-of-Service (DoS)"
        ],
        correctAnswer: "D. Denial-of-Service (DoS)"
    },
    {
        question: "Which of the following is the best example of two-factor authentication?",
        choices: [
            "A. A password and a fingerprint",
            "B. A password and a PIN",
            "C. A PIN and a token",
            "D. A username and a password"
        ],
        correctAnswer: "A. A password and a fingerprint"
    },
    {
        question: "Which of the following is a method to ensure data confidentiality?",
        choices: [
            "A. Hashing",
            "B. Encryption",
            "C. Auditing",
            "D. Redundancy"
        ],
        correctAnswer: "B. Encryption"
    },
    {
        question: "Which of the following is a characteristic of a phishing attack?",
        choices: [
            "A. It is conducted via network traffic",
            "B. It targets physical security controls",
            "C. It attempts to trick users into revealing sensitive information",
            "D. It requires access to internal systems"
        ],
        correctAnswer: "C. It attempts to trick users into revealing sensitive information"
    },
    {
        question: "Which of the following cryptographic algorithms is symmetric?",
        choices: [
            "A. RSA",
            "B. ECC",
            "C. AES",
            "D. DSA"
        ],
        correctAnswer: "C. AES"
    },
    {
        question: "Which of the following is the primary purpose of a firewall?",
        choices: [
            "A. To encrypt sensitive data",
            "B. To filter network traffic",
            "C. To scan for malware",
            "D. To manage passwords"
        ],
        correctAnswer: "B. To filter network traffic"
    },
    {
        question: "Which type of malware can replicate itself and spread to other systems without any user interaction?",
        choices: [
            "A. Virus",
            "B. Worm",
            "C. Trojan",
            "D. Spyware"
        ],
        correctAnswer: "B. Worm"
    },
    {
        question: "What does the term 'least privilege' refer to in security?",
        choices: [
            "A. Giving users full access to all resources",
            "B. Restricting user access rights to the bare minimum",
            "C. Allowing users to choose their own level of access",
            "D. Providing maximum access to administrators"
        ],
        correctAnswer: "B. Restricting user access rights to the bare minimum"
    },
    {
        question: "Which of the following is an example of social engineering?",
        choices: [
            "A. A hacker installing malware on a system",
            "B. An attacker guessing a user's password",
            "C. A phishing email attempting to trick a user into revealing sensitive information",
            "D. A brute force attack"
        ],
        correctAnswer: "C. A phishing email attempting to trick a user into revealing sensitive information"
    },
    {
        question: "What is the purpose of multi-factor authentication (MFA)?",
        choices: [
            "A. To increase the complexity of passwords",
            "B. To authenticate users with more than one method",
            "C. To provide encryption for data",
            "D. To monitor network traffic"
        ],
        correctAnswer: "B. To authenticate users with more than one method"
    },
    {
        question: "Which of the following describes a zero-day vulnerability?",
        choices: [
            "A. A vulnerability that is known but has not yet been patched",
            "B. A vulnerability that has been publicly disclosed",
            "C. A vulnerability that is actively being exploited",
            "D. A vulnerability that is unknown to the software vendor"
        ],
        correctAnswer: "D. A vulnerability that is unknown to the software vendor"
    },
    {
        question: "Which of the following is an example of two-factor authentication?",
        choices: [
            "A. Password and PIN",
            "B. Password and fingerprint",
            "C. Username and password",
            "D. Password and security question"
        ],
        correctAnswer: "B. Password and fingerprint"
    },
    {
        question: "Which of the following describes the function of a honeypot?",
        choices: [
            "A. A device that decrypts data for analysis",
            "B. A secure method for storing passwords",
            "C. A decoy system to lure attackers away from actual targets",
            "D. A method for backing up data"
        ],
        correctAnswer: "C. A decoy system to lure attackers away from actual targets"
    },
    {
        question: "Which of the following protocols is used to encrypt web traffic?",
        choices: [
            "A. FTP",
            "B. HTTP",
            "C. HTTPS",
            "D. SNMP"
        ],
        correctAnswer: "C. HTTPS"
    },
    {
        question: "Which of the following is a common use of social engineering?",
        choices: [
            "A. Network scanning",
            "B. Obtaining confidential information",
            "C. Installing malware",
            "D. Encrypting data"
        ],
        correctAnswer: "B. Obtaining confidential information"
    },
    {
        question: "Which of the following is a characteristic of an asymmetric encryption algorithm?",
        choices: [
            "A. It uses the same key for encryption and decryption",
            "B. It uses a pair of keys: one public and one private",
            "C. It is faster than symmetric encryption",
            "D. It cannot be used for digital signatures"
        ],
        correctAnswer: "B. It uses a pair of keys: one public and one private"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. Attempting to guess a password by trying all possible combinations",
            "B. Injecting malicious code into a web application",
            "C. Flooding a network with traffic to cause a DoS",
            "D. Stealing credentials via social engineering"
        ],
        correctAnswer: "A. Attempting to guess a password by trying all possible combinations"
    },
    {
        question: "Which of the following is a common method for securing wireless networks?",
        choices: [
            "A. WEP encryption",
            "B. Disabling SSID broadcast",
            "C. WPA2 encryption",
            "D. MAC address filtering"
        ],
        correctAnswer: "C. WPA2 encryption"
    },
    {
        question: "Which of the following is a characteristic of a Trojan horse?",
        choices: [
            "A. It replicates itself to spread to other systems",
            "B. It disguises itself as legitimate software",
            "C. It encrypts files on the system",
            "D. It is used to capture network traffic"
        ],
        correctAnswer: "B. It disguises itself as legitimate software"
    },
    {
        question: "What is the primary purpose of an intrusion detection system (IDS)?",
        choices: [
            "A. To prevent unauthorized access",
            "B. To detect and alert on potential security incidents",
            "C. To encrypt sensitive data",
            "D. To perform data backups"
        ],
        correctAnswer: "B. To detect and alert on potential security incidents"
    },
    {
        question: "Which of the following is an example of a strong encryption algorithm?",
        choices: [
            "A. DES",
            "B. AES",
            "C. MD5",
            "D. RC4"
        ],
        correctAnswer: "B. AES"
    },
    {
        question: "Which type of attack involves intercepting and altering communications between two parties?",
        choices: [
            "A. Phishing",
            "B. Man-in-the-Middle",
            "C. SQL injection",
            "D. DoS"
        ],
        correctAnswer: "B. Man-in-the-Middle"
    },
    {
        question: "Which of the following is a technique used to strengthen the security of a password?",
        choices: [
            "A. Salting",
            "B. Hashing",
            "C. Encryption",
            "D. Obfuscation"
        ],
        correctAnswer: "A. Salting"
    },
    {
        question: "Which of the following protocols is used for secure email communication?",
        choices: [
            "A. FTP",
            "B. SMTP",
            "C. S/MIME",
            "D. POP3"
        ],
        correctAnswer: "C. S/MIME"
    },
    {
        question: "Which of the following best describes the concept of defense in depth?",
        choices: [
            "A. Using a single strong security measure",
            "B. Layering multiple security measures to protect resources",
            "C. Backing up data regularly",
            "D. Ensuring all users have administrator privileges"
        ],
        correctAnswer: "B. Layering multiple security measures to protect resources"
    },
    {
        question: "Which of the following is an example of multi-factor authentication?",
        choices: [
            "A. Password and PIN",
            "B. Username and password",
            "C. Password and smart card",
            "D. PIN and token"
        ],
        correctAnswer: "C. Password and smart card"
    },
    {
        question: "Which of the following is a method of ensuring data availability?",
        choices: [
            "A. Encryption",
            "B. Data replication",
            "C. Hashing",
            "D. Access control"
        ],
        correctAnswer: "B. Data replication"
    },
    {
        question: "Which of the following best describes a vulnerability scan?",
        choices: [
            "A. A process of exploiting a security weakness",
            "B. A method for detecting security weaknesses",
            "C. A way to monitor network traffic",
            "D. A technique to encrypt data"
        ],
        correctAnswer: "B. A method for detecting security weaknesses"
    },
    {
        question: "Which of the following is a characteristic of a symmetric encryption algorithm?",
        choices: [
            "A. It uses two keys: one public and one private",
            "B. It uses the same key for both encryption and decryption",
            "C. It is generally slower than asymmetric encryption",
            "D. It cannot be used for bulk data encryption"
        ],
        correctAnswer: "B. It uses the same key for both encryption and decryption"
    },
    {
        question: "Which of the following is a common way to prevent tailgating?",
        choices: [
            "A. Encryption",
            "B. Firewalls",
            "C. Mantraps",
            "D. Data masking"
        ],
        correctAnswer: "C. Mantraps"
    },
    {
        question: "Which of the following is the best method for securing wireless communication?",
        choices: [
            "A. WEP",
            "B. WPA",
            "C. WPA2",
            "D. MAC filtering"
        ],
        correctAnswer: "C. WPA2"
    },
    {
        question: "Which of the following is a feature of a demilitarized zone (DMZ)?",
        choices: [
            "A. It provides an additional layer of security between the internal network and the internet",
            "B. It encrypts all incoming and outgoing traffic",
            "C. It restricts all access to the internal network",
            "D. It is used to backup critical data"
        ],
        correctAnswer: "A. It provides an additional layer of security between the internal network and the internet"
    },
    {
        question: "Which of the following is the most secure method for remote access?",
        choices: [
            "A. RDP",
            "B. Telnet",
            "C. SSH",
            "D. FTP"
        ],
        correctAnswer: "C. SSH"
    },
    {
        question: "Which of the following best describes the principle of least privilege?",
        choices: [
            "A. Users are given full access to all resources",
            "B. Users are given the minimum access necessary to perform their job",
            "C. Administrators have unrestricted access to all resources",
            "D. Users choose their own access levels"
        ],
        correctAnswer: "B. Users are given the minimum access necessary to perform their job"
    },
    {
        question: "Which of the following is a method for securely disposing of sensitive data?",
        choices: [
            "A. Shredding",
            "B. Deleting",
            "C. Formatting",
            "D. Moving to trash"
        ],
        correctAnswer: "A. Shredding"
    },
    {
        question: "Which of the following is an example of an access control mechanism?",
        choices: [
            "A. Firewall",
            "B. Encryption",
            "C. Password",
            "D. Antivirus software"
        ],
        correctAnswer: "C. Password"
    },
    {
        question: "Which of the following is a method to protect against phishing attacks?",
        choices: [
            "A. Using strong passwords",
            "B. Educating users about recognizing phishing attempts",
            "C. Installing a firewall",
            "D. Implementing two-factor authentication"
        ],
        correctAnswer: "B. Educating users about recognizing phishing attempts"
    },
    {
        question: "Which of the following is a characteristic of a man-in-the-middle attack?",
        choices: [
            "A. It involves direct access to a system",
            "B. It requires physical proximity to the target",
            "C. It intercepts and alters communication between two parties",
            "D. It is used to steal data through social engineering"
        ],
        correctAnswer: "C. It intercepts and alters communication between two parties"
    },
    {
        question: "Which of the following best describes a sandbox?",
        choices: [
            "A. A secure area for executing suspicious files",
            "B. A backup method for critical data",
            "C. A method for encrypting sensitive information",
            "D. A technique for monitoring network traffic"
        ],
        correctAnswer: "A. A secure area for executing suspicious files"
    },
    {
        question: "Which of the following protocols is used to establish a secure connection between two systems?",
        choices: [
            "A. HTTP",
            "B. SSH",
            "C. FTP",
            "D. Telnet"
        ],
        correctAnswer: "B. SSH"
    },
    {
        question: "Which of the following is the best way to ensure the integrity of a file?",
        choices: [
            "A. Encrypting the file",
            "B. Backing up the file",
            "C. Using hashing",
            "D. Compressing the file"
        ],
        correctAnswer: "C. Using hashing"
    },
    {
        question: "Which of the following is a security measure that protects against brute force attacks?",
        choices: [
            "A. Account lockout policy",
            "B. Password complexity requirements",
            "C. Salting passwords",
            "D. Multi-factor authentication"
        ],
        correctAnswer: "A. Account lockout policy"
    },
    {
        question: "Which of the following is an example of a logical access control?",
        choices: [
            "A. Security guard",
            "B. Firewall",
            "C. Password",
            "D. Biometrics"
        ],
        correctAnswer: "C. Password"
    },
    {
        question: "Which of the following is the best practice for securing a wireless network?",
        choices: [
            "A. Disabling SSID broadcast",
            "B. Using WPA2 encryption",
            "C. Implementing MAC address filtering",
            "D. Enabling guest access"
        ],
        correctAnswer: "B. Using WPA2 encryption"
    },
    {
        question: "Which of the following best describes the purpose of a digital certificate?",
        choices: [
            "A. To encrypt data",
            "B. To verify the identity of a user or device",
            "C. To store passwords",
            "D. To authenticate a network"
        ],
        correctAnswer: "B. To verify the identity of a user or device"
    },
    {
        question: "Which of the following is a method of securing data in transit?",
        choices: [
            "A. Encrypting the data",
            "B. Hashing the data",
            "C. Backing up the data",
            "D. Compressing the data"
        ],
        correctAnswer: "A. Encrypting the data"
    },
    {
        question: "Which of the following best describes a security incident?",
        choices: [
            "A. A violation of security policy",
            "B. An update to the security software",
            "C. A routine security audit",
            "D. A scheduled backup of data"
        ],
        correctAnswer: "A. A violation of security policy"
    },
    {
        question: "Which of the following is a characteristic of a worm?",
        choices: [
            "A. It replicates itself and spreads without user interaction",
            "B. It requires user interaction to spread",
            "C. It disguises itself as legitimate software",
            "D. It encrypts files on the system"
        ],
        correctAnswer: "A. It replicates itself and spreads without user interaction"
    },
    {
        question: "Which of the following is the best method for securing sensitive data at rest?",
        choices: [
            "A. Encrypting the data",
            "B. Hashing the data",
            "C. Backing up the data",
            "D. Compressing the data"
        ],
        correctAnswer: "A. Encrypting the data"
    },
    {
        question: "Which of the following best describes a botnet?",
        choices: [
            "A. A network of infected computers controlled by an attacker",
            "B. A tool used for password cracking",
            "C. A method for encrypting data",
            "D. A technique for monitoring network traffic"
        ],
        correctAnswer: "A. A network of infected computers controlled by an attacker"
    },
    {
        question: "Which of the following is the most secure method of storing passwords?",
        choices: [
            "A. Encrypting passwords",
            "B. Storing passwords in plain text",
            "C. Using password managers",
            "D. Hashing and salting passwords"
        ],
        correctAnswer: "D. Hashing and salting passwords"
    },
    {
        question: "Which of the following is a method for ensuring the availability of data?",
        choices: [
            "A. Encryption",
            "B. Backup and recovery",
            "C. Data replication",
            "D. Redundancy"
        ],
        correctAnswer: "D. Redundancy"
    },
    {
        question: "Which of the following is the best way to protect against social engineering attacks?",
        choices: [
            "A. Using strong passwords",
            "B. Educating users on security best practices",
            "C. Implementing firewalls",
            "D. Using antivirus software"
        ],
        correctAnswer: "B. Educating users on security best practices"
    },
    {
        question: "Which of the following is a type of attack that involves manipulating users into revealing confidential information?",
        choices: [
            "A. Phishing",
            "B. Brute force",
            "C. Man-in-the-middle",
            "D. SQL injection"
        ],
        correctAnswer: "A. Phishing"
    },
    {
        question: "Which of the following is the primary purpose of a firewall?",
        choices: [
            "A. To encrypt data",
            "B. To filter network traffic",
            "C. To scan for malware",
            "D. To manage passwords"
        ],
        correctAnswer: "B. To filter network traffic"
    },
    {
        question: "Which of the following best describes an intrusion prevention system (IPS)?",
        choices: [
            "A. A system that logs all network activity",
            "B. A system that scans for malware",
            "C. A system that monitors network traffic and can block malicious activity",
            "D. A system that provides antivirus protection"
        ],
        correctAnswer: "C. A system that monitors network traffic and can block malicious activity"
    },
    {
        question: "Which of the following is an example of physical security?",
        choices: [
            "A. Encryption",
            "B. Antivirus software",
            "C. Security guards",
            "D. Passwords"
        ],
        correctAnswer: "C. Security guards"
    },
    {
        question: "Which of the following is the most secure method for remote access?",
        choices: [
            "A. Telnet",
            "B. SSH",
            "C. FTP",
            "D. HTTP"
        ],
        correctAnswer: "B. SSH"
    },
    {
        question: "Which of the following is a characteristic of a rootkit?",
        choices: [
            "A. It hides its presence on the system",
            "B. It encrypts data on the system",
            "C. It replicates itself to spread to other systems",
            "D. It disguises itself as legitimate software"
        ],
        correctAnswer: "A. It hides its presence on the system"
    },
    {
        question: "Which of the following is an example of a logical access control?",
        choices: [
            "A. Password",
            "B. Security guard",
            "C. Firewall",
            "D. Encryption"
        ],
        correctAnswer: "A. Password"
    },
    {
        question: "Which of the following is the best way to secure data in transit?",
        choices: [
            "A. Encrypting the data",
            "B. Hashing the data",
            "C. Backing up the data",
            "D. Compressing the data"
        ],
        correctAnswer: "A. Encrypting the data"
    },
    {
        question: "Which of the following is a common method of ensuring data availability?",
        choices: [
            "A. Data replication",
            "B. Hashing",
            "C. Encryption",
            "D. Access control"
        ],
        correctAnswer: "A. Data replication"
    },
    {
        question: "Which of the following is the best practice for securing wireless networks?",
        choices: [
            "A. Disabling SSID broadcast",
            "B. Using WPA2 encryption",
            "C. Implementing MAC address filtering",
            "D. Enabling guest access"
        ],
        correctAnswer: "B. Using WPA2 encryption"
    },
    {
        question: "Which of the following is the primary purpose of encryption?",
        choices: [
            "A. To ensure data availability",
            "B. To ensure data confidentiality",
            "C. To ensure data integrity",
            "D. To ensure data authenticity"
        ],
        correctAnswer: "B. To ensure data confidentiality"
    },
    {
        question: "Which of the following is an example of a social engineering attack?",
        choices: [
            "A. Phishing",
            "B. DDoS",
            "C. SQL injection",
            "D. Brute force"
        ],
        correctAnswer: "A. Phishing"
    },
    {
        question: "Which of the following is a common method of securing access to systems?",
        choices: [
            "A. Encryption",
            "B. Passwords",
            "C. Firewalls",
            "D. Antivirus software"
        ],
        correctAnswer: "B. Passwords"
    },
    {
        question: "Which of the following is the best way to protect against brute force attacks?",
        choices: [
            "A. Implementing account lockout policies",
            "B. Using strong passwords",
            "C. Encrypting data",
            "D. Installing firewalls"
        ],
        correctAnswer: "A. Implementing account lockout policies"
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
