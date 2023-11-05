# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'mainwindow.ui'
##
## Created by: Qt User Interface Compiler version 6.6.0
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QCheckBox, QComboBox, QGroupBox,
    QHBoxLayout, QLabel, QLineEdit, QMainWindow,
    QPushButton, QSizePolicy, QSpacerItem, QToolButton,
    QVBoxLayout, QWidget)

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(700, 401)
        sizePolicy = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(MainWindow.sizePolicy().hasHeightForWidth())
        MainWindow.setSizePolicy(sizePolicy)
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        sizePolicy.setHeightForWidth(self.centralwidget.sizePolicy().hasHeightForWidth())
        self.centralwidget.setSizePolicy(sizePolicy)
        self.centralwidget.setAutoFillBackground(False)
        self.verticalLayout_6 = QVBoxLayout(self.centralwidget)
        self.verticalLayout_6.setObjectName(u"verticalLayout_6")
        self.groupBox = QGroupBox(self.centralwidget)
        self.groupBox.setObjectName(u"groupBox")
        self.verticalLayout_2 = QVBoxLayout(self.groupBox)
        self.verticalLayout_2.setObjectName(u"verticalLayout_2")
        self.label = QLabel(self.groupBox)
        self.label.setObjectName(u"label")
        sizePolicy1 = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Maximum)
        sizePolicy1.setHorizontalStretch(0)
        sizePolicy1.setVerticalStretch(0)
        sizePolicy1.setHeightForWidth(self.label.sizePolicy().hasHeightForWidth())
        self.label.setSizePolicy(sizePolicy1)

        self.verticalLayout_2.addWidget(self.label)

        self.horizontalLayout = QHBoxLayout()
        self.horizontalLayout.setObjectName(u"horizontalLayout")
        self.gpx_file_edt = QLineEdit(self.groupBox)
        self.gpx_file_edt.setObjectName(u"gpx_file_edt")
        sizePolicy2 = QSizePolicy(QSizePolicy.MinimumExpanding, QSizePolicy.Fixed)
        sizePolicy2.setHorizontalStretch(0)
        sizePolicy2.setVerticalStretch(0)
        sizePolicy2.setHeightForWidth(self.gpx_file_edt.sizePolicy().hasHeightForWidth())
        self.gpx_file_edt.setSizePolicy(sizePolicy2)
        self.gpx_file_edt.setMinimumSize(QSize(300, 0))

        self.horizontalLayout.addWidget(self.gpx_file_edt)

        self.gpx_file_btn = QToolButton(self.groupBox)
        self.gpx_file_btn.setObjectName(u"gpx_file_btn")

        self.horizontalLayout.addWidget(self.gpx_file_btn)


        self.verticalLayout_2.addLayout(self.horizontalLayout)

        self.label_4 = QLabel(self.groupBox)
        self.label_4.setObjectName(u"label_4")
        self.label_4.setMaximumSize(QSize(16777215, 16777215))

        self.verticalLayout_2.addWidget(self.label_4)

        self.horizontalLayout_4 = QHBoxLayout()
        self.horizontalLayout_4.setObjectName(u"horizontalLayout_4")
        self.gpx_timezone_cbx = QComboBox(self.groupBox)
        self.gpx_timezone_cbx.setObjectName(u"gpx_timezone_cbx")
        self.gpx_timezone_cbx.setMaximumSize(QSize(16777215, 16777215))

        self.horizontalLayout_4.addWidget(self.gpx_timezone_cbx)

        self.horizontalSpacer = QSpacerItem(66, 20, QSizePolicy.Fixed, QSizePolicy.Minimum)

        self.horizontalLayout_4.addItem(self.horizontalSpacer)


        self.verticalLayout_2.addLayout(self.horizontalLayout_4)

        self.label_2 = QLabel(self.groupBox)
        self.label_2.setObjectName(u"label_2")
        sizePolicy1.setHeightForWidth(self.label_2.sizePolicy().hasHeightForWidth())
        self.label_2.setSizePolicy(sizePolicy1)

        self.verticalLayout_2.addWidget(self.label_2)

        self.horizontalLayout_2 = QHBoxLayout()
        self.horizontalLayout_2.setObjectName(u"horizontalLayout_2")
        self.imgs_dir_edt = QLineEdit(self.groupBox)
        self.imgs_dir_edt.setObjectName(u"imgs_dir_edt")
        sizePolicy2.setHeightForWidth(self.imgs_dir_edt.sizePolicy().hasHeightForWidth())
        self.imgs_dir_edt.setSizePolicy(sizePolicy2)
        self.imgs_dir_edt.setMinimumSize(QSize(300, 0))

        self.horizontalLayout_2.addWidget(self.imgs_dir_edt)

        self.imgs_dir_btn = QToolButton(self.groupBox)
        self.imgs_dir_btn.setObjectName(u"imgs_dir_btn")

        self.horizontalLayout_2.addWidget(self.imgs_dir_btn)


        self.verticalLayout_2.addLayout(self.horizontalLayout_2)


        self.verticalLayout_6.addWidget(self.groupBox)

        self.verticalSpacer = QSpacerItem(20, 5, QSizePolicy.Minimum, QSizePolicy.Fixed)

        self.verticalLayout_6.addItem(self.verticalSpacer)

        self.groupBox_2 = QGroupBox(self.centralwidget)
        self.groupBox_2.setObjectName(u"groupBox_2")
        self.verticalLayout = QVBoxLayout(self.groupBox_2)
        self.verticalLayout.setObjectName(u"verticalLayout")
        self.label_3 = QLabel(self.groupBox_2)
        self.label_3.setObjectName(u"label_3")

        self.verticalLayout.addWidget(self.label_3)

        self.horizontalLayout_3 = QHBoxLayout()
        self.horizontalLayout_3.setObjectName(u"horizontalLayout_3")
        self.file_out_edt = QLineEdit(self.groupBox_2)
        self.file_out_edt.setObjectName(u"file_out_edt")
        self.file_out_edt.setEnabled(False)

        self.horizontalLayout_3.addWidget(self.file_out_edt)

        self.horizontalSpacer_2 = QSpacerItem(66, 20, QSizePolicy.Fixed, QSizePolicy.Minimum)

        self.horizontalLayout_3.addItem(self.horizontalSpacer_2)


        self.verticalLayout.addLayout(self.horizontalLayout_3)


        self.verticalLayout_6.addWidget(self.groupBox_2)

        self.verticalSpacer_2 = QSpacerItem(20, 10, QSizePolicy.Minimum, QSizePolicy.MinimumExpanding)

        self.verticalLayout_6.addItem(self.verticalSpacer_2)

        self.preview_after_generating = QCheckBox(self.centralwidget)
        self.preview_after_generating.setObjectName(u"preview_after_generating")
        self.preview_after_generating.setLayoutDirection(Qt.LeftToRight)
        self.preview_after_generating.setChecked(True)

        self.verticalLayout_6.addWidget(self.preview_after_generating)

        self.generate_btn = QPushButton(self.centralwidget)
        self.generate_btn.setObjectName(u"generate_btn")
        self.generate_btn.setEnabled(True)
        sizePolicy3 = QSizePolicy(QSizePolicy.Minimum, QSizePolicy.Fixed)
        sizePolicy3.setHorizontalStretch(0)
        sizePolicy3.setVerticalStretch(0)
        sizePolicy3.setHeightForWidth(self.generate_btn.sizePolicy().hasHeightForWidth())
        self.generate_btn.setSizePolicy(sizePolicy3)
        self.generate_btn.setMinimumSize(QSize(0, 50))

        self.verticalLayout_6.addWidget(self.generate_btn)

        MainWindow.setCentralWidget(self.centralwidget)
        self.generate_btn.raise_()
        self.groupBox.raise_()
        self.groupBox_2.raise_()
        self.preview_after_generating.raise_()

        self.retranslateUi(MainWindow)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"GPX Photo Map", None))
        self.groupBox.setTitle(QCoreApplication.translate("MainWindow", u"Input", None))
        self.label.setText(QCoreApplication.translate("MainWindow", u"GPX Track", None))
        self.gpx_file_edt.setText("")
        self.gpx_file_btn.setText(QCoreApplication.translate("MainWindow", u"Browse...", None))
        self.label_4.setText(QCoreApplication.translate("MainWindow", u"GPX Time Zone", None))
        self.label_2.setText(QCoreApplication.translate("MainWindow", u"Folder with Images", None))
        self.imgs_dir_btn.setText(QCoreApplication.translate("MainWindow", u"Browse...", None))
        self.groupBox_2.setTitle(QCoreApplication.translate("MainWindow", u"Output", None))
        self.label_3.setText(QCoreApplication.translate("MainWindow", u"Output File", None))
        self.preview_after_generating.setText(QCoreApplication.translate("MainWindow", u"Preview after Generating", None))
        self.generate_btn.setText(QCoreApplication.translate("MainWindow", u"Generate", None))
    # retranslateUi

