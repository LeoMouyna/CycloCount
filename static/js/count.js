function updateSliderValue(sliderElm, updateNumberElm) {
    updateNumberElm.textContent = Number(sliderElm.value);
}

function updateValue(countElm, updateNumberElm, sliderElm, buttonElement) {
    if (buttonElement.textContent === "+")
        countElm.textContent = Number(updateNumberElm.textContent) + Number(countElm.textContent);
     else if (Number(countElm.textContent) >= Number(updateNumberElm.textContent))
        countElm.textContent = Number(countElm.textContent) - Number(updateNumberElm.textContent);
     /*else
         Add error message like "You are trying to pull more than you already counted"*/
    sliderElm.value = 1;
    updateSliderValue(sliderElm, updateNumberElm)
}

var velovMoreButtonElm = document.getElementById("velovMore");
var velovLessButtonElm = document.getElementById("velovLess");
var velovCountElm = document.getElementById("velovCount");
var velovUpdateNumberElm = document.getElementById("velovUpdateNumber");
var velovSliderElm = document.getElementById("velovSlider");

velovSliderElm.addEventListener("change", function () {
    updateSliderValue(velovSliderElm, velovUpdateNumberElm)
});

velovMoreButtonElm.addEventListener("click", function(){
    updateValue(velovCountElm, velovUpdateNumberElm, velovSliderElm, velovMoreButtonElm);
});

velovLessButtonElm.addEventListener("click", function(){
    updateValue(velovCountElm, velovUpdateNumberElm, velovSliderElm, velovLessButtonElm);
});