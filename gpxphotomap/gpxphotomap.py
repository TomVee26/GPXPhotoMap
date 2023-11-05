import os
import webbrowser

from PySide6 import QtGui, QtWidgets
from PySide6.QtCore import Qt
from PySide6.QtWidgets import QFileDialog

import gpxphotomap.process_gpx as process_gpx
from gpxphotomap.mainwindow import Ui_MainWindow


# Import UI from QT designer
class MainWindow(QtWidgets.QMainWindow, Ui_MainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.setupUi(self)

        # Main icon
        self.setWindowIcon(QtGui.QIcon('gpxphotomap/icon.png'))
        self.generate_text_orig = self.generate_btn.text()

        # Set defaults
        self.gpx_timezone_cbx.addItems(process_gpx.all_timezones)
        self.gpx_timezone_cbx.setCurrentText('Europe/Berlin')
        self.gpx_file_edt.setText(os.path.abspath('data/GPS/track.gpx'))
        self.imgs_dir_edt.setText(os.path.abspath('data/JPEG'))
        self.file_out_edt.setText(os.path.abspath('data/JPEG/gps.js'))

        # Setup UI buttons
        self.gpx_timezone_cbx.currentIndexChanged.connect(self.reset_generate_btn)
        self.gpx_file_btn.clicked.connect(self.browse_gpx)
        self.imgs_dir_btn.clicked.connect(self.browse_imgs)
        self.generate_btn.clicked.connect(self.generate)

        # Text field updates
        self.gpx_file_edt.textChanged.connect(self.gpx_file_changed)
        self.imgs_dir_edt.textChanged.connect(self.imgs_dir_changed)

    # Reset 'Generate... Done!' text when UI changes
    def reset_generate_btn(self):
        self.generate_btn.setText(self.generate_text_orig)

    # Browse for GPX file
    def browse_gpx(self):
        file_gpx, _ = QFileDialog.getOpenFileName(self, 'Open file', '', 'GPX Files (*.gpx)')
        if file_gpx:
            self.gpx_file_edt.setText(os.path.normpath(file_gpx))
            self.reset_generate_btn()

    # Browse for folder with JPG photos
    def browse_imgs(self):
        imgs_dir = QFileDialog.getExistingDirectory(self, 'Select folder with photos')
        if imgs_dir:
            self.imgs_dir_edt.setText(os.path.normpath(imgs_dir))
            self.reset_generate_btn()

    # Automatically set path to JPEG folder when GPX path changes
    def gpx_file_changed(self):
        gpx_file = self.gpx_file_edt.text()
        imgs_dir = f'{os.path.dirname(os.path.dirname(gpx_file))}\\JPEG'
        self.imgs_dir_edt.setText(os.path.normpath(imgs_dir))
        self.reset_generate_btn()

    # Update path to gps.js when JPEG folder changes
    def imgs_dir_changed(self):
        imgs_dir = self.imgs_dir_edt.text()
        # Add backslash to folder path
        if not imgs_dir[-1] == '\\':
            imgs_dir += '\\'
        self.file_out_edt.setText(os.path.normpath(f'{imgs_dir}gps.js'))
        self.reset_generate_btn()

    # Generate gps.js
    def generate(self):
        if os.path.exists(self.gpx_file_edt.text()) and os.path.exists(self.imgs_dir_edt.text()):
            process_gpx.process_gpx(
                self.gpx_file_edt.text(),
                self.imgs_dir_edt.text(),
                self.file_out_edt.text(),
                self.gpx_timezone_cbx.currentText(),
            )
            self.generate_btn.setText('Generate... Done!')

            # Launch browser preview
            if self.preview_after_generating.isChecked():
                # Opens the local map.html file with ?dir= argument
                # This argument specifies where gps.js is loaded from
                arg = '?dir=file:///' + self.imgs_dir_edt.text()
                url = 'file:///' + os.path.abspath('data/map.html') + arg
                url = url.replace('\\', '/')

                # Try Vivaldi, Firefox then Edge
                vivaldi_exe = 'C:/Programs/Vivaldi/Application/vivaldi.exe'
                firefox_exe = 'C:/Program Files/Mozilla Firefox/firefox.exe'
                edge_exe = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

                if os.path.isfile(vivaldi_exe):
                    webbrowser.register('vivaldi', None, webbrowser.BackgroundBrowser(vivaldi_exe))
                    webbrowser.get('vivaldi').open(url)

                elif os.path.isfile(firefox_exe):
                    webbrowser.register('firefox', None, webbrowser.BackgroundBrowser(firefox_exe))
                    webbrowser.get('firefox').open(url)

                else:
                    webbrowser.register('edge', None, webbrowser.BackgroundBrowser(edge_exe))
                    webbrowser.get('edge').open(url)
        else:
            # Change button text when files don't exist
            self.generate_btn.setText('Wrong filepaths!')

    # Close UI on Esc
    def keyPressEvent(self, event):
        if event.key() == Qt.Key_Escape:
            self.close()
