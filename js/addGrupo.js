function adicionarGrupo(texto, pos, checked=false)
{

    let menu_suspenso = document.getElementsByClassName("leaflet-control-layers-overlays");

    let label = document.createElement('label');
    let button = document.createElement('button');
    let div = document.createElement('div');
    let span= document.createElement('span');
    let inp = document.createElement('input');

    span.textContent = texto;
    let texto_sem_espaco = texto.replace(" ","_")
    inp.type = 'checkbox';
    inp.checked = checked;

    button.textContent = "+";
    button.style.float="right";
    button.style.width="25px";
    button.style.height="20px"
    button.classList.add("btn_group");



    button.onclick = function()
    {
        if (button.textContent=='-')
        {

            button.textContent='+'
        }else
        {
            button.textContent='-'
        }
        let conteudo_grupo = document.getElementsByClassName(texto_sem_espaco);
        let display='none';
        if (conteudo_grupo[0].style.display == 'none')
        {
            display = 'block';
        }
        for(let i=0;i<conteudo_grupo.length;i++)
        {
            conteudo_grupo[i].style.display = display;
        }
    };


    div.appendChild(inp);
    div.appendChild(span);
    div.appendChild(button);
    label.appendChild(div);

    menu_suspenso[0].insertBefore(label,menu_suspenso[0].children[pos])

}
function teste_lista()
{
    let teste = document.getElementsByClassName("teste");
    let display='none';
    if (teste[0].style.display == 'none')
    {
        display = 'block';
    }
    for(let i=0;i<teste.length;i++)
    {
        teste[i].style.display = display;
    }
}
function adicionarEspacoSubGrupo(grupo, pos_ini, pos_fim)
{

    let div_overlay = document.getElementsByClassName("leaflet-control-layers-overlays");

    for(let i=pos_ini;i<pos_fim;i++)
    {
        div_overlay[0].children[i].children[0].setAttribute("id","margem-esquerda");
        div_overlay[0].children[i].children[0].classList.add(grupo);
    }

}


function relacionarSubGrupo(nome, index_grupo, pos_ini, pos_fim)
{

    let div = document.querySelector('.leaflet-control-layers-overlays')
    let inputs = div.querySelectorAll('input');
    let qtd_input = inputs.length;
    let status_subgrupo={};
    let texto_sem_espaco = nome.replace(" ","_")
    adicionarEspacoSubGrupo(texto_sem_espaco, pos_ini, pos_fim);

    inputs[index_grupo].onclick = function()
    {

        for(let i=pos_ini;i<pos_fim;i++)
        {
            if(inputs[index_grupo].checked==false)
            {

                if(i!=index_grupo)
                {
                    if(inputs[i].checked==true)
                    {
                        status_subgrupo[i]=true;
                        inputs[i].click();
                    }else
                    {
                        status_subgrupo[i]=false;
                    }
                }
            }else
            {
                if(i!=index_grupo)
                {
                    if(inputs[i].checked!=status_subgrupo[i])
                    {
                        inputs[i].click();
                    }
                }
            }
        }

    };

    // inicia o grupo minimizado
    let elementos_grupo = document.getElementsByClassName(texto_sem_espaco);
    for(let i=0;i<elementos_grupo.length;i++)
    {
        elementos_grupo[i].style.display = 'none';
    }
}