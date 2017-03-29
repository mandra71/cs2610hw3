
document.title = "Javascript Assignment";

var divMaker = function (color) {
    var div = document.createElement('div');
    div.setAttribute("class", "box " + color + " shadow");
    document.body.appendChild(div);
};

divMaker('red');
divMaker('blue');
divMaker('green');


function fibHelper (n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
    var p = document.createElement('p');
    
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = fibHelper(n - 1);
        var getClass = left.html.getAttribute("class");
        var right = fibHelper(n - 2);
        left.html.setAttribute("class", getClass + " fibLeft");
        getClass = right.html.getAttribute("class");
        right.html.setAttribute("class", getClass + " fibRight");
    
        value = left.value + right.value;
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var fib = function (n, node){
    var tree = fibHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('id', 'fib');
};

fib(11, document.querySelector('.red'));

function pelHelper (n) {
    var value2;
    var div2 = document.createElement('div');
    div2.setAttribute("class", "pel");
    var p2 = document.createElement('p');
    
    if (n < 2) {
        if (n === 0) {
            value2 = 0;
        }
        else if (n === 1) {
            value2 = 1;
        }
        p2.textContent = 'Pel(' + n + ') = ' + value2;
        div2.appendChild(p2);
    }
    else {
        var left = pelHelper(n - 1);
        var getClass = left.html.getAttribute("class");
        var right = pelHelper(n - 2);
        left.html.setAttribute("class", getClass + " pelLeft");
        getClass = right.html.getAttribute("class");
        right.html.setAttribute("class", getClass + " pelRight");
    
        value2 = 2 * left.value + right.value;
        p2.textContent = 'Pel(' + n + ') = ' + value2;
        div2.appendChild(p2);
        
        div2.appendChild(left.html);
        div2.appendChild(right.html);
    }
    return { 'value': value2, 'html': div2 };
}

var pel = function (n, node){
    var tree = pelHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('id', 'pel');
};

pel(11, document.querySelector('.blue'));

function tribHelper (n) {
    var value3;
    var div3 = document.createElement('div');
    div3.setAttribute("class", "trib");
    var p3 = document.createElement('p');
    
    if (n < 3) {
        if (n === 0) {
            value3 = 0;
        }
        else if (n === 1) {
            value3 = 0;
        }
        else if (n === 2) {
            value3 = 1;
        }
        p3.textContent = 'Trib(' + n + ') = ' + value3;
        div3.appendChild(p3);
    }
    else {
        var left = tribHelper(n - 1);
        var mid = tribHelper(n - 2);
        var right = tribHelper(n - 3);
        var getClass = left.html.getAttribute("class");
        left.html.setAttribute("class", getClass + " tribLeft");
        getClass = mid.html.getAttribute("class");
        mid.html.setAttribute("class", getClass + " tribMid");
        getClass = right.html.getAttribute("class");
        right.html.setAttribute("class", getClass + " tribRight");
    
        value3 = left.value + mid.value + right.value;
        p3.textContent = 'Trib(' + n + ') = ' + value3;
        div3.appendChild(p3);
        
        div3.appendChild(left.html);
        div3.appendChild(mid.html);
        div3.appendChild(right.html);
    }
    return { 'value': value3, 'html': div3 };
}

var trib = function (n, node){
    var tree = tribHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('id', 'trib');
};

trib(11, document.querySelector('.green'));

var style = document.createElement('style');
style.textContent = "#fib { display: inline-block; width: 20000px; } " +
".fib { background-color: rgba(0,0,255,0.1); }" +
".fibLeft { float: left; display: inline-block; margin-right: 2px; }" +
".fibRight { float: right; display: inline-block; margin-left: 2px; }" +
"#pel { display: inline-block; width: 20000px; } " +
".pel { background-color: rgba(255,0,0,0.1); }" +
".pelLeft { float: left; display: inline-block; margin-right: 2px; }" +
".pelRight { float: right; display: inline-block; margin-left: 2px; }" +
"#trib { display: inline-block; width: 40000px; } " +
".trib { background-color: rgba(255,0,0,0.1); }" +
".tribLeft { float: left; display: inline-block; margin-right: 2px; }" +
".tribMid { float: center; display: inline-block; margin-left: 2px;  margin-right: 2px; }" +
".tribRight { float: right; display: inline-block; margin-left: 2px; }" +
".shadow { text-shadow: 1px 1px 2px black; color: white; }" +
".box { font-family: 'helvetica neue', helvetica, sans-serif; letter-spacing: 1px;" +
"text-transform: capitalize; text-align: center; padding: 3px 10px; }" +
".red { border-color: rgb(255,0,0); background: rgb(180,60,60); box-shadow: 1px 1px 2px rgba(200,0,0,0.4); }" +
".blue { border-color: rgb(0,0,255); background: rgb(60,60,180); box-shadow: 1px 1px 2px rgba(0,0,200,0.4); }" +
".green { border-color: rgb(0,255,0); background: rgb(60,180,60); box-shadow: 1px 1px 2px rgba(0,200,0,0.4); }"
;
document.head.appendChild(style);