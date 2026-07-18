$env:VCPKG_DISABLE_METRICS = 1

$env:VCPKG_ROOT =  Join-Path -Path "$PSScriptRoot" -ChildPath "vcpkg"
Write-Warning "`$env:VCPKG_ROOT = $env:VCPKG_ROOT`n"

$env:VCPKG_DOWNLOADS =  Join-Path -Path "$PSScriptRoot" -ChildPath "vcpkg_downloads"
Write-Warning "`$env:VCPKG_DOWNLOADS = $env:VCPKG_DOWNLOADS`n"

$env:PATH = "$env:VCPKG_ROOT;$env:PATH"

& "$( Join-Path -Path "$PSScriptRoot" -ChildPath "vcpkg/vcpkg.exe" )" @args
