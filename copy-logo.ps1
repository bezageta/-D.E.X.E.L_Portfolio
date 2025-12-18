$source = "C:\Users\ZAK-TECH\Desktop\photo_2025-10-25 15.12.55.jpeg"
$destination = "c:\Users\ZAK-TECH\Desktop\dexel-websitee\dexel-website\public\logo.jpeg"

if (Test-Path $source) {
    Copy-Item -Path $source -Destination $destination -Force
    Write-Host "Logo copied successfully!" -ForegroundColor Green
} else {
    Write-Host "Source file not found: $source" -ForegroundColor Red
}
