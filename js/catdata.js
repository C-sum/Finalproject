let catImage=null;
const catContainer = document.getElementById("cat-container");
        fetch("cats.json")//fetching the data from the json file
            .then(response => response.json())
            .then(data => {
                const cats=data.cats;//getting the cats array from the json file
                document.getElementById("cat-button").addEventListener("click", ()=> {
                    if (catImage) {
                        catContainer.removeChild(catImage);
                    }
                    const randomCat =cats[Math.floor(Math.random()*cats.length)];//getting a random cat from the cats array
                    const statusCode =randomCat.status_code;//getting the status code from the random cat
                    const caption = randomCat.caption;//getting the caption from the random cat
                    const imageURI = `https://http.cat/[status_code]`.replace('[status_code]',statusCode);//getting the image uri from the random cat (like https://http.cat/404)
                    
                    
                    const img=document.createElement('img');//creating an image element
                    img.setAttribute('src',imageURI);
                    img.setAttribute('alt',caption);//setting the image source and alt attribute

                    catContainer.appendChild(img);//appending the image to the cat container
                    catImage=img;//setting the cat image to the cat image variable
                    // show the cat image in the cat container
                });
                // document.getElementById("remove-button").addEventListener("click", ()=> {
                //     //if the cat image is not null then remove the cat image
                //     if (catImage) {
                //         catContainer.remove(catImage);
                //     }
                
                // });
            });            