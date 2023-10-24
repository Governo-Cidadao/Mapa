function adicionarGrupo(texto, pos, checked = false) {
    let menu_suspenso = document.getElementsByClassName("leaflet-control-layers-overlays");

    let label = document.createElement('label');
    let button = document.createElement('button');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let inp = document.createElement('input');

    div.classList.add("container-list")

    span.textContent = texto;
    let texto_sem_espaco = texto.replaceAll(" ", "_")
    inp.type = 'checkbox';
    inp.checked = checked;

    button.textContent = '+';

    let inner_div = document.createElement('div');
    inner_div.classList.add("container-input-span")

    button.onclick = function () {

        if (button.textContent == '-')
            button.textContent = '+';
        else
            button.textContent = '-';
        let conteudo_grupo = document.getElementsByClassName(texto_sem_espaco);
        let display = 'none';
        if (conteudo_grupo[0].style.display == 'none') {
            display = 'flex';
        }
        for (let i = 0; i < conteudo_grupo.length; i++) {
            conteudo_grupo[i].style.display = display;
        }
    };

    inner_div.appendChild(inp);
    inner_div.appendChild(span);

    div.appendChild(inner_div);
    div.appendChild(button);
    label.appendChild(div);

    menu_suspenso[0].insertBefore(label, menu_suspenso[0].children[pos])

}

function adicionarEspacoSubGrupo(grupo, pos_ini, pos_fim, use_inner_margin = true) {
    let div_overlay = document.getElementsByClassName("leaflet-control-layers-overlays");

    for (let i = pos_ini; i < pos_fim; i++) {
        let children = div_overlay[0].children[i].children[0];
        let classList = children.classList;
        let margemEsquerda = 15;

        if (use_inner_margin)
            margemEsquerda = 0;

        children.classList.add(grupo)
        for (let j = 0; j < classList.length; j++) {
            if (!(classList[j].startsWith('container-list')) && use_inner_margin) {
                margemEsquerda += 15;
            }
        }

        children.style.marginLeft = margemEsquerda + 'px';
    }
}

function relacionarSubGrupo(nome, index_grupo, pos_ini, pos_fim, use_margin = true) {
    let div = document.querySelector('.leaflet-control-layers-overlays')
    let inputs = div.querySelectorAll('input');
    let qtd_input = inputs.length;
    let status_subgrupo = {};
    let texto_sem_espaco = nome.replaceAll(" ", "_")
    adicionarEspacoSubGrupo(texto_sem_espaco, pos_ini, pos_fim, use_margin);

    inputs[index_grupo].onclick = function () {

        for (let i = pos_ini; i < pos_fim; i++) {
            if (inputs[index_grupo].checked == false) {

                if (i != index_grupo) {
                    if (inputs[i].checked == true) {
                        status_subgrupo[i] = true;
                        inputs[i].click();
                    } else {
                        status_subgrupo[i] = false;
                    }
                }
            } else {
                if (i != index_grupo) {
                    if (inputs[i].checked != status_subgrupo[i]) {
                        inputs[i].click();
                    }
                }
            }
        }
    };

    // inicia o grupo minimizado
    let elementos_grupo = document.getElementsByClassName(texto_sem_espaco);
    for (let i = 0; i < elementos_grupo.length; i++) {
        elementos_grupo[i].style.display = 'none';
    }
}