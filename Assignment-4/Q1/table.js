const table = document.getElementsByTagName('table')[0];
table.tHead.rows[0].style.backgroundColor = 'rgb(240, 255, 143)';
var r = table.tBodies[0];
table.tBodies[0].rows[0].style.backgroundColor ='rgb(252, 179, 137)';
table.tBodies[0].rows[1].style.backgroundColor ='rgb(250, 120, 183)';
table.tBodies[0].rows[2].style.backgroundColor ='rgb(82, 220, 91)';
table.tBodies[0].rows[3].style.backgroundColor ='rgb(148, 255, 248)';
table.tBodies[0].rows[4].style.backgroundColor ='rgb(120, 170, 250)'; 

for(let i=0; i<r.rows.length; i++)
{ 
    var c = r.rows[i]; 
    for(let j=1; j<c.cells.length; j=j+2)
    { 
        console.log(c.cells[j].innerText); 
    }
}

