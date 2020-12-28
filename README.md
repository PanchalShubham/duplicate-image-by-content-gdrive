# duplicate-image-by-content-gdrive  
This script can be used to list the duplicate files by content on the google-drive.  
The script lists the results and downloads a text file contaninig the entries as follows:  
`<original_filename>: [comma_separated filenames which has the same content as original_filename]`  
Once you have the list of duplicate images you can delete the images manually using searching capabilities of web-browser.  
I'm working on improving the script to automatically move the duplicate files to trash or rename the duplicate files under one category.  
Once I finish working on that I'll make an update!  

# how-to-use
The script is quite easy to use. Just copy the source-code, inspect the webpage (`Ctrl + Shift + I` on many platforms) and paste the script.  
Depending on the number of images you have in the target folder and your internet connection bandwidth, the script will take some time.  
Once the script is done it will download `duplicates.txt` containing the duplicate filenames.  

# disclaimer 
- The script is written using inspection and may break-down on one or the other day if google-drive choose to make changes in their services.  
- If you discover any error then see if you can inspect the webpage to grab the target items as done in script.  
- The script was written for personal use and is published with a hope that it will be useful to others. The author is not responsible for any misuse of the script.
- The script just loads the images from `googleusercontent.com` and compare them for duplicates. The script do not interfere in any other activities. Still I'd say `use script at your own risk; author will not be responsible for any loss you suffer because of use!`  
- For any query feel free to contant `shubhampanchal9773@gmail.com`
