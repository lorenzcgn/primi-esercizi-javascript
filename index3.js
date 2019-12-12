btnSaluti = document.querySelector("button")
        btnSaluti.onclick = function() {
            var first_value=document.getElementById("first_value").value;
            var second_value=document.getElementById("second_value").value;
            const result =+first_value + +second_value;
            document.getElementById("result").value = result
            document.getElementById("prova").innerHTML = "Il risultato dell'operazione è: "+result
            alert("Operazione eseguita con successo")

        }