const bestelling = {"fris": 2.50, "bier": 2.00, "wijn": 3.00, "snacks8": 5.00, "snacks16": 8.00};

var qty = {"frisQty": 0, "bierQty": 0, "wijnQty": 0, "achtBal": 0, "zestienBal": 0};


function fullOrder(){
	var order = prompt("Welke bestelling wilt u toevoegen? Kies uit 'fris', 'bier', 'wijn' of 'snacks'.");
		if (order == "stop"){
			if (qty["frisQty"] > 0){
				document.write(qty["frisQty"] + "x fris" + "<br>");
			}
			if (qty["bierQty"] > 0){
				document.write(qty["bierQty"] + "x bier" + "<br>");
			}
			if (qty["wijnQty"] > 0){
				document.write(qty["wijnQty"] + "x wijn" + "<br>");
			}
			if (qty["achtBal"] > 0){
				document.write(qty["achtBal"] + "x 8 snacks" + "<br>");
			}
			if (qty["zestienBal"] > 0){
				document.write(qty["zestienBal"] + "x 16 snacks" + "<br>");
			}
			
			document.write("Totaal: " + (bestelling["fris"] * qty["frisQty"] + bestelling["bier"] * qty["bierQty"] + bestelling["wijn"] * qty["wijnQty"] + bestelling["snacks8"] * qty["achtBal"] + bestelling["snacks16"] * qty["zestienBal"]));
		} 

		else if (order == "fris"){
			qty["frisQty"] = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
			console.log(qty["frisQty"])
			fullOrder();
		}

		else if (order == "bier"){
			qty["bierQty"] = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
			fullOrder();
		}

		else if (order == "wijn"){
			qty["wijnQty"] = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
			fullOrder();
		}

		else if (order == "snacks"){
			snacks = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
			if (snacks == 8){
				qty["achtBal"] = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
			}
			else if (snacks == 16){
				qty["zestienBal"] = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
			}
			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
			}
			fullOrder();
		}

		else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			fullOrder();
		}
}		
fullOrder();