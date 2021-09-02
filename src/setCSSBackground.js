function setCSSBackground(category) {
    const cssColor = 
    category.includes("post-transition metal") ? "--xiketic" : 
    category.includes("metalloid") ? "--upsdell-red" : 
    category.includes("alkali metal") ? "--pewter-blue" :
    category.includes("noble gas") ? "--lemon-curry" :
    category.includes("alkaline earth metal") ? "--old-gold" :
    category.includes("polyatomic nonmetal") ? "--brick-red" :
    category.includes("diatomic nonmetal") ? "--dark-purple" :
    category.includes("transition metal") ? "--eerie-black" :
    category.includes("actinide") ? "--olive-drab-7" :
    category.includes("lanthanide") ? "--blue-violet-color-wheel" : ""  

    return cssColor
}

export default setCSSBackground