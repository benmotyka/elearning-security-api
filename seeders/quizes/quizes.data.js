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
            text: "Fałsz",
            isCorrect: true,
          },
          {
            text: "Prawda",
            isCorrect: false,
          }
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
            text: "Fałsz",
            isCorrect: false,
          },
          {
            text: "Prawda",
            isCorrect: true,
          }
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
            text: "Fałsz",
            isCorrect: true,
          },
          {
            text: "Prawda",
            isCorrect: false,
          }
        ],
      },
    ],
  },
];
