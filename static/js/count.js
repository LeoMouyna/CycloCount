var velovCounted = [];
var otherBikeCounted = [];
var redlightCounted = [];
var pavementCounted = [];
var pavementCounted = [];

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
    updateList(updateNumberElm, buttonElement.textContent);
    sliderElm.value = 1;
    updateSliderValue(sliderElm, updateNumberElm)
}

function isolateType(idString, suffixe){
    return idString.split(suffixe)[0]
}

function updateList(updateNumberElm, operator) {
    if (operator === "+"){
        for (var iter=0; iter < Number(updateNumberElm.textContent); iter ++){
            var newRegistration = Date.now();

            switch (isolateType(updateNumberElm.id, "UpdateNumber")){
                case "velov":
                    velovCounted.push(newRegistration);

                case "otherBiker":
                    otherBikeCounted.push(newRegistration);

                case "relight":
                    redlightCounted.push(newRegistration);

                case "pavement":
                    pavementCounted.push(newRegistration);
            }

        }
    }


    else
        for (var iter=0; iter < Number(updateNumberElm.textContent); iter ++){
            switch (isolateType(updateNumberElm.id, "UpdateNumber")){
                case "velov":
                    velovCounted.pop();

                case "otherBiker":
                    otherBikeCounted.pop();

                case "relight":
                    redlightCounted.pop();

                case "pavement":
                    pavementCounted.pop();
            }

        }
}

function showSendButton(expiry){
    var now = new Date();

    if(now.getTime()>expiry.getTime()){
        document.getElementById("sendInformations").style.display = "inline";
    }

}

/*Velov events and element*/
var velovMoreButtonElm = document.getElementById("velovMore");
var velovLessButtonElm = document.getElementById("velovLess");
var velovCountElm = document.getElementById("velovCount");
var velovUpdateNumberElm = document.getElementById("velovUpdateNumber");
var velovSliderElm = document.getElementById("velovSlider");

velovSliderElm.addEventListener("mousemove", function () {
    updateSliderValue(velovSliderElm, velovUpdateNumberElm)
});
velovSliderElm.addEventListener("change", function () {
    updateSliderValue(velovSliderElm, velovUpdateNumberElm)
});
velovMoreButtonElm.addEventListener("click", function(){
    updateValue(velovCountElm, velovUpdateNumberElm, velovSliderElm, velovMoreButtonElm);
});
velovLessButtonElm.addEventListener("click", function(){
    updateValue(velovCountElm, velovUpdateNumberElm, velovSliderElm, velovLessButtonElm);
});

/*Other bikes events and element*/
var otherBikeMoreButtonElm = document.getElementById("otherBikeMore");
var otherBikeLessButtonElm = document.getElementById("otherBikeLess");
var otherBikeCountElm = document.getElementById("otherBikeCount");
var otherBikeUpdateNumberElm = document.getElementById("otherBikeUpdateNumber");
var otherBikeSliderElm = document.getElementById("otherBikeSlider");

otherBikeSliderElm.addEventListener("mousemove", function () {
    updateSliderValue(otherBikeSliderElm, otherBikeUpdateNumberElm)
});
otherBikeSliderElm.addEventListener("change", function () {
    updateSliderValue(otherBikeSliderElm, otherBikeUpdateNumberElm)
});
otherBikeMoreButtonElm.addEventListener("click", function(){
    updateValue(otherBikeCountElm, otherBikeUpdateNumberElm, otherBikeSliderElm, otherBikeMoreButtonElm);
});
otherBikeLessButtonElm.addEventListener("click", function(){
    updateValue(otherBikeCountElm, otherBikeUpdateNumberElm, otherBikeSliderElm, otherBikeLessButtonElm);
});

/*redlight events and element*/
var redlightMoreButtonElm = document.getElementById("redlightMore");
var redlightLessButtonElm = document.getElementById("redlightLess");
var redlightCountElm = document.getElementById("redlightCount");
var redlightUpdateNumberElm = document.getElementById("redlightUpdateNumber");
var redlightSliderElm = document.getElementById("redlightSlider");

redlightSliderElm.addEventListener("mousemove", function () {
    updateSliderValue(redlightSliderElm, redlightUpdateNumberElm)
});
redlightSliderElm.addEventListener("change", function () {
    updateSliderValue(redlightSliderElm, redlightUpdateNumberElm)
});
redlightMoreButtonElm.addEventListener("click", function(){
    updateValue(redlightCountElm, redlightUpdateNumberElm, redlightSliderElm, redlightMoreButtonElm);
});
redlightLessButtonElm.addEventListener("click", function(){
    updateValue(redlightCountElm, redlightUpdateNumberElm, redlightSliderElm, redlightLessButtonElm);
});

/*pavement events and element*/
var pavementMoreButtonElm = document.getElementById("pavementMore");
var pavementLessButtonElm = document.getElementById("pavementLess");
var pavementCountElm = document.getElementById("pavementCount");
var pavementUpdateNumberElm = document.getElementById("pavementUpdateNumber");
var pavementSliderElm = document.getElementById("pavementSlider");

pavementSliderElm.addEventListener("mousemove", function () {
    updateSliderValue(pavementSliderElm, pavementUpdateNumberElm)
});
pavementSliderElm.addEventListener("change", function () {
    updateSliderValue(pavementSliderElm, pavementUpdateNumberElm)
});
pavementMoreButtonElm.addEventListener("click", function(){
    updateValue(pavementCountElm, pavementUpdateNumberElm, pavementSliderElm, pavementMoreButtonElm);
});
pavementLessButtonElm.addEventListener("click", function(){
    updateValue(pavementCountElm, pavementUpdateNumberElm, pavementSliderElm, pavementLessButtonElm);
});

var expiry = new Date("August 4, 2017 16:25:00")
showSendButton(expiry);
setInterval(function(){
    showSendButton(expiry); }, 10000);