function hideDescription(flavor) {
    let description = flavor.nextElementSibling;
    let visibility = "visible";
    if(description.style.visibility == visibility) visibility = "collapse";

    description.style.visibility = visibility;
}