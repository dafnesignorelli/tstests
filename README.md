# typescript tests

## Palindrome string

```ts

export function isPalindrome(str: string): boolean {
    // código
  
    const newStr = str.split("");
    var reverseArray = newStr.reverse().join("");
  
    if (reverseArray !== str) {
      return false;
    }
    return true;
  }

```

## debounce 

```ts

export function debounce(fn: Function, delay: number): Function {
    let time: ReturnType<typeof setTimeout>;
  
    return function (...args: any[]) {
      clearTimeout(time); 
      time = setTimeout(() => {
        fn(...args); 
      }, delay);
    };
  }


```

## domande G

10 Domande Teoriche per un Colloquio di Front-end in Italiano
Certamente! Ecco 10 domande che potresti incontrare in un colloquio di lavoro per un ruolo di sviluppatore front-end;

HTML: Spiega la differenza tra un elemento semantico e uno non semantico e fai degli esempi di entrambi. Qual è l'importanza di usare elementi semantici in un progetto?
CSS: Descrivi il modello a blocchi (box model) e come le proprietà padding, border e margin si relazionano ad esso.
JavaScript: Qual è la differenza tra == e === in JavaScript? In quali situazioni useresti uno o l'altro?
Responsive design: Spiega il concetto di media query e come vengono utilizzate per creare layout responsivi. Quali sono le principali unità di misura utilizzate nelle media query?
Flexbox e Grid: Quali sono le principali differenze tra Flexbox e Grid? Quando useresti uno o l'altro nel tuo progetto?
DOM: Cos'è il DOM? Spiega come rappresenta la struttura di un documento HTML in JavaScript.
Async/Await: Qual è il vantaggio di usare async/await in JavaScript? Come si confronta con le Promise?
Performance: Cita alcune tecniche per ottimizzare il caricamento di una pagina web.
Framework e librerie: Quali sono le principali differenze tra un framework e una libreria JavaScript? Cita esempi popolari di entrambi.
Accessibilità: Perché l'accessibilità è importante in un sito web? Quali sono alcune pratiche per rendere un sito più accessibile?



## domande C

HTML e Accessibilità:

Cosa sono i tag semantici in HTML e perché sono importanti per l’accessibilità e la SEO?
CSS e Layout:

Spiega la differenza tra display: flex e display: grid. In quali situazioni useresti ciascuno?
Design Responsivo:

Cosa sono le media query e come le utilizzeresti per creare un design responsivo?
JavaScript Asincrono:

Qual è la differenza tra setTimeout, setInterval e requestAnimationFrame in JavaScript? Quando sceglieresti uno rispetto all’altro?
Closures in JavaScript:

Cosa è una closure in JavaScript? Fornisci un esempio di un caso in cui sarebbe utile.
TypeScript:

Qual è la differenza tra interface e type in TypeScript? Quando preferiresti usare uno rispetto all’altro?
React e Componentizzazione:

Spiega il concetto di “lifting state up” in React. Perché è utile e quando applicheresti questo concetto in un progetto?
Gestione dello Stato:

Come spiegheresti il concetto di “state” in un’applicazione React? Quali sono alcuni modi per gestire lo stato globale in applicazioni complesse?
Next.js e SSR (Server-Side Rendering):

Quali sono le differenze tra Server-Side Rendering (SSR) e Static Site Generation (SSG) in Next.js? Come decidi quale utilizzare in una pagina?
Prestazioni e Ottimizzazione:

Quali sono alcune tecniche per ottimizzare le prestazioni di una pagina web? Come puoi ridurre il tempo di caricamento iniziale di un’applicazione frontend?