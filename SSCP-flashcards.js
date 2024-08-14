(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary role of an SSCP-certified professional?",
        choices: [
            "A. To develop software applications",
            "B. To implement, monitor, and administer IT infrastructure using information security policies and procedures",
            "C. To manage financial systems",
            "D. To oversee marketing campaigns"
        ],
        correctAnswer: "B. To implement, monitor, and administer IT infrastructure using information security policies and procedures",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Official Page</a>"
    },
    {
        question: "Which of the following is an example of a technical control?",
        choices: [
            "A. Firewalls",
            "B. Security policies",
            "C. Security awareness training",
            "D. Physical security"
        ],
        correctAnswer: "A. Firewalls",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What does the CIA triad stand for in information security?",
        choices: [
            "A. Confidentiality, Integrity, Availability",
            "B. Confidentiality, Information, Authentication",
            "C. Control, Integrity, Availability",
            "D. Confidentiality, Integrity, Authorization"
        ],
        correctAnswer: "A. Confidentiality, Integrity, Availability",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes the principle of least privilege?",
        choices: [
            "A. Users are granted the minimum access necessary to perform their job functions",
            "B. Users are given access to all resources in the system",
            "C. Users are allowed to share their access credentials",
            "D. Administrators have full access to all systems"
        ],
        correctAnswer: "A. Users are granted the minimum access necessary to perform their job functions",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the primary purpose of encryption?",
        choices: [
            "A. To ensure data confidentiality",
            "B. To ensure data integrity",
            "C. To ensure data availability",
            "D. To ensure data redundancy"
        ],
        correctAnswer: "A. To ensure data confidentiality",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a characteristic of asymmetric encryption?",
        choices: [
            "A. It uses different keys for encryption and decryption",
            "B. It uses the same key for encryption and decryption",
            "C. It is faster than symmetric encryption",
            "D. It does not use keys"
        ],
        correctAnswer: "A. It uses different keys for encryption and decryption",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the purpose of a digital signature?",
        choices: [
            "A. To verify the authenticity and integrity of a message",
            "B. To encrypt data",
            "C. To generate passwords",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To verify the authenticity and integrity of a message",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is an example of a physical security control?",
        choices: [
            "A. Security guards",
            "B. Firewalls",
            "C. Encryption",
            "D. Access control lists"
        ],
        correctAnswer: "A. Security guards",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the primary purpose of an Intrusion Detection System (IDS)?",
        choices: [
            "A. To detect and alert on unauthorized access or attacks",
            "B. To block unauthorized access",
            "C. To manage user identities",
            "D. To encrypt data"
        ],
        correctAnswer: "A. To detect and alert on unauthorized access or attacks",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes a vulnerability scan?",
        choices: [
            "A. A process used to identify security weaknesses in a system",
            "B. A process used to encrypt data",
            "C. A method for training employees",
            "D. A way to create backups"
        ],
        correctAnswer: "A. A process used to identify security weaknesses in a system",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
        choices: [
            "A. To monitor and analyze security events in real-time",
            "B. To create backups",
            "C. To encrypt sensitive data",
            "D. To manage user identities"
        ],
        correctAnswer: "A. To monitor and analyze security events in real-time",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes multi-factor authentication?",
        choices: [
            "A. A security mechanism that requires two or more forms of authentication",
            "B. A security mechanism that uses only a password",
            "C. A security mechanism that uses encryption only",
            "D. A security mechanism that relies on physical security measures"
        ],
        correctAnswer: "A. A security mechanism that requires two or more forms of authentication",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a hashing algorithm?",
        choices: [
            "A. SHA-256",
            "B. AES",
            "C. RSA",
            "D. DES"
        ],
        correctAnswer: "A. SHA-256",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes the principle of defense in depth?",
        choices: [
            "A. Implementing multiple layers of security controls to protect assets",
            "B. Using a single, strong security control",
            "C. Backing up data regularly",
            "D. Ensuring all users have administrator privileges"
        ],
        correctAnswer: "A. Implementing multiple layers of security controls to protect assets",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is an effective method to prevent phishing attacks?",
        choices: [
            "A. Educating users on recognizing phishing attempts",
            "B. Installing a firewall",
            "C. Using complex passwords",
            "D. Regularly updating software"
        ],
        correctAnswer: "A. Educating users on recognizing phishing attempts",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the primary purpose of a firewall?",
        choices: [
            "A. To filter incoming and outgoing network traffic",
            "B. To scan for viruses",
            "C. To encrypt data",
            "D. To back up data"
        ],
        correctAnswer: "A. To filter incoming and outgoing network traffic",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes a man-in-the-middle attack?",
        choices: [
            "A. An attacker intercepts and potentially alters communications between two parties",
            "B. An attacker gains unauthorized access to a system through brute force",
            "C. An attacker injects malicious code into a web application",
            "D. An attacker floods a network with excessive traffic"
        ],
        correctAnswer: "A. An attacker intercepts and potentially alters communications between two parties",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a common method used to secure data at rest?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes the purpose of an access control list (ACL)?",
        choices: [
            "A. To define which users or system processes are granted access to objects",
            "B. To monitor network traffic",
            "C. To create encrypted communication channels",
            "D. To detect malware"
        ],
        correctAnswer: "A. To define which users or system processes are granted access to objects",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the primary purpose of incident response?",
        choices: [
            "A. To contain and mitigate the impact of a security incident",
            "B. To monitor network traffic",
            "C. To develop secure applications",
            "D. To conduct a vulnerability assessment"
        ],
        correctAnswer: "A. To contain and mitigate the impact of a security incident",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a method used to protect against social engineering attacks?",
        choices: [
            "A. Educating users on security best practices",
            "B. Implementing firewalls",
            "C. Using antivirus software",
            "D. Implementing encryption"
        ],
        correctAnswer: "A. Educating users on security best practices",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the purpose of a VPN in a network?",
        choices: [
            "A. To create a secure, encrypted connection over a less secure network",
            "B. To monitor network traffic",
            "C. To store passwords securely",
            "D. To manage user identities"
        ],
        correctAnswer: "A. To create a secure, encrypted connection over a less secure network",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "What is the primary purpose of a vulnerability management program?",
        choices: [
            "A. To identify, prioritize, and remediate vulnerabilities",
            "B. To encrypt sensitive data",
            "C. To develop secure software",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To identify, prioritize, and remediate vulnerabilities",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes a penetration test?",
        choices: [
            "A. A method of evaluating the security of a system by simulating an attack",
            "B. A method of monitoring network traffic for threats",
            "C. A method of developing secure software",
            "D. A method of managing user accounts"
        ],
        correctAnswer: "A. A method of evaluating the security of a system by simulating an attack",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a method used to obscure the meaning of code?",
        choices: [
            "A. Obfuscation",
            "B. Encryption",
            "C. Hashing",
            "D. Compression"
        ],
        correctAnswer: "A. Obfuscation",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a method of ensuring data integrity?",
        choices: [
            "A. Hashing",
            "B. Encryption",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Hashing",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a characteristic of an Advanced Persistent Threat (APT)?",
        choices: [
            "A. Long-term, targeted attacks",
            "B. Short-term, sporadic attacks",
            "C. Random, non-targeted attacks",
            "D. Attacks using social engineering techniques"
        ],
        correctAnswer: "A. Long-term, targeted attacks",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is an essential component of an incident response plan?",
        choices: [
            "A. Identifying and containing the threat",
            "B. Developing software patches",
            "C. Encrypting sensitive data",
            "D. Performing vulnerability scans"
        ],
        correctAnswer: "A. Identifying and containing the threat",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is an effective method for protecting data against loss?",
        choices: [
            "A. Regular backups",
            "B. Data encryption",
            "C. Hashing",
            "D. Tokenization"
        ],
        correctAnswer: "A. Regular backups",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes the concept of defense in depth?",
        choices: [
            "A. Using multiple layers of security to protect resources",
            "B. Implementing a single, strong security measure",
            "C. Encrypting all sensitive data",
            "D. Backing up data regularly"
        ],
        correctAnswer: "A. Using multiple layers of security to protect resources",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is an effective method to prevent phishing attacks?",
        choices: [
            "A. Educating users on recognizing phishing attempts",
            "B. Installing a firewall",
            "C. Using complex passwords",
            "D. Regularly updating software"
        ],
        correctAnswer: "A. Educating users on recognizing phishing attempts",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following best describes the concept of defense in depth?",
        choices: [
            "A. Using multiple layers of security to protect resources",
            "B. Implementing a single, strong security measure",
            "C. Encrypting all sensitive data",
            "D. Backing up data regularly"
        ],
        correctAnswer: "A. Using multiple layers of security to protect resources",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
    },
    {
        question: "Which of the following is a method of ensuring data integrity?",
        choices: [
            "A. Hashing",
            "B. Encryption",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Hashing",
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        source: "Source: <a href='https://www.isc2.org/Certifications/SSCP' target='_blank'>ISC2 SSCP Study Guide</a>"
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
        sourceElement.innerHTML = currentFlashcard.source ? escapeHTML(currentFlashcard.source) : 'Source not available.';
        
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
