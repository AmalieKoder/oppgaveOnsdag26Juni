async function catFactGenerator() {
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response)

    const catfactData = await response.json();

    const facts = catfactData.data;

    const randomFact = facts[Math.floor(Math.random()* facts.length)]
    console.log(randomFact.fact);
    catsInfo.textContent = `${randomFact.fact}`
   
}

catFactGenerator()

const btn = document.querySelector("#btnId");
btn.addEventListener("click", catFactGenerator)



