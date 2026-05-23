$publicDir = "c:\Users\aksha\OneDrive\Desktop\windsurf\astrivix-portfolio\public"
$tempDir = "c:\Users\aksha\OneDrive\Desktop\windsurf\astrivix-portfolio\public\temp_convert"
New-Item -ItemType Directory -Force -Path $tempDir

# Mappings of raw MOV files to clean web-safe mp4 filenames
$mappings = @{
    "Virtus gt.MOV" = "virtus-gt.mp4"
    "city old.MOV" = "city-old.mp4"
    "fortuner mafia'.MOV" = "fortuner-mafia.mp4"
    "fortuner mal audio.MOV" = "fortuner-mal.mp4"
    "jazz.MOV" = "jazz.mp4"
    "og lancer.MOV" = "og-lancer.mp4"
    "swift old.MOV" = "swift-old.mp4"
    "urban cruiser.MOV" = "urban-cruiser.mp4"
}

foreach ($item in $mappings.GetEnumerator()) {
    $movName = $item.Key
    $mp4Name = $item.Value
    $movPath = Join-Path $publicDir $movName
    $mp4Path = Join-Path $publicDir $mp4Name
    $tempPath = Join-Path $tempDir $mp4Name
    
    if (Test-Path $movPath) {
        Write-Host "------------------------------------------------"
        Write-Host "Transcoding full video: $movName -> $mp4Name"
        Write-Host "------------------------------------------------"
        # Run FFmpeg to encode to highly compatible H.264 8-bit YUV420p (required for Chrome/Edge/Firefox)
        # and AAC audio with faststart flag for instant streaming.
        # This will convert the ENTIRE full-duration video with no clipping!
        & ffmpeg -y -i $movPath -c:v libx264 -pix_fmt yuv420p -profile:v high -level:v 4.0 -c:a aac -b:a 128k -movflags +faststart $tempPath
        
        if (Test-Path $tempPath) {
            # Move converted file to final location (overwriting existing snippet)
            Move-Item -Path $tempPath -Destination $mp4Path -Force
            # Delete original MOV file to save space and clean up
            Remove-Item -Path $movPath -Force
            Write-Host "Success: Transcoded and cleaned up $movName!"
        }
    }
}

Remove-Item -Path $tempDir -Recurse -Force
Write-Host "------------------------------------------------"
Write-Host "ALL FULL-LENGTH VIDEOS FULLY OPTIMIZED FOR THE WEB!"
Write-Host "------------------------------------------------"
