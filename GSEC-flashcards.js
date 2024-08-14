(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary function of a firewall?",
        choices: [
            "A. To scan for viruses",
            "B. To filter incoming and outgoing network traffic",
            "C. To manage encryption keys",
            "D. To back up data"
        ],
        correctAnswer: "B. To filter incoming and outgoing network traffic",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the principle of least privilege?",
        choices: [
            "A. Providing users with the minimum level of access required to perform their jobs",
            "B. Granting users full access to all resources",
            "C. Allowing users to share their credentials",
            "D. Restricting access to administrators only"
        ],
        correctAnswer: "A. Providing users with the minimum level of access required to perform their jobs",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What does the acronym 'CIA' stand for in information security?",
        choices: [
            "A. Confidentiality, Integrity, Availability",
            "B. Confidentiality, Integrity, Authentication",
            "C. Confidentiality, Information, Availability",
            "D. Control, Integrity, Authentication"
        ],
        correctAnswer: "A. Confidentiality, Integrity, Availability",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of a social engineering attack?",
        choices: [
            "A. Phishing",
            "B. SQL injection",
            "C. Buffer overflow",
            "D. Man-in-the-middle attack"
        ],
        correctAnswer: "A. Phishing",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the primary purpose of encryption?",
        choices: [
            "A. To ensure data confidentiality",
            "B. To ensure data availability",
            "C. To ensure data integrity",
            "D. To ensure data authenticity"
        ],
        correctAnswer: "A. To ensure data confidentiality",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a hashing algorithm?",
        choices: [
            "A. MD5",
            "B. AES",
            "C. RSA",
            "D. DES"
        ],
        correctAnswer: "A. MD5",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is considered a strong password policy?",
        choices: [
            "A. Using a minimum of 8 characters with a mix of letters, numbers, and symbols",
            "B. Using the same password across multiple accounts",
            "C. Sharing passwords with coworkers",
            "D. Writing down passwords and keeping them in your wallet"
        ],
        correctAnswer: "A. Using a minimum of 8 characters with a mix of letters, numbers, and symbols",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of multi-factor authentication?",
        choices: [
            "A. A password and a fingerprint",
            "B. A password and a security question",
            "C. A password and an email",
            "D. A password and a PIN"
        ],
        correctAnswer: "A. A password and a fingerprint",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is a key difference between symmetric and asymmetric encryption?",
        choices: [
            "A. Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys",
            "B. Symmetric encryption is slower than asymmetric encryption",
            "C. Asymmetric encryption is less secure than symmetric encryption",
            "D. Symmetric encryption does not use keys"
        ],
        correctAnswer: "A. Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of a denial-of-service (DoS) attack?",
        choices: [
            "A. Flooding a network with excessive traffic to overwhelm resources",
            "B. Stealing sensitive information through phishing",
            "C. Injecting malicious code into a web application",
            "D. Gaining unauthorized access through a brute force attack"
        ],
        correctAnswer: "A. Flooding a network with excessive traffic to overwhelm resources",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the purpose of an intrusion detection system (IDS)?",
        choices: [
            "A. To detect and alert on potential security breaches",
            "B. To prevent unauthorized access",
            "C. To encrypt data",
            "D. To monitor network performance"
        ],
        correctAnswer: "A. To detect and alert on potential security breaches",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method of ensuring data integrity?",
        choices: [
            "A. Hashing",
            "B. Encrypting",
            "C. Compressing",
            "D. Backing up"
        ],
        correctAnswer: "A. Hashing",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What does the term 'phishing' refer to?",
        choices: [
            "A. Sending fraudulent emails to trick recipients into revealing sensitive information",
            "B. Scanning for vulnerabilities in a network",
            "C. Intercepting communications between two parties",
            "D. Infecting a system with malware"
        ],
        correctAnswer: "A. Sending fraudulent emails to trick recipients into revealing sensitive information",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a key feature of a VPN?",
        choices: [
            "A. It encrypts data transmitted over a public network",
            "B. It scans for viruses",
            "C. It filters web content",
            "D. It manages user accounts"
        ],
        correctAnswer: "A. It encrypts data transmitted over a public network",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes social engineering?",
        choices: [
            "A. Manipulating people into performing actions or divulging confidential information",
            "B. Exploiting software vulnerabilities",
            "C. Gaining unauthorized access through a network",
            "D. Conducting a brute force attack"
        ],
        correctAnswer: "A. Manipulating people into performing actions or divulging confidential information",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the main goal of incident response?",
        choices: [
            "A. To contain and mitigate the impact of a security incident",
            "B. To monitor network traffic",
            "C. To develop secure applications",
            "D. To conduct a vulnerability assessment"
        ],
        correctAnswer: "A. To contain and mitigate the impact of a security incident",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method used in password cracking?",
        choices: [
            "A. Brute force attack",
            "B. Phishing",
            "C. SQL injection",
            "D. Cross-site scripting (XSS)"
        ],
        correctAnswer: "A. Brute force attack",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the primary purpose of data encryption?",
        choices: [
            "A. To protect data confidentiality",
            "B. To ensure data availability",
            "C. To ensure data integrity",
            "D. To authenticate users"
        ],
        correctAnswer: "A. To protect data confidentiality",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a risk management strategy?",
        choices: [
            "A. Risk avoidance",
            "B. Risk enhancement",
            "C. Risk ignoring",
            "D. Risk doubling"
        ],
        correctAnswer: "A. Risk avoidance",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the purpose of a digital certificate?",
        choices: [
            "A. To verify the identity of a user or device",
            "B. To encrypt network traffic",
            "C. To store passwords",
            "D. To monitor system performance"
        ],
        correctAnswer: "A. To verify the identity of a user or device",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a commonly used hashing algorithm?",
        choices: [
            "A. SHA-256",
            "B. AES",
            "C. RSA",
            "D. DES"
        ],
        correctAnswer: "A. SHA-256",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a principle of information security?",
        choices: [
            "A. Confidentiality",
            "B. Creativity",
            "C. Centralization",
            "D. Consolidation"
        ],
        correctAnswer: "A. Confidentiality",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the main goal of access control?",
        choices: [
            "A. To ensure that only authorized users can access certain resources",
            "B. To encrypt data",
            "C. To scan for viruses",
            "D. To manage network traffic"
        ],
        correctAnswer: "A. To ensure that only authorized users can access certain resources",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of an access control model?",
        choices: [
            "A. Discretionary Access Control (DAC)",
            "B. SQL injection",
            "C. Man-in-the-middle attack",
            "D. Brute force attack"
        ],
        correctAnswer: "A. Discretionary Access Control (DAC)",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the primary purpose of a penetration test?",
        choices: [
            "A. To identify and exploit vulnerabilities in a system",
            "B. To monitor network traffic",
            "C. To develop security policies",
            "D. To back up data"
        ],
        correctAnswer: "A. To identify and exploit vulnerabilities in a system",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a VPN?",
        choices: [
            "A. A secure connection over a public network",
            "B. A network scanning tool",
            "C. A type of firewall",
            "D. A method for encrypting emails"
        ],
        correctAnswer: "A. A secure connection over a public network",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method of social engineering?",
        choices: [
            "A. Phishing",
            "B. SQL injection",
            "C. Brute force attack",
            "D. Cross-site scripting (XSS)"
        ],
        correctAnswer: "A. Phishing",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What does the term 'man-in-the-middle' refer to?",
        choices: [
            "A. An attack where the attacker intercepts and alters communications between two parties",
            "B. A method of password cracking",
            "C. A type of firewall",
            "D. A way to encrypt data"
        ],
        correctAnswer: "A. An attack where the attacker intercepts and alters communications between two parties",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the purpose of a digital signature?",
        choices: [
            "A. To verify the authenticity and integrity of a message or document",
            "B. To encrypt data",
            "C. To manage user access",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To verify the authenticity and integrity of a message or document",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method used to secure wireless networks?",
        choices: [
            "A. WPA2 encryption",
            "B. WEP encryption",
            "C. MAC address filtering",
            "D. Disabling SSID broadcast"
        ],
        correctAnswer: "A. WPA2 encryption",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of a physical security control?",
        choices: [
            "A. Security cameras",
            "B. Encryption",
            "C. Firewalls",
            "D. Antivirus software"
        ],
        correctAnswer: "A. Security cameras",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What does the term 'zero-day vulnerability' refer to?",
        choices: [
            "A. A vulnerability that is unknown to the vendor and has no patch available",
            "B. A vulnerability that has been patched",
            "C. A vulnerability that is known but unexploited",
            "D. A vulnerability that is widely exploited"
        ],
        correctAnswer: "A. A vulnerability that is unknown to the vendor and has no patch available",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the primary purpose of a security information and event management (SIEM) system?",
        choices: [
            "A. To monitor and analyze security events in real-time",
            "B. To encrypt sensitive data",
            "C. To manage user accounts",
            "D. To create network diagrams"
        ],
        correctAnswer: "A. To monitor and analyze security events in real-time",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a principle of network security?",
        choices: [
            "A. Defense in depth",
            "B. Single point of failure",
            "C. Data minimization",
            "D. Least resistance"
        ],
        correctAnswer: "A. Defense in depth",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method of ensuring data availability?",
        choices: [
            "A. Redundancy",
            "B. Hashing",
            "C. Encryption",
            "D. Access control"
        ],
        correctAnswer: "A. Redundancy",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method used to protect against SQL injection attacks?",
        choices: [
            "A. Input validation",
            "B. Data encryption",
            "C. Network segmentation",
            "D. Regular backups"
        ],
        correctAnswer: "A. Input validation",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a denial-of-service (DoS) attack?",
        choices: [
            "A. An attack that aims to make a service unavailable",
            "B. An attack that steals data",
            "C. An attack that encrypts files",
            "D. An attack that monitors network traffic"
        ],
        correctAnswer: "A. An attack that aims to make a service unavailable",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method used to ensure data integrity?",
        choices: [
            "A. Hashing",
            "B. Encryption",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Hashing",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method used to secure wireless networks?",
        choices: [
            "A. WPA2 encryption",
            "B. Disabling SSID broadcast",
            "C. MAC address filtering",
            "D. WEP encryption"
        ],
        correctAnswer: "A. WPA2 encryption",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method used to protect against social engineering attacks?",
        choices: [
            "A. Using strong passwords",
            "B. Educating users on security best practices",
            "C. Implementing firewalls",
            "D. Using antivirus software"
        ],
        correctAnswer: "B. Educating users on security best practices",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of multi-factor authentication?",
        choices: [
            "A. A password and a fingerprint",
            "B. A password and a security question",
            "C. A password and an email",
            "D. A password and a PIN"
        ],
        correctAnswer: "A. A password and a fingerprint",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method for securing access to systems?",
        choices: [
            "A. Multi-factor authentication",
            "B. Data encryption",
            "C. Firewalls",
            "D. Intrusion detection systems"
        ],
        correctAnswer: "A. Multi-factor authentication",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the purpose of a digital certificate?",
        choices: [
            "A. To verify the identity of a user or device",
            "B. To encrypt data",
            "C. To store passwords",
            "D. To authenticate a network"
        ],
        correctAnswer: "A. To verify the identity of a user or device",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the concept of least privilege?",
        choices: [
            "A. Providing users with the minimum level of access required to perform their jobs",
            "B. Granting users full access to all resources",
            "C. Allowing users to share their credentials",
            "D. Restricting access to administrators only"
        ],
        correctAnswer: "A. Providing users with the minimum level of access required to perform their jobs",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method of ensuring data availability?",
        choices: [
            "A. Data replication",
            "B. Hashing",
            "C. Encryption",
            "D. Access control"
        ],
        correctAnswer: "A. Data replication",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method of securing data in transit?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. A method of guessing passwords by trying all possible combinations",
            "B. A method of injecting malicious code into a web application",
            "C. A method of intercepting communications between two parties",
            "D. A method of disguising malware as legitimate software"
        ],
        correctAnswer: "A. A method of guessing passwords by trying all possible combinations",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the purpose of a firewall in a network?",
        choices: [
            "A. To filter incoming and outgoing traffic",
            "B. To encrypt data",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "A. To filter incoming and outgoing traffic",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a zero-day vulnerability?",
        choices: [
            "A. A vulnerability that is unknown to the vendor",
            "B. A vulnerability that is known and patched",
            "C. A vulnerability that is known but unpatched",
            "D. A vulnerability that is actively being exploited"
        ],
        correctAnswer: "A. A vulnerability that is unknown to the vendor",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the primary purpose of incident response in cybersecurity?",
        choices: [
            "A. To handle and mitigate the impact of security incidents",
            "B. To monitor network traffic",
            "C. To develop secure applications",
            "D. To perform risk assessments"
        ],
        correctAnswer: "A. To handle and mitigate the impact of security incidents",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a key feature of a honeypot?",
        choices: [
            "A. It attracts attackers to a decoy system",
            "B. It monitors user activities",
            "C. It encrypts sensitive data",
            "D. It performs regular backups"
        ],
        correctAnswer: "A. It attracts attackers to a decoy system",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of an endpoint security solution?",
        choices: [
            "A. Antivirus software",
            "B. Network firewall",
            "C. SIEM",
            "D. IDS/IPS"
        ],
        correctAnswer: "A. Antivirus software",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "What is the purpose of threat intelligence in cybersecurity?",
        choices: [
            "A. To collect, analyze, and disseminate information about threats",
            "B. To monitor network traffic",
            "C. To encrypt data",
            "D. To perform penetration testing"
        ],
        correctAnswer: "A. To collect, analyze, and disseminate information about threats",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common indicator of compromise (IoC)?",
        choices: [
            "A. High CPU usage",
            "B. A new user account created",
            "C. Unusual outbound network traffic",
            "D. All of the above"
        ],
        correctAnswer: "D. All of the above",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a vulnerability scan?",
        choices: [
            "A. A method for detecting security weaknesses",
            "B. A process of exploiting a security weakness",
            "C. A way to monitor network traffic",
            "D. A technique to encrypt data"
        ],
        correctAnswer: "A. A method for detecting security weaknesses",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method used to protect against SQL injection attacks?",
        choices: [
            "A. Input validation",
            "B. Data encryption",
            "C. Network segmentation",
            "D. Regular backups"
        ],
        correctAnswer: "A. Input validation",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common method of securing data at rest?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a primary objective of reconnaissance in penetration testing?",
        choices: [
            "A. To gather information about the target",
            "B. To exploit vulnerabilities",
            "C. To deploy malware",
            "D. To recover lost data"
        ],
        correctAnswer: "A. To gather information about the target",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a social engineering attack?",
        choices: [
            "A. Tricking users into revealing confidential information",
            "B. Exploiting a software vulnerability",
            "C. Gaining unauthorized access through brute force",
            "D. Injecting malicious code into a web application"
        ],
        correctAnswer: "A. Tricking users into revealing confidential information",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the principle of defense in depth?",
        choices: [
            "A. Using multiple layers of security to protect resources",
            "B. Implementing a single, strong security control",
            "C. Encrypting all sensitive data",
            "D. Backing up data regularly"
        ],
        correctAnswer: "A. Using multiple layers of security to protect resources",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method used to protect against social engineering attacks?",
        choices: [
            "A. Educating users on recognizing phishing attempts",
            "B. Installing a firewall",
            "C. Using complex passwords",
            "D. Regularly updating software"
        ],
        correctAnswer: "A. Educating users on recognizing phishing attempts",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is an example of a client-side attack?",
        choices: [
            "A. Cross-site scripting (XSS)",
            "B. SQL injection",
            "C. Buffer overflow",
            "D. Brute force"
        ],
        correctAnswer: "A. Cross-site scripting (XSS)",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. A method of guessing passwords by trying all possible combinations",
            "B. A method of injecting malicious code into a web application",
            "C. A method of intercepting communications between two parties",
            "D. A method of disguising malware as legitimate software"
        ],
        correctAnswer: "A. A method of guessing passwords by trying all possible combinations",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the purpose of social engineering in penetration testing?",
        choices: [
            "A. To trick users into revealing sensitive information",
            "B. To bypass network firewalls",
            "C. To exploit software vulnerabilities",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To trick users into revealing sensitive information",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method of securing data in transit?",
        choices: [
            "A. Encrypting the data",
            "B. Hashing the data",
            "C. Backing up the data",
            "D. Compressing the data"
        ],
        correctAnswer: "A. Encrypting the data",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a common security control used to protect web applications?",
        choices: [
            "A. Web Application Firewall (WAF)",
            "B. Network Intrusion Detection System (NIDS)",
            "C. Security Information and Event Management (SIEM)",
            "D. Antivirus software"
        ],
        correctAnswer: "A. Web Application Firewall (WAF)",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a potential issue when collecting evidence from cloud environments?",
        choices: [
            "A. The physical location of the data",
            "B. The speed of data retrieval",
            "C. The cost of the services",
            "D. The availability of tools"
        ],
        correctAnswer: "A. The physical location of the data",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes a forensic image?",
        choices: [
            "A. A bit-for-bit copy of the original disk",
            "B. A compressed copy of the original disk",
            "C. An encrypted copy of the original disk",
            "D. A backup copy of the original disk"
        ],
        correctAnswer: "A. A bit-for-bit copy of the original disk",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following is a method of protecting data at rest?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Tokenization",
            "D. Compression"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
    },
    {
        question: "Which of the following best describes the concept of least privilege?",
        choices: [
            "A. Providing users with the minimum level of access required to perform their jobs",
            "B. Granting users full access to all resources",
            "C. Allowing users to share their credentials",
            "D. Restricting access to administrators only"
        ],
        correctAnswer: "A. Providing users with the minimum level of access required to perform their jobs",
        source: "Source: [GIAC GSEC Study Guide](https://www.giac.org/certifications/security-essentials-gsec/)"
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
    const sourceElement = document.getElementById('source'); // New element for displaying the source
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

        // Display the source of the question
        sourceElement.textContent = currentFlashcard.source ? escapeHTML(currentFlashcard.source) : 'Source not available.';
        
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
