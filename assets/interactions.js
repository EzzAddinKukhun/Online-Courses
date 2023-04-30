
let isListActive = true; 
let isNotificationsActive = true; 



function toggleNavigationList (){
    const list = document.getElementById("list"); 
    const overlay = document.getElementById("overlay"); 
    
    if (isListActive){
        list.style.transform = "translateX(0%)"        
        list.style.transition = "1s ease"        
        overlay.style.display = "block"

    }else{
        list.style.transform = "translateX(-100%)"
        list.style.transition = "1s ease"        
        overlay.style.display = "none"

    }
    isListActive = !isListActive; 
}


function toggleNotificationsList (){
    const notifications = document.getElementById("notifications"); 
    if (isNotificationsActive){
        notifications.style.display = "block"; 
    }else{
        notifications.style.display = "none"
    }
    isNotificationsActive = !isNotificationsActive; 
}
