function explain_callback(name, age, task){

    console.log('hello', name);
    console.log('your age', age);
   task();

}
function washHand(){

    console.log('wash hand with sop');
}

function takeShower(){
    console.log("Take shower everyday");
}

function fbscrolling(){
    console.log(" Don't like one unnecessary post ");
}
explain_callback('Jasim Uddin', 17, washHand);
explain_callback('Kamal Uddin',15, takeShower);
explain_callback('Nasir Uddin', 30, fbscrolling);