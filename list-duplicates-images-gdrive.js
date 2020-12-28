/**
 * @author Shubham Panchal <shubhampanchal9773@gmail.com>
 * Copyright (c) 2020 PanchalShubham
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */


// reads the image from the googleusercontent.com
function toDataURL(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    let reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

// reads the image-url form the google-drive thumbnail
function loadURL(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function(){
		let response = xhr.responseText;
		let result = response.match(/(itemJson[^}]*)/);
		let text = result[0];
		let link = "https://" + text.match(/https:\/\/([^\\]*)\\/)[1];
		toDataURL(link, callback);
	}
	xhr.send();
}

// lists the duplicate images
function listDuplicates() {
	// target div which contains the image thumbnails
	// it may vary - you can inspect or debug the webpage
	let divquery = 'div[jsaction="mousedown:qa5h4c"]';
	// classname for each image thumbnail
	// it may vary - you can inspect or debug the webpage
	let filequery = '.Q5txwe';
	let divs = document.querySelectorAll(divquery);
	let target = divs[divs.length - 1];
	let images = target.children;
	let dict = {};
	let duplicates = {};
	let processed = [];
	let imgCount = images.length;
	let interval = setInterval(function(){
		if (processed.length == imgCount) {
			let text = JSON.stringify(duplicates);
			console.log(text);	
			let link = document.createElement('a');
			link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			link.setAttribute('download', "duplicates.txt");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			clearInterval(interval);
		}
	}, 2000);
	for (let i = 0; i < images.length; ++i) {
		let ithChild = images[i];
		let img = ithChild.querySelectorAll('img')[1];
		let drivelink = img.src;
		let id = img.src.split("/d/")[1].split("=")[0];
		let tofetch = `https://drive.google.com/file/d/${id}`;
		let filename = ithChild.querySelector(filequery).innerText;
		loadURL(tofetch, function(dataurl){
			if (dict[dataurl] == undefined) {
				dict[dataurl] = filename;
			} else {
				let file = dict[dataurl];
				let list = duplicates[file];				
				if (list == undefined) {
					duplicates[file] = [filename];
				} else {
					duplicates[file].push(filename);
				}
			}
			processed.push(0);
		});
	}	
}


// invoke the function
listDuplicates();
	