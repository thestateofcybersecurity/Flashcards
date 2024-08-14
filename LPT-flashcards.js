(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary goal of penetration testing?",
        choices: [
            "A. To find and exploit vulnerabilities",
            "B. To develop software",
            "C. To monitor network traffic",
            "D. To recover lost data"
        ],
        correctAnswer: "A. To find and exploit vulnerabilities",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following tools is commonly used for network scanning?",
        choices: [
            "A. Metasploit",
            "B. Nmap",
            "C. Wireshark",
            "D. Nessus"
        ],
        correctAnswer: "B. Nmap",
        source: "Source: [Nmap Official Documentation](https://nmap.org/book/man.html)"
    },
    {
        question: "What is the purpose of a vulnerability assessment in penetration testing?",
        choices: [
            "A. To exploit vulnerabilities",
            "B. To identify and classify vulnerabilities in systems",
            "C. To remove malware from systems",
            "D. To encrypt data"
        ],
        correctAnswer: "B. To identify and classify vulnerabilities in systems",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following describes a black box penetration test?",
        choices: [
            "A. The tester has full knowledge of the system",
            "B. The tester has no prior knowledge of the system",
            "C. The tester has limited knowledge of the system",
            "D. The tester has access to the source code"
        ],
        correctAnswer: "B. The tester has no prior knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is primarily used for web application security testing?",
        choices: [
            "A. Metasploit",
            "B. Burp Suite",
            "C. Nmap",
            "D. Aircrack-ng"
        ],
        correctAnswer: "B. Burp Suite",
        source: "Source: [Burp Suite Official Documentation](https://portswigger.net/burp/documentation)"
    },
    {
        question: "What is the purpose of the Metasploit Framework in penetration testing?",
        choices: [
            "A. To monitor network traffic",
            "B. To develop exploits and payloads",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "B. To develop exploits and payloads",
        source: "Source: [Metasploit Framework Documentation](https://docs.metasploit.com/)"
    },
    {
        question: "Which of the following is a method used to bypass authentication mechanisms?",
        choices: [
            "A. SQL Injection",
            "B. Phishing",
            "C. Social Engineering",
            "D. DNS Spoofing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following best describes a 'white box' penetration test?",
        choices: [
            "A. The tester has no knowledge of the system",
            "B. The tester has partial knowledge of the system",
            "C. The tester has full knowledge of the system",
            "D. The tester uses automated tools only"
        ],
        correctAnswer: "C. The tester has full knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is an example of privilege escalation?",
        choices: [
            "A. Exploiting a buffer overflow vulnerability to gain root access",
            "B. Sending a phishing email",
            "C. Scanning a network for open ports",
            "D. Cracking a password"
        ],
        correctAnswer: "A. Exploiting a buffer overflow vulnerability to gain root access",
        source: "Source: [OWASP Testing Guide - Privilege Escalation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "What is the primary purpose of a penetration testing report?",
        choices: [
            "A. To document vulnerabilities and recommend remediation",
            "B. To provide source code analysis",
            "C. To perform continuous monitoring",
            "D. To install security patches"
        ],
        correctAnswer: "A. To document vulnerabilities and recommend remediation",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following describes a gray box penetration test?",
        choices: [
            "A. The tester has full access to the system",
            "B. The tester has no access to the system",
            "C. The tester has limited knowledge and access to the system",
            "D. The tester only performs social engineering"
        ],
        correctAnswer: "C. The tester has limited knowledge and access to the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is commonly used for wireless network penetration testing?",
        choices: [
            "A. Nmap",
            "B. Aircrack-ng",
            "C. Burp Suite",
            "D. Nikto"
        ],
        correctAnswer: "B. Aircrack-ng",
        source: "Source: [Aircrack-ng Official Documentation](https://www.aircrack-ng.org/doku.php?id=docs)"
    },
    {
        question: "Which type of attack is typically tested using a DNS spoofing tool?",
        choices: [
            "A. Man-in-the-middle",
            "B. Brute force",
            "C. Buffer overflow",
            "D. Cross-site scripting"
        ],
        correctAnswer: "A. Man-in-the-middle",
        source: "Source: [OWASP DNS Spoofing Guide](https://owasp.org/www-community/attacks/DNS_Spoofing)"
    },
    {
        question: "Which of the following best describes the purpose of social engineering in penetration testing?",
        choices: [
            "A. To bypass network firewalls",
            "B. To trick users into revealing sensitive information",
            "C. To exploit software vulnerabilities",
            "D. To monitor network traffic"
        ],
        correctAnswer: "B. To trick users into revealing sensitive information",
        source: "Source: [Social Engineering Framework](https://www.social-engineer.org/framework/general-discussion/what-is-social-engineering/)"
    },
    {
        question: "What is the primary objective of reconnaissance in penetration testing?",
        choices: [
            "A. To exploit vulnerabilities",
            "B. To gather information about the target",
            "C. To deploy malware",
            "D. To recover lost data"
        ],
        correctAnswer: "B. To gather information about the target",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following is an example of a client-side attack?",
        choices: [
            "A. Buffer overflow",
            "B. Cross-site scripting (XSS)",
            "C. SQL injection",
            "D. Directory traversal"
        ],
        correctAnswer: "B. Cross-site scripting (XSS)",
        source: "Source: [OWASP XSS Guide](https://owasp.org/www-community/attacks/xss/)"
    },
    {
        question: "Which tool is typically used for brute force password attacks?",
        choices: [
            "A. Hydra",
            "B. Nmap",
            "C. Metasploit",
            "D. Burp Suite"
        ],
        correctAnswer: "A. Hydra",
        source: "Source: [Hydra Documentation](https://tools.kali.org/password-attacks/hydra)"
    },
    {
        question: "Which of the following is a method used to obfuscate code in penetration testing?",
        choices: [
            "A. Encoding",
            "B. Encryption",
            "C. Compression",
            "D. Steganography"
        ],
        correctAnswer: "A. Encoding",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a common technique for evading IDS/IPS during penetration testing?",
        choices: [
            "A. Packet fragmentation",
            "B. Man-in-the-middle attacks",
            "C. DNS spoofing",
            "D. Phishing"
        ],
        correctAnswer: "A. Packet fragmentation",
        source: "Source: [OWASP Testing Guide - IDS/IPS Evasion](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a critical element of a penetration test plan?",
        choices: [
            "A. Identifying target systems",
            "B. Developing software exploits",
            "C. Monitoring system performance",
            "D. Recovering lost data"
        ],
        correctAnswer: "A. Identifying target systems",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following is a common post-exploitation task?",
        choices: [
            "A. Vulnerability scanning",
            "B. Data exfiltration",
            "C. Social engineering",
            "D. DNS spoofing"
        ],
        correctAnswer: "B. Data exfiltration",
        source: "Source: [OWASP Testing Guide - Post-Exploitation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "What is the purpose of privilege escalation in penetration testing?",
        choices: [
            "A. To gain unauthorized access to higher levels of authority",
            "B. To scan for vulnerabilities",
            "C. To recover deleted files",
            "D. To monitor network traffic"
        ],
        correctAnswer: "A. To gain unauthorized access to higher levels of authority",
        source: "Source: [OWASP Testing Guide - Privilege Escalation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a primary concern when conducting a physical penetration test?",
        choices: [
            "A. Avoiding detection by physical security measures",
            "B. Developing software exploits",
            "C. Analyzing malware",
            "D. Encrypting sensitive data"
        ],
        correctAnswer: "A. Avoiding detection by physical security measures",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which type of attack involves injecting malicious SQL queries into a database?",
        choices: [
            "A. SQL Injection",
            "B. Cross-site scripting (XSS)",
            "C. Buffer overflow",
            "D. DNS spoofing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which tool is primarily used for network protocol analysis?",
        choices: [
            "A. Nmap",
            "B. Wireshark",
            "C. Metasploit",
            "D. Burp Suite"
        ],
        correctAnswer: "B. Wireshark",
        source: "Source: [Wireshark Official Documentation](https://www.wireshark.org/docs/wsug_html_chunked/)"
    },
    {
        question: "Which of the following describes a social engineering attack?",
        choices: [
            "A. Gaining unauthorized access by exploiting a software vulnerability",
            "B. Tricking users into revealing confidential information",
            "C. Intercepting and altering communications between two parties",
            "D. Disguising malware as legitimate software"
        ],
        correctAnswer: "B. Tricking users into revealing confidential information",
        source: "Source: [Social Engineering Framework](https://www.social-engineer.org/framework/general-discussion/what-is-social-engineering/)"
    },
    {
        question: "Which of the following is an effective countermeasure against brute force attacks?",
        choices: [
            "A. Account lockout policies",
            "B. Using weak passwords",
            "C. Disabling encryption",
            "D. Open port scanning"
        ],
        correctAnswer: "A. Account lockout policies",
        source: "Source: [OWASP Testing Guide - Brute Force](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is commonly used for automated vulnerability scanning?",
        choices: [
            "A. Nmap",
            "B. Nessus",
            "C. Metasploit",
            "D. Wireshark"
        ],
        correctAnswer: "B. Nessus",
        source: "Source: [Nessus Documentation](https://www.tenable.com/products/nessus)"
    },
    {
        question: "Which of the following is a method of data exfiltration during a penetration test?",
        choices: [
            "A. Using encrypted tunnels",
            "B. Sniffing network traffic",
            "C. Performing SQL injection",
            "D. Brute force attacks"
        ],
        correctAnswer: "A. Using encrypted tunnels",
        source: "Source: [OWASP Testing Guide - Data Exfiltration](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a common method used to evade detection by antivirus software?",
        choices: [
            "A. Code obfuscation",
            "B. Phishing",
            "C. Social engineering",
            "D. SQL injection"
        ],
        correctAnswer: "A. Code obfuscation",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
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
        source: "Source: [OWASP XSS Guide](https://owasp.org/www-community/attacks/xss/)"
    },
    {
        question: "What is the primary goal of a penetration testing report?",
        choices: [
            "A. To document findings and provide recommendations",
            "B. To perform continuous monitoring",
            "C. To encrypt sensitive data",
            "D. To develop exploits"
        ],
        correctAnswer: "A. To document findings and provide recommendations",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following best describes a gray box penetration test?",
        choices: [
            "A. The tester has no access to the system",
            "B. The tester has full access to the system",
            "C. The tester has limited knowledge and access to the system",
            "D. The tester only performs network scanning"
        ],
        correctAnswer: "C. The tester has limited knowledge and access to the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a primary objective of reconnaissance in penetration testing?",
        choices: [
            "A. To exploit vulnerabilities",
            "B. To gather information about the target",
            "C. To deploy malware",
            "D. To recover lost data"
        ],
        correctAnswer: "B. To gather information about the target",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which tool is typically used for brute force password attacks?",
        choices: [
            "A. Hydra",
            "B. Metasploit",
            "C. Burp Suite",
            "D. Wireshark"
        ],
        correctAnswer: "A. Hydra",
        source: "Source: [Hydra Documentation](https://tools.kali.org/password-attacks/hydra)"
    },
    {
        question: "Which of the following is a method used to bypass authentication mechanisms?",
        choices: [
            "A. SQL Injection",
            "B. DNS Spoofing",
            "C. Social Engineering",
            "D. Phishing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following best describes a black box penetration test?",
        choices: [
            "A. The tester has full knowledge of the system",
            "B. The tester has no prior knowledge of the system",
            "C. The tester has partial knowledge of the system",
            "D. The tester has access to the source code"
        ],
        correctAnswer: "B. The tester has no prior knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is commonly used for wireless network penetration testing?",
        choices: [
            "A. Nmap",
            "B. Burp Suite",
            "C. Aircrack-ng",
            "D. Nikto"
        ],
        correctAnswer: "C. Aircrack-ng",
        source: "Source: [Aircrack-ng Official Documentation](https://www.aircrack-ng.org/doku.php?id=docs)"
    },
    {
        question: "Which type of attack is typically tested using a DNS spoofing tool?",
        choices: [
            "A. Man-in-the-middle",
            "B. Buffer overflow",
            "C. Brute force",
            "D. Cross-site scripting"
        ],
        correctAnswer: "A. Man-in-the-middle",
        source: "Source: [OWASP DNS Spoofing Guide](https://owasp.org/www-community/attacks/DNS_Spoofing)"
    },
    {
        question: "Which of the following is an effective countermeasure against brute force attacks?",
        choices: [
            "A. Account lockout policies",
            "B. Using weak passwords",
            "C. Disabling encryption",
            "D. Open port scanning"
        ],
        correctAnswer: "A. Account lockout policies",
        source: "Source: [OWASP Testing Guide - Brute Force](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following best describes the purpose of social engineering in penetration testing?",
        choices: [
            "A. To bypass network firewalls",
            "B. To trick users into revealing sensitive information",
            "C. To exploit software vulnerabilities",
            "D. To monitor network traffic"
        ],
        correctAnswer: "B. To trick users into revealing sensitive information",
        source: "Source: [Social Engineering Framework](https://www.social-engineer.org/framework/general-discussion/what-is-social-engineering/)"
    },
    {
        question: "Which of the following is a method used to obfuscate code in penetration testing?",
        choices: [
            "A. Encoding",
            "B. Encryption",
            "C. Compression",
            "D. Steganography"
        ],
        correctAnswer: "A. Encoding",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following best describes the purpose of the Metasploit Framework in penetration testing?",
        choices: [
            "A. To develop exploits and payloads",
            "B. To monitor network traffic",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "A. To develop exploits and payloads",
        source: "Source: [Metasploit Framework Documentation](https://docs.metasploit.com/)"
    },
    {
        question: "Which tool is primarily used for web application security testing?",
        choices: [
            "A. Metasploit",
            "B. Burp Suite",
            "C. Nmap",
            "D. Aircrack-ng"
        ],
        correctAnswer: "B. Burp Suite",
        source: "Source: [Burp Suite Official Documentation](https://portswigger.net/burp/documentation)"
    },
    {
        question: "Which of the following describes a black box penetration test?",
        choices: [
            "A. The tester has full knowledge of the system",
            "B. The tester has no prior knowledge of the system",
            "C. The tester has limited knowledge of the system",
            "D. The tester has access to the source code"
        ],
        correctAnswer: "B. The tester has no prior knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a primary concern when conducting a physical penetration test?",
        choices: [
            "A. Avoiding detection by physical security measures",
            "B. Developing software exploits",
            "C. Analyzing malware",
            "D. Encrypting sensitive data"
        ],
        correctAnswer: "A. Avoiding detection by physical security measures",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following is a critical element of a penetration test plan?",
        choices: [
            "A. Identifying target systems",
            "B. Developing software exploits",
            "C. Monitoring system performance",
            "D. Recovering lost data"
        ],
        correctAnswer: "A. Identifying target systems",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following is a common post-exploitation task?",
        choices: [
            "A. Vulnerability scanning",
            "B. Data exfiltration",
            "C. Social engineering",
            "D. DNS spoofing"
        ],
        correctAnswer: "B. Data exfiltration",
        source: "Source: [OWASP Testing Guide - Post-Exploitation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a method used to bypass authentication mechanisms?",
        choices: [
            "A. SQL Injection",
            "B. Phishing",
            "C. Social Engineering",
            "D. DNS Spoofing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following is an effective countermeasure against brute force attacks?",
        choices: [
            "A. Account lockout policies",
            "B. Using weak passwords",
            "C. Disabling encryption",
            "D. Open port scanning"
        ],
        correctAnswer: "A. Account lockout policies",
        source: "Source: [OWASP Testing Guide - Brute Force](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a common technique for evading IDS/IPS during penetration testing?",
        choices: [
            "A. Packet fragmentation",
            "B. Man-in-the-middle attacks",
            "C. DNS spoofing",
            "D. Phishing"
        ],
        correctAnswer: "A. Packet fragmentation",
        source: "Source: [OWASP Testing Guide - IDS/IPS Evasion](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a method of data exfiltration during a penetration test?",
        choices: [
            "A. Using encrypted tunnels",
            "B. Sniffing network traffic",
            "C. Performing SQL injection",
            "D. Brute force attacks"
        ],
        correctAnswer: "A. Using encrypted tunnels",
        source: "Source: [OWASP Testing Guide - Data Exfiltration](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a common method used to evade detection by antivirus software?",
        choices: [
            "A. Code obfuscation",
            "B. Phishing",
            "C. Social engineering",
            "D. SQL injection"
        ],
        correctAnswer: "A. Code obfuscation",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a method used to obfuscate code in penetration testing?",
        choices: [
            "A. Encoding",
            "B. Encryption",
            "C. Compression",
            "D. Steganography"
        ],
        correctAnswer: "A. Encoding",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
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
        source: "Source: [OWASP XSS Guide](https://owasp.org/www-community/attacks/xss/)"
    },
    {
        question: "Which of the following is a primary objective of reconnaissance in penetration testing?",
        choices: [
            "A. To exploit vulnerabilities",
            "B. To gather information about the target",
            "C. To deploy malware",
            "D. To recover lost data"
        ],
        correctAnswer: "B. To gather information about the target",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following best describes a 'white box' penetration test?",
        choices: [
            "A. The tester has no knowledge of the system",
            "B. The tester has partial knowledge of the system",
            "C. The tester has full knowledge of the system",
            "D. The tester uses automated tools only"
        ],
        correctAnswer: "C. The tester has full knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following best describes a gray box penetration test?",
        choices: [
            "A. The tester has full access to the system",
            "B. The tester has no access to the system",
            "C. The tester has limited knowledge and access to the system",
            "D. The tester only performs social engineering"
        ],
        correctAnswer: "C. The tester has limited knowledge and access to the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is commonly used for automated vulnerability scanning?",
        choices: [
            "A. Nmap",
            "B. Nessus",
            "C. Metasploit",
            "D. Wireshark"
        ],
        correctAnswer: "B. Nessus",
        source: "Source: [Nessus Documentation](https://www.tenable.com/products/nessus)"
    },
    {
        question: "Which tool is primarily used for web application security testing?",
        choices: [
            "A. Metasploit",
            "B. Burp Suite",
            "C. Nmap",
            "D. Aircrack-ng"
        ],
        correctAnswer: "B. Burp Suite",
        source: "Source: [Burp Suite Official Documentation](https://portswigger.net/burp/documentation)"
    },
    {
        question: "Which of the following describes a black box penetration test?",
        choices: [
            "A. The tester has full knowledge of the system",
            "B. The tester has no prior knowledge of the system",
            "C. The tester has limited knowledge of the system",
            "D. The tester has access to the source code"
        ],
        correctAnswer: "B. The tester has no prior knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a method used to bypass authentication mechanisms?",
        choices: [
            "A. SQL Injection",
            "B. DNS Spoofing",
            "C. Social Engineering",
            "D. Phishing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following best describes the purpose of the Metasploit Framework in penetration testing?",
        choices: [
            "A. To develop exploits and payloads",
            "B. To monitor network traffic",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "A. To develop exploits and payloads",
        source: "Source: [Metasploit Framework Documentation](https://docs.metasploit.com/)"
    },
    {
        question: "Which tool is typically used for brute force password attacks?",
        choices: [
            "A. Hydra",
            "B. Metasploit",
            "C. Burp Suite",
            "D. Wireshark"
        ],
        correctAnswer: "A. Hydra",
        source: "Source: [Hydra Documentation](https://tools.kali.org/password-attacks/hydra)"
    },
    {
        question: "Which of the following best describes a gray box penetration test?",
        choices: [
            "A. The tester has full access to the system",
            "B. The tester has no access to the system",
            "C. The tester has limited knowledge and access to the system",
            "D. The tester only performs network scanning"
        ],
        correctAnswer: "C. The tester has limited knowledge and access to the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which tool is commonly used for wireless network penetration testing?",
        choices: [
            "A. Nmap",
            "B. Burp Suite",
            "C. Aircrack-ng",
            "D. Nikto"
        ],
        correctAnswer: "C. Aircrack-ng",
        source: "Source: [Aircrack-ng Official Documentation](https://www.aircrack-ng.org/doku.php?id=docs)"
    },
    {
        question: "Which of the following is a method used to bypass authentication mechanisms?",
        choices: [
            "A. SQL Injection",
            "B. Phishing",
            "C. Social Engineering",
            "D. DNS Spoofing"
        ],
        correctAnswer: "A. SQL Injection",
        source: "Source: [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)"
    },
    {
        question: "Which of the following describes a social engineering attack?",
        choices: [
            "A. Gaining unauthorized access by exploiting a software vulnerability",
            "B. Tricking users into revealing confidential information",
            "C. Intercepting and altering communications between two parties",
            "D. Disguising malware as legitimate software"
        ],
        correctAnswer: "B. Tricking users into revealing confidential information",
        source: "Source: [Social Engineering Framework](https://www.social-engineer.org/framework/general-discussion/what-is-social-engineering/)"
    },
    {
        question: "Which of the following is a critical element of a penetration test plan?",
        choices: [
            "A. Identifying target systems",
            "B. Developing software exploits",
            "C. Monitoring system performance",
            "D. Recovering lost data"
        ],
        correctAnswer: "A. Identifying target systems",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following best describes a black box penetration test?",
        choices: [
            "A. The tester has full knowledge of the system",
            "B. The tester has no prior knowledge of the system",
            "C. The tester has limited knowledge of the system",
            "D. The tester has access to the source code"
        ],
        correctAnswer: "B. The tester has no prior knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a method used to obfuscate code in penetration testing?",
        choices: [
            "A. Encoding",
            "B. Encryption",
            "C. Compression",
            "D. Steganography"
        ],
        correctAnswer: "A. Encoding",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a common technique for evading IDS/IPS during penetration testing?",
        choices: [
            "A. Packet fragmentation",
            "B. Man-in-the-middle attacks",
            "C. DNS spoofing",
            "D. Phishing"
        ],
        correctAnswer: "A. Packet fragmentation",
        source: "Source: [OWASP Testing Guide - IDS/IPS Evasion](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following best describes the purpose of the Metasploit Framework in penetration testing?",
        choices: [
            "A. To develop exploits and payloads",
            "B. To monitor network traffic",
            "C. To analyze malware",
            "D. To create backups"
        ],
        correctAnswer: "A. To develop exploits and payloads",
        source: "Source: [Metasploit Framework Documentation](https://docs.metasploit.com/)"
    },
    {
        question: "Which of the following best describes a gray box penetration test?",
        choices: [
            "A. The tester has full access to the system",
            "B. The tester has no access to the system",
            "C. The tester has limited knowledge and access to the system",
            "D. The tester only performs network scanning"
        ],
        correctAnswer: "C. The tester has limited knowledge and access to the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following best describes a 'white box' penetration test?",
        choices: [
            "A. The tester has no knowledge of the system",
            "B. The tester has partial knowledge of the system",
            "C. The tester has full knowledge of the system",
            "D. The tester uses automated tools only"
        ],
        correctAnswer: "C. The tester has full knowledge of the system",
        source: "Source: [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)"
    },
    {
        question: "Which of the following is a primary concern when conducting a physical penetration test?",
        choices: [
            "A. Avoiding detection by physical security measures",
            "B. Developing software exploits",
            "C. Analyzing malware",
            "D. Encrypting sensitive data"
        ],
        correctAnswer: "A. Avoiding detection by physical security measures",
        source: "Source: [EC-Council LPT Official Page](https://www.eccouncil.org/programs/licensed-penetration-tester-lpt/)"
    },
    {
        question: "Which of the following is a common method used to evade detection by antivirus software?",
        choices: [
            "A. Code obfuscation",
            "B. Phishing",
            "C. Social engineering",
            "D. SQL injection"
        ],
        correctAnswer: "A. Code obfuscation",
        source: "Source: [OWASP Testing Guide - Code Obfuscation](https://owasp.org/www-project-web-security-testing-guide/)"
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
