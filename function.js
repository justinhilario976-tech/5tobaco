document.addEventListener("DOMContentLoaded", function(){

    const $ = (id) => document.getElementById(id);

    function conectar(inputId, outputId){
        $(inputId).addEventListener("input", function(){
            $(outputId).textContent = this.value;
        });
    }

    conectar("name", "outName");
    conectar("role", "outRole");
    conectar("email", "outEmail");
    conectar("phone", "outPhone");
    conectar("address", "outAddress");
    conectar("about", "outAbout");
    conectar("education", "outEducation");
    conectar("experience", "outExperience");

    $("skills").addEventListener("input", function(){
        const lista = $("outSkills");
        lista.innerHTML = "";
        this.value.split(",").forEach(skill=>{
            if(skill.trim() !== ""){
                let li = document.createElement("li");
                li.textContent = skill.trim();
                lista.appendChild(li);
            }
        });
    });

    $("languages").addEventListener("input", function(){
        const lista = $("outLanguages");
        lista.innerHTML = "";
        this.value.split(",").forEach(lang=>{
            if(lang.trim() !== ""){
                let li = document.createElement("li");
                li.textContent = lang.trim();
                lista.appendChild(li);
            }
        });
    });

    $("photo").addEventListener("change", function(e){
        const reader = new FileReader();
        reader.onload = function(){
            $("outPhoto").src = reader.result;
        }
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    $("darkBtn").addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
        } else {
            this.textContent = "🌙 Modo Oscuro";
        }
    });

});

function downloadPDF(){

    const element = document.getElementById("preview");
    const container = document.querySelector(".container");

    // Guardar estilos originales
    const originalDisplay = container.style.display;
    const originalJustify = container.style.justifyContent;

    // Quitar centrado SOLO para el PDF
    container.style.display = "block";
    container.style.justifyContent = "flex-start";

    const options = {
        margin: 0,
        filename: "Mi_CV_Profesional.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { 
            scale: 3,
            scrollY: 0
        },
        jsPDF: { 
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {
            // Restaurar estilos después
            container.style.display = originalDisplay;
            container.style.justifyContent = originalJustify;
        });