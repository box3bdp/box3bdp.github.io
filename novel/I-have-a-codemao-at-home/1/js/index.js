var main=document.getElementById("main");

main.innerHTML+=`<img src="https://box3bdp.github.io/novel/I-have-a-codemao-at-home/1/png/cover.png" style="height: 1000px;width: 700px;"><br/>`;
for(let i=1;i<=16;i++)
{
    main.innerHTML+=`<img src="https://box3bdp.github.io/novel/I-have-a-codemao-at-home/1/png/page-${i}.png" style="height: 1000px;width: 700px;"><p style="font-size: 17px;">${i}</p>`;
}