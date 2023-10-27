function demo()
{
    var name=document.getElementById('id1').value ;
    var name1='<option value="">Select</option>';
    for(let i=0;i<=name;i++){
        name1+='<option>'+i+'</option>'
    }
    document.getElementById('id3').innerHTML=name1;
}
function demoo(){
    var values=document.getElementById("id3").value;
    var print=[];
    for(let i=0;i<=values;i++){
        print.push(i);
    }
    document.getElementById("id4").innerHTML=print.join("<br>");
}
