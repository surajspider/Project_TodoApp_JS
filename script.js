let screen = document.getElementsByClassName("sub")[0];
let main = document.getElementsByClassName("main")[0];
let addnewlist = document.getElementsByClassName("addnewlist")[0];
let contentalternate = document.getElementsByClassName("contentalternate")[0];
var contentss = document.getElementsByClassName("content")[0];
var pageheading = document.getElementsByClassName("pageheading")[0];
var backicon = document.getElementById("topic_span");
var backlabel = document.getElementsByClassName("list")[0];
var topbutton = document.getElementById("headerbuttonlabel");
var inputelement = 0;
var counts = 0;
var id = 1;
var eid = 0;
var carddiv;
var footernew;
function additem() {
    screen.style.filter = "blur(5px)";
    addnewlist.style.display = "block";
}
function closec() {
    screen.style.filter = "blur(0px)";
    addnewlist.style.display = "none";
    console.log("hello");
}
function addlist() {
    let inputval = document.getElementById("addlist").value;
    let noitems = document.getElementById("noitems_text");
    // let content = document.getElementsByClassName("content")[0];
    console.log(inputval);

    // creating card
    var card = document.createElement("div");
    var heading = document.createElement("h2");
    var hr = document.createElement("hr");
    var maincard = document.createElement("div");
    var footer = document.createElement("div");
    var deleteb = document.createElement("button");
    var deleteicon = document.createElement("i");
    var additemb = document.createElement("button");

    //card id dynamic
    card.setAttribute("id", `card${id}`);
    card.classList.add("cardcss");
    //heading id dynamic
    heading.setAttribute("id", `cardheading${id}`);
    //maincard id dynamic
    maincard.setAttribute("id", `maincard${id}`);
    maincard.classList.add("maincard");
    //footer id dynamic
    footer.setAttribute("id", `footer${id}`);
    footer.classList.add("footer");
    //delete and new items id dynamic
    deleteb.setAttribute("id", `deleteb${id}`);
    deleteb.classList.add("deletecard");
    // deleteb.setAttribute("onclick", "deletecard()");
    deleteicon.setAttribute("class", "fa-solid fa-trash-can");
    deleteicon.style.color = "white";
    additemb.setAttribute("id", `additem${id}`);
    additemb.classList.add("additems");
    additemb.innerText = "+";
    //appending elements
    contentss.appendChild(card);
    card.appendChild(heading);
    card.appendChild(hr);
    card.appendChild(maincard);
    card.appendChild(footer);
    footer.appendChild(deleteb);
    deleteb.appendChild(deleteicon);
    footer.appendChild(additemb);
    screen.style.filter = "blur(0px)";
    addnewlist.style.display = "none";
    noitems.classList.add("none");
    //incrementing id 
    id++;

    //setting values
    heading.innerText = inputval;
    heading.style.cursor = "pointer";
    //deletecan shake
    deleteb.onmouseover = function () {
        deleteicon.classList.add("fa-shake");
    }
    deleteb.onmouseout = function () {
        deleteicon.classList.remove("fa-shake");
    }
    //deletecard function
    deleteb.addEventListener("click", function (event) {
        if (pageheading.style.visibility == "visible") {
            console.log("deletecheck");
            cardelementmain.children[0].remove();
        }
        card.remove();
        contentalternate.style.display = "none";
        contentss.classList.remove("none");
        console.log("check remove");
        pageheading.style.visibility = "hidden";
        backicon.innerHTML = "Tasks";
        backlabel.innerHTML = "Lists";
        topbutton.classList.remove("none");
        // cardelementmain.remove();

        checkelementspresent(contentss, noitems);
        event.stopPropagation();
    });

    //Heading - new page for an individual card
    heading.addEventListener("click", function (event) {
        contentss.classList.add("none");
        contentalternate.style.display = "flex";
        var top = document.getElementsByClassName("top")[0];
        //print card div
        console.log(heading.parentElement);
        carddiv = heading.parentElement;
        var icontag = document.createElement("i");
        var ccard = document.getElementById("ccard");
        var chead = document.getElementById("chead");
        var cardelementmain = document.getElementById("cardelementmain");
        icontag.setAttribute("class", "fa-solid fa-arrow-left fa-sm");
        icontag.style.color = "#ffffff";
        backicon.innerHTML = "";
        backlabel.innerText = "Back";
        pageheading.style.visibility = "visible";
        pageheading.innerHTML = heading.innerHTML;
        topbutton.classList.add("none");
        backicon.appendChild(icontag);
        cardelementmain.appendChild(maincard);
        ccard.appendChild(footer);
        contentalternate.style.display = "flex";
        footernew = footer;
        chead.innerText = heading.innerHTML;
        console.log(heading.innerText);
        contentalternate.style.justifyContent = "center";
        backicon.style.cursor = "pointer";
        backicon.addEventListener("click", function (event) {
            contentalternate.style.display = "none";
            contentss.classList.remove("none");
            card.appendChild(maincard);
            card.appendChild(footer);
            icontag.remove();
            pageheading.style.visibility = "hidden";
            backicon.innerHTML = "Tasks";
            backlabel.innerHTML = "Lists";
            topbutton.classList.remove("none");
        });
    });




    //creating dialog box for adding elements into the card

    additemb.addEventListener("click", function (event) {
        console.log(additemb.getAttribute("id"));
        screen.style.filter = "blur(5px)";
        //creating elements - dialog box
        let maindiv = document.createElement("div");
        let labeldiv = document.createElement("div");
        let label = document.createElement("label");
        let inputdialog = document.createElement("input");
        let buttondiv = document.createElement("div");
        let addbutdialog = document.createElement("button");
        let closebutdialog = document.createElement("button");

        //adding attributes - dialog box
        maindiv.setAttribute("class", "addnewlist");
        labeldiv.setAttribute("class", "addlistlabeldiv");
        label.setAttribute("for", "inputdialog");
        inputdialog.setAttribute("id", "addlist");
        inputdialog.setAttribute("placeholder", "Add New Item");
        inputdialog.setAttribute("onfocus", "this.value=''");
        buttondiv.setAttribute("class", "buttons_addclose");
        addbutdialog.setAttribute("id", "addbutdialog");
        closebutdialog.setAttribute("id", "closebut");

        //appending elements
        main.appendChild(maindiv);
        maindiv.appendChild(labeldiv);
        labeldiv.appendChild(label);
        maindiv.appendChild(inputdialog);
        maindiv.appendChild(buttondiv);
        buttondiv.appendChild(addbutdialog);
        buttondiv.appendChild(closebutdialog);


        //adding text into elements
        label.innerText = "Add New Item";
        addbutdialog.innerText = "Add";
        closebutdialog.innerText = "close";
        let addnewlists = document.getElementsByClassName("addnewlist")[1];
        addnewlists.style.display = "block";

        addbutdialog.addEventListener("click", function (event) {
            let inputvalue = inputdialog.value;
            console.log(inputvalue);
            inputelement = inputvalue;
            screen.style.filter = "blur(0px)";
            addnewlists.remove();

            // maincardss = maincard;
            event.stopPropagation();
            addelements(maincard);

        });

        closebutdialog.addEventListener("click", function (event) {
            screen.style.filter = "blur(0px)";
            addnewlists.remove();
            event.stopPropagation();
        });
        event.stopPropagation();
    });
    console.log(pageheading.style.visibility);

    if (pageheading.style.visibility == "visible") {
        console.log("hellooooo");
        contentalternate.style.display = "none";
        contentss.classList.remove("none");
        pageheading.style.visibility = "hidden";
        backicon.innerHTML = "Tasks";
        backlabel.innerHTML = "Lists";
        topbutton.classList.remove("none");
        console.log(cardelementmain);
        console.log(cardelementmain.children[0]);
        console.log(cardelementmain.children);
        carddiv.appendChild(cardelementmain.children[0]);
        // carddiv.appendChild(footer);
        // footernew = footer;
        carddiv.appendChild(footernew);
    }

}
//Checking no. of cards to zero. Otherwise print "no items present"
function checkelementspresent(contentss, noitems) {
    console.log("length");
    console.log(contentss.children.length);
    console.log(noitems);
    if (contentss.children.length == 1) {
        noitems.classList.remove("none");
    }
}
//function addelements() - adding elements into the card
function addelements(maincard) {
    var h3 = document.createElement("h3");
    var span1 = document.createElement("span1");
    var span2 = document.createElement("span2");
    var markb = document.createElement("button");
    var span3 = document.createElement("span3");
    var deleteele = document.createElement("i");
    span1.setAttribute("id", `eid${eid}`);
    span1.setAttribute("class", "items");
    markb.setAttribute("id", `markb${eid}`);
    markb.setAttribute("class", "markbut");
    span3.setAttribute("class", "deleteeleicon");
    deleteele.setAttribute("class", "fa-solid fa-delete-left");
    span1.innerText = inputelement;
    markb.innerText = "Mark Done";
    eid++;
    maincard.appendChild(h3);
    h3.appendChild(span1);
    h3.appendChild(span2);
    span2.appendChild(markb);
    h3.appendChild(span3);
    span3.appendChild(deleteele);
    markb.addEventListener("click", function (event) {
        span1.classList.add("markdone");
        span3.style.display = 'none';
        markb.style.display = "none";
        event.stopPropagation();
    });
    deleteele.addEventListener("click", function (event) {
        h3.remove();
        event.stopPropagation();
    });
}




