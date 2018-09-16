// data for my website
var s;

function Game(name, price, size, type, publishDate, maker, minimumRequirement, recommendRequirement, description, pic1, pic2, pic3, pic4) // constructor for creating a new game
{
    // data of class Game
    this.name = name;
    this.price = price;
    this.size = size;
    this.type = type;
    this.publishDate = publishDate;
    this.maker = maker;
    this.minimumRequirement = minimumRequirement;
    this.recommendRequirement = recommendRequirement;
    this.description = description;
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    

    // method of class Game
    this.toString = function()
    {
        return  "\n<h1>" + this.name
                + " <input type=\"button\" class=\"round\" value=\"" + this.type + "\">"
                + "<br>\n" + (this.price*1).toLocaleString("en") + "đ</h1>\n"
                // + "\n<h2>Publisher: " + this.maker + "<br>\nPublish date: " + this.publishDate + "<br>\nSize: " + this.size 
                + "<input type=\"button\" class=\"square\" value=\"" + this.maker + "\">\n"
                + "<input type=\"button\" class=\"square\" value=\"" + this.publishDate + "\">\n"
                + "<input type=\"button\" class=\"square\" value=\"" + this.size + "\">"
                + "<br><br><br>\n<h2>YÊU CẦU HỆ THỐNG:</h2>"
                + "\n<p class=\"italic\"><u>Cấu hình tối thiểu</u><br>\n" + this.minimumRequirement 
                + "<br>\n<u>Cấu hình đề nghị</u><br>\n" + this.recommendRequirement + "</p>"
                + "\n<h2>MÔ TẢ:</h2>\n<p class=\"italic\">" + this.description + "</p>";

    }    

    this.toCard = function(desDiv, i)
    {
        var t = document.getElementById(desDiv);
        t.innerHTML += 
        "<div class=\"outer\"><div class=\"inner\" onclick=\"gamelist[" + i + "].toHTML('bot')\"><img src=\"" + this.pic1 + "\">"
        + "<h2>" + this.name + "<br>" + (this.price*1).toLocaleString("en") + "đ</h2><p>Nhấp vào để xem chi tiết hoặc ấn vào nút bên dưới để đặt mua</p><input type=\"button\" class=\"button\" value=\"Đặt mua\" onclick=\"buythis("+ i +")\">"
        + "</div></div>";   
    }

    this.toHTML = function(id)
    {
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
        var bot = document.getElementById("bot");
        bot.style.display = "block";
        var t = document.getElementById(id);
        t.innerHTML = "<img src=\"" + this.pic2 + "\"><img src=\"" + this.pic3 + "\"><img src=\"" + this.pic4 + "\">";
        var info = document.getElementById("info");
        s = info.innerHTML;
        info.innerHTML += this.toString();
        info.style.opacity = 0.8;
        if (window.matchMedia("(max-width: 800px)").matches) {
            document.getElementById("top").style.display = 'none';
        } else {
            setTimeout(() => {
                bot.style.transform = "translateY(-100vh)";                
            }, 10);
        }
    }
}

function hideInfo()
{
    var info = document.getElementById("info");
    info.style.opacity = 0;
    info.innerHTML = s;
    var bot = document.getElementById("bot");
    if (window.matchMedia("(max-width: 800px)").matches) {
        document.getElementById("top").style.display = 'block';
    } else {
        bot.style.transform = "translateY(1000px)";
        setTimeout(() => {
            bot.style.display = "none";
        }, 1000);
    }
}

function showGameList()
{
    var t = document.getElementById("optionlist");
    for (var i=0; i < gamelist.length; i++)
    {
        t.innerHTML += "\n<option value=\"" + i + "\">" + gamelist[i].name + "</option>";    
    }
    var u = window.location.href;
    var n = "";
    var i = u.length - 1;
    if (u[i] == "l")
    {
        t.selectedIndex = -1;
    }
    else
    {
        while (u[i] != "?" && u[i]!="l") 
        {
            n = u[i] + n;
            i--;
        }
        t.selectedIndex = new Number(n);
    }
}

function tinhTien()
{
    var t = document.getElementById("tongtien");
    var g = document.getElementById("optionlist");
    var sl = document.getElementById("sl");
    t.innerHTML = (gamelist[g.selectedIndex].price * sl.value).toLocaleString("vi") + " VND";
}

function buythis(i)
{
    window.open("order.html?" + i, "_self");
}

function loadCard()
{
    for (var i=0; i < gamelist.length; i++)
    {
        gamelist[i].toCard("top", i);
    }
}

function loadFPSCard()
{
    for (var i=0; i < gamelist.length; i++)
    {
        if (gamelist[i].type == "FPS")
        {
            gamelist[i].toCard("top", i);   
        }
    }
}

function loadRTSCard()
{
    for (var i=0; i < gamelist.length; i++)
    {
        if (gamelist[i].type == "RTS")
        {
            gamelist[i].toCard("top", i);   
        }
    }
}

function loadPLTCard()
{
    for (var i=0; i < gamelist.length; i++)
    {
        if (gamelist[i].type == "2DP")
        {
            gamelist[i].toCard("top", i);   
        }
    }
}

function blurBG()
{
    var t = document.getElementById("bgvid");
    window.setTimeout(function()
    {
        t.style.opacity = "0.3";
    }, 8000);
}

function show345()
{
    if (window.innerWidth > 800)
    {
        tab3.style.transform = "translateX(0px)";
        tab4.style.transform = "translateX(0px)";
        tab5.style.transform = "translateX(0px)";
        tab6.style.top = "290px";
        
    }
}

function hide345()
{
    if (window.innerWidth > 800)
    {
        tab3.style.transform = "translateX(-100px)";
        tab4.style.transform = "translateX(-100px)";
        tab5.style.transform = "translateX(-100px)";
        tab6.style.top = "130px";   
    }
}

function focuson(which)
{
    var tab = document.getElementById("tab" + which);
    tab1.style.color = "white";
    tab2.style.color = "white";
    tab3.style.color = "white";
    tab4.style.color = "white";
    tab5.style.color = "white";
    tab6.style.color = "white";
    tab.style.color = "#8EC127";
}