// Funksiya: Ismni so'rash va DOM-ga chiqarish
function ismniYangila() {
    let ism = prompt("Ismingizni kiriting:");
    let nameDisplay = document.querySelector("#user-name");

    if (ism && ism.trim() !== "") {
        // Ismni ekranga chiqarish
        nameDisplay.textContent = ism;
        // Animatsiya qo'shish (ixtiyoriy)
        nameDisplay.classList.add("animate-bounce");
        setTimeout(() => nameDisplay.classList.remove("animate-bounce"), 1000);
    } else {
        nameDisplay.textContent = "Mehmon";
    }
}

// Funksiya: Sahifa fonini random o'zgartirish (BOM + DOM amaliyoti)
function fonniOzgartir() {
    // Random rang hosil qilish
    const randomRang = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("main-body").style.backgroundColor = randomRang;
}

// Sahifa yuklanganda ismni birinchi marta so'rash
window.onload = () => {
    // 500ms kutib keyin so'raymiz (brauzer yuklanib ulgurishi uchun)
    setTimeout(ismniYangila, 500);
};