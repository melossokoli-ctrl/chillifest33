@echo off
title ChilliFeste
cd /d "%~dp0"

echo.
echo  ChilliFeste - duke nisur serverin lokal...
echo  Mos e mbyll kete dritare derisa e perdor faqen.
echo.

if exist "C:\Program Files\nodejs\npm.cmd" (
  "C:\Program Files\nodejs\npm.cmd" run dev
) else (
  where npm >nul 2>&1
  if errorlevel 1 (
    echo  Node.js nuk u gjet. Instaloje nga https://nodejs.org
    pause
    exit /b 1
  )
  npm run dev
)

pause
