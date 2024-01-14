import requests

def pobierz_zawartosc_strony(url):
    try:
        # Wykonaj żądanie GET do podanej strony
        response = requests.get(url)

        # Sprawdź, czy żądanie zakończyło się sukcesem (kod 200)
        if response.status_code == 200:
            # Zwróć zawartość strony
            return response.text
        else:
            # Wyświetl komunikat w przypadku niepowodzenia
            print(f"Błąd: {response.status_code}")
            return None
    except Exception as e:
        # Obsłuż wyjątki, np. błąd połączenia
        print(f"Wystąpił błąd: {e}")
        return None

# Przykładowe użycie
url_do_strony = "https://sip.lex.pl/akty-prawne/dzu-dziennik-ustaw/szczegolowy-zakres-i-forma-projektu-budowlanego-19026004"
zawartosc_strony = pobierz_zawartosc_strony(url_do_strony)

if zawartosc_strony:
    # Tutaj możesz coś zrobić z pobraną zawartością strony, np. zapisać do pliku HTML
    with open("strona.html", "w", encoding="utf-8") as plik:
        plik.write(zawartosc_strony)
        print("Zawartość strony została pomyślnie zapisana do pliku 'strona.html'.")
