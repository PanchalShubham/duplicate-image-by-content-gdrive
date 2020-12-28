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

# license  
