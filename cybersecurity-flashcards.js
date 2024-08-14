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
    { question: "What is an air gap in cybersecurity?", answer: "A security measure where a system is physically isolated from other networks, making it inaccessible from the internet." }
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
