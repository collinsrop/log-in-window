"use strict";
//function call back
document.addEventListener("DOMContentLoaded", ()=>{
let allTime = document.querySelector("#rest");
allTime.addEventListener("click",validFiles)
function validFiles(){
	let inputFile = document.querySelector("#put");
	if(inputFile.files.length > 0){
		var fileInput = inputFile.files[0];
	}
const maxFileSize = 20 * 1024;
if (fileInput.size <= maxFileSize && fileInput.type==="application/msword" || fileInput.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
	alert("Successfully Submitted!");
}else{
	alert("Unsupported file size or Format!!");
}
}
});
