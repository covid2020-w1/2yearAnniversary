// ok.... time for the hard stuff. define buttons w qs and data-carousel-buttons[] data-label. on the button, run a forEach loop(button, ()=>{}) where inside the function body you define offset, slides (using .closest and .queryselctor double combiner). wait, i forgot taht imm after the foreach line is a eventlistener line on the button. for offset, youre equalling it to the ternary operator of if the data-active label is === "next". if so, add 1 otherwise subtract w -1. ok, back to after youve defined slides. then you define active sldies using qs and data-slides attribtue. then, you create an index newIndex = [...slides.children]. somehow this creates an array of all the li .slides that you can reference with slides.children. and importantly, after creating the array you [...slides.children].indexOf("[active-slide]") + offset. this is the math that basically creates a variable for storing where in the array you want to go next, left or right. then you need ot plug newIndex in somewehre... but first i think you do conditionals for the end conditions of the array. so if newIndex is less than 0, make index = the index of the last item in the array. if newIndex is greater than the length of the array,  make it equal to 0. the last part of the code that ties a know over everything is where you tell the program, "hey, give the item in the array identified by the index newIndex the attribute of data-active, and delete the data-active attribute from the item w/ index of activeSlide. That way, the new slide you have indicated from () with the index of newIndex will have the rule that selects .slide[data-active] set it's opacity to 1, and th eother will have opacity set to 0. aaaaaand break!

let buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let offset = button.dataset.carouselButton === "next" ? 1 : -1;
        let slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        let activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0)newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length)newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active; 
    })
})

//the mistake i made here was that in one attribute selector i put the quotes inside the square brackets. the notation is always "[attribute]". Also, there is no .data property. it's only .dataset to access a data-* attribute from an element. for some reason the notation for forEach requires that you do NOT put a parentheses.  always thought taking away the parentheses was optional when delcaring an anonymous function? Maybe forEach changes the typical notation for anonymous functions?