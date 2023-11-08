rd /s /q build
rd /s /q dist
pyinstaller.exe --onefile --name GPXPhotoMap --icon gpxphotomap/icon.png --clean --noconsole main.py
