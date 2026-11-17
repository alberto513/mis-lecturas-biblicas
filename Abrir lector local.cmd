@echo off
setlocal
start "Lector biblico local" /B node "%~dp0local-server.js" <nul >nul 2>nul
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4175/"
