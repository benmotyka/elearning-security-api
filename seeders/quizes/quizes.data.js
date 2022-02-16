export const quizesData = [
  {
    courseLink: "ransomware",
    items: [
      {
        question: "Co jest głównym celem ransomware?",
        answers: [
          {
            text: "Wykradnięcie danych od użytkownika",
            isCorrect: false,
          },
          {
            text: "Usunięcie wszystkich danych na komputerze ofiary",
            isCorrect: false,
          },
          {
            text: "Zaszyfrowanie danych na urządzeniu końcowym",
            isCorrect: true,
          },
          {
            text: "Infekcja przeglądarki celem wyświetlania reklam",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Częste wykonywanie kopii zapasowej danych nie chroni całkowicie przed konsekwencjami ransomware",
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
        question: "Którym z wymienionych sposobów, ransomware zazwyczaj NIE DOSTAJE SIĘ do urządzenia końcowego?",
        answers: [
          {
            text: "Zdalne wykonanie kodu",
            isCorrect: false,
          },
          {
            text: "Maile phishingowe",
            isCorrect: false,
          },
          {
            text: "Zdalny dostęp",
            isCorrect: false,
          },
          {
            text: "Sieć Wi-Fi",
            isCorrect: true,
          },
        ],
      },
      {
        question: "W przypadku infekcji ransomware, pierwszą rzeczą, którą należy zrobić, jest zapłata okupu",
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
      {
        question: "Używanie dobrego programu antywirusowego całkowicie eliminuje zagrożenie ransomware",
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
    courseLink: "sql-injection",
    items: [
      {
        question: "Na czym polega atak SQL Injection?",
        answers: [
          {
            text: "Na uruchomieniu na urządzeniu końcowym ofiary programu, który zaszyfruje wszystkie jej dane",
            isCorrect: false,
          },
          {
            text: "Na przekierowaniu użytkowników sieci Wi-Fi do spreparowanej strony internetowej",
            isCorrect: false,
          },
          {
            text: "Na całkowitym odebraniu dostępu do strony internetowej ofiary",
            isCorrect: false,
          },
          {
            text: "Na znalezieniu luki w oprogramowaniu i wykorzystaniu jej",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Atak SQL Injection nie ma związku z bazami danych",
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
        question: "Jakie narzędzie znacznie ułatwia atakującemu znalezienie podatności?",
        answers: [
          {
            text: "Serwer proxy",
            isCorrect: true,
          },
          {
            text: "Keylogger",
            isCorrect: false,
          },
          {
            text: "Skanowanie portów",
            isCorrect: false,
          },
          {
            text: "Blokada usług",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Jakie polecenie języka SQL wykonuje zapytanie zwracające dane z bazy?",
        answers: [
          {
            text: "ALTER DATABASE",
            isCorrect: false,
          },
          {
            text: "UPDATE",
            isCorrect: false,
          },
          {
            text: "SELECT",
            isCorrect: true,
          },
          {
            text: "ALTER TABLE",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Jakie są najlepsze praktyki na ochronę przed atakami SQL Injection",
        answers: [
          {
            text: "Instalacja antywirusa i monitorowanie aktywności sieciowej na urządzeniu",
            isCorrect: false,
          },
          {
            text: "Dokładne filtrowanie i czyszczenie danych przesyłanych do bazy danych od użytkownika",
            isCorrect: true,
          },
          {
            text: "Uniemożliwienie w formularzu interfejsu użytkownika przesłania znaków specjalnych",
            isCorrect: false,
          },
          {
            text: "Stosowanie zasady ograniczonego zaufania",
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
        question: "Który z poniższych NIE ZALICZA SIĘ do ataków phishingowych?",
        answers: [
          {
            text: "Pharming",
            isCorrect: false,
          },
          {
            text: "Phishing mailowy",
            isCorrect: false,
          },
          {
            text: "Data phishing",
            isCorrect: true,
          },
          {
            text: "Spear phishing",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Jaka grupa osób może paść ofiarą ataków phishingowych?",
        answers: [
          {
            text: "Pracownicy korporacji",
            isCorrect: false,
          },
          {
            text: "Zwykli użytkownicy",
            isCorrect: false,
          },
          {
            text: "Osoby nie korzystające z internetu",
            isCorrect: false,
          },
          {
            text: "Wszystkie odpowiedzi są prawidłowe",
            isCorrect: true,
          },
        ],
      },
      {
        question: "Czy atakujący może podszyć się pod dowolnego nadawcę SMS?",
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
        question: "Najbardziej podatnym elementem ataku phishingowego jest...",
        answers: [
          {
            text: "Przeglądarka internetowa",
            isCorrect: false,
          },
          {
            text: "System operacyjny",
            isCorrect: false,
          },
          {
            text: "Filtr antyspamowy",
            isCorrect: false,
          },
          {
            text: "Człowiek",
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
