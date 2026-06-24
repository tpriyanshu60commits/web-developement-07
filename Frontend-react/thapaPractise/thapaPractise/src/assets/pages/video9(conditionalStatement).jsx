const Video9ConditionalStatement= ()=>
{
    // q1
    const isDark = true;
    // q2
    let cartItems = 2;
    let cartitmesShow = "Cart Empty";
    if(cartItems>1)cartitmesShow =  "Cart not Empty";
    // q3
    const score  = 85;
    const scoreShow  = ()=>
    {
        if(score<80)return "Need Improvement";
        return "Excellent";
    }
    // q4
    const loading = true;
    // q5
    const gender = "male";
    const genderShow = ()=>
    {
        if(gender=="male")return "Mr.";
        return "Ms.";
    }
    // Q6
    const marks = 100;
    const marksShow= ()=>
    {
        if(marks>= 80)return"A";
        if(marks>= 60)return"B";
        if(marks >= 40)return"C";
        return"D";
    }

    
    return(
        <>
        <h1>{(isDark? "dark mode": "light mode")}</h1>
        <h1>{cartitmesShow}</h1>
        <h1>{scoreShow()}</h1>
        <h1>{loading?"Loading...": "Submit"}</h1>
        <h1>{genderShow()}</h1>
        <h1>{marks>=80 ?"A" : marks >= 60 ?"B":"fail"}</h1>
        </>
    )

}
export default Video9ConditionalStatement;