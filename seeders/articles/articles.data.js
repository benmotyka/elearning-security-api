export const articlesData = [
  {
    language: "pl",
    header: "Phishing",
    description:
      "Phishing jest pewną formą socjotechniki, w której to atakujący, poprzez podszywanie się pod zaufane osoby lub instytucje, próbuje dokonać nieuczciwego przejęcia poufnych informacji od ofiary. Skierowany jest zarówno do zwykłych użytkowników, jak i pracowników organizacji rządowych czy korporacji. Organizacja ulegająca atakowi może nie tylko ponieść poważne straty finansowe, ale również stracić reputację i zaufanie konsumentów. Badanie z 2021 r. firmy Kaspersky Lab, tworzącej popularne oprogramowanie antywirusowe Kaspersky wykazuje, że najpopularniejszymi organizacjami wykorzystywanymi przez phisherów są sklepy, portale internetowe i banki.<br><br>Ataki przeprowadzone mogą być używając psychologicznej manipulacji wybranych osób celem uzyskania ich danych osobowych - forma inżynierii społecznej - albo przy użyciu dostępnych narzędzi informatycznych. Najczęściej występujące rodzaje phishingu to:<ul><li>E-maile phishingowe - spreparowana wiadomość phishingowa wysyłana jest na wiele skrzynek pocztowych, celem zwiększenia prawdopodobieństwa sukcesu ataku. Fałszywe wiadomości mogą zawierać cechy rzekomych organizacji, które miałyby być nadawcami, takie jak logo, stopkę, formatowanie celem skłonienia odbiorców do ujawnienia poufnych informacji, lub wejścia w złośliwe hiperłącze.</li><li>Fałszywa strona internetowa - polega na stworzeniu zwodniczo podobnej kopii strony internetowej poprzez Web Scrapping której celem jest przejęcie wrażliwych danych lub kradzież tożsamości użytkownika końcowego. Adres strony może być rozpowszechniany poprzez wiadomości SMS lub e-mail</li><li> Phishing telefoniczny - przeprowadzany specyficznie za pomocą wiadomości SMS lub połączeń telefonicznych. Numery telefonów potencjalnych ofiar często pozyskiwane są w wyniku wycieków baz danych przedsiębiorstw lub organizacji. Atakujący kontaktując się z ofiarą, może podawać się za znaną osobę lub pracownika zaufanej instytucji, na przykład banku, celem zmanipulowania interlokutora do wykonania określonych akcji.</li><li>Pharming - rodzaj phishingu, który jest znacznie trudniejszy w detekcji. Polega na zainfekowaniu serwera DNS lub urządzenia użytkownika w ten sposób, aby za każdym razem, gdy odwiedzana jest zaufana strona, nastąpiło przekierowanie na złośliwą, spreparowaną stronę internetową.</li></ul>Wektorami ataków phishingowych w większości przypadków są ludzie, a nie urządzenia. Szczególnie zagrożone są osoby niemające na co dzień styczności z Internetem. Dobrym pomysłem jest - tam gdzie to możliwe - stosowanie uwierzytelniania wieloskładnikowego. Polega ono na potwierdzeniu próby autoryzacji poprzez dodatkowy element: kod wysyłany wiadomością SMS lub e-mail. Zapobiega to sytuacjom, w których to dane autoryzacyjne poszkodowanego takie jak adres e-mail i login zostaną użyte przez niewłaściwe osoby. Nie będą one mogły w pełni się uwierzytelnić, jeśli nie posiadają kodu autoryzacyjnego. Dodatkowo może stanowić ostrzeżenie dla ofiary, że ktoś próbuje zalogować się na jej konto. Zaufanym rozwiązaniem są również programy antywirusowe, ostrzegające użytkownika przed fałszywymi domenami oraz odpowiednio skonfigurowane filtry anty-spamowe w poczcie e-mail.<br><br>Należy także uważnie sprawdzać adresy URL stron internetowych, na których podaje się wrażliwe dane. Phisherzy często wykorzystują podobieństwo niektórych cyfr i liter, na przykład '0' i 'o' celem stworzenia złudzenia, że użytkownik znajduje się na właściwej stronie. Istotnym elementem jest również protokół, który użyty został do połączenia ze stroną. Zdecydowana większość organizacji korzysta z ważnych certyfikatów SSL, sprawiając, że połączenie między klientem a serwerem jest szyfrowane (HTTPS).",
    link: "phishing",
  }, 
  {
    language: "en",
    header: "Phishing",
    description: "english desc",
    link: "phishing",
  },
  {
    language: "pl",
    header: "Ransomware",
    description:
      "Ransomware to typ złośliwego oprogramowania (ang. malware), którego celem jest zablokowanie dostępu do komputera osobistego poprzez zaszyfrowanie wszystkich możliwych plików. Czas trwania tej procedury zależy między innymi od wybranego algorytmu szyfrowania i danych na szyfrowanym urządzeniu, jednak w przypadku zwykłego użytkownika domowego może wykonać się w czasie zaledwie dwóch godzin RansomwareTime. Zazwyczaj ten czas jest znacznie dłuższy, gdyż przed rozpoczęciem procesu wymagany jest dokładny rekonesans systemu i struktury katalogów. Tym sposobem użytkownik końcowy traci możliwość odczytu danych na swoim urządzeniu, a do odszyfrowania plików, wymagany jest klucz posiadany przez atakującego.<br><br>Ten rodzaj szkodliwego oprogramowania jest szczególnie niebezpieczny dla przedsiębiorstw, gdyż utrata ważnych dokumentów czy danych finansowych, może się wiązać z poważnymi konsekwencjami, lub brakiem możliwości reakcji na czas (np. złożeniu oferty w terminie). Celem ransomware nie jest usunięcie lub kradzież plików, ale zablokowane ich, i oczekiwanie na ewentualną zapłatę okupu przez ofiarę.<br><br>Wiodącym źródłem pozyskania tego złośliwego oprogramowania jest Remote Desktop Protocol (RDP) - protokół umożliwiający połączenie się z urządzeniem z systemem MS Windows, oraz przejęcie nad nim pełnej kontroli, używany w firmach jako narzędzie do konfiguracji urządzeń.<br><br>Kolejno znajdują się maile phishingowe. Ten sposób zazwyczaj polega na odpowiednim wykorzystaniu inżynierii społecznej, celem zmanipulowania ofiary do udzielenia poufnych danych dostępowych lub uruchomienia oprogramowania szyfrującego na swoim urządzeniu. <br><br> Najlepszą metodą przeciwko tego  jest systematyczne wykonywanie archiwizacji danych. W sytuacji w której ransomware trafi do komputera i zaszyfruje wszystkie pliki, pozostaje jedynie odtworzyć kopię zapasową. Dobrym sposobem jest także częste aktualizowanie systemu operacyjnego, celem eliminowania potencjalnych luk bezpieczeństwa.",
    link: "ransomware",
  },
  {
    language: "pl",
    header: "Keylogger",
    description:
      "KKeyloggery występują zazwyczaj w formie złośliwego, ukrytego oprogramowania. Nie są widoczne na pierwszy rzut oka dla użytkownika i w zdecydowanej większości przypadków działają w tle, często podszywając się pod inną aplikację, tym samym maskując swoją obecność.<br><br>Podstawowe właściwości tego typu programu można opisać jako przejmowanie kontroli nad procedurami związanymi z obsługą klawiatury systemu operacyjnego, na którym się znajduje.<br><br>Głównym celem tego oprogramowania jest zbieranie danych o tym, jakie klawisze na klawiaturze zostały naciśnięte przez użytkownika, a następnie okresowe wysyłanie zebranych informacji do atakującego. Posiadając wiedzę na temat tego, co zostało wpisane na urządzeniu, można bez problemu uzyskać dostęp do wrażliwych informacji takich jak prywatna korespondencja czy poufne dane. Do bardziej zaawansowanych funkcji należy między innymi przesyłanie zrzutów ekranu, rejestrowanie historii otwieranych programów i przekazywanie tych informacji dalej.<br><br>Keyloggery oprócz formy programowej istnieją również jako osobne urządzenia, które podłączane są do jednostki zazwyczaj poprzez interfejs USB. Mogą także występować jako urządzenie pośredniczące pomiędzy klawiaturą a złączem USB komputera. <br><br>Sposobem na unikanie tego typu oprogramowania jest przede wszystkim systematyczne sprawdzanie uruchomionych procesów, ale także używanie odpowiedniego antywirusa.",
    link: "keylogger",
  },
  {
    language: "pl",
    header: "CSRF",
    description:
      "CSRF jest atakiem na aplikacje internetowe, którego celem jest wykonanie przez użytkownika końcowego niechcianej akcji w serwisie w którym aktualnie jest on zalogowany. Ten typ ataku jest szczególnie wykorzystywany gdy oprogramowanie serwisu internetowego nie jest wykonane zgodnie ze standardami bezpieczeństwa OWASP.<br><br>Warunkiem koniecznym na wystąpienie tej podatności jest aktywna sesja użytkownika w danej witrynie webowej oraz aktywny token autoryzacyjny, uzyskiwany zazwyczaj jako odpowiedź serwera na poprawne dane użytkownika przy mechanizmie logowania na stronie internetowej. Następnie przechowywany jest on w pamięci przeglądarki przez wybrany okres czasu.<br><br>Spreparowane żądanie może być stworzone na wiele sposobów. Dla przykładu, w sytuacji w której klient banku chce wykonać przelew bankowy, utworzone żądanie w podatnej, błędnie wykonanej aplikacji będzie miało następującą formę:<br><br><samp>GET https://bank.com/transfer?amount=100&accountNumber=123456 HTTP/1.1.</samp><br><br>Jeśli dojdzie do sytuacji że w przeglądarce będzie znajdywał się token autoryzacyjny zapisany w ciasteczkach lub pamięci lokalnej, ofiara po wejściu  w hiperłącze <br><br><samp>https://bank.com/transfer?amount=100&accountNumber=123</samp><br><br> nieświadomie wykona to żądanie, co będzie skutkowało przelaniem określonej kwoty pieniędzy na wybrane konto przez atakującego. Link ten może zostać dostarczony poprzez stosowanie odpowiednich środków psychologicznych i metod manipulacji (Inżynierię społeczną) lub maile phishingowe. Aplikacja nie jest w stanie odróżnić czy żądanie od klienta końcowego przyszło zgodne z jego intencjami, czy też nie.<br><br>W dzisiejszych czasach zdecydowana większość frameworków do tworzenia aplikacji webowych posiada mechanizmy zabezpieczające budowaną stronę przed tą podatnością. Jeśli jednak wybrana technologia nie posiada wbudowanego mechanizmu, koniecznym będzie dodanie tokenów CSRF do wszystkich żądań wpływających na stan aplikacji. Z każdym żądaniem do serwera powinien być wysyłany jednorazowy token - ciąg losowych znaków, a następnie powinien być on walidowany wraz z wszystkimi danymi które znajdują się w ciele lub parametrach żądania.",
    link: "csrf",
  },
  {
    language: "pl",
    header: "Path Traversal",
    description:
      "Path Traversal to nazwa dla luki bezpieczeństwa aplikacji internetowych, której niedopatrzenie, w procesie tworzenia oprogramowania, może skutkować w wycieku wrażliwych danych z serwera, na którym umieszczona jest aplikacja.<br><br>Dzięki językom programowania działających po stronie serwera takim jak PHP, zewnętrzne skrypty i pliki mogą być dołączane do aplikacji w sposób dynamiczny. Krytycznym elementem w tego typu funkcjonalnościach jest odpowiednio zaimplementowana logika dołączania plików oraz walidacja danych wejściowych, gdyż w przeciwnym wypadku, atakujący może odczytywać zawartość plików lokalnych, jak i zdalnych. Celem tej podatności jest zlokalizowanie i odpowiednie wykorzystanie parametrów przekazywanych do aplikacji, poprzez które dynamicznie dołączane są różne skrypty.<br><br>",
    link: "path-traversal",
  },
  {
    language: "pl",
    header: "SQL Injection",
    description:
      "Wstrzyknięcie SQL to podatność aplikacji webowych polegająca na zmodyfikowaniu kwerendy bazodanowej wysyłanej do bazy danych. Celem tego ataku może być uzyskanie informacji, do których w zwyczajnych okolicznościach nie powinno się mieć dostępu: danych personalnych innych użytkowników, ich haseł, numerów kart kredytowych itd. Atak może być wykonany poprzez odpowiednią modyfikację danych wejściowych, np. hasła, produktów w wyszukiwarce, ale także adresu URL. Podatność może również zostać wykorzystana poprzez zastosowanie serwera proxy, czyli serwera pośredniczącego pomiędzy użytkownikiem końcowym a serwerem. Dzięki niemu atakujący może zmodyfikować żądanie wychodzące, tym samym pominąć można wszelką walidację danych wejściowych. <br><br> Ciężko wyobrazić sobie w pełni funkcjonalny serwis internetowy niekorzystający z bazy danych. Proces rejestracji użytkownika, płacenia za zakupy czy zmiana zdjęcia profilowego -- te wszystkie czynności wymagają fizycznego przechowywania informacji. Zazwyczaj realizowane są one poprzez wysłanie odpowiedniego żądania do aplikacji działającej na serwerze, aby ta skomunikowała się z bazą danych i wykonała odpowiednią operację.<br><br>Głównym powodem występowania podatności SQL Injection jest zbyt mała uwaga poświęcona tworzeniu kwerend bazodanowych. Parametry przekazywanego do zapytania powinny być filtrowane pod kątem występowania specjalnych symboli, lub pod względem wystąpienia w parametrze określonych znaków, tj. wyłącznie litery i cyfry.<br><br>Przy komunikacji z relacyjną bazą danych, dobrym rozwiązaniem może być stosowanie takich narzędzi jak Konstruktora Zapytań (ang. Query Builder) lub ORM (ang. Object-Relational Mapping) pozwala na uproszczenie komunikacji z bazą danych poprzez mapowanie tabel i relacji do obiektów, oraz eliminację możliwości wystąpienia takich luk bezpieczeństwa jak SQL Injection. Jako przykład Konstruktora zapytań można podać Knex.js - biblioteka o otwartych źródłach stworzona dla środowiska uruchomieniowego Node.js. Kwerendy tworzone w konstruktorach nie tylko są bezpieczniejsze niż zapytania SQL - są także uniwersalne dla każdego silnika bazodanowego.<br><br>SQL Injection jest luką bezpieczeństwa która może stanowić poważne zagrożenie nie tylko dla systemu bazodanowego, ale również dla całego przedsiębiorstwa. Przy braku odpowiedniej walidacji danych wejściowych można doprowadzić do sytuacji, w której to atakujący uzyska dostęp do poufnych informacji, lub nawet usunie część bazy danych. Mimo tego, iż należy do stosunkowo prostych podatności w egzekucji, a jej początki sięgają roku 1998, wciąż stanowi ona jedną z najbardziej pospolitych i niebezpiecznych podatności aplikacji działających po stronie serwera.",
    link: "sql-injection",
  },
  {
    language: "pl",
    header: "Pharming",
    description: "TODO.",
    link: "pharming",
  },
  {
    language: "pl",
    header: "ARP Poisoning",
    description:
      "Atak typu Man in the Middle (MitM), umożliwiający atakującemu przechwycenie komunikacji między urządzeniami sieciowymi.",
    link: "arp-poisoning",
  },
  {
    language: "pl",
    header: "Snooping",
    description: "TODO.",
    link: "snooping",
  },
  {
    language: "pl",
    header: "Man in the Middle",
    description:
      "Atak typu MITM to określenie na sytuację, w której sprawca pośredniczy w komunikacji aplikacji z użytkownikiem końcowym - albo po to, by podsłuchiwać, albo podszywać się pod jedną ze stron, co sprawia wrażenie normalnej wymiany informacji jest w toku.",
    link: "mitm",
  },
  {
    language: "pl",
    header: "Atak Smurf",
    description:
      "Atak smurf to forma rozproszonego ataku typu DDOS, który ma miejsce w warstwie sieci. Ataki smurfingowe noszą nazwę od złośliwego oprogramowania Smurf, które umożliwia atakującym ich wykonanie.",
    link: "smurf-attack",
  },
  {
    language: "pl",
    header: "Spoofing",
    description: "TODO.",
    link: "spoofing",
  },
  {
    language: "pl",
    header: "Atak XSS",
    description: "Cross-site scripting (XSS) jest jedną z najbardziej niebezpiecznych podatności współczesnych aplikacji webowych. XSS jest atakiem skierowanym na klienta korzystającego serwisu webowego, w przeciwieństwie do np. SQL Injection, którego celem jest aplikacja działająca po stronie serwera. Cross-site scripting opiera się głównie na wstrzyknięciu do strony internetowej złośliwego skryptu, który, dla przykładu, może odczytać ciasteczka użytkownika lub inne poufne informacje, które przechowuje przeglądarka, wysłać je do atakującego, aby ten -- używając zapisanych w ciasteczkach danych -- mógł zalogować się na konto użytkownika, który nieświadomie uruchomił dany skrypt. Poprzez ten atak, można również uruchomić Keyloggera działającego w przeglądarce, lub całkowicie zmienić zawartość strony internetowej.<br><br>W raporcie przygotowanym w 2017 roku przez Wordfence, komercyjną organizację zajmującą się zabezpieczaniem stron internetowych przed wszelkimi niebezpieczeństwami, wynika, iż ten typ podatności stanowi blisko połowę wszystkich podatności w sieci.<br><br>Opisując XSS nie sposób nie wspomnieć o Regule tego samego pochodzenia (Same-origin policy). Jest to jeden z wielu fundamentalnych mechanizmów bezpieczeństwa, zaimplementowany w każdej przeglądarce internetowej. Nie pozwala on żadnej stronie na podjęcie akcji lub odczytania zawartości innej strony, na przykład w dwóch kartach przeglądarki. W związku z tym, wszystko, co się dzieje na stronie internetowej otwartej przez użytkownika, jest izolowane i nie będzie miało wpływu na pozostałe otwarte strony.<br><br>Cała struktura strony internetowej zakodowana językiem HTML może być zmieniana poprzez JavaScript, używając DOM API. Jako rezultat, prosty skrypt może całkowicie zmienić zawartość, wygląd, a przede wszystkim funkcjonalność strony internetowej.<br><br>Ciasteczkami (ang. cookies) nazywa się niewielkie informacje wysyłane przez serwer do przeglądarki internetowej urządzenia końcowego. Służą temu, by zapisać obiekty danych w przeglądarce, które przy ponownym odwiedzeniu strony, mogą być przesłane do tego samego serwera, z którego przyszły. W związku z tym, przy odwiedzaniu różnorakich stron wymagających autoryzacji, użytkownik nie musi się za każdym razem logować, gdyż wszystkie potrzebne dane są zawarte w ciasteczkach, które przesyłane są razem z żądaniem.<br><br>Ataki XSS można podzielić na trzy główne kategorie:<ul><li>Reflected XSS - złośliwy skrypt umieszczony jest w adresie URL. Po wejściu w hiperłącze, ofiara nieświadomie wykonuje wcześniej przygotowany skrypt, rezultatem czego jest wykonanie kodu w przeglądarce.</li><li>Stored XSS - polega na umieszczeniu skryptu po stronie serwera, przykładowo jako wiadomość w serwisie społecznościowym. Po odczytaniu jej przez ofiarę, automatycznie wykonywany jest wcześniej przygotowany skrypt, co może skutkować wysłaniem ciasteczka sesyjnego innego użytkownika do atakującego, pozwalając mu na umieszczenie skradzionego ciasteczka w przeglądarce i nieautoryzowany dostęp do konta ofiary.</li><li>DOM Based XSS - atak ściśle powiązany z modyfikacją struktury DOM. Sama odpowiedź HTTP nie ulega zmianie, jednak kod po stronie klienta zawarty w aplikacji wykonywany jest w inny sposób z powodu modyfikacji, które miały miejsce w środowisku DOM.</li></ul>Najczęstszym miejscem, w którym można spotkać tę podatność, są formularze, do których użytkownik wpisuje treść, która następnie jest wyświetlana. Jeśli treść którą przesłał użytkownik nie zostanie odpowiednio wyczyszczona, może dojść do sytuacji, w której to użytkownik wstrzyknie złośliwy skrypt.<br><br>Przeglądarki internetowe zostały wyposażone wiele narzędzi do walki z tą podatnością, takich jak system wykrywania złośliwego kodu JavaScript. Mechanizm ten składa się z wbudowanego w przeglądarkę komponentu analizy skryptów oraz systemu IDS (ang. Intrusion Detection System), przetwarzającego aktywność po stronie klienta, i porównującego ją ze znanymi złośliwymi skryptami. Dzięki temu systemowi możliwe jest wykrywanie różnego rodzaju ataków XSS. Jednak system ma znaczną wadę: może wykryć tylko sytuacje, których zachowanie jest mu znane -- nie jest odporny na nowe typy ataku.<br><br>Pomimo wielu zabezpieczeń, które są wbudowane w przeglądarki, te nie są w stanie odróżnić czy dany skrypt jest złośliwy, czy nie - dlatego też odporność aplikacji internetowej na tego typu atak stoi przede wszystkim po stronie programistów.<br><br>Najskuteczniejszą ochroną przed atakami XSS jest filtrowanie danych przychodzących od użytkownika przed tym, kiedy to mają zostać wyświetlone w aplikacji, na przykład poprzez zamianę znaków tagów HTML na znaki specjalne. Skutecznym rozwiązaniem może być także oczyszczanie wprowadzonej treści użytkownika z elementów wspólnych dla każdego ataku XSS, na przykład tagów &lt;script&gt;&lt;/script&gt;.",
    link: "xss",
  },
  {
    language: "pl",
    header: "DDOS",
    description: "Celem Blokady usług (ang. Denial Of Service) są zazwyczaj serwisy internetowe małych i średnich przedsiębiorstw. Atak ten polega na wykonaniu tak wielu żądań do serwera w jednostkowym czasie, aby ten przestał odpowiadać. Są relatywnie proste w egzekucji i mogą być powodem poważnych strat dla sieci i systemów komputerowych. Większa część ataków typu odbywa się w oparciu o luki w protokole TCP, co prowadzi do takich ataków jak TCP SYN Flood DoS<br><br>Rodzaj DOS może różnić się w zależności od warstwy modelu OSI, na której wysyłane są pakiety. Do głównych rodzajów tego ataku zaliczyć można SYN Flood, HTTP Flood, Smurf Attack.<br><br>W momencie, w którym klient chce nawiązać połączenie z serwerem, obie maszyny sekwencyjnie wymieniają zestaw komunikatów, znany także jako uzgadnianie trój-etapowe - 3-Way Handshake<ol><li>W pierwszym kroku klient wysyła segment z SYN (ang. Synchronize Sequence Number), który informuje serwer, że klient prawdopodobnie rozpocznie komunikację i z jakim numerem sekwencyjnym uruchamia segmenty.</li><li>Kolejno serwer odpowiada na żądanie klienta z ustawionymi bitami sygnału SYN-ACK. Potwierdzenie (ACK) to odpowiedź segmentu, który otrzymał, a SYN oznacza, z jakim numerem sekwencji prawdopodobnie rozpoczną się segmenty.</li><li>W końcowej części klient potwierdza odpowiedź serwera i oboje ustanawiają połączenie, w którym rozpocznie rzeczywisty transfer danych.</li></ol>SYN Flood polega na nadużyciu wyżej opisanej procedury. Atakujący przesyła do serwera falę komunikatów SYN, używając spreparowanych adresów IP. Niczego nieświadomy serwer odpowiada na żądania komunikatem SYN-ACK, po czym oczekuje na odpowiedź ACK od klienta celem sfinalizowania uzgodnienia trój-etapowego. Z racji faktu, iż serwer oczekuje na zakończenie komunikatu z fałszywymi adresami IP, połączenie to nigdy nie dojdzie do skutku. Efektem tego jest przeładowanie kolejki połączeń i ostatecznie pamięci operacyjnej serwera, powodując brak odpowiedzi na żądania zwykłych użytkowników.<br><br>Blokada danego adresu IP, z którego przychodzi wiele żądań w krótkim okresie czasu, nie stanowi większego problemu dla firewalli, dlatego też coraz powszechniejszymi stają się ataki DDOS - Distributed Denial-Of-Service. Różnica polega na tym, że żądania wysyłane są z wielu lokacji jednocześnie, co znacznie bardziej utrudnia identyfikację i zablokowanie nagłego ruchu przez zaporę ogniową.<br><br>Szybka detekcja nienaturalnego obciążenia serwera ma kluczowe znaczenie dla ochrony przed atakiem DDOS. W przypadku przedsiębiorstw wiąże się to także z zapewnieniem akceptowalnej jakości usług dla klientów. Istnieje wiele rozwiązań, które pozwalają wykrywać powyżej opisany incydent. Można je podzielić według sposobu ich działania i złożoności wykrywania. Do najskuteczniejszych rozwiązań należy analiza statystyczna ruchu, logika rozmyta, stosowanie sztucznych sieci neuronowych czy techniki eksploracji ukrytych zależności w repozytoriach danych.<br><br>Ataki Denial of Service stanowią zdecydowanie większe zagrożenie dla klasycznego modelu hostingu strony webowej, w którym celem zapewnienia dostępności serwisu korzysta się z fizycznych serwerów. W sytuacji, w której obciążenie aplikacji wzrośnie, przykładowo na skutek omawianego ataku, jedynym rozwiązaniem jest filtrowanie i odrzucanie potencjalnych złośliwych żądań - nie ma opcji na szybkie zwiększenie zasobów.<br><br>W dzisiejszych czasach zdecydowanie lepszym rozwiązaniem zarówno pod kątem finansowym, jak i prostoty są publiczne chmury obliczeniowe, takie jak AWS (ang. Amazon Web Services), Microsoft Azure lub GCP (ang. Google Cloud Platform). Ich bogata oferta zapewnia podstawowe usługi takie jak dedykowane serwery, wirtualne sieci i interfejsy sieciowe czy usługi przechowywania danych. Ponadto chmury oferują usługi zaawansowanych mechanizmów przeciwdziałania atakom typu DDOS. Przykładem może być funkcjonalność chmury AWS w postaci grupy auto-skalującej (ang. auto-scaling group). Usługa ta dostosowuje liczbę instancji serwerowych w zależności od aktualnie panującego ruchu. Tak więc przy normalnych warunkach, gdy obciążenie serwera jest na niskim poziomie, w grupie może znajdować się jedna instancja serwerowa. Gdy tylko określony zasób przekroczy wcześniej zadeklarowaną wartość, na przykład zasoby procesora osiągną 80% dostępnych zasobów w okresie minuty, automatycznie zostanie stworzona kolejna instancja serwerowa na podstawie pierwotnej. Tym samym ruch sieciowy zostanie rozłożony pomiędzy dwa serwery, zamiast jednego.<br><br>Dobrym rozwiązaniem na tego typu ataki może być również użycie systemu równoważenia obciążenia - load balancera. Jest to mechanizm, wykorzystywany w serwisach internetowych korzystających z większej ilości instancji serwerowych. W rezultacie każde połączenie jest przekierowane do jednego z dostępnych serwerów według następujących algorytmów:<ul><li>Round Robin - nadchodzące żądanie zostanie przekierowane do każdego serwera po kolei. Gdy dojdzie do końca, system równoważenia obciążenia zapętli się z powrotem.</li><li>Least Connections - Load Balancer prześle żądanie do jednego z serwerów, które aktualnie procesują najmniejszą ilość żądań.</li><li>IP Hash - żądanie zostanie skierowane do najbliższego serwera pod kątem geolokalizacji.</li></ul>Ataki DOS są bezpośrednim zagrożeniem dla dostępności aplikacji webowych. Jeśli złośliwy ruch jest odpowiednio duży i nie zostanie szybko zidentyfikowany, może z łatwością przyczynić się do wyłączenia strony internetowej na nieokreślony czas. Dzięki wielu łatwo dostępnym narzędziom, takim jak systemy równoważenia obciążenia, grupy auto-skalujące, firewalle, ochrona przed tego typu zagrożeniem stała się dużo łatwiejsza niż kiedykolwiek.",
    link: "ddos",
  },
  {
    language: "pl",
    header: "Spyware",
    description:
      "To rodzaj złośliwego oprogramowania które instalowane jest na urządzeniu ofiary bez jej wiedzy. Pozyskuje wrażliwe informacje, takie jak dane dotyczące korzystania z przeglądarki internetowej, a następnie przekazuje je atakującemu.",
    link: "spyware",
  },
  {
    language: "pl",
    header: "Backdoor",
    description:
      "Jest złośliwym oprogramowaniem które omija procedury uwierzytelniania celem uzyskania dostępu do systemu na którym istnieje. W rezultacie, dostęp do wrażliwych zasobów, takich jak bazy danych czy serwery plików w pewnym miejscu nie wymaga autoryzacji. Daje to możliwość atakującym zdalnego wydawania poleceń systemowych.",
    link: "backdoor",
  },
  {
    language: "pl",
    header: "Hijackware",
    description:
      "Hijackware infekuje przeglądarke internetową w celu wyświetlania reklam lub przekierowania ofiar na złośliwe strony. Zazwyczaj przejmuje również kontrolę nad ustawieniami przeglądarki i je modyfikuje.",
    link: "hijackware",
  },
  {
    language: "pl",
    header: "Robak",
    description: "TODO.",
    link: "worm",
  },
  {
    language: "en",
    header: "Worm",
    description: "TODO.",
    link: "worm",
  },
];
