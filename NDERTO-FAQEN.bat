@echo off
title ChilliFest - ndertim per web
cd /d "%~dp0"
echo.
echo  Po instalohen paketat (heren e pare mund te zgjase)...
call npm install
if errorlevel 1 goto fail
echo.
echo  Po ndertohet folderi dist...
call npm run build
if errorlevel 1 goto fail
echo.
echo  GATI! Ngarko GJITHCKA brenda folderit:
echo  %~dp0dist
echo  ne public_html te Network Solutions.
echo.
explorer "%~dp0dist"
pause
exit /b 0

:fail
echo.
echo  Gabim. A ke Node.js? Shkarko nga https://nodejs.org
pause
exit /b 1
