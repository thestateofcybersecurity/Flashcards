(() => {
// Multiple-choice flashcards array
const flashcards = [
    { question: "What is the primary goal of information security?", answer: "To protect the confidentiality, integrity, and availability of information." },
    { question: "What is the CIA triad?", answer: "Confidentiality, Integrity, and Availability." },
    { question: "What does the principle of least privilege entail?", answer: "Users should only have the minimum level of access necessary to perform their duties." },
    { question: "What is the primary goal of information security?", answer: "To protect the confidentiality, integrity, and availability of information." },
    { question: "What is the CIA triad?", answer: "Confidentiality, Integrity, and Availability." },
    { question: "What is confidentiality?", answer: "The principle that information should not be disclosed to unauthorized individuals." },
    { question: "What is integrity?", answer: "The principle that information should not be altered or destroyed in an unauthorized manner." },
    { question: "What is availability?", answer: "The principle that information should be accessible to authorized users when needed." },
    { question: "What does the principle of least privilege entail?", answer: "Users should only have the minimum level of access necessary to perform their duties." },
    { question: "What is a risk?", answer: "The potential for loss or harm related to the exploitation of a vulnerability." },
    { question: "What is a vulnerability?", answer: "A weakness in a system that can be exploited by threats." },
    { question: "What is a threat?", answer: "A potential cause of an unwanted impact to a system or organization." },
    { question: "What is risk management?", answer: "The process of identifying, assessing, and mitigating risks." },
    { question: "What is a security control?", answer: "A safeguard or countermeasure to reduce risk." },
    { question: "What are administrative controls?", answer: "Policies, procedures, and practices to manage and reduce risk." },
    { question: "What are technical controls?", answer: "Hardware or software mechanisms used to enforce security policies." },
    { question: "What are physical controls?", answer: "Security measures to protect physical assets and environments." },
    { question: "What is encryption?", answer: "The process of converting information into a code to prevent unauthorized access." },
    { question: "What is a firewall?", answer: "A network security device that monitors and controls incoming and outgoing network traffic." },
    { question: "What is intrusion detection?", answer: "The process of monitoring network or system activities for malicious activities." },
    { question: "What is authentication?", answer: "The process of verifying the identity of a user or system." },
    { question: "What is multifactor authentication?", answer: "A security system that requires more than one method of authentication from independent categories of credentials." },
    { question: "What is authorization?", answer: "The process of determining whether a user has permission to access a resource." },
    { question: "What is auditing?", answer: "The process of reviewing and examining records to ensure that security policies are being followed." },
    { question: "What is logging?", answer: "The recording of events, particularly those related to security, in a system." },
    { question: "What is access control?", answer: "Mechanisms that restrict access to resources to authorized users." },
    { question: "What is discretionary access control (DAC)?", answer: "An access control method where resource owners decide who has access." },
    { question: "What is mandatory access control (MAC)?", answer: "An access control method where access decisions are based on predefined security labels and policies." },
    { question: "What is role-based access control (RBAC)?", answer: "An access control method where access rights are assigned based on roles within an organization." },
    { question: "What is an intrusion prevention system (IPS)?", answer: "A network security system designed to detect and prevent security breaches." },
    { question: "What is a digital certificate?", answer: "An electronic document used to prove the ownership of a public key." },
    { question: "What is a public key infrastructure (PKI)?", answer: "A framework for managing digital certificates and public-key encryption." },
    { question: "What is a security policy?", answer: "A formal set of rules that people within an organization must follow." },
    { question: "What is social engineering?", answer: "The use of deception to manipulate individuals into divulging confidential information." },
    { question: "What is phishing?", answer: "A type of social engineering attack where attackers pose as a trustworthy entity to obtain sensitive information." },
    { question: "What is spear phishing?", answer: "A targeted phishing attack directed at a specific individual or organization." },
    { question: "What is ransomware?", answer: "Malware that encrypts the victim's data and demands payment for the decryption key." },
    { question: "What is a denial-of-service (DoS) attack?", answer: "An attack that aims to make a system or network unavailable to users." },
    { question: "What is a distributed denial-of-service (DDoS) attack?", answer: "A DoS attack carried out by multiple compromised systems, often using a botnet." },
    { question: "What is a zero-day exploit?", answer: "A vulnerability in software that is exploited before the vendor has released a patch." },
    { question: "What is malware?", answer: "Malicious software designed to disrupt, damage, or gain unauthorized access to a system." },
    { question: "What is a virus?", answer: "Malware that attaches itself to a legitimate program and replicates itself when the program is run." },
    { question: "What is a worm?", answer: "Malware that replicates itself in order to spread to other systems, often over a network." },
    { question: "What is a trojan horse?", answer: "Malware disguised as legitimate software that provides unauthorized access to the user's system." },
    { question: "What is spyware?", answer: "Malware that gathers information about a user without their knowledge." },
    { question: "What is a botnet?", answer: "A network of compromised computers controlled by an attacker to perform coordinated tasks, often malicious." },
    { question: "What is a man-in-the-middle (MITM) attack?", answer: "An attack where the attacker secretly intercepts and potentially alters communication between two parties." },
    { question: "What is encryption at rest?", answer: "The process of encrypting data that is stored on a device or server." },
    { question: "What is encryption in transit?", answer: "The process of encrypting data as it is transmitted over a network." },
    { question: "What is a hash function?", answer: "A function that converts data into a fixed-size string of characters, which is typically a digest that represents the original data." },
    { question: "What is two-factor authentication (2FA)?", answer: "A security process that requires two different forms of identification to access a resource." },
    { question: "What is network segmentation?", answer: "The practice of dividing a network into smaller, isolated segments to improve security." },
    { question: "What is data loss prevention (DLP)?", answer: "A strategy to ensure that sensitive data is not lost, misused, or accessed by unauthorized users." },
    { question: "What is patch management?", answer: "The process of managing updates for software applications and systems to address security vulnerabilities." },
    { question: "What is endpoint protection?", answer: "Security solutions that protect endpoints, such as computers and mobile devices, from threats." },
    { question: "What is a security incident?", answer: "An event that indicates a potential breach of security or a violation of security policies." },
    { question: "What is incident response?", answer: "The process of identifying, managing, and recovering from a security incident." },
    { question: "What is business continuity planning (BCP)?", answer: "The process of creating systems of prevention and recovery to deal with potential threats to a company." },
    { question: "What is disaster recovery planning (DRP)?", answer: "The process of restoring normal operations after a disruptive event, such as a natural disaster or cyberattack." },
    { question: "What is a business impact analysis (BIA)?", answer: "A process to determine the potential impact of disruptions to business operations." },
    { question: "What is a recovery time objective (RTO)?", answer: "The maximum allowable time to restore a system or service after a disruption." },
    { question: "What is a recovery point objective (RPO)?", answer: "The maximum allowable data loss in terms of time, typically referring to the age of files that must be recovered from backup storage." },
    { question: "What is a hot site?", answer: "A fully operational off-site data center where an organization can relocate to continue operations in case of a disaster." },
    { question: "What is a cold site?", answer: "An off-site location that has space and infrastructure but lacks the computing equipment necessary for operations." },
    { question: "What is a warm site?", answer: "A compromise between a hot site and a cold site, where an off-site location has the necessary hardware and connectivity but may require additional setup." },
    { question: "What is an acceptable use policy (AUP)?", answer: "A document that outlines the acceptable use of an organization's information systems." },
    { question: "What is data classification?", answer: "The process of organizing data based on its level of sensitivity or confidentiality." },
    { question: "What is least privilege?", answer: "The principle of giving users the minimum level of access necessary to perform their job functions." },
    { question: "What is need to know?", answer: "The principle of restricting access to information only to those who need it to perform their duties." },
    { question: "What is a security awareness program?", answer: "A program designed to educate employees about security policies and procedures." },
    { question: "What is social engineering?", answer: "The use of psychological manipulation to trick individuals into divulging confidential information." },
    { question: "What is spear phishing?", answer: "A targeted phishing attack aimed at a specific individual or organization." },
    { question: "What is whaling?", answer: "A type of phishing attack that targets high-profile individuals, such as executives." },
    { question: "What is a security operations center (SOC)?", answer: "A centralized unit that deals with security issues on an organizational and technical level." },
    { question: "What is threat intelligence?", answer: "The process of gathering, analyzing, and responding to information about potential or current threats." },
    { question: "What is a security audit?", answer: "A systematic evaluation of an organization's information system to determine if security measures are adequate." },
    { question: "What is a penetration test?", answer: "A simulated cyberattack on a system to identify vulnerabilities that could be exploited by attackers." },
    { question: "What is a vulnerability assessment?", answer: "The process of identifying, quantifying, and prioritizing vulnerabilities in a system." },
    { question: "What is the difference between a penetration test and a vulnerability assessment?", answer: "A penetration test actively exploits vulnerabilities to assess the effectiveness of security measures, while a vulnerability assessment identifies and categorizes vulnerabilities." },
    { question: "What is a security information and event management (SIEM) system?", answer: "A solution that provides real-time analysis of security alerts generated by applications and network hardware." },
    { question: "What is data encryption?", answer: "The process of converting data into a format that is unreadable to unauthorized users." },
    { question: "What is a digital signature?", answer: "An electronic signature that verifies the authenticity and integrity of a message or document." },
    { question: "What is a security breach?", answer: "An incident where information is accessed without authorization." },
    { question: "What is a firewall?", answer: "A network security device that monitors and controls incoming and outgoing traffic based on predetermined security rules." },
    { question: "What is a VPN?", answer: "A Virtual Private Network (VPN) extends a private network across a public network, allowing users to send and receive data as if their devices were directly connected to the private network." },
    { question: "What is a honeypot?", answer: "A security mechanism set to detect, deflect, or study attempts at unauthorized use of information systems." },
    { question: "What is a DMZ (Demilitarized Zone)?", answer: "A physical or logical subnetwork that contains and exposes an organization's external-facing services to a larger untrusted network, typically the internet." },
    { question: "What is a certificate authority (CA)?", answer: "An entity that issues digital certificates, which are used to verify the identity of entities on a network." },
    { question: "What is a risk assessment?", answer: "The process of identifying, analyzing, and evaluating risks to the organization." },
    { question: "What is a business continuity plan (BCP)?", answer: "A document that outlines how a business will continue operating during an unplanned disruption in service." },
    { question: "What is a service level agreement (SLA)?", answer: "A contract between a service provider and a customer that specifies the service levels that will be provided." },
    { question: "What is an incident response plan (IRP)?", answer: "A plan for managing the response to a security incident, with the goal of limiting damage and reducing recovery time and costs." },
    { question: "What is a security architecture?", answer: "The design artifacts that describe how security controls are positioned and how they relate to the overall IT architecture." },
    { question: "What is a security baseline?", answer: "A set of minimum security requirements that an organization must meet." },
    { question: "What is a security policy?", answer: "A document that outlines an organization's security requirements, and the controls in place to meet those requirements." },
    { question: "What is a security standard?", answer: "A set of detailed, specific requirements or guidelines for implementing security policies." },
    { question: "What is a security guideline?", answer: "A recommended practice that supports policy or standard implementation." },
    { question: "What is a security procedure?", answer: "A step-by-step instruction to perform a specific task in accordance with security policy." },
    { question: "What is single sign-on (SSO)?", answer: "An authentication process that allows a user to access multiple applications with one set of login credentials." },
    { question: "What is a session hijacking attack?", answer: "An attack where an attacker takes control of a user's session to gain unauthorized access to information or services." },
    { question: "What is cross-site scripting (XSS)?", answer: "A vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users." },
    { question: "What is SQL injection?", answer: "A code injection technique that exploits a security vulnerability in an application's software by injecting SQL code into a query." },
    { question: "What is a buffer overflow?", answer: "A vulnerability that occurs when more data is written to a buffer than it can hold, potentially leading to arbitrary code execution." },
    { question: "What is the difference between symmetric and asymmetric encryption?", answer: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption." },
    { question: "What is the purpose of a digital certificate?", answer: "To associate the ownership of a public key with the entity that owns it, ensuring the key is trusted." },
    { question: "What is the primary function of a VPN?", answer: "To create a secure, encrypted connection over a less secure network, typically the internet." },
    { question: "What is an access control list (ACL)?", answer: "A list of permissions associated with a system resource that defines which users or system processes can access that resource." },
    { question: "What is single sign-on (SSO)?", answer: "A user authentication process that permits a user to access multiple applications with one set of login credentials." },
    { question: "What is multi-factor authentication (MFA)?", answer: "A security system that requires more than one method of authentication to verify the user’s identity." },
    { question: "What is a zero trust model?", answer: "A security concept that assumes all users, devices, and networks are untrusted by default, even if they are inside the network perimeter." },
    { question: "What is a sandbox in cybersecurity?", answer: "An isolated environment used to safely run and analyze suspicious files or code without affecting the rest of the system." },
    { question: "What is an attack surface?", answer: "The sum of all possible points where an unauthorized user can try to enter data to or extract data from an environment." },
    { question: "What is data at rest?", answer: "Data that is stored on a physical device, such as a hard drive, and is not currently being used or transmitted." },
    { question: "What is data in transit?", answer: "Data that is actively moving from one location to another, such as across the internet or through a private network." },
    { question: "What is a certificate revocation list (CRL)?", answer: "A list of digital certificates that have been revoked by the certificate authority before their expiration date." },
    { question: "What is a key distribution center (KDC)?", answer: "A system for securely distributing symmetric keys in a network, often used in Kerberos authentication." },
    { question: "What is a mantrap in physical security?", answer: "A physical security device that consists of two interlocking doors, where the first door must close before the second door can open." },
    { question: "What is the purpose of a demilitarized zone (DMZ) in networking?", answer: "To add an additional layer of security to an organization's local area network by isolating external-facing services from the internal network." },
    { question: "What is a security token?", answer: "A physical or virtual device that provides authentication by generating a one-time-use password or by storing a cryptographic key." },
    { question: "What is a session key?", answer: "A temporary encryption key used for a single session or transaction between two parties." },
    { question: "What is a nonce in cryptography?", answer: "A random or pseudo-random number that is used only once in cryptographic communication to prevent replay attacks." },
    { question: "What is the principle of defense in depth?", answer: "A layered approach to security where multiple defensive measures are implemented to protect the integrity of information." },
    { question: "What is a security information and event management (SIEM) system?", answer: "A system that aggregates and analyzes activity from different resources across your entire IT infrastructure to detect and respond to potential security threats." },
    { question: "What is a honeynet?", answer: "A network of honeypots designed to attract and analyze attacks on an organization's IT systems." },
    { question: "What is threat modeling?", answer: "A process for identifying, understanding, and prioritizing potential threats to an organization's information assets." },
    { question: "What is the purpose of network segmentation?", answer: "To divide a network into smaller segments to improve security and performance by limiting the spread of security incidents." },
    { question: "What is cross-site request forgery (CSRF)?", answer: "An attack that tricks the user into executing unwanted actions on a different website where they are authenticated." },
    { question: "What is input validation?", answer: "The practice of ensuring that input data is properly formatted, secure, and acceptable before it is processed by an application." },
    { question: "What is a memory leak?", answer: "A situation where a program incorrectly manages memory allocations, resulting in reduced performance or failure over time." },
    { question: "What is a logic bomb?", answer: "Malware that is triggered by a specific event, date, or condition within a system." },
    { question: "What is an advanced persistent threat (APT)?", answer: "A prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected for an extended period." },
    { question: "What is steganography?", answer: "The practice of hiding data within other non-secret text or data, such as embedding a hidden message within an image." },
    { question: "What is a security policy violation?", answer: "An action that goes against the established rules and protocols for safeguarding an organization’s assets." },
    { question: "What is a brute force attack?", answer: "An attack where an attacker tries many different passwords or keys until the correct one is found." },
    { question: "What is a rainbow table attack?", answer: "An attack that uses precomputed tables of hash values to crack password hashes." },
    { question: "What is the purpose of a security awareness training program?", answer: "To educate employees about security risks and the actions they can take to protect information and systems." },
    { question: "What is the role of a data custodian?", answer: "An individual responsible for the safe custody, transport, and storage of data and the implementation of business rules." },
    { question: "What is identity federation?", answer: "A system where multiple organizations can share and use each other’s authentication credentials." },
    { question: "What is a social engineering attack?", answer: "An attack that relies on human interaction and often involves tricking people into breaking normal security procedures." },
    { question: "What is a security framework?", answer: "A structured approach for managing and reducing cybersecurity risk, such as the NIST Cybersecurity Framework." },
    { question: "What is a security posture?", answer: "An organization’s overall security status based on the networks, information, and systems it uses and how well it protects them." },
    { question: "What is an incident response playbook?", answer: "A documented process that outlines the steps an organization should take in response to a specific type of security incident." },
    { question: "What is role-based access control (RBAC)?", answer: "An access control method where access decisions are based on the roles assigned to individual users within an organization." },
    { question: "What is the purpose of a data retention policy?", answer: "To define how long data should be stored and when it should be disposed of, based on legal, regulatory, and business requirements." },
    { question: "What is tokenization in data security?", answer: "The process of substituting sensitive data with a unique identifier (token) that cannot be reverse-engineered to the original data." },
    { question: "What is a digital watermark?", answer: "An embedded identifier or code in digital content, such as images or videos, used to trace and protect the content." },
    { question: "What is the purpose of network sniffing?", answer: "To monitor and capture data packets as they traverse a network, often used in both legitimate and malicious activities." },
    { question: "What is the purpose of a vulnerability scan?", answer: "To identify security weaknesses in a system by analyzing the system's vulnerabilities before they can be exploited." },
    { question: "What is an eavesdropping attack?", answer: "An attack where the attacker secretly listens to the private communication of others without their consent." },
    { question: "What is the difference between data anonymization and pseudonymization?", answer: "Data anonymization removes all personal identifiers, making data non-identifiable, while pseudonymization replaces identifiers with pseudonyms that can be reversed." },
    { question: "What is a bot in cybersecurity?", answer: "An automated software program that performs tasks on the internet, often used in both legitimate tasks and malicious activities like DDoS attacks." },
    { question: "What is the purpose of a security operations center (SOC)?", answer: "To monitor, detect, analyze, and respond to cybersecurity incidents in real time." },
    { question: "What is a rogue access point?", answer: "An unauthorized wireless access point that has been installed on a secure network without the network administrator's knowledge." },
    { question: "What is pharming?", answer: "An attack that redirects a website's traffic to a fraudulent site, often used to steal login credentials." },
    { question: "What is password salting?", answer: "Adding random data (salt) to a password before it is hashed, making it more difficult for attackers to crack the hash using precomputed tables." },
    { question: "What is an insider threat?", answer: "A security risk that comes from within the organization, typically involving employees, former employees, or business associates." },
    { question: "What is the purpose of a jump server?", answer: "A secure server used to manage and provide access to other servers in a different security zone, often used to mitigate risks." },
    { question: "What is an encryption key?", answer: "A piece of information or parameter used in cryptography to encrypt or decrypt data." },
    { question: "What is a denial of service (DoS) attack?", answer: "An attack aimed at making a service, network, or system unavailable to its intended users." },
    { question: "What is an application programming interface (API) security?", answer: "Measures and controls to protect APIs from attacks and ensure they operate as intended." },
    { question: "What is data leakage prevention (DLP)?", answer: "Strategies and tools used to prevent unauthorized access, transfer, or sharing of sensitive data." },
    { question: "What is a security breach?", answer: "An incident where information is accessed or exposed without authorization, often leading to data loss." },
    { question: "What is a vulnerability disclosure program?", answer: "A program that allows security researchers to report vulnerabilities they find in an organization's systems." },
    { question: "What is a backdoor in cybersecurity?", answer: "A method of bypassing normal authentication to gain unauthorized access to a system, often left by attackers." },
    { question: "What is the purpose of encryption in email?", answer: "To protect the confidentiality of email content by ensuring that only the intended recipient can read it." },
    { question: "What is spear phishing?", answer: "A phishing attack targeted at a specific individual or organization, often personalized to increase success." },
    { question: "What is the purpose of an access control matrix?", answer: "To define the rights and permissions that users have for accessing resources within a system." },
    { question: "What is a distributed denial of service (DDoS) attack?", answer: "A DoS attack that originates from multiple sources, making it harder to mitigate." },
    { question: "What is a rootkit?", answer: "Malware designed to gain unauthorized root or administrative access to a system and hide its presence." },
    { question: "What is the purpose of a penetration test?", answer: "To simulate an attack on a system to identify and exploit vulnerabilities before they can be exploited by attackers." },
    { question: "What is a certificate authority (CA)?", answer: "An entity that issues digital certificates to verify the identity of entities and secure communications." },
    { question: "What is a security baseline?", answer: "A set of minimum security requirements that all systems in an organization must meet." },
    { question: "What is an attack vector?", answer: "A method or pathway that an attacker uses to access a network or system." },
    { question: "What is the purpose of multifactor authentication (MFA)?", answer: "To enhance security by requiring more than one form of authentication to verify a user's identity." },
    { question: "What is the difference between hashing and encryption?", answer: "Hashing is a one-way function that transforms data into a fixed-size string, while encryption is a reversible process that secures data." },
    { question: "What is a perimeter security?", answer: "Security measures to protect the outer boundaries of a network or facility." },
    { question: "What is the purpose of a security audit?", answer: "To evaluate and ensure that security policies, procedures, and controls are effective and being followed." },
    { question: "What is the principle of least privilege?", answer: "The practice of granting users only the permissions necessary to perform their job functions, nothing more." },
    { question: "What is a demilitarized zone (DMZ)?", answer: "A physical or logical subnetwork that separates an internal network from untrusted external networks, like the internet." },
    { question: "What is a load balancer?", answer: "A device or software that distributes network or application traffic across multiple servers to ensure reliability and performance." },
    { question: "What is a time-based one-time password (TOTP)?", answer: "A temporary passcode generated using the current time and a shared secret, used in two-factor authentication." },
    { question: "What is the purpose of an intrusion detection system (IDS)?", answer: "To monitor network traffic for suspicious activity and alert administrators of potential threats." },
    { question: "What is a honeypot?", answer: "A decoy system designed to attract and analyze attackers, often used to gather intelligence." },
    { question: "What is the purpose of a security operations center (SOC)?", answer: "To monitor, detect, analyze, and respond to cybersecurity incidents in real-time." },
    { question: "What is a software patch?", answer: "A set of changes to a software program designed to update, fix, or improve it, especially in terms of security vulnerabilities." },
    { question: "What is the purpose of network encryption?", answer: "To protect data transmitted across a network by converting it into a secure format that cannot be read by unauthorized users." },
    { question: "What is a vulnerability?", answer: "A weakness in a system that could be exploited by a threat to gain unauthorized access or cause harm." },
    { question: "What is a worm?", answer: "Malware that replicates itself to spread to other computers, often over a network, without user intervention." },
    { question: "What is a cryptographic key?", answer: "A string of data used to encrypt and decrypt information, ensuring confidentiality and integrity." },
    { question: "What is a session hijacking attack?", answer: "An attack where an attacker takes over a user’s session to gain unauthorized access to information or services." },
    { question: "What is data sanitization?", answer: "The process of securely removing sensitive data from a system so that it cannot be recovered or reconstructed." },
    { question: "What is an air gap in cybersecurity?", answer: "A security measure where a system is physically isolated from other networks, making it inaccessible from the internet." },
  {
        question: "Which of the following is the most important aspect of a security awareness program?",
        choices: [
            "A. Training sessions",
            "B. User participation",
            "C. Executive support",
            "D. Policy enforcement"
        ],
        correctAnswer: "C. Executive support"
    },
    {
        question: "Which of the following is a primary objective of access control?",
        choices: [
            "A. To prevent unauthorized access",
            "B. To ensure data integrity",
            "C. To detect and respond to incidents",
            "D. To audit system activities"
        ],
        correctAnswer: "A. To prevent unauthorized access"
    },
    {
        question: "What is the best method to protect sensitive data during transmission?",
        choices: [
            "A. Data masking",
            "B. Encryption",
            "C. Hashing",
            "D. Tokenization"
        ],
        correctAnswer: "B. Encryption"
    },
    {
        question: "Which of the following is a key concept in the principle of least privilege?",
        choices: [
            "A. Users are given no access by default",
            "B. Users have access to all data by default",
            "C. Users can share access privileges with others",
            "D. Users only have the minimum access necessary to perform their jobs"
        ],
        correctAnswer: "D. Users only have the minimum access necessary to perform their jobs"
    },
    {
        question: "Which of the following controls is a preventive control?",
        choices: [
            "A. Audit trails",
            "B. Intrusion detection systems",
            "C. Encryption",
            "D. Security policies"
        ],
        correctAnswer: "C. Encryption"
    },
    {
        question: "What is the purpose of a risk assessment?",
        choices: [
            "A. To eliminate all risks",
            "B. To identify, assess, and prioritize risks",
            "C. To create security policies",
            "D. To perform a security audit"
        ],
        correctAnswer: "B. To identify, assess, and prioritize risks"
    },
    {
        question: "Which of the following best describes a hot site?",
        choices: [
            "A. A site with fully operational equipment and up-to-date data",
            "B. A site with no equipment but with infrastructure ready",
            "C. A site with limited equipment and data resources",
            "D. A mobile unit used for temporary operations"
        ],
        correctAnswer: "A. A site with fully operational equipment and up-to-date data"
    },
    {
        question: "Which of the following is NOT a type of access control?",
        choices: [
            "A. Discretionary access control (DAC)",
            "B. Mandatory access control (MAC)",
            "C. Role-based access control (RBAC)",
            "D. Responsive access control (RAC)"
        ],
        correctAnswer: "D. Responsive access control (RAC)"
    },
    {
        question: "Which of the following is a characteristic of asymmetric encryption?",
        choices: [
            "A. Uses the same key for encryption and decryption",
            "B. Is faster than symmetric encryption",
            "C. Uses a pair of keys: public and private",
            "D. Provides non-repudiation"
        ],
        correctAnswer: "C. Uses a pair of keys: public and private"
    },
    {
        question: "What is the primary purpose of a digital signature?",
        choices: [
            "A. To encrypt a message",
            "B. To verify the identity of the sender",
            "C. To ensure the message is not intercepted",
            "D. To protect against malware"
        ],
        correctAnswer: "B. To verify the identity of the sender"
    },
    {
        question: "Which of the following is the main goal of the NIST Cybersecurity Framework?",
        choices: [
            "A. To replace existing security standards",
            "B. To provide a policy framework for computer security",
            "C. To assess the security level of a company",
            "D. To develop a global cybersecurity standard"
        ],
        correctAnswer: "B. To provide a policy framework for computer security"
    },
    {
        question: "What is a key feature of a certificate authority (CA)?",
        choices: [
            "A. Issuing digital certificates",
            "B. Storing encryption keys",
            "C. Authenticating users",
            "D. Encrypting network traffic"
        ],
        correctAnswer: "A. Issuing digital certificates"
    },
    {
        question: "Which type of attack involves tricking a user into clicking a link in an email?",
        choices: [
            "A. Phishing",
            "B. SQL Injection",
            "C. Cross-Site Scripting (XSS)",
            "D. Denial of Service (DoS)"
        ],
        correctAnswer: "A. Phishing"
    },
    {
        question: "Which of the following is NOT part of the CIA triad?",
        choices: [
            "A. Confidentiality",
            "B. Integrity",
            "C. Accountability",
            "D. Availability"
        ],
        correctAnswer: "C. Accountability"
    },
    {
        question: "Which security model is based on a lattice structure?",
        choices: [
            "A. Bell-LaPadula",
            "B. Biba",
            "C. Clark-Wilson",
            "D. Brewer-Nash"
        ],
        correctAnswer: "A. Bell-LaPadula"
    },
    {
        question: "What is a key benefit of implementing a risk management process?",
        choices: [
            "A. It eliminates all risks",
            "B. It reduces the impact of security incidents",
            "C. It ensures compliance with all regulations",
            "D. It prevents all security breaches"
        ],
        correctAnswer: "B. It reduces the impact of security incidents"
    },
    {
        question: "Which of the following best defines the principle of least privilege?",
        choices: [
            "A. Giving all users administrator access",
            "B. Limiting access rights for users to the bare minimum permissions they need",
            "C. Granting full access to users based on their role",
            "D. Allowing users to access data only when supervised"
        ],
        correctAnswer: "B. Limiting access rights for users to the bare minimum permissions they need"
    },
    {
        question: "Which type of malware is known for spreading itself without human interaction?",
        choices: [
            "A. Virus",
            "B. Trojan",
            "C. Worm",
            "D. Spyware"
        ],
        correctAnswer: "C. Worm"
    },
    {
        question: "Which of the following is an example of a detective control?",
        choices: [
            "A. Firewall",
            "B. Encryption",
            "C. Security cameras",
            "D. Security policy"
        ],
        correctAnswer: "C. Security cameras"
    },
    {
        question: "What is the main purpose of disaster recovery planning?",
        choices: [
            "A. To ensure data is backed up regularly",
            "B. To establish procedures to recover from a catastrophic event",
            "C. To define security policies",
            "D. To conduct regular security audits"
        ],
        correctAnswer: "B. To establish procedures to recover from a catastrophic event"
    },
   {
        question: "Which of the following is a characteristic of the Biba model?",
        choices: [
            "A. Focuses on confidentiality",
            "B. Focuses on integrity",
            "C. Focuses on availability",
            "D. Focuses on authenticity"
        ],
        correctAnswer: "B. Focuses on integrity"
    },
    {
        question: "What is the primary objective of a business impact analysis (BIA)?",
        choices: [
            "A. To identify potential risks",
            "B. To assess the impact of disruptions",
            "C. To develop recovery strategies",
            "D. To enforce security policies"
        ],
        correctAnswer: "B. To assess the impact of disruptions"
    },
    {
        question: "Which of the following encryption algorithms is classified as symmetric?",
        choices: [
            "A. RSA",
            "B. AES",
            "C. DSA",
            "D. ECC"
        ],
        correctAnswer: "B. AES"
    },
    {
        question: "Which of the following is the first step in the incident response process?",
        choices: [
            "A. Containment",
            "B. Identification",
            "C. Eradication",
            "D. Recovery"
        ],
        correctAnswer: "B. Identification"
    },
    {
        question: "Which of the following is a key component of a risk management program?",
        choices: [
            "A. Cost-benefit analysis",
            "B. Business continuity planning",
            "C. Security awareness training",
            "D. Risk assessment"
        ],
        correctAnswer: "D. Risk assessment"
    },
    {
        question: "What is the primary goal of encryption?",
        choices: [
            "A. To provide non-repudiation",
            "B. To ensure data integrity",
            "C. To protect confidentiality",
            "D. To enhance availability"
        ],
        correctAnswer: "C. To protect confidentiality"
    },
    {
        question: "Which of the following is an example of a physical control?",
        choices: [
            "A. Firewall",
            "B. Encryption",
            "C. Security guard",
            "D. Access control list"
        ],
        correctAnswer: "C. Security guard"
    },
    {
        question: "Which security model prevents conflict of interest in access to data?",
        choices: [
            "A. Bell-LaPadula",
            "B. Biba",
            "C. Clark-Wilson",
            "D. Brewer-Nash"
        ],
        correctAnswer: "D. Brewer-Nash"
    },
    {
        question: "What is the purpose of security governance?",
        choices: [
            "A. To define how security is managed across the organization",
            "B. To enforce security policies",
            "C. To monitor network traffic for suspicious activity",
            "D. To conduct penetration testing"
        ],
        correctAnswer: "A. To define how security is managed across the organization"
    },
    {
        question: "Which type of access control model is based on roles assigned to users?",
        choices: [
            "A. Discretionary Access Control (DAC)",
            "B. Mandatory Access Control (MAC)",
            "C. Role-Based Access Control (RBAC)",
            "D. Attribute-Based Access Control (ABAC)"
        ],
        correctAnswer: "C. Role-Based Access Control (RBAC)"
    },
    {
        question: "What does the principle of separation of duties aim to prevent?",
        choices: [
            "A. Single points of failure",
            "B. Unauthorized access",
            "C. Collusion and fraud",
            "D. Redundant processes"
        ],
        correctAnswer: "C. Collusion and fraud"
    },
    {
        question: "Which of the following describes a brute force attack?",
        choices: [
            "A. Using social engineering to obtain passwords",
            "B. Guessing passwords systematically until the correct one is found",
            "C. Exploiting software vulnerabilities",
            "D. Installing malware on a victim's machine"
        ],
        correctAnswer: "B. Guessing passwords systematically until the correct one is found"
    },
    {
        question: "Which of the following is a benefit of cloud computing?",
        choices: [
            "A. Reduced risk of data breaches",
            "B. Increased control over physical security",
            "C. Scalability and flexibility",
            "D. Guaranteed availability"
        ],
        correctAnswer: "C. Scalability and flexibility"
    },
    {
        question: "Which of the following is NOT a characteristic of a public key infrastructure (PKI)?",
        choices: [
            "A. Use of digital certificates",
            "B. Symmetric key exchange",
            "C. Certificate authority (CA) management",
            "D. Asymmetric encryption"
        ],
        correctAnswer: "B. Symmetric key exchange"
    },
    {
        question: "Which of the following best describes a denial of service (DoS) attack?",
        choices: [
            "A. Exploiting software vulnerabilities",
            "B. Intercepting and altering communications",
            "C. Overwhelming a system to make it unavailable",
            "D. Stealing sensitive data"
        ],
        correctAnswer: "C. Overwhelming a system to make it unavailable"
    },
    {
        question: "Which security framework is widely used in the United States for federal information systems?",
        choices: [
            "A. ISO/IEC 27001",
            "B. COBIT",
            "C. NIST SP 800-53",
            "D. ITIL"
        ],
        correctAnswer: "C. NIST SP 800-53"
    },
    {
        question: "Which type of attack is characterized by attackers secretly altering the communication between two parties?",
        choices: [
            "A. Phishing",
            "B. Cross-Site Scripting (XSS)",
            "C. SQL Injection",
            "D. Man-in-the-Middle (MitM)"
        ],
        correctAnswer: "D. Man-in-the-Middle (MitM)"
    },
    {
        question: "Which of the following is an example of an administrative control?",
        choices: [
            "A. Encryption",
            "B. Firewalls",
            "C. Security awareness training",
            "D. Intrusion detection systems"
        ],
        correctAnswer: "C. Security awareness training"
    },
    {
        question: "Which of the following best describes two-factor authentication?",
        choices: [
            "A. Verifying identity using two different types of credentials",
            "B. Verifying identity by asking two different questions",
            "C. Verifying identity using a password and username",
            "D. Verifying identity by checking two forms of ID"
        ],
        correctAnswer: "A. Verifying identity using two different types of credentials"
    },
    {
        question: "Which of the following is a primary purpose of security auditing?",
        choices: [
            "A. To detect intrusions",
            "B. To enforce security policies",
            "C. To verify compliance with regulations",
            "D. To monitor user activity"
        ],
        correctAnswer: "C. To verify compliance with regulations"
    },
    {
        question: "Which of the following is a key component of a disaster recovery plan (DRP)?",
        choices: [
            "A. Risk assessment",
            "B. Incident response procedures",
            "C. Business continuity strategies",
            "D. Backup and recovery procedures"
        ],
        correctAnswer: "D. Backup and recovery procedures"
    },
    {
        question: "Which of the following is an example of a detective control?",
        choices: [
            "A. Firewalls",
            "B. Security policies",
            "C. Audit logs",
            "D. Encryption"
        ],
        correctAnswer: "C. Audit logs"
    },
    {
        question: "What is the primary function of a firewall?",
        choices: [
            "A. To detect and respond to intrusions",
            "B. To filter network traffic",
            "C. To encrypt data in transit",
            "D. To monitor network traffic for malicious activity"
        ],
        correctAnswer: "B. To filter network traffic"
    },
    {
        question: "Which of the following is a characteristic of a cold site?",
        choices: [
            "A. Fully equipped and ready for immediate use",
            "B. Equipped with necessary hardware but no data",
            "C. Equipped with infrastructure but requires setup",
            "D. Operated remotely from a mobile unit"
        ],
        correctAnswer: "C. Equipped with infrastructure but requires setup"
    },
    {
        question: "Which of the following best describes the purpose of a digital certificate?",
        choices: [
            "A. To authenticate users",
            "B. To secure data transmissions",
            "C. To verify the identity of an entity",
            "D. To encrypt data at rest"
        ],
        correctAnswer: "C. To verify the identity of an entity"
    },
    {
        question: "Which type of malware is designed to remain hidden on a system while performing malicious actions?",
        choices: [
            "A. Trojan",
            "B. Worm",
            "C. Rootkit",
            "D. Spyware"
        ],
        correctAnswer: "C. Rootkit"
    },
    {
        question: "Which of the following is a key objective of network segmentation?",
        choices: [
            "A. To increase network speed",
            "B. To isolate sensitive data from the rest of the network",
            "C. To improve network availability",
            "D. To enforce security policies"
        ],
        correctAnswer: "B. To isolate sensitive data from the rest of the network"
    },
    {
        question: "Which of the following best describes a penetration test?",
        choices: [
            "A. A simulated attack on a system to identify vulnerabilities",
            "B. A review of security policies and procedures",
            "C. An audit of network traffic",
            "D. A method of encrypting data"
        ],
        correctAnswer: "A. A simulated attack on a system to identify vulnerabilities"
    },
    {
        question: "Which of the following describes an attribute-based access control (ABAC) model?",
        choices: [
            "A. Access is based on the roles assigned to users",
            "B. Access is based on predefined security labels",
            "C. Access is based on attributes of the user, resource, and environment",
            "D. Access is determined by the data owner"
        ],
        correctAnswer: "C. Access is based on attributes of the user, resource, and environment"
    },
    {
        question: "Which of the following is a benefit of using multifactor authentication (MFA)?",
        choices: [
            "A. It eliminates the need for passwords",
            "B. It reduces the risk of unauthorized access",
            "C. It simplifies the login process",
            "D. It increases system availability"
        ],
        correctAnswer: "B. It reduces the risk of unauthorized access"
    },
    {
        question: "What is the primary purpose of a digital signature?",
        choices: [
            "A. To encrypt a message",
            "B. To verify the identity of the sender",
            "C. To ensure the message is not intercepted",
            "D. To protect against malware"
        ],
        correctAnswer: "B. To verify the identity of the sender"
    },
    {
        question: "Which of the following is NOT considered a benefit of a security awareness program?",
        choices: [
            "A. Reducing the risk of insider threats",
            "B. Enhancing employee knowledge of security policies",
            "C. Ensuring compliance with security regulations",
            "D. Guaranteeing the prevention of all security incidents"
        ],
        correctAnswer: "D. Guaranteeing the prevention of all security incidents"
    },
    {
        question: "Which of the following is a key characteristic of a honeypot?",
        choices: [
            "A. It is a decoy system designed to attract attackers",
            "B. It is a tool used to encrypt data",
            "C. It is a method for detecting intrusions",
            "D. It is a security policy enforcement mechanism"
        ],
        correctAnswer: "A. It is a decoy system designed to attract attackers"
    },
    {
        question: "Which of the following is the primary function of a certificate authority (CA)?",
        choices: [
            "A. To issue and manage digital certificates",
            "B. To encrypt communications between systems",
            "C. To authenticate users",
            "D. To monitor network traffic for malicious activity"
        ],
        correctAnswer: "A. To issue and manage digital certificates"
    },
    {
        question: "What is the primary objective of risk mitigation?",
        choices: [
            "A. To eliminate all risks",
            "B. To transfer risk to another party",
            "C. To reduce the impact or likelihood of risks",
            "D. To ignore risks that are not critical"
        ],
        correctAnswer: "C. To reduce the impact or likelihood of risks"
    },
    {
        question: "Which of the following is a characteristic of mandatory access control (MAC)?",
        choices: [
            "A. Access is determined by the data owner",
            "B. Access is based on predefined security labels and policies",
            "C. Access is based on user roles",
            "D. Access is controlled by the system administrator"
        ],
        correctAnswer: "B. Access is based on predefined security labels and policies"
    },
    {
        question: "Which of the following is the primary purpose of data classification?",
        choices: [
            "A. To organize data for easy retrieval",
            "B. To protect data based on its level of sensitivity",
            "C. To ensure data integrity",
            "D. To comply with legal requirements"
        ],
        correctAnswer: "B. To protect data based on its level of sensitivity"
    },
    {
        question: "Which of the following is an example of a technical control?",
        choices: [
            "A. Security policies",
            "B. Firewalls",
            "C. User training",
            "D. Security audits"
        ],
        correctAnswer: "B. Firewalls"
    },
    {
        question: "Which of the following is a common method used in social engineering attacks?",
        choices: [
            "A. SQL Injection",
            "B. Phishing",
            "C. Cross-Site Scripting (XSS)",
            "D. Brute force attacks"
        ],
        correctAnswer: "B. Phishing"
    },
    {
        question: "Which of the following is a benefit of using encryption for data at rest?",
        choices: [
            "A. It ensures data integrity",
            "B. It prevents unauthorized access to stored data",
            "C. It increases data availability",
            "D. It simplifies data management"
        ],
        correctAnswer: "B. It prevents unauthorized access to stored data"
    },
    {
        question: "What is the primary purpose of a business continuity plan (BCP)?",
        choices: [
            "A. To recover from natural disasters",
            "B. To maintain operations during and after a disruption",
            "C. To ensure compliance with legal requirements",
            "D. To protect against cyber attacks"
        ],
        correctAnswer: "B. To maintain operations during and after a disruption"
    },
    {
        question: "Which of the following is an example of a preventive control?",
        choices: [
            "A. Audit trails",
            "B. Intrusion detection systems",
            "C. Security awareness training",
            "D. Antivirus software"
        ],
        correctAnswer: "D. Antivirus software"
    },
    {
        question: "Which of the following best describes a virtual private network (VPN)?",
        choices: [
            "A. A secure tunnel between two networks",
            "B. A method for encrypting data at rest",
            "C. A type of firewall",
            "D. A software application for detecting malware"
        ],
        correctAnswer: "A. A secure tunnel between two networks"
    },
    {
        question: "Which of the following is a key characteristic of the Clark-Wilson security model?",
        choices: [
            "A. Focuses on confidentiality",
            "B. Focuses on preventing conflict of interest",
            "C. Focuses on data integrity",
            "D. Focuses on role-based access control"
        ],
        correctAnswer: "C. Focuses on data integrity"
    },
    {
        question: "Which of the following is the most important factor in determining the sensitivity of data?",
        choices: [
            "A. The potential impact of unauthorized access or disclosure",
            "B. The cost of storing the data",
            "C. The size of the data",
            "D. The age of the data"
        ],
        correctAnswer: "A. The potential impact of unauthorized access or disclosure"
    },
    {
        question: "Which of the following is the best way to protect against SQL injection attacks?",
        choices: [
            "A. Encrypting database connections",
            "B. Using input validation",
            "C. Implementing multifactor authentication",
            "D. Regularly updating database software"
        ],
        correctAnswer: "B. Using input validation"
    },
    {
        question: "Which of the following is an example of a deterrent control?",
        choices: [
            "A. Surveillance cameras",
            "B. Encryption",
            "C. Backup systems",
            "D. Antivirus software"
        ],
        correctAnswer: "A. Surveillance cameras"
    },
    {
        question: "Which of the following is a primary goal of security incident management?",
        choices: [
            "A. To eliminate all risks",
            "B. To prevent future incidents",
            "C. To quickly respond to and mitigate incidents",
            "D. To improve network performance"
        ],
        correctAnswer: "C. To quickly respond to and mitigate incidents"
    },
    {
        question: "Which of the following best describes the role of a data owner?",
        choices: [
            "A. The person responsible for managing data backups",
            "B. The person who uses the data on a daily basis",
            "C. The person accountable for the data and its protection",
            "D. The person responsible for data storage"
        ],
        correctAnswer: "C. The person accountable for the data and its protection"
    },
    {
        question: "Which of the following best describes data masking?",
        choices: [
            "A. Encrypting data to prevent unauthorized access",
            "B. Replacing sensitive data with fictional data",
            "C. Deleting data that is no longer needed",
            "D. Backing up data to a secure location"
        ],
        correctAnswer: "B. Replacing sensitive data with fictional data"
    },
    {
        question: "Which of the following is a key feature of a hot site?",
        choices: [
            "A. It is always available and fully operational",
            "B. It has no equipment and requires setup",
            "C. It is only used during planned maintenance",
            "D. It is a mobile unit that can be deployed anywhere"
        ],
        correctAnswer: "A. It is always available and fully operational"
    },
    {
        question: "Which of the following is a common method used in phishing attacks?",
        choices: [
            "A. Sending fake emails to trick users into revealing information",
            "B. Encrypting files and demanding a ransom",
            "C. Overloading a server to cause a denial of service",
            "D. Injecting malicious code into a website"
        ],
        correctAnswer: "A. Sending fake emails to trick users into revealing information"
    },
    {
        question: "Which of the following is the primary objective of network segmentation?",
        choices: [
            "A. To increase network speed",
            "B. To isolate sensitive data from the rest of the network",
            "C. To improve network availability",
            "D. To enforce security policies"
        ],
        correctAnswer: "B. To isolate sensitive data from the rest of the network"
    },
    {
        question: "Which of the following is a characteristic of a security token?",
        choices: [
            "A. It provides a one-time password for authentication",
            "B. It is used to encrypt data at rest",
            "C. It is a type of firewall",
            "D. It monitors network traffic for malicious activity"
        ],
        correctAnswer: "A. It provides a one-time password for authentication"
    },
    {
        question: "Which of the following best describes a zero-day vulnerability?",
        choices: [
            "A. A vulnerability that has been known for a long time but not yet patched",
            "B. A vulnerability that is unknown to the software vendor and has no patch available",
            "C. A vulnerability that is only exploitable on the first day of software release",
            "D. A vulnerability that is introduced by a software update"
        ],
        correctAnswer: "B. A vulnerability that is unknown to the software vendor and has no patch available"
    },
    {
        question: "Which of the following is the best way to protect data in transit?",
        choices: [
            "A. Encrypting the data before transmission",
            "B. Backing up the data before transmission",
            "C. Compressing the data before transmission",
            "D. Deleting the data after transmission"
        ],
        correctAnswer: "A. Encrypting the data before transmission"
    },
    {
        question: "Which of the following best describes the principle of defense in depth?",
        choices: [
            "A. Using a single strong control to protect against all threats",
            "B. Applying multiple layers of security controls to protect information",
            "C. Using encryption as the primary security control",
            "D. Relying on physical security to protect information"
        ],
        correctAnswer: "B. Applying multiple layers of security controls to protect information"
    },
    {
        question: "Which of the following is an example of a corrective control?",
        choices: [
            "A. Data backups",
            "B. Encryption",
            "C. Antivirus software",
            "D. Incident response procedures"
        ],
        correctAnswer: "D. Incident response procedures"
    },
    {
        question: "Which of the following is a key characteristic of a worm?",
        choices: [
            "A. It disguises itself as a legitimate program",
            "B. It replicates itself to spread to other systems",
            "C. It requires user interaction to spread",
            "D. It is used to steal sensitive information"
        ],
        correctAnswer: "B. It replicates itself to spread to other systems"
    },
    {
        question: "Which of the following best describes the purpose of an intrusion prevention system (IPS)?",
        choices: [
            "A. To monitor network traffic for malicious activity",
            "B. To detect and respond to intrusions",
            "C. To prevent unauthorized access to network resources",
            "D. To enforce security policies"
        ],
        correctAnswer: "C. To prevent unauthorized access to network resources"
    },
    {
        question: "Which of the following is the primary objective of an access control policy?",
        choices: [
            "A. To define who can access specific resources and under what conditions",
            "B. To prevent unauthorized access to network resources",
            "C. To monitor user activity",
            "D. To enforce security policies"
        ],
        correctAnswer: "A. To define who can access specific resources and under what conditions"
    },
    {
        question: "Which of the following best describes the concept of separation of duties?",
        choices: [
            "A. Assigning multiple responsibilities to a single person",
            "B. Ensuring that critical tasks are performed by more than one person",
            "C. Limiting user access to the minimum necessary",
            "D. Using multifactor authentication for all users"
        ],
        correctAnswer: "B. Ensuring that critical tasks are performed by more than one person"
    },
    {
        question: "Which of the following is a characteristic of a public key in asymmetric encryption?",
        choices: [
            "A. It is kept secret and used for decryption",
            "B. It is shared publicly and used for encryption",
            "C. It is used to authenticate users",
            "D. It is used to create digital signatures"
        ],
        correctAnswer: "B. It is shared publicly and used for encryption"
    },
    {
        question: "Which of the following is a primary goal of a vulnerability assessment?",
        choices: [
            "A. To eliminate all security risks",
            "B. To identify and prioritize vulnerabilities",
            "C. To monitor network traffic",
            "D. To enforce security policies"
        ],
        correctAnswer: "B. To identify and prioritize vulnerabilities"
    },
    {
        question: "Which of the following is an example of an administrative control?",
        choices: [
            "A. Security policies",
            "B. Firewalls",
            "C. Encryption",
            "D. Antivirus software"
        ],
        correctAnswer: "A. Security policies"
    },
    {
        question: "Which of the following best describes a social engineering attack?",
        choices: [
            "A. Exploiting software vulnerabilities to gain unauthorized access",
            "B. Using psychological manipulation to trick users into revealing sensitive information",
            "C. Overloading a system to cause a denial of service",
            "D. Injecting malicious code into a website"
        ],
        correctAnswer: "B. Using psychological manipulation to trick users into revealing sensitive information"
    },
    {
        question: "Which of the following is a key characteristic of a cold site?",
        choices: [
            "A. It is fully operational and ready for immediate use",
            "B. It has minimal equipment and requires setup before use",
            "C. It is only used during planned maintenance",
            "D. It is a mobile unit that can be deployed anywhere"
        ],
        correctAnswer: "B. It has minimal equipment and requires setup before use"
    },
    {
        question: "Which of the following is the primary purpose of an audit log?",
        choices: [
            "A. To monitor network traffic for malicious activity",
            "B. To provide a record of system activity for review",
            "C. To enforce security policies",
            "D. To encrypt data at rest"
        ],
        correctAnswer: "B. To provide a record of system activity for review"
    },
    {
        question: "Which of the following best describes the role of a security operations center (SOC)?",
        choices: [
            "A. To design and implement security policies",
            "B. To monitor, detect, and respond to security incidents",
            "C. To conduct security audits and assessments",
            "D. To manage network infrastructure"
        ],
        correctAnswer: "B. To monitor, detect, and respond to security incidents"
    },
    {
        question: "Which of the following is an example of a preventive control?",
        choices: [
            "A. Data backups",
            "B. Security policies",
            "C. Firewalls",
            "D. Antivirus software"
        ],
        correctAnswer: "C. Firewalls"
    },
    {
        question: "Which of the following best describes the purpose of a security information and event management (SIEM) system?",
        choices: [
            "A. To encrypt data at rest",
            "B. To monitor and analyze security events in real-time",
            "C. To manage digital certificates",
            "D. To conduct vulnerability assessments"
        ],
        correctAnswer: "B. To monitor and analyze security events in real-time"
    },
    {
        question: "Which of the following is a characteristic of multifactor authentication (MFA)?",
        choices: [
            "A. It uses only a password to authenticate users",
            "B. It requires at least two different types of authentication factors",
            "C. It eliminates the need for passwords",
            "D. It simplifies the login process"
        ],
        correctAnswer: "B. It requires at least two different types of authentication factors"
    },
    {
        question: "Which of the following is the best way to protect against brute force attacks?",
        choices: [
            "A. Using strong, complex passwords",
            "B. Implementing multifactor authentication",
            "C. Limiting the number of login attempts",
            "D. Regularly updating software"
        ],
        correctAnswer: "C. Limiting the number of login attempts"
    },
    {
        question: "Which of the following best describes the purpose of a digital signature?",
        choices: [
            "A. To encrypt a message",
            "B. To verify the identity of the sender",
            "C. To ensure the message is not intercepted",
            "D. To protect against malware"
        ],
        correctAnswer: "B. To verify the identity of the sender"
    },
    {
        question: "Which of the following is an example of a detective control?",
        choices: [
            "A. Firewalls",
            "B. Encryption",
            "C. Audit logs",
            "D. Security policies"
        ],
        correctAnswer: "C. Audit logs"
    },
    {
        question: "Which of the following is the primary objective of a disaster recovery plan (DRP)?",
        choices: [
            "A. To recover from natural disasters",
            "B. To maintain operations during and after a disruption",
            "C. To ensure compliance with legal requirements",
            "D. To protect against cyber attacks"
        ],
        correctAnswer: "A. To recover from natural disasters"
    },
  {
        question: "Which of the following is a characteristic of the Bell-LaPadula model?",
        choices: [
            "A. Focuses on confidentiality",
            "B. Focuses on integrity",
            "C. Focuses on availability",
            "D. Focuses on authenticity"
        ],
        correctAnswer: "A. Focuses on confidentiality"
    },
    {
        question: "Which of the following best describes the concept of least privilege?",
        choices: [
            "A. Granting users the highest level of access available",
            "B. Providing users only the access necessary to perform their job functions",
            "C. Allowing users to access all resources within the organization",
            "D. Restricting access to critical systems to only top management"
        ],
        correctAnswer: "B. Providing users only the access necessary to perform their job functions"
    },
    {
        question: "Which of the following is a common method used in a denial-of-service (DoS) attack?",
        choices: [
            "A. Encrypting data and demanding a ransom",
            "B. Flooding a network with excessive traffic",
            "C. Stealing user credentials through phishing",
            "D. Injecting malicious code into web applications"
        ],
        correctAnswer: "B. Flooding a network with excessive traffic"
    },
    {
        question: "Which of the following is the best way to protect sensitive information during transmission?",
        choices: [
            "A. Using strong passwords",
            "B. Encrypting the data",
            "C. Backing up the data regularly",
            "D. Storing the data on secure servers"
        ],
        correctAnswer: "B. Encrypting the data"
    },
    {
        question: "Which of the following best describes the role of a firewall in network security?",
        choices: [
            "A. To prevent unauthorized physical access to network hardware",
            "B. To encrypt data transmitted over the network",
            "C. To monitor and filter incoming and outgoing network traffic",
            "D. To back up network data"
        ],
        correctAnswer: "C. To monitor and filter incoming and outgoing network traffic"
    },
    {
        question: "Which of the following is a characteristic of the Biba model?",
        choices: [
            "A. Focuses on integrity",
            "B. Focuses on confidentiality",
            "C. Focuses on availability",
            "D. Focuses on accountability"
        ],
        correctAnswer: "A. Focuses on integrity"
    },
    {
        question: "Which of the following is a primary goal of encryption?",
        choices: [
            "A. To ensure data integrity",
            "B. To protect data confidentiality",
            "C. To increase data availability",
            "D. To enhance data accessibility"
        ],
        correctAnswer: "B. To protect data confidentiality"
    },
    {
        question: "Which of the following best describes the purpose of a security policy?",
        choices: [
            "A. To define rules for acceptable use of resources",
            "B. To implement security controls",
            "C. To monitor network traffic",
            "D. To assess risks"
        ],
        correctAnswer: "A. To define rules for acceptable use of resources"
    },
    {
        question: "Which of the following is the primary purpose of multifactor authentication (MFA)?",
        choices: [
            "A. To simplify the login process",
            "B. To reduce the risk of unauthorized access",
            "C. To eliminate the need for passwords",
            "D. To improve user experience"
        ],
        correctAnswer: "B. To reduce the risk of unauthorized access"
    },
    {
        question: "Which of the following best describes the function of a digital signature?",
        choices: [
            "A. To encrypt data for secure transmission",
            "B. To authenticate the identity of the sender",
            "C. To compress data for faster transmission",
            "D. To detect changes in transmitted data"
        ],
        correctAnswer: "B. To authenticate the identity of the sender"
    },
    {
        question: "Which of the following is a characteristic of asymmetric encryption?",
        choices: [
            "A. Uses the same key for encryption and decryption",
            "B. Requires two different keys: a public key and a private key",
            "C. Is faster than symmetric encryption",
            "D. Is primarily used for bulk data encryption"
        ],
        correctAnswer: "B. Requires two different keys: a public key and a private key"
    },
    {
        question: "Which of the following best describes the principle of separation of duties?",
        choices: [
            "A. Assigning multiple responsibilities to a single individual",
            "B. Dividing critical tasks among multiple individuals to reduce the risk of fraud",
            "C. Granting administrative privileges to all users",
            "D. Limiting access to sensitive data to top management"
        ],
        correctAnswer: "B. Dividing critical tasks among multiple individuals to reduce the risk of fraud"
    },
    {
        question: "Which of the following is a primary benefit of using a virtual private network (VPN)?",
        choices: [
            "A. Improved network speed",
            "B. Encrypted communication over an insecure network",
            "C. Enhanced data storage capacity",
            "D. Simplified user authentication"
        ],
        correctAnswer: "B. Encrypted communication over an insecure network"
    },
    {
        question: "Which of the following is a key feature of the Clark-Wilson security model?",
        choices: [
            "A. It emphasizes confidentiality over integrity",
            "B. It uses well-formed transactions and separation of duties to ensure integrity",
            "C. It is primarily used to secure government documents",
            "D. It focuses on availability of information"
        ],
        correctAnswer: "B. It uses well-formed transactions and separation of duties to ensure integrity"
    },
    {
        question: "Which of the following best describes a man-in-the-middle (MitM) attack?",
        choices: [
            "A. An attacker intercepts and potentially alters the communication between two parties",
            "B. An attacker sends a large number of requests to a server to overwhelm it",
            "C. An attacker gains unauthorized access to a server through a backdoor",
            "D. An attacker encrypts data and demands a ransom for decryption"
        ],
        correctAnswer: "A. An attacker intercepts and potentially alters the communication between two parties"
    },
    {
        question: "Which of the following is a primary goal of security auditing?",
        choices: [
            "A. To detect vulnerabilities in the network",
            "B. To ensure compliance with security policies and procedures",
            "C. To implement encryption protocols",
            "D. To provide secure remote access to the network"
        ],
        correctAnswer: "B. To ensure compliance with security policies and procedures"
    },
    {
        question: "Which of the following is an example of a technical control?",
        choices: [
            "A. Security policies",
            "B. User training",
            "C. Firewalls",
            "D. Security audits"
        ],
        correctAnswer: "C. Firewalls"
    },
    {
        question: "Which of the following is a characteristic of a cold site?",
        choices: [
            "A. It is fully equipped and ready for immediate use",
            "B. It has the necessary infrastructure but requires installation of hardware and software",
            "C. It is always operational and requires minimal setup",
            "D. It is used for data backup and recovery only"
        ],
        correctAnswer: "B. It has the necessary infrastructure but requires installation of hardware and software"
    },
    {
        question: "Which of the following is a primary objective of a security operations center (SOC)?",
        choices: [
            "A. To develop security policies",
            "B. To monitor, detect, and respond to security incidents",
            "C. To manage network infrastructure",
            "D. To conduct security awareness training"
        ],
        correctAnswer: "B. To monitor, detect, and respond to security incidents"
    },
    {
        question: "Which of the following is a key benefit of using multifactor authentication (MFA)?",
        choices: [
            "A. Simplifies the authentication process",
            "B. Reduces the risk of unauthorized access",
            "C. Eliminates the need for passwords",
            "D. Increases network speed"
        ],
        correctAnswer: "B. Reduces the risk of unauthorized access"
    },
    {
        question: "Which of the following is a characteristic of a hot site?",
        choices: [
            "A. It is a fully operational offsite data center equipped with the latest hardware and software",
            "B. It is an offsite location with minimal equipment and requires setup before use",
            "C. It is a mobile unit that can be deployed during a disaster",
            "D. It is an offsite facility used only for data storage and backups"
        ],
        correctAnswer: "A. It is a fully operational offsite data center equipped with the latest hardware and software"
    },
    {
        question: "Which of the following is the best way to protect against phishing attacks?",
        choices: [
            "A. Encrypting all email communications",
            "B. Regularly updating antivirus software",
            "C. Implementing security awareness training",
            "D. Using firewalls to filter incoming emails"
        ],
        correctAnswer: "C. Implementing security awareness training"
    },
    {
        question: "Which of the following is a key objective of business continuity planning (BCP)?",
        choices: [
            "A. To recover from natural disasters",
            "B. To maintain critical operations during and after a disruption",
            "C. To ensure compliance with legal requirements",
            "D. To protect against cyber attacks"
        ],
        correctAnswer: "B. To maintain critical operations during and after a disruption"
    },
    {
        question: "Which of the following best describes the concept of risk mitigation?",
        choices: [
            "A. Eliminating all risks",
            "B. Transferring risk to another party",
            "C. Reducing the impact or likelihood of risks",
            "D. Ignoring risks that are not critical"
        ],
        correctAnswer: "C. Reducing the impact or likelihood of risks"
    },
    {
        question: "Which of the following best describes the role of a digital certificate?",
        choices: [
            "A. To encrypt data for secure transmission",
            "B. To verify the identity of an entity",
            "C. To authenticate the user to a network",
            "D. To back up important data"
        ],
        correctAnswer: "B. To verify the identity of an entity"
    },
    {
        question: "Which of the following is a primary goal of access control?",
        choices: [
            "A. To prevent unauthorized access to resources",
            "B. To encrypt sensitive data",
            "C. To monitor network traffic",
            "D. To implement firewalls"
        ],
        correctAnswer: "A. To prevent unauthorized access to resources"
    },
    {
        question: "Which of the following is a characteristic of the NIST Cybersecurity Framework?",
        choices: [
            "A. It is only applicable to government organizations",
            "B. It provides a policy framework for managing cybersecurity risk",
            "C. It is mandatory for all organizations",
            "D. It replaces all other cybersecurity standards"
        ],
        correctAnswer: "B. It provides a policy framework for managing cybersecurity risk"
    },
    {
        question: "Which of the following best describes a brute force attack?",
        choices: [
            "A. An attack that uses multiple methods to overwhelm a network",
            "B. An attack that systematically tries all possible password combinations to gain access",
            "C. An attack that injects malicious code into a website",
            "D. An attack that manipulates social engineering techniques to deceive users"
        ],
        correctAnswer: "B. An attack that systematically tries all possible password combinations to gain access"
    }, {
        question: "Which of the following best describes the purpose of encryption in information security?",
        choices: [
            "A. To ensure data availability",
            "B. To protect the confidentiality of data",
            "C. To monitor network traffic",
            "D. To assess and mitigate risks"
        ],
        correctAnswer: "B. To protect the confidentiality of data"
    },
    {
        question: "Which of the following is a characteristic of role-based access control (RBAC)?",
        choices: [
            "A. Access is determined by the user's role within the organization",
            "B. Access is determined by the data owner",
            "C. Access is based on predefined security labels",
            "D. Access is controlled by the system administrator"
        ],
        correctAnswer: "A. Access is determined by the user's role within the organization"
    },
    {
        question: "Which of the following is the best way to protect against SQL injection attacks?",
        choices: [
            "A. Encrypting database communications",
            "B. Using parameterized queries and input validation",
            "C. Implementing strong passwords",
            "D. Regularly updating database software"
        ],
        correctAnswer: "B. Using parameterized queries and input validation"
    },
    {
        question: "Which of the following is a key objective of risk management?",
        choices: [
            "A. To eliminate all security risks",
            "B. To identify, assess, and mitigate risks",
            "C. To implement security policies",
            "D. To enforce security controls"
        ],
        correctAnswer: "B. To identify, assess, and mitigate risks"
    }
];

    let currentFlashcardIndex = 0;
    let currentFlashcard = flashcards[0];

    const questionElement = document.getElementById('question');
    const choiceButtons = [
        document.getElementById('choice0'),
        document.getElementById('choice1'),
        document.getElementById('choice2'),
        document.getElementById('choice3')
    ];
    const resultElement = document.getElementById('result');
    const nextQuestionButton = document.getElementById('next-question');

    function loadFlashcard(index) {
        // Validate index to prevent out-of-bound access
        if (index < 0 || index >= flashcards.length) {
            console.error('Invalid flashcard index');
            return;
        }

        currentFlashcard = flashcards[index];
        resultElement.textContent = '';
        questionElement.textContent = escapeHTML(currentFlashcard.question);
        
        choiceButtons.forEach((button, i) => {
            // Validate the number of choices matches the expected format
            if (i < currentFlashcard.choices.length) {
                button.textContent = escapeHTML(currentFlashcard.choices[i]);
                button.disabled = false;
                button.classList.remove('correct', 'incorrect');
            } else {
                console.error('Mismatch in number of choices for flashcard');
            }
        });
    }

    function handleChoiceClick(event) {
        const selectedChoice = event.target.textContent;
        if (selectedChoice === currentFlashcard.correctAnswer) {
            resultElement.textContent = 'Correct!';
            event.target.classList.add('correct');
        } else {
            resultElement.textContent = `Incorrect! The correct answer is ${escapeHTML(currentFlashcard.correctAnswer)}.`;
            event.target.classList.add('incorrect');
        }
        // Disable all choice buttons after a selection is made
        choiceButtons.forEach(button => button.disabled = true);
    }

    function nextQuestion() {
        currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
        loadFlashcard(currentFlashcardIndex);
    }

    function escapeHTML(str) {
        // Escapes any potential HTML tags or script content in user-supplied strings
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

    nextQuestionButton.addEventListener('click', nextQuestion);

    // Initial load with validation
    if (flashcards.length > 0) {
        loadFlashcard(currentFlashcardIndex);
    } else {
        console.error('No flashcards available');
    }
})();
