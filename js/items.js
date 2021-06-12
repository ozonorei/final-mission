var items = ['Satin Wide Hair Band', 'PunchieearlScr', 'CanvasLogoToteBag', 'EcoLeatherTwo-WayBag'];

items.sort();

var number = [11, 3, 5, 54];

number.sort(function(a, b) {
    return a - b;
});



var NewStock = [];
number.forEach(function (value) {
    if (NewStock.indexOf(value) == -1) {
    NewStock.push(value);
    }
});



var itemsss = [
    {number: 1, item: "Satin Wide Hair Band", year: "9800"},
    {number: 2, item: "PunchieearlScr", year: "12800"},
    {number: 3, item: "CanvasLogoToteBag", year: "4800"},
    {number: 4, item: "EcoLeatherTwo-WayBag", year: "6650"}
];


itemsss.reverse(function(a,b) {
    return a - b;
});
