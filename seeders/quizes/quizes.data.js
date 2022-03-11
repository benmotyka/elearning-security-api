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
              en: "Stealing user data"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Usunięcie wszystkich danych na komputerze ofiary",
              en: "Wiping data on the victim's computer"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zaszyfrowanie danych na urządzeniu",
              en: "Encrypting data on the device"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Infekcja przeglądarki celem wyświetlania reklam",
              en: "Infection of the browser to display advertisements"
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Częste wykonywanie kopii zapasowej danych nie chroni całkowicie przed konsekwencjami ransomware",
          en: "Frequent data backup does not completely protect against the consequences of ransomware"
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
              en: "False"
            },
            isCorrect: false,
          }
        ],
      },
      {
        question: {
          pl: "Którym z wymienionych sposobów, ransomware zazwyczaj NIE DOSTAJE SIĘ do urządzenia?",
          en: "Which of the following ways does ransomware usually NOT infects the device?"
        },
        answers: [
          {
            text: {
              pl: "Zdalne wykonanie kodu",
              en: "Remote code execution"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Maile phishingowe",
              en: "Phishing mails"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zdalny dostęp",
              en: "Remote access"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Sieć Wi-Fi",
              en: "Wi-Fi network"
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "W przypadku infekcji ransomware, pierwszą rzeczą, którą należy zrobić, jest zapłata okupu",
          en: "In the case of a ransomware infection, the first thing to do is pay the ransom"
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False"
            },
            isCorrect: true,
          }
        ],
      },
      {
        question: {
          pl: "Używanie dobrego antywirusowa kompletnie eliminuje zagrożenie ransomware",
          en: "Using a good antivirus program completely eliminates the threat of ransomware"
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False"
            },
            isCorrect: true,
          }
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
          en: "What is an SQL Injection attack?"
        },
        answers: [
          {
            text: {
              pl: "Na uruchomieniu na urządzeniu końcowym ofiary programu, który zaszyfruje wszystkie jej dane",
              en: "Running a program on the victim's terminal device that encrypts all their data"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na przekierowaniu użytkowników sieci Wi-Fi do spreparowanej strony internetowej",
              en: "Redirecting Wi-Fi users to a crafted website"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na całkowitym odebraniu dostępu do strony internetowej ofiary",
              en: "Complete denial of access to the victim's website"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Na znalezieniu luki w oprogramowaniu i wykorzystaniu jej",
              en: "Finding a vulnerability in software and exploiting it"
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Atak SQL Injection nie ma związku z bazami danych",
          en: "SQL Injection attack is not related to databases"
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False"
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Jakie narzędzie znacznie ułatwia atakującemu znalezienie podatności?",
          en: "Which tool makes it much easier for an attacker to find vulnerabilities?"
        },
        answers: [
          {
            text: {
              pl: "Serwer proxy",
              en: "Proxy server"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Keylogger",
              en: "Keylogger"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Skanowanie portów",
              en: "Port scanning"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Blokada usług",
              en: "Denial of Service"
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jakie polecenie języka SQL wykonuje zapytanie zwracające dane z bazy?",
          en: "What SQL statement executes a query that returns data from the database?"
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
              en: "UPDATE"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "SELECT",
              en: "SELECT"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "ALTER TABLE",
              en: "ALTER TABLE"
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jakie są najlepsze praktyki na ochronę przed atakami SQL Injection",
          en: "What are the best practices for protection against SQL Injection attacks"
        },
        answers: [
          {
            text: {
              pl: "Instalacja antywirusa i monitorowanie aktywności sieciowej na urządzeniu",
              en: "Installing antivirus and monitoring network activity on the device"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Dokładne filtrowanie i czyszczenie danych przesyłanych do bazy danych od użytkownika",
              en: "Thorough filtering and cleaning of data sent to the database from the user"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Uniemożliwienie w formularzu interfejsu użytkownika przesłania znaków specjalnych",
              en: "Prevent special characters from being transmitted in the user interface form"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Stosowanie zasady ograniczonego zaufania",
              en: "Application of the principle of limited trust"
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
          en: "Which of the following DOES NOT qualify as a phishing attack?"
        },
        answers: [
          {
            text: {
              pl: "Pharming",
              en: "Pharming"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Phishing mailowy",
              en: "Mail phishing"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Data phishing",
              en: "Data phishing"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Spear phishing",
              en: "Spear phishing"
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Jaka grupa osób może paść ofiarą ataków phishingowych?",
          en: "What group of people can fall victim to phishing attacks?"
        },
        answers: [
          {
            text: {
              pl: "Pracownicy korporacji",
              en: "Corporate employees"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Zwykli użytkownicy",
              en: "Regular users"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Osoby nie korzystające z internetu",
              en: "People who do not use the Internet"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Wszystkie odpowiedzi są prawidłowe",
              en: "All answers are correct"
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: {
          pl: "Czy atakujący może podszyć się pod dowolnego nadawcę SMS?",
          en: "Can attacker impersonate any SMS sender?"
        },
        answers: [
          {
            text: {
              pl: "Prawda",
              en: "True"
            },
            isCorrect: true,
          },
          {
            text: {
              pl: "Fałsz",
              en: "False"
            },
            isCorrect: false,
          },
        ],
      },
      {
        question: {
          pl: "Najbardziej podatnym elementem ataku phishingowego jest...",
          en: "The most vulnerable element of a phishing attack is..."
        },
        answers: [
          {
            text: {
              pl: "Przeglądarka internetowa",
              en: "Web browser"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "System operacyjny",
              en: "Operating system"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Filtr antyspamowy",
              en: "Spam filter"
            },
            isCorrect: false,
          },
          {
            text: {
              pl: "Człowiek",
              en: "Human"
            },
            isCorrect: true,
          },
        ],
      },
      {
        question: "Używanie tych samych danych logowania dla każdej witryny to dobry pomysł.",
        answers: [
          {
            text: "Prawda",
            isCorrect: false,
          },
          {
            text: "Fałsz",
            isCorrect: true,
          }
        ],
      },
    ],
  },
  {
    courseLink: "dos",
    items: [
      {
        question: "Co ma na celu atak DoS?",
        answers: [
          {
            text: "Wykradnięcie danych ofiary",
            isCorrect: false,
          },
          {
            text: "Wstrzyknięcie złośliwego skryptu",
            isCorrect: false,
          },
          {
            text: "Przechwycenie treści odwiedzanych stron internetowych przez ofiarę",
            isCorrect: false,
          },
          {
            text: "Zablokowanie dostępu do podstawowych funkcjonalności strony",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Czym różni się atak DDoS od ataku DoS?",
        answers: [
          {
            text: "Wieloma źródłami ataku",
            isCorrect: true,
          },
          {
            text: "Technologią wykorzystaną w ataku",
            isCorrect: false,
          },
          {
            text: "Celem ataku",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Który z typów ataku DDoS NIE JEST prawidłowy?",
        answers: [
          {
            text: "Atak wolumetryczny",
            isCorrect: false,
          },
          {
            text: "Atak TCP",
            isCorrect: false,
          },
          {
            text: "Atak typu Reflected",
            isCorrect: true,
          },
          {
            text: "Atak fragmentacyjny",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Efekty ataku DDoS mogą być zauważalne po chwili od jego rozpoczęcia",
        answers: [
          {
            text: "Prawda",
            isCorrect: true,
          },
          {
            text: "Fałsz",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Która z poniższych opcji może być wykorzystana celem przeciwdziałania atakom typu DDoS?",
        answers: [
          {
            text: "Używanie zapór ogniowych",
            isCorrect: false,
          },
          {
            text: "Migracja infrastruktury do chmury publicznej",
            isCorrect: false,
          },
          {
            text: "Mechanizm CAPTCHA",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: true,
          }
        ],
      },
    ],
  },
  {
    courseLink: "keylogger",
    items: [
      {
        question: "Czym jest keylogger?",
        answers: [
          {
            text: "Narzędziem lub oprogramowaniem rejestrującym aktywność klawiatury",
            isCorrect: true,
          },
          {
            text: "Popularnym złośliwym skryptem",
            isCorrect: false,
          },
          {
            text: "Mechanizmem blokującym dostęp do wybranych usług",
            isCorrect: false,
          },
          {
            text: "Wirusem, który przekierowuje użytkownika na strony phishingowe",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Urządzenie może zostać zainfekowane keyloggerem poprzez...",
        answers: [
          {
            text: "Atak XSS",
            isCorrect: false,
          },
          {
            text: "Fizyczny dostęp do urządzenia",
            isCorrect: false,
          },
          {
            text: "Maile phishingowe",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Na jakie rodzaje można podzielić keyloggery?",
        answers: [
          {
            text: "Tylko sprzętowe",
            isCorrect: false,
          },
          {
            text: "Sprzętowe i programowe",
            isCorrect: true,
          },
          {
            text: "Tylko programowe",
            isCorrect: false,
          },
          {
            text: "Sprzętowe, programowe i sieciowe",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Używanie antywirusa w całości eliminuje zagrożenie ataku keyloggerem sprzętowym",
        answers: [
          {
            text: "Prawda",
            isCorrect: false,
          },
          {
            text: "Fałsz",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Która z poniższych opcji pomaga przeciwdziałać skutkom infekcji keyloggerem?",
        answers: [
          {
            text: "Używanie uwierzytelniania dwuskładnikowego (2FA)",
            isCorrect: true,
          },
          {
            text: "Formatowanie dysku urządzenia",
            isCorrect: false,
          },
          {
            text: "Usunięcie złośliwego oprogramowania",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: false,
          }
        ],
      },
    ],
  },
  {
    courseLink: "xss",
    items: [
      {
        question: "Na czym polega atak XSS?",
        answers: [
          {
            text: "Na umieszczeniu złośliwego skryptu w bazie danych",
            isCorrect: false,
          },
          {
            text: "Na uzyskaniu nieautoryzowanego dostępu do serwisu internetowego",
            isCorrect: false,
          },
          {
            text: "Na umieszczeniu złośliwego skryptu w zawartości strony internetowej",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Typem ataku XSS NIE JEST:",
        answers: [
          {
            text: "Volumetric XSS",
            isCorrect: true,
          },
          {
            text: "Reflected XSS",
            isCorrect: false,
          },
          {
            text: "Dom-based XSS",
            isCorrect: false,
          },
          {
            text: "Stored XSS",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Atak XSS może zmodyfikować zawartość podatnej strony internetowej",
        answers: [
          {
            text: "Prawda",
            isCorrect: true,
          },
          {
            text: "Fałsz",
            isCorrect: false,
          }
        ],
      },
      {
        question: "Jaki rodzaj strony ma największe prawdopodobieństwo na bycie podatnym na atak XSS?",
        answers: [
          {
            text: "Strona umożliwiająca przesyłanie i oglądanie wideo",
            isCorrect: false,
          },
          {
            text: "Blog, na którym można dodawać wpisy i komentarze",
            isCorrect: true,
          },
          {
            text: "Strona przedstawiająca usługi oferowane przez firmę",
            isCorrect: false,
          },
          {
            text: "Gra przeglądarkowa",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Która z poniższych opcji pozwala programistom na niwelowanie prawdopodobieństwa podatności strony na atak XSS?",
        answers: [
          {
            text: "Używanie popularnych szkieletów oprogramowania (frameworków) w procesie tworzenia serwisu",
            isCorrect: false,
          },
          {
            text: "Stosowanie odpowiedniej polityki CORS",
            isCorrect: false,
          },
          {
            text: "Walidacja i czyszczenie danych wejściowych",
            isCorrect: true,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: false,
          }
        ],
      },
    ],
  }
];
