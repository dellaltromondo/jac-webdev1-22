fetch("https://api.punkapi.com/v2/beers")
        .then(response=>response.json())
        .then(data=>
                    {
                        const section=document.getElementById("drink");

                                for(let i=0; i<data.length; i++)
                                {
                                    const div=document.createElement("div");
                                    section.appendChild(div);

                                    const text=document.createElement("section");
                                    div.appendChild(text);

                                    const nome=document.createElement("span");
                                    nome.innerHTML="<h2>"+data[i].name+"</h2>";
                                    
                                    const ingredienti=document.createElement("div");
                                    for(let j=0; j<data[i].ingredients.hops.length; j++)
                                    {
                                        ingredienti.innerHTML+=data[i].ingredients.hops[j].name+" - "+data[i].ingredients.hops[j].amount.value+" "+data[i].ingredients.hops[j].amount.unit+"<br\>";
                                    }
                                    ingredienti.innerHTML+="<br\>Gradazione (ABV): "+data[i].abv;

                                    const image=document.createElement("img");
                                    image.setAttribute("src", data[i].image_url);
                                    div.appendChild(image);
                                    text.appendChild(nome);
                                    text.appendChild(ingredienti);
                                }
                    }
            )