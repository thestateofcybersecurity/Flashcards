(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary goal of a cybersecurity analyst?",
        choices: [
            "A. To develop software",
            "B. To identify and mitigate security threats",
            "C. To design network architecture",
            "D. To manage user accounts"
        ],
        correctAnswer: "B. To identify and mitigate security threats",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following tools is commonly used for log analysis?",
        choices: [
            "A. Wireshark",
            "B. Splunk",
            "C. Nmap",
            "D. Metasploit"
        ],
        correctAnswer: "B. Splunk",
        source: "Source: [Splunk Documentation](https://docs.splunk.com/Documentation/Splunk/latest)"
    },
    {
        question: "What is the purpose of a SIEM system in cybersecurity?",
        choices: [
            "A. To monitor and analyze security events in real-time",
            "B. To encrypt sensitive data",
            "C. To create network diagrams",
            "D. To manage user identities"
        ],
        correctAnswer: "A. To monitor and analyze security events in real-time",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes a vulnerability scan?",
        choices: [
            "A. A process of exploiting a security weakness",
            "B. A method for detecting security weaknesses",
            "C. A way to monitor network traffic",
            "D. A technique to encrypt data"
        ],
        correctAnswer: "B. A method for detecting security weaknesses",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which tool is primarily used for network packet capture and analysis?",
        choices: [
            "A. Nmap",
            "B. Wireshark",
            "C. Splunk",
            "D. Nessus"
        ],
        correctAnswer: "B. Wireshark",
        source: "Source: [Wireshark Documentation](https://www.wireshark.org/docs/wsug_html_chunked/)"
    },
    {
        question: "What is the purpose of threat intelligence in cybersecurity?",
        choices: [
            "A. To monitor network traffic",
            "B. To collect, analyze, and disseminate information about threats",
            "C. To encrypt data",
            "D. To perform penetration testing"
        ],
        correctAnswer: "B. To collect, analyze, and disseminate information about threats",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "What is the primary purpose of a Security Operations Center (SOC)?",
        choices: [
            "A. To enforce physical security policies",
            "B. To monitor and respond to security incidents",
            "C. To design secure software",
            "D. To perform audits"
        ],
        correctAnswer: "B. To monitor and respond to security incidents",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following describes the process of risk mitigation?",
        choices: [
            "A. Accepting all risks",
            "B. Reducing the impact or likelihood of a risk",
            "C. Ignoring potential threats",
            "D. Transferring risk to another party"
        ],
        correctAnswer: "B. Reducing the impact or likelihood of a risk",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which tool is commonly used for automated vulnerability scanning?",
        choices: [
            "A. Nessus",
            "B. Metasploit",
            "C. Wireshark",
            "D. Burp Suite"
        ],
        correctAnswer: "A. Nessus",
        source: "Source: [Nessus Documentation](https://www.tenable.com/products/nessus)"
    },
    {
        question: "What is the purpose of a firewall in a network?",
        choices: [
            "A. To encrypt data",
            "B. To filter incoming and outgoing traffic",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "B. To filter incoming and outgoing traffic",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes a zero-day vulnerability?",
        choices: [
            "A. A vulnerability that is known and patched",
            "B. A vulnerability that is known but unpatched",
            "C. A vulnerability that is actively being exploited",
            "D. A vulnerability that is unknown to the vendor"
        ],
        correctAnswer: "D. A vulnerability that is unknown to the vendor",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "What is the purpose of incident response in cybersecurity?",
        choices: [
            "A. To monitor network traffic",
            "B. To develop secure applications",
            "C. To handle and mitigate the impact of security incidents",
            "D. To perform risk assessments"
        ],
        correctAnswer: "C. To handle and mitigate the impact of security incidents",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a technique used to obscure the meaning of code?",
        choices: [
            "A. Obfuscation",
            "B. Encryption",
            "C. Hashing",
            "D. Compression"
        ],
        correctAnswer: "A. Obfuscation",
        source: "Source: [OWASP Obfuscation Guide](https://owasp.org/www-community/controls/Obfuscation)"
    },
    {
        question: "Which of the following is an example of a common social engineering attack?",
        choices: [
            "A. Phishing",
            "B. Brute force attack",
            "C. SQL injection",
            "D. Man-in-the-middle attack"
        ],
        correctAnswer: "A. Phishing",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "What does the acronym 'SIEM' stand for?",
        choices: [
            "A. Security Incident and Event Management",
            "B. Security Information and Event Management",
            "C. Security Intelligence and Event Management",
            "D. Security Information and Evidence Management"
        ],
        correctAnswer: "B. Security Information and Event Management",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "What is the purpose of a penetration test?",
        choices: [
            "A. To exploit vulnerabilities in a system",
            "B. To identify vulnerabilities before they can be exploited",
            "C. To develop secure applications",
            "D. To perform regular backups"
        ],
        correctAnswer: "B. To identify vulnerabilities before they can be exploited",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common method of securing wireless networks?",
        choices: [
            "A. WPA2 encryption",
            "B. Disabling SSID broadcast",
            "C. MAC address filtering",
            "D. WEP encryption"
        ],
        correctAnswer: "A. WPA2 encryption",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "What is the primary purpose of a vulnerability management program?",
        choices: [
            "A. To encrypt sensitive data",
            "B. To identify, prioritize, and remediate vulnerabilities",
            "C. To develop secure software",
            "D. To monitor network traffic"
        ],
        correctAnswer: "B. To identify, prioritize, and remediate vulnerabilities",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is an example of a network-based attack?",
        choices: [
            "A. Distributed Denial of Service (DDoS)",
            "B. Social engineering",
            "C. Password cracking",
            "D. Data exfiltration"
        ],
        correctAnswer: "A. Distributed Denial of Service (DDoS)",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes a threat actor?",
        choices: [
            "A. A person or entity responsible for an event that impacts the security of an organization",
            "B. A tool used to exploit a vulnerability",
            "C. A weakness in a system that can be exploited",
            "D. A security feature in a system"
        ],
        correctAnswer: "A. A person or entity responsible for an event that impacts the security of an organization",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common technique used in penetration testing?",
        choices: [
            "A. Exploiting vulnerabilities to gain unauthorized access",
            "B. Monitoring network traffic for threats",
            "C. Developing secure software",
            "D. Managing user accounts"
        ],
        correctAnswer: "A. Exploiting vulnerabilities to gain unauthorized access",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a characteristic of an Advanced Persistent Threat (APT)?",
        choices: [
            "A. Short-term, sporadic attacks",
            "B. Long-term, targeted attacks",
            "C. Attacks using social engineering techniques",
            "D. Random, non-targeted attacks"
        ],
        correctAnswer: "B. Long-term, targeted attacks",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes the concept of defense in depth?",
        choices: [
            "A. Using a single strong security measure",
            "B. Layering multiple security measures to protect resources",
            "C. Backing up data regularly",
            "D. Ensuring all users have administrator privileges"
        ],
        correctAnswer: "B. Layering multiple security measures to protect resources",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a method for ensuring data availability?",
        choices: [
            "A. Redundancy",
            "B. Hashing",
            "C. Encryption",
            "D. Access control"
        ],
        correctAnswer: "A. Redundancy",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes the concept of least privilege?",
        choices: [
            "A. Giving users full access to all resources",
            "B. Restricting user access rights to the bare minimum necessary to perform their job",
            "C. Allowing users to choose their own level of access",
            "D. Providing maximum access to administrators"
        ],
        correctAnswer: "B. Restricting user access rights to the bare minimum necessary to perform their job",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is an example of a host-based security solution?",
        choices: [
            "A. Host-based Intrusion Detection System (HIDS)",
            "B. Network firewall",
            "C. Web Application Firewall (WAF)",
            "D. SIEM"
        ],
        correctAnswer: "A. Host-based Intrusion Detection System (HIDS)",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common method for securing data in transit?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is an example of multi-factor authentication?",
        choices: [
            "A. A password and a security question",
            "B. A password and a PIN",
            "C. A password and a fingerprint",
            "D. A password and an email"
        ],
        correctAnswer: "C. A password and a fingerprint",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following best describes a data breach?",
        choices: [
            "A. The unintentional release of secure information to an untrusted environment",
            "B. A successful phishing attempt",
            "C. An attack that prevents access to data",
            "D. A form of ransomware"
        ],
        correctAnswer: "A. The unintentional release of secure information to an untrusted environment",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a method for detecting threats in a network?",
        choices: [
            "A. Network Intrusion Detection System (NIDS)",
            "B. SIEM",
            "C. Firewalls",
            "D. Encryption"
        ],
        correctAnswer: "A. Network Intrusion Detection System (NIDS)",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a characteristic of an insider threat?",
        choices: [
            "A. An attack that originates from within the organization",
            "B. An attack that comes from an external hacker",
            "C. A denial-of-service attack",
            "D. A ransomware attack"
        ],
        correctAnswer: "A. An attack that originates from within the organization",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes the purpose of a digital certificate?",
        choices: [
            "A. To encrypt data",
            "B. To verify the identity of a user or device",
            "C. To store passwords",
            "D. To authenticate a network"
        ],
        correctAnswer: "B. To verify the identity of a user or device",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is an example of a strong password policy?",
        choices: [
            "A. Passwords must be at least 8 characters long and include a mix of letters, numbers, and symbols",
            "B. Passwords can be reused",
            "C. Passwords must include only lowercase letters",
            "D. Passwords can be the same as the username"
        ],
        correctAnswer: "A. Passwords must be at least 8 characters long and include a mix of letters, numbers, and symbols",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common method of securing wireless networks?",
        choices: [
            "A. WPA2 encryption",
            "B. Disabling SSID broadcast",
            "C. MAC address filtering",
            "D. WEP encryption"
        ],
        correctAnswer: "A. WPA2 encryption",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common method of securing data in transit?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Tokenization"
        ],
        correctAnswer: "A. Encryption",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a characteristic of an Advanced Persistent Threat (APT)?",
        choices: [
            "A. Short-term, sporadic attacks",
            "B. Long-term, targeted attacks",
            "C. Attacks using social engineering techniques",
            "D. Random, non-targeted attacks"
        ],
        correctAnswer: "B. Long-term, targeted attacks",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a method used to detect network intrusions?",
        choices: [
            "A. Network Intrusion Detection System (NIDS)",
            "B. Firewalls",
            "C. SIEM",
            "D. Encryption"
        ],
        correctAnswer: "A. Network Intrusion Detection System (NIDS)",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a common technique used in penetration testing?",
        choices: [
            "A. Exploiting vulnerabilities to gain unauthorized access",
            "B. Monitoring network traffic for threats",
            "C. Developing secure software",
            "D. Managing user accounts"
        ],
        correctAnswer: "A. Exploiting vulnerabilities to gain unauthorized access",
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [OWASP Obfuscation Guide](https://owasp.org/www-community/controls/Obfuscation)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Official Page](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a characteristic of an insider threat?",
        choices: [
            "A. An attack that originates from within the organization",
            "B. An attack that comes from an external hacker",
            "C. A denial-of-service attack",
            "D. A ransomware attack"
        ],
        correctAnswer: "A. An attack that originates from within the organization",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following is a method for ensuring data availability?",
        choices: [
            "A. Redundancy",
            "B. Hashing",
            "C. Encryption",
            "D. Access control"
        ],
        correctAnswer: "A. Redundancy",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
    },
    {
        question: "Which of the following best describes the purpose of a digital certificate?",
        choices: [
            "A. To encrypt data",
            "B. To verify the identity of a user or device",
            "C. To store passwords",
            "D. To authenticate a network"
        ],
        correctAnswer: "B. To verify the identity of a user or device",
        source: "Source: [CompTIA CySA+ Study Guide](https://www.comptia.org/certifications/cybersecurity-analyst)"
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
