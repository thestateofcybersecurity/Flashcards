(() => {
// Multiple-choice flashcards array
const flashcards = [
    {
        question: "What is the primary goal of computer forensics?",
        choices: [
            "A. To recover lost data",
            "B. To analyze network traffic",
            "C. To identify, preserve, recover, and analyze digital evidence",
            "D. To monitor system performance"
        ],
        correctAnswer: "C. To identify, preserve, recover, and analyze digital evidence",
        source: "Source: [CHFI Study Guide - Chapter 1](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following is a volatile data source?",
        choices: [
            "A. Hard drive",
            "B. RAM",
            "C. USB drive",
            "D. CD-ROM"
        ],
        correctAnswer: "B. RAM",
        source: "Source: [NIST SP 800-86 Guide to Integrating Forensic Techniques](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "What is the first step in the forensic investigation process?",
        choices: [
            "A. Analysis",
            "B. Preservation",
            "C. Identification",
            "D. Documentation"
        ],
        correctAnswer: "C. Identification",
        source: "Source: [EC-Council CHFI Official Courseware](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following tools is commonly used for disk imaging in a forensic investigation?",
        choices: [
            "A. Wireshark",
            "B. EnCase",
            "C. Nmap",
            "D. Metasploit"
        ],
        correctAnswer: "B. EnCase",
        source: "Source: [Guidance Software - EnCase](https://www.guidancesoftware.com/products/encase-forensic)"
    },
    {
        question: "Which of the following is considered a best practice when handling digital evidence?",
        choices: [
            "A. Always work on the original evidence",
            "B. Create a bit-for-bit copy of the original evidence",
            "C. Modify the evidence as needed",
            "D. Use any available tool for analysis"
        ],
        correctAnswer: "B. Create a bit-for-bit copy of the original evidence",
        source: "Source: [ACPO Good Practice Guide for Digital Evidence](https://www.acpo.police.uk/)"
    },
    {
        question: "What is the purpose of a write blocker in forensic investigations?",
        choices: [
            "A. To prevent malware from spreading",
            "B. To protect the original evidence from modification",
            "C. To encrypt the evidence",
            "D. To wipe the data on the drive"
        ],
        correctAnswer: "B. To protect the original evidence from modification",
        source: "Source: [NIST SP 800-86 - Digital Forensics Guide](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following is a hashing algorithm commonly used in forensic investigations?",
        choices: [
            "A. MD5",
            "B. RSA",
            "C. DES",
            "D. AES"
        ],
        correctAnswer: "A. MD5",
        source: "Source: [NIST Digital Forensics Standards](https://www.nist.gov/programs-projects/digital-forensics)"
    },
    {
        question: "Which of the following actions should be taken first when seizing a computer at a crime scene?",
        choices: [
            "A. Power off the computer",
            "B. Document the state of the computer",
            "C. Disconnect all peripherals",
            "D. Access all files on the computer"
        ],
        correctAnswer: "B. Document the state of the computer",
        source: "Source: [SWGDE Best Practices for Computer Forensics](https://www.swgde.org/documents)"
    },
    {
        question: "What type of attack involves an attacker manipulating a file system to gain unauthorized access?",
        choices: [
            "A. SQL injection",
            "B. Buffer overflow",
            "C. Directory traversal",
            "D. Cross-site scripting"
        ],
        correctAnswer: "C. Directory traversal",
        source: "Source: [OWASP Directory Traversal](https://owasp.org/www-community/attacks/Path_Traversal)"
    },
    {
        question: "Which of the following best describes the chain of custody in forensic investigations?",
        choices: [
            "A. A record of who accessed the evidence and when",
            "B. A legal agreement between two parties",
            "C. A method of encrypting data",
            "D. A physical chain used to secure evidence"
        ],
        correctAnswer: "A. A record of who accessed the evidence and when",
        source: "Source: [NIST SP 800-86 - Digital Evidence](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "What is the primary purpose of a forensic disk image?",
        choices: [
            "A. To compress data",
            "B. To create a backup",
            "C. To capture an exact replica of the original media",
            "D. To remove malware from a system"
        ],
        correctAnswer: "C. To capture an exact replica of the original media",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which tool is commonly used for analyzing network traffic in a forensic investigation?",
        choices: [
            "A. EnCase",
            "B. Wireshark",
            "C. FTK",
            "D. Autopsy"
        ],
        correctAnswer: "B. Wireshark",
        source: "Source: [Wireshark Documentation](https://www.wireshark.org/docs/wsug_html_chunked/)"
    },
    {
        question: "Which file system is commonly used on Windows operating systems?",
        choices: [
            "A. HFS+",
            "B. Ext4",
            "C. NTFS",
            "D. FAT32"
        ],
        correctAnswer: "C. NTFS",
        source: "Source: [Microsoft NTFS Documentation](https://docs.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview)"
    },
    {
        question: "Which of the following is a primary challenge when collecting evidence from cloud environments?",
        choices: [
            "A. The physical location of data",
            "B. The size of the data",
            "C. The format of the data",
            "D. The cost of the data"
        ],
        correctAnswer: "A. The physical location of data",
        source: "Source: [NIST Cloud Computing Forensic Challenges](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-146.pdf)"
    },
    {
        question: "What does the acronym 'ACPO' stand for in digital forensics?",
        choices: [
            "A. Association of Chief Police Officers",
            "B. American Cybersecurity Protection Organization",
            "C. Advanced Cyber Protection Officer",
            "D. Association of Cybercrime Prevention Officers"
        ],
        correctAnswer: "A. Association of Chief Police Officers",
        source: "Source: [ACPO Good Practice Guide for Digital Evidence](https://www.acpo.police.uk/)"
    },
    {
        question: "Which of the following describes a 'dead' forensic acquisition?",
        choices: [
            "A. Capturing data from a powered-on system",
            "B. Capturing data from a system that has been powered off",
            "C. Analyzing data in real-time",
            "D. Recovering deleted files"
        ],
        correctAnswer: "B. Capturing data from a system that has been powered off",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes steganography?",
        choices: [
            "A. The practice of hiding data within other files",
            "B. The encryption of data using a key",
            "C. The process of compressing files",
            "D. The method of securely deleting files"
        ],
        correctAnswer: "A. The practice of hiding data within other files",
        source: "Source: [NIST Steganography Guidelines](https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)"
    },
    {
        question: "Which type of forensic analysis is used to recover deleted files?",
        choices: [
            "A. Network analysis",
            "B. File system analysis",
            "C. Malware analysis",
            "D. Memory analysis"
        ],
        correctAnswer: "B. File system analysis",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following is a tool used for mobile device forensics?",
        choices: [
            "A. Wireshark",
            "B. Cellebrite",
            "C. EnCase",
            "D. FTK"
        ],
        correctAnswer: "B. Cellebrite",
        source: "Source: [Cellebrite Official Website](https://www.cellebrite.com/en/home/)"
    },
    {
        question: "Which of the following is a method for securing the chain of custody of digital evidence?",
        choices: [
            "A. Keeping evidence in a locked, secure location",
            "B. Sharing evidence with colleagues for analysis",
            "C. Allowing access to the evidence by anyone",
            "D. Modifying evidence to fit the investigation"
        ],
        correctAnswer: "A. Keeping evidence in a locked, secure location",
        source: "Source: [NIST SP 800-86 - Digital Evidence](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following file types is most likely to contain hidden data?",
        choices: [
            "A. Text files",
            "B. JPEG images",
            "C. PDF documents",
            "D. HTML files"
        ],
        correctAnswer: "B. JPEG images",
        source: "Source: [NIST Steganography Guidelines](https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)"
    },
    {
        question: "Which of the following tools is used to analyze the Windows registry?",
        choices: [
            "A. Autopsy",
            "B. RegShot",
            "C. EnCase",
            "D. FTK Imager"
        ],
        correctAnswer: "B. RegShot",
        source: "Source: [RegShot Documentation](http://sourceforge.net/projects/regshot/)"
    },
    {
        question: "Which file format is commonly used for forensic disk images?",
        choices: [
            "A. PDF",
            "B. JPEG",
            "C. E01",
            "D. DOCX"
        ],
        correctAnswer: "C. E01",
        source: "Source: [Guidance Software - EnCase](https://www.guidancesoftware.com/products/encase-forensic)"
    },
    {
        question: "Which of the following best describes a hash value in digital forensics?",
        choices: [
            "A. A random number assigned to a file",
            "B. A unique identifier generated by an algorithm for a file",
            "C. A sequence of binary data",
            "D. A portion of a file"
        ],
        correctAnswer: "B. A unique identifier generated by an algorithm for a file",
        source: "Source: [NIST Digital Forensics Standards](https://www.nist.gov/programs-projects/digital-forensics)"
    },
    {
        question: "What is the primary purpose of a forensic write blocker?",
        choices: [
            "A. To prevent the system from booting",
            "B. To prevent changes to the evidence during analysis",
            "C. To encrypt data on the disk",
            "D. To clone the hard drive"
        ],
        correctAnswer: "B. To prevent changes to the evidence during analysis",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a logical acquisition?",
        choices: [
            "A. Capturing an image of the entire hard drive",
            "B. Capturing only the files and directories visible to the user",
            "C. Capturing the data in RAM",
            "D. Capturing encrypted files only"
        ],
        correctAnswer: "B. Capturing only the files and directories visible to the user",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following file systems is most commonly used in Linux?",
        choices: [
            "A. NTFS",
            "B. FAT32",
            "C. HFS+",
            "D. Ext4"
        ],
        correctAnswer: "D. Ext4",
        source: "Source: [Linux File System Overview](https://www.kernel.org/doc/html/latest/filesystems/ext4.html)"
    },
    {
        question: "Which type of evidence is considered to have the highest integrity in a court of law?",
        choices: [
            "A. Digital evidence",
            "B. Physical evidence",
            "C. Testimonial evidence",
            "D. Documentary evidence"
        ],
        correctAnswer: "A. Digital evidence",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following describes a 'live' forensic acquisition?",
        choices: [
            "A. Acquiring data from a powered-off system",
            "B. Acquiring data from a system that is currently running",
            "C. Capturing data from a backup",
            "D. Restoring deleted files"
        ],
        correctAnswer: "B. Acquiring data from a system that is currently running",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a forensic investigation?",
        choices: [
            "A. The analysis of network traffic",
            "B. The process of collecting, preserving, and analyzing digital evidence",
            "C. The process of performing penetration testing",
            "D. The monitoring of system performance"
        ],
        correctAnswer: "B. The process of collecting, preserving, and analyzing digital evidence",
        source: "Source: [CHFI Study Guide - Chapter 1](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following is used to verify the integrity of a disk image?",
        choices: [
            "A. Encryption",
            "B. Hashing",
            "C. Compression",
            "D. Backup"
        ],
        correctAnswer: "B. Hashing",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a forensic image?",
        choices: [
            "A. A compressed copy of the original disk",
            "B. A bit-for-bit copy of the original disk",
            "C. An encrypted copy of the original disk",
            "D. A backup copy of the original disk"
        ],
        correctAnswer: "B. A bit-for-bit copy of the original disk",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes the concept of steganography?",
        choices: [
            "A. Encrypting data for secure transmission",
            "B. Hiding data within other files or images",
            "C. Compressing files to save space",
            "D. Deleting data securely"
        ],
        correctAnswer: "B. Hiding data within other files or images",
        source: "Source: [NIST Steganography Guidelines](https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)"
    },
    {
        question: "Which of the following best describes the role of a forensic examiner?",
        choices: [
            "A. To collect, analyze, and present digital evidence in legal proceedings",
            "B. To perform penetration testing on networks",
            "C. To monitor network traffic for security threats",
            "D. To design and implement security policies"
        ],
        correctAnswer: "A. To collect, analyze, and present digital evidence in legal proceedings",
        source: "Source: [CHFI Study Guide - Chapter 1](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following is the most commonly used hashing algorithm in digital forensics?",
        choices: [
            "A. MD5",
            "B. SHA-256",
            "C. AES",
            "D. DES"
        ],
        correctAnswer: "A. MD5",
        source: "Source: [NIST Digital Forensics Standards](https://www.nist.gov/programs-projects/digital-forensics)"
    },
    {
        question: "Which of the following is a potential issue when using cloud services in forensic investigations?",
        choices: [
            "A. The speed of data retrieval",
            "B. The cost of the services",
            "C. The physical location of the data",
            "D. The availability of tools"
        ],
        correctAnswer: "C. The physical location of the data",
        source: "Source: [NIST Cloud Computing Forensic Challenges](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-146.pdf)"
    },
    {
        question: "Which of the following is a tool commonly used for network forensics?",
        choices: [
            "A. EnCase",
            "B. FTK",
            "C. Wireshark",
            "D. Autopsy"
        ],
        correctAnswer: "C. Wireshark",
        source: "Source: [Wireshark Documentation](https://www.wireshark.org/docs/wsug_html_chunked/)"
    },
    {
        question: "Which of the following is a key concern when handling digital evidence?",
        choices: [
            "A. The cost of the investigation",
            "B. The location of the evidence",
            "C. The potential for evidence tampering",
            "D. The size of the evidence"
        ],
        correctAnswer: "C. The potential for evidence tampering",
        source: "Source: [ACPO Good Practice Guide for Digital Evidence](https://www.acpo.police.uk/)"
    },
    {
        question: "Which of the following is the purpose of a forensic analysis?",
        choices: [
            "A. To destroy evidence",
            "B. To recover data",
            "C. To analyze and interpret digital evidence",
            "D. To modify data for future use"
        ],
        correctAnswer: "C. To analyze and interpret digital evidence",
        source: "Source: [CHFI Study Guide - Chapter 1](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following best describes a forensic investigation?",
        choices: [
            "A. The analysis of network traffic",
            "B. The process of collecting, preserving, and analyzing digital evidence",
            "C. The process of performing penetration testing",
            "D. The monitoring of system performance"
        ],
        correctAnswer: "B. The process of collecting, preserving, and analyzing digital evidence",
        source: "Source: [CHFI Study Guide - Chapter 1](https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/)"
    },
    {
        question: "Which of the following is a common file format used in digital forensics?",
        choices: [
            "A. NTFS",
            "B. FAT32",
            "C. E01",
            "D. HFS+"
        ],
        correctAnswer: "C. E01",
        source: "Source: [Guidance Software - EnCase](https://www.guidancesoftware.com/products/encase-forensic)"
    },
    {
        question: "Which of the following is an important consideration when collecting digital evidence?",
        choices: [
            "A. The size of the evidence",
            "B. The speed of the collection process",
            "C. The preservation of the evidence integrity",
            "D. The cost of the collection process"
        ],
        correctAnswer: "C. The preservation of the evidence integrity",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a live forensic analysis?",
        choices: [
            "A. Analyzing data from a system that is powered off",
            "B. Analyzing data from a system that is currently running",
            "C. Analyzing data from a backup",
            "D. Analyzing data from a forensic image"
        ],
        correctAnswer: "B. Analyzing data from a system that is currently running",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following is a tool used for memory forensics?",
        choices: [
            "A. EnCase",
            "B. Volatility",
            "C. FTK Imager",
            "D. Autopsy"
        ],
        correctAnswer: "B. Volatility",
        source: "Source: [Volatility Framework Documentation](https://www.volatilityfoundation.org/)"
    },
    {
        question: "Which of the following best describes the chain of custody?",
        choices: [
            "A. A record of who accessed the evidence and when",
            "B. A legal agreement between two parties",
            "C. A method of encrypting data",
            "D. A physical chain used to secure evidence"
        ],
        correctAnswer: "A. A record of who accessed the evidence and when",
        source: "Source: [NIST SP 800-86 - Digital Evidence](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following is a challenge when collecting evidence from cloud environments?",
        choices: [
            "A. The speed of data retrieval",
            "B. The cost of the services",
            "C. The physical location of the data",
            "D. The availability of tools"
        ],
        correctAnswer: "C. The physical location of the data",
        source: "Source: [NIST Cloud Computing Forensic Challenges](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-146.pdf)"
    },
    {
        question: "Which of the following best describes a forensic image?",
        choices: [
            "A. A compressed copy of the original disk",
            "B. A bit-for-bit copy of the original disk",
            "C. An encrypted copy of the original disk",
            "D. A backup copy of the original disk"
        ],
        correctAnswer: "B. A bit-for-bit copy of the original disk",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes the concept of steganography?",
        choices: [
            "A. Encrypting data for secure transmission",
            "B. Hiding data within other files or images",
            "C. Compressing files to save space",
            "D. Deleting data securely"
        ],
        correctAnswer: "B. Hiding data within other files or images",
        source: "Source: [NIST Steganography Guidelines](https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)"
    },
    {
        question: "Which of the following is a potential issue when using cloud services in forensic investigations?",
        choices: [
            "A. The speed of data retrieval",
            "B. The cost of the services",
            "C. The physical location of the data",
            "D. The availability of tools"
        ],
        correctAnswer: "C. The physical location of the data",
        source: "Source: [NIST Cloud Computing Forensic Challenges](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-146.pdf)"
    },
    {
        question: "Which of the following best describes a logical acquisition?",
        choices: [
            "A. Capturing an image of the entire hard drive",
            "B. Capturing only the files and directories visible to the user",
            "C. Capturing the data in RAM",
            "D. Capturing encrypted files only"
        ],
        correctAnswer: "B. Capturing only the files and directories visible to the user",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes the purpose of a forensic write blocker?",
        choices: [
            "A. To prevent the system from booting",
            "B. To prevent changes to the evidence during analysis",
            "C. To encrypt data on the disk",
            "D. To clone the hard drive"
        ],
        correctAnswer: "B. To prevent changes to the evidence during analysis",
        source: "Source: [NIST SP 800-86 - Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following is a common method for securing the chain of custody of digital evidence?",
        choices: [
            "A. Keeping evidence in a locked, secure location",
            "B. Sharing evidence with colleagues for analysis",
            "C. Allowing access to the evidence by anyone",
            "D. Modifying evidence to fit the investigation"
        ],
        correctAnswer: "A. Keeping evidence in a locked, secure location",
        source: "Source: [NIST SP 800-86 - Digital Evidence](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a 'dead' forensic acquisition?",
        choices: [
            "A. Capturing data from a powered-on system",
            "B. Capturing data from a system that has been powered off",
            "C. Analyzing data in real-time",
            "D. Recovering deleted files"
        ],
        correctAnswer: "B. Capturing data from a system that has been powered off",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following best describes a live forensic acquisition?",
        choices: [
            "A. Acquiring data from a powered-off system",
            "B. Acquiring data from a system that is currently running",
            "C. Capturing data from a backup",
            "D. Restoring deleted files"
        ],
        correctAnswer: "B. Acquiring data from a system that is currently running",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
    },
    {
        question: "Which of the following tools is used to analyze the Windows registry?",
        choices: [
            "A. Autopsy",
            "B. RegShot",
            "C. EnCase",
            "D. FTK Imager"
        ],
        correctAnswer: "B. RegShot",
        source: "Source: [RegShot Documentation](http://sourceforge.net/projects/regshot/)"
    },
    {
        question: "Which of the following is a tool used for mobile device forensics?",
        choices: [
            "A. Wireshark",
            "B. Cellebrite",
            "C. EnCase",
            "D. FTK"
        ],
        correctAnswer: "B. Cellebrite",
        source: "Source: [Cellebrite Official Website](https://www.cellebrite.com/en/home/)"
    },
    {
        question: "Which of the following best describes a forensic image?",
        choices: [
            "A. A compressed copy of the original disk",
            "B. A bit-for-bit copy of the original disk",
            "C. An encrypted copy of the original disk",
            "D. A backup copy of the original disk"
        ],
        correctAnswer: "B. A bit-for-bit copy of the original disk",
        source: "Source: [NIST SP 800-86 Guide to Digital Forensics](https://csrc.nist.gov/publications/detail/sp/800-86/final)"
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
