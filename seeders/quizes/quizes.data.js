export const quizesData = [
  {
    courseLink: "ransomware",
    items: [
      {
        question: {
          pl: "Co jest głównym celem ransomware?",
          en: "What is the main target of ransomware?",
        },
        answers: [
          {
            text: {
              pl: "Wykradnięcie danych od użytkownika",
              en: "Stealing user data",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Usunięcie wszystkich danych na komputerze ofiary",
              en: "Wiping data on the victim's computer",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zaszyfrowanie danych na urządzeniu",
              en: "Encrypting data on the device",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Infekcja przeglądarki celem wyświetlania reklam",
              en: "Infection of the browser to display advertisements",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Częste wykonywanie kopii zapasowej danych nie chroni całkowicie przed konsekwencjami ransomware",
          en: "Frequent data backup does not completely protect against the consequences of ransomware",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Którym z wymienionych sposobów, ransomware zazwyczaj NIE DOSTAJE SIĘ do urządzenia?",
          en: "Which of the following ways ransomware usually DOES NOT infect the device?",
        },
        answers: [
          {
            text: {
              pl: "Zdalne wykonanie kodu",
              en: "Remote code execution",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Maile phishingowe",
              en: "Phishing mails",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zdalny dostęp",
              en: "Remote access",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Sieć Wi-Fi",
              en: "Wi-Fi network",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "W przypadku infekcji ransomware, pierwszą rzeczą, którą należy zrobić, jest zapłata okupu",
          en: "In the case of a ransomware infection, the first thing to do is pay the ransom",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Używanie dobrego antywirusowa kompletnie eliminuje zagrożenie ransomware",
          en: "Using a good antivirus program completely eliminates the threat of ransomware",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    courseLink: "sql-injection",
    items: [
      {
        question: {
          pl: "Na czym polega atak SQL Injection?",
          en: "What is an SQL Injection attack?",
        },
        answers: [
          {
            text: {
              pl: "Na uruchomieniu na urządzeniu końcowym ofiary programu, który zaszyfruje wszystkie jej dane",
              en: "Running a program on the victim's terminal device that encrypts all their data",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na przekierowaniu użytkowników sieci Wi-Fi do spreparowanej strony internetowej",
              en: "Redirecting Wi-Fi users to a crafted website",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na całkowitym odebraniu dostępu do strony internetowej ofiary",
              en: "Complete denial of access to the victim's website",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na znalezieniu luki w oprogramowaniu i wykorzystaniu jej",
              en: "Finding a vulnerability in software and exploiting it",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Atak SQL Injection nie ma związku z bazami danych",
          en: "SQL Injection attack is not related to databases",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Jakie narzędzie znacznie ułatwia atakującemu znalezienie podatności?",
          en: "Which tool makes it much easier for an attacker to find vulnerabilities?",
        },
        answers: [
          {
            text: {
              pl: "Serwer proxy",
              en: "Proxy server",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Keylogger",
              en: "Keylogger",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Skanowanie portów",
              en: "Port scanning",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Blokada usług",
              en: "Denial of Service",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jakie polecenie języka SQL wykonuje zapytanie zwracające dane z bazy?",
          en: "What SQL statement executes a query that returns data from the database?",
        },
        answers: [
          {
            text: {
              pl: "ALTER DATABASE",
              en: "ALTER DATABASE",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "UPDATE",
              en: "UPDATE",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "SELECT",
              en: "SELECT",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "ALTER TABLE",
              en: "ALTER TABLE",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jakie są najlepsze praktyki na ochronę przed atakami SQL Injection",
          en: "What are the best practices for protection against SQL Injection attacks",
        },
        answers: [
          {
            text: {
              pl: "Instalacja antywirusa i monitorowanie aktywności sieciowej na urządzeniu",
              en: "Installing antivirus and monitoring network activity on the device",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Dokładne filtrowanie i czyszczenie danych przesyłanych do bazy danych od użytkownika",
              en: "Thorough filtering and cleaning of data sent to the database from the user",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Uniemożliwienie w formularzu interfejsu użytkownika przesłania znaków specjalnych",
              en: "Prevent special characters from being transmitted in the user interface form",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Stosowanie zasady ograniczonego zaufania",
              en: "Application of the principle of limited trust",
            },
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    courseLink: "phishing",
    items: [
      {
        question: {
          pl: "Który z poniższych NIE ZALICZA SIĘ do ataków phishingowych?",
          en: "Which of the following DOES NOT qualify as a phishing attack?",
        },
        answers: [
          {
            text: {
              pl: "Pharming",
              en: "Pharming",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Phishing mailowy",
              en: "Mail phishing",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Data phishing",
              en: "Data phishing",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Spear phishing",
              en: "Spear phishing",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jaka grupa osób może paść ofiarą ataków phishingowych?",
          en: "What group of people can fall victim to phishing attacks?",
        },
        answers: [
          {
            text: {
              pl: "Pracownicy korporacji",
              en: "Corporate employees",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zwykli użytkownicy",
              en: "Regular users",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Osoby nie korzystające z internetu",
              en: "People who do not use the Internet",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Czy atakujący może podszyć się pod dowolnego nadawcę SMS?",
          en: "Can attacker impersonate any SMS sender?",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Najbardziej podatnym elementem ataku phishingowego jest...",
          en: "The most vulnerable element of a phishing attack is...",
        },
        answers: [
          {
            text: {
              pl: "Przeglądarka internetowa",
              en: "Web browser",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "System operacyjny",
              en: "Operating system",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Filtr antyspamowy",
              en: "Spam filter",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Człowiek",
              en: "Human",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Używanie tych samych danych logowania dla każdej witryny to dobry pomysł.",
          en: "Using the same login details for each site is a good idea.",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    courseLink: "dos",
    items: [
      {
        question: {
          pl: "Co ma na celu atak DoS?",
          en: "What is the purpose of a DoS attack?",
        },
        answers: [
          {
            text: {
              pl: "Wykradnięcie danych ofiary",
              en: "Stealing the victim's data",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wstrzyknięcie złośliwego skryptu",
              en: "Injection of a malicious script",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Przechwycenie treści odwiedzanych stron internetowych przez ofiarę",
              en: "Interception of the content of websites visited by the victim",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zablokowanie dostępu do podstawowych funkcjonalności strony",
              en: "Blocking access to basic functionality of the website",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Czym różni się atak DDoS od ataku DoS?",
          en: "What is the difference between a DDoS attack and a DoS attack?",
        },
        answers: [
          {
            text: {
              pl: "Wieloma źródłami ataku",
              en: "Multiple sources of attack",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Technologią wykorzystaną w ataku",
              en: "The tools used in the attack",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Celem ataku",
              en: "Attack target",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Który z typów ataku DDoS NIE JEST prawidłowy?",
          en: "Which type of DDoS attack is NOT correct?",
        },
        answers: [
          {
            text: {
              pl: "Atak wolumetryczny",
              en: "Volumetric attack",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Atak TCP",
              en: "TCP Attack",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Atak typu Reflected",
              en: "Reflected Attack",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Atak fragmentacyjny",
              en: "Fragmentation attack",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Efekty ataku DDoS mogą być zauważalne po chwili od jego rozpoczęcia",
          en: "The effects of a DDoS attack may be noticeable a moment after it starts",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Która z poniższych opcji może być wykorzystana celem przeciwdziałania atakom typu DDoS?",
          en: "Which of the following options can be used to counter DDoS attacks?",
        },
        answers: [
          {
            text: {
              pl: "Używanie zapór ogniowych",
              en: "Using firewalls",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Migracja infrastruktury do chmury publicznej",
              en: "Migrating infrastructure to the public cloud",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Mechanizm CAPTCHA",
              en: "CAPTCHA",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    courseLink: "keylogger",
    items: [
      {
        question: {
          pl: "Czym jest keylogger?",
          en: "What is a keylogger",
        },
        answers: [
          {
            text: {
              pl: "Narzędziem lub oprogramowaniem rejestrującym aktywność klawiatury",
              en: "A tool or software that records keyboard activity",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Popularnym złośliwym skryptem",
              en: "A popular malicious script",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Mechanizmem blokującym dostęp do wybranych usług",
              en: "Mechanism for blocking access to selected services",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wirusem, który przekierowuje użytkownika na strony phishingowe",
              en: "A virus that redirects the user to phishing sites",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Urządzenie może zostać zainfekowane keyloggerem poprzez...",
          en: "The device can be infected with a keylogger by...",
        },
        answers: [
          {
            text: {
              pl: "Atak XSS",
              en: "XSS Attack",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fizyczny dostęp do urządzenia",
              en: "Physical access to the device",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Maile phishingowe",
              en: "Phishing mails",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Na jakie rodzaje można podzielić keyloggery?",
          en: "What types of keyloggers can be divided into?",
        },
        answers: [
          {
            text: {
              pl: "Tylko sprzętowe",
              en: "Only hardware",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Sprzętowe i programowe",
              en: "Hardware and software",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Tylko programowe",
              en: "Only software",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Sprzętowe, programowe i sieciowe",
              en: "Hardware, software and network",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Używanie antywirusa w całości eliminuje zagrożenie ataku keyloggerem sprzętowym",
          en: "Using antivirus completely eliminates the threat of a hardware keylogger attack",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Która z poniższych opcji pomaga przeciwdziałać skutkom infekcji keyloggerem?",
          en: "Which of the following helps counteract the effects of a keylogger infection?",
        },
        answers: [
          {
            text: {
              pl: "Używanie uwierzytelniania dwuskładnikowego (2FA)",
              en: "Using two-factor authentication (2FA)",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Formatowanie dysku urządzenia",
              en: "Formatting the device disk",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Usunięcie złośliwego oprogramowania",
              en: "Removal of malware",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    courseLink: "xss",
    items: [
      {
        question: {
          pl: "Na czym polega atak XSS?",
          en: "How does an XSS attack look like?",
        },
        answers: [
          {
            text: {
              pl: "Na umieszczeniu złośliwego skryptu w bazie danych",
              en: "Placing a malicious script in the database",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na uzyskaniu nieautoryzowanego dostępu do serwisu internetowego",
              en: "Gaining unauthorised access to the website",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na umieszczeniu złośliwego skryptu w zawartości strony internetowej",
              en: "Inserting a malicious script into the content of a website",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Typem ataku XSS NIE JEST:",
          en: "A type of XSS attack IS NOT",
        },
        answers: [
          {
            text: {
              pl: "XSS wolumetryczny",
              en: "Volmetric XSS",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Reflected XSS",
              en: "Reflected XSS",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Dom-based XSS",
              en: "Dom-based XSS",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Stored XSS",
              en: "Stored XSS",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Atak XSS może zmodyfikować zawartość podatnej strony internetowej",
          en: "An XSS attack can modify the content of a vulnerable website",
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jaki rodzaj strony ma największe prawdopodobieństwo na bycie podatnym na atak XSS?",
          en: "What type of site is most likely to be vulnerable to an XSS attack?",
        },
        answers: [
          {
            text: {
              pl: "Strona umożliwiająca przesyłanie i oglądanie wideo",
              en: "Website for uploading and watching video",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Blog, na którym można dodawać wpisy i komentarze",
              en: "A blog where you can add posts and comments",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Strona przedstawiająca usługi oferowane przez firmę",
              en: "Website presenting the services offered by the company",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Gra przeglądarkowa",
              en: "Browser game",
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Która z poniższych opcji pozwala programistom na niwelowanie prawdopodobieństwa podatności strony na atak XSS?",
          en: "Which of the following options allows developers to mitigate the likelihood of a site being vulnerable to an XSS attack?",
        },
        answers: [
          {
            text: {
              pl: "Używanie popularnych szkieletów oprogramowania (frameworków) w procesie tworzenia serwisu",
              en: "Using popular software frameworks in the service development process",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Stosowanie odpowiedniej polityki CORS",
              en: "Use of an appropriate CORS policy",
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Walidacja i czyszczenie danych wejściowych",
              en: "Validation and cleaning of input data",
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct",
            },
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
