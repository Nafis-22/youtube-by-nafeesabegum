let div = document.getElementById("videodiv");
async function display()
{
let res = await fetch(`https://www.youtube.com/youtubei/v1/search?q=popular%20videos&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}
}
display();
 
async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; 

    let query = document.getElementById("video").value; 

let res = await fetch(`https://www.youtube.com/youtubei/v1/search?q=${query}&type=video&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8`);
let data = await res.json();

for({
id:{videoId}}of data.items){
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)

}
}