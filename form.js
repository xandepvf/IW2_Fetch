window.onload = function () {
    let cep;
    let bt = document.querySelector("#button-addon1");
    let dados = document.querySelector("#json");
    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let complemento = document.querySelector("#complemento");
    let uf = document.querySelector("#uf");
    let ibge = document.querySelector("#ibge");
    let gia = document.querySelector("#gia");
    let ddd = document.querySelector("#ddd");
    let siafi = document.querySelector("#siafi");

    bt.addEventListener("click", () => {
        cep = document.querySelector("#cep").value;
        let servidor = `https://viacep.com.br/ws/${cep}/json`;
        console.log(servidor);

        fetch(servidor)
            .then((resp) => {
                return resp.json();
            })
            .then((x) => {
                rua.value = x["logradouro"];
                bairro.value = x["bairro"];
                complemento.value = x["complemento"];
                uf.value = x["uf"];
                ibge.value = x["ibge"];
                gia.value = x["gia"];
                ddd.value = x["ddd"];
                siafi.value = x["siafi"];

                let div = document.createElement("div");
                div.innerHTML = ''; // Limpa dados anteriores
                for (var key in x) {
                    let p = document.createElement("p");
                    let texto = document.createTextNode(`${key.toUpperCase()} : ${x[key]}`);
                    p.appendChild(texto);
                    div.appendChild(p);
                }
                dados.appendChild(div);
            })
            .catch((x) => console.error(x));
    });
};
