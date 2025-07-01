let copy=document.getElementById('copyright');
let currentYear= new Date().getFullYear();
copy.textContent=`© ${currentYear} Daniel Tudela - Mexico  `
let lastModifiedPara = document.getElementById('lastModified');
let lastModified = document.lastModified;
lastModifiedPara.textContent = `Last Modified: ${lastModified}`;