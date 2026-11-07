@echo off
chcp 65001 >nul
title 呆毛博客 - 启动开发服务器
echo ========================================================
echo               正在启动「呆毛」博客开发服务器
echo ========================================================
echo.
echo 访问地址: http://localhost:8080
echo.
call npx pnpm docs:dev
pause
