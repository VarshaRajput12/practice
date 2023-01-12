const notification_popUp = document.querySelector(".notification");
const notifications = document.querySelector("#notifications");

notifications.addEventListener("click",(e)=>{
  if (notification_popUp.style.display == "block") {
      notification_popUp.style.display = "none";
    } else {
      notification_popUp.style.display = "block";
    }
})