const billValue = document.querySelector("#bill-input");
const numOfPeople = document.querySelector(".num-of-people-input");
const tipDisplay = document.querySelector(".tip-display");
const totalDisplay = document.querySelector(".total-display");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const tipButtons = document.querySelectorAll(".btn");

let tipValue = 0;

function selectTheButtonAndAddClass(event) {
  tipValue = parseFloat(event.target.value);
  tipButtons.forEach((btn) => {
    btn.classList.remove("active-button");
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active-button");
    }});
  return tipValue;
}

let countTheTip = function() {
  if (billValue.value >= 1 && numOfPeople.value >= 1) {
    count();
  }

  function count() {
    let tipSum = (billValue.value * tipValue) / numOfPeople.value;
    let totalValue = (parseFloat(billValue.value) + parseFloat(tipValue) * parseFloat(billValue.value)) / parseFloat(numOfPeople.value);
    tipDisplay.innerHTML = "$" + tipSum.toFixed(2);
    totalDisplay.innerHTML = "$" + totalValue.toFixed(2);
  }
};

function clear() {
    if (billValue.value > 0 || numOfPeople.value > 0 || tipValue >= 0.05) {
        resetSettings()
    }}

function resetSettings() {
  billValue.value = 0;
  numOfPeople.value = 0;
  tipValue = 0;
  tipDisplay.innerText = "$0.00";
  totalDisplay.innerHTML = "$0.00";
  tipButtons.forEach((btn) => {
    btn.classList.remove("active-button");
  });
}

tipButtons.forEach((element) => {
  element.addEventListener("click", selectTheButtonAndAddClass);});
calculate.addEventListener("click", countTheTip);
reset.addEventListener("click", clear);

// Praca z GITem powinna przebiegać w standardowy już sposób - tworzymy w swoim lokalnym repozytorium folder o takiej samej nazwie jak folder tego zdania -
// '05-js-dom'. Tworzymy lokalnie gałąź z gałęzi main i nazywamy ją tak samo jak folder - '05-js-dom', następnie commitujemy zmiany (ilość commitów dowolna, ale w języku angielskim) następnie robimy push i wystawiamy Pull Request do gałęzi głównej, info do mnie i code review :)

// W zadaniu skupcie się na poprawnej semantyce aplikacji i poprawnych stylach, ale aplikacja nie musi być 1 do 1 zgodna z designem - im bliżej tym lepiej. Aplikacja powinna być responsywna.

// Zadanie
// Stwórz, bazując na zał.ączonych plikach z designem, kalkulator napiwków, w którym podajemy kwotę rachunku,
// następnie wybieramy jedną spośród kilku opcji określająychc jaki procent całości kwoty na stanowić napiwek oraz podajemy
//  ilość osób, na których rachunek będzie podzielony.
//  Po kliknięciu w przycisk zostaną obliczone wartości w podusmowaniu. W oknie wyświetlamy podsumowanie,
// w którym będzie informacja o tym ile napiwku przypada na jedną osobę i ile w całości przypada na osobę
// do zapłacenia (czyli suma rachunku podzielonego na ilość osoób i napiwku podzielonego na ilość osób).
// Np gdy rachunek wysoni 100zł i napiwek to 10% (10zł) to przy dwóch osobach do zapłacenia będzie dla każdej 50zł (100zł/2) z rachunku i 5zł z napiwku (10zł/2).

// Dodatkowo:

// Przycisk 'Calculate' powinien być niedostępny (atrybut disabled) do momentu, aż nie podany kwoty rachunku,
// liczby osób (brak wybrania napiwku oznacza 0% napiwku).
// Przycisk 'Reset' Będzie niedostępny dopóki przynajmniej jedna z trzech rzeczy nie jest podana - kwota rachunku,
// wielkość napiwku lub liczba osób. Zaznaczenie przynajmniej jednej z tych rzeczy sprawia, że możliwe jest
//  kliknięcie przycisku 'reset' - wówczas kwota rachunku zamieniana jest na '0', wielkość napiwku na '0' oraz liczba
// osób również na '0'.
// Zaznaczona kwota napiwku powinna być w jakiś sposób wyróżiona (np. dodatkowa klasa która zmienia kolor tła na jaśniejszy).
// Termin
// Termin oddania zadania przypada na 07.10.2022 do północy.

// Punktacja
// Za zadanie można zdobyć max 10 punktów:

// Poprawna semantyka - 2 pkt
// Poprawne stylowanie, responsywnoć - 2 pkt
// Poprawny JS, poprawna logika, czystość kodu - 6 pkt
