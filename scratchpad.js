
document.title = "Javascript Assignment";

function fibHelper (n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
    var p = document.createElement('p');
    
    if (n <2) {
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
        var right = fibHelper(n - 2);
        left.html.setAttribute("class", "fibLeft");
        right.html.setAttribute("class", "fibRight");
    
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
};

