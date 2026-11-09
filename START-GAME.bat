@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title NEXUS STRIKE V2.0 - Game Launcher
set "PORT=4173"

echo ============================================================
echo              NEXUS STRIKE // GAME LAUNCHER
echo ============================================================
echo.

where node >nul 2>&1
if errorlevel 1 goto NODE_MISSING
where npm >nul 2>&1
if errorlevel 1 goto NODE_MISSING

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul 2>&1
if not errorlevel 1 goto ALREADY_RUNNING

if not exist "node_modules\three\package.json" (
    echo [SETUP] First launch: installing game dependencies...
    echo         This only needs to be done once.
    echo.
    call npm install
    if errorlevel 1 goto INSTALL_FAILED
    echo.
)

echo [START] Launching NEXUS STRIKE...
echo [URL]   http://localhost:%PORT%
echo.
echo Keep this window open while playing.
echo Close this window or press Ctrl+C to stop the game server.
echo.

call npm run dev -- --port %PORT% --open
if errorlevel 1 goto SERVER_FAILED
exit /b 0

:ALREADY_RUNNING
echo [OK] The game server is already running.
echo [URL] http://localhost:%PORT%
start "" "http://localhost:%PORT%"
exit /b 0

:NODE_MISSING
echo [ERROR] Node.js is not installed or is not available in PATH.
echo.
echo Please install Node.js LTS from:
echo https://nodejs.org/
echo.
start "" "https://nodejs.org/"
pause
exit /b 1

:INSTALL_FAILED
echo.
echo [ERROR] Dependency installation failed.
echo Check your internet connection and run this file again.
pause
exit /b 1

:SERVER_FAILED
echo.
echo [ERROR] The game server stopped or failed to start.
echo If another program is using port %PORT%, close it and try again.
pause
exit /b 1
