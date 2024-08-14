let heroi = [
    {nome: "Mulher Maravilha", xp: 10000},
    { nome: "Superman", xp: 7010 },
    { nome: "Batman", xp: 2000 },
    { nome: "Flash", xp: 12000 },
    { nome: "Aquaman", xp: 500 },
    { nome: "Lanterna Verde", xp: 7000 },
    { nome: "Lanterna Amarela", xp: 8050 }
]

for (let i = 0; i < heroi.length; i++){
    let nomeHeroi = heroi[i].nome;
    let xpHeroi = heroi[i].xp;
    let nivel = "";

    if (xpHeroi <= 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000){
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000){
        nivel = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000){
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000){
        nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000){
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000){
        nivel = "Imortal";
    } else if (xpHeroi >= 10001){
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível de : " + nivel);
}
