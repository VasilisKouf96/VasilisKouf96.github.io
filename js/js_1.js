var scrimgar = ["/img/img3.jpg","/img/img1.jpg","/img/img4.jpg","/img/img5.jpg"];             
var ilen = scrimgar.length;

var i=-1;
var x=null
function slideS()
{
	oslide = function()
	{
	    i +=1;
		if(i<ilen)
		{
			document.getElementById("slideshow").src=scrimgar[i];
			console.info(i);
		}
		else
		{
			i=-1;
		}
	}

	    x =  setInterval(oslide, 3000);
}

//============================================\\


var texts =["../texts/text1.html","../texts/text2.html","../texts/text3.html","../texts/text4.html","../texts/text5.html","../texts/text6.html","../texts/text7.html"];

var links = ["https://www.iee.ihu.gr/course/%cf%83%cf%85%cf%83%cf%84%ce%ae%ce%bc%ce%b1%cf%84%ce%b1-%ce%b4%ce%b9%ce%b1%cf%87%ce%b5%ce%af%cf%81%ce%b9%cf%83%ce%b7%cf%82-%ce%b2%ce%ac%cf%83%ce%b5%cf%89%ce%bd-%ce%b4%ce%b5%ce%b4%ce%bf%ce%bc%ce%ad/",
"https://www.iee.ihu.gr/course/%ce%b5%ce%b9%cf%83%ce%b1%ce%b3%cf%89%ce%b3%ce%ae-%cf%83%cf%84%ce%b1-%ce%bb%ce%b5%ce%b9%cf%84%ce%bf%cf%85%cf%81%ce%b3%ce%b9%ce%ba%ce%ac-%cf%83%cf%85%cf%83%cf%84%ce%ae%ce%bc%ce%b1%cf%84%ce%b1/",
"https://www.iee.ihu.gr/course/web/","https://www.iee.ihu.gr/course/%cf%84%ce%b5%cf%87%ce%bd%ce%b7%cf%84%ce%ae-%ce%bd%ce%bf%ce%b7%ce%bc%ce%bf%cf%83%cf%8d%ce%bd%ce%b7/","https://www.iee.ihu.gr/course/%ce%b1%ce%bd%cf%84%ce%b9%ce%ba%ce%b5%ce%b9%ce%bc%ce%b5%ce%bd%ce%bf%cf%83%cf%84%cf%81%ce%b5%cf%86%ce%ae%cf%82-%cf%80%cf%81%ce%bf%ce%b3%cf%81%ce%b1%ce%bc%ce%bc%ce%b1%cf%84%ce%b9%cf%83%ce%bc%cf%8c%cf%82/",
"https://www.iee.ihu.gr/course/%ce%b4%ce%b9%cf%80%ce%bb%cf%89%ce%bc%ce%b1%cf%84%ce%b9%ce%ba%ce%ae-%ce%b5%cf%81%ce%b3%ce%b1%cf%83%ce%af%ce%b1/"];
var ilen2 =texts.length;

function dimoS()
{
	var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value; 
    var selectedText = selectBox.options[selectBox.selectedIndex].text;
    
    console.info(selectedText);
    console.info(selectedValue);
    
    document.getElementById("emtxt").src = texts[selectedValue];
    document.getElementById("link").setAttribute("href",links[selectedValue]);
    document.getElementById("link").innerHTML=selectedText
    
}


//============================================\\

function cHangeIMgI(imgN)
{
	if (imgN == 1)
	{
		document.getElementById("img1").src="../img/factoind1.jpg"
	}
	if (imgN == 2)
	{
		document.getElementById("img2").src="../img/factoind2.jpg"
	}
	if (imgN == 3)
	{
		document.getElementById("img3").src="../img/factoind3.jpg"
	}
	
}


function cHangeIMgO(imgN)
{
	if (imgN == 1)
	{
		document.getElementById("img1").src="../img/factoout1.jpg"
	}
	if (imgN == 2)
	{
		document.getElementById("img2").src="../img/factoout2.jpg"
	}
	if (imgN == 3)
	{
		document.getElementById("img3").src="../img/factoout3.jpg"
	}


}




