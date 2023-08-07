
function relacionarSubGrupo(index_grupo, pos_ini, pos_fim)
{


    let inputs = document.getElementsByTagName('input');
    let qtd_input = inputs.length;
    let status_subgrupo={};

    let div_overlay = document.getElementsByClassName("leaflet-control-layers-overlays");

    for(let i=pos_ini;i<pos_fim;i++)
    {
        div_overlay[0].children[i].children[0].setAttribute("id","margem-esquerda");
    }

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

}