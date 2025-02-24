function display_date() {
    const Today = new Date();
    let Thisday = Today.getDate();
    let Thismonth = Today.getMonth() +1;
    let Thisyear = Today.getFullYear();
    let strdate = "Today's date: "+Thismonth+"/"+Thisday+"/"+Thisyear
    document.getElementById("currdate").innerHTML = strdate;
}
display_date();