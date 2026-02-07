# Shim so Django can import "MySQLdb" while using PyMySQL.
import pymysql
pymysql.install_as_MySQLdb()