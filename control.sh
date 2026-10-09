#!/bin/bash

echo "=============================="
echo "   CYBER GIRL CONTROL SYSTEM"
echo "=============================="
echo ""

check_file() {
    local file="$1"

    if [ -f "$file" ]; then
        echo "✓ $file"
    else
        echo "✗ $file MISSING"
    fi
}

echo "Checking website files..."
echo ""

check_file "about.html"
check_file "mission.html"
check_file "project.html"
check_file "structure.md"
check_file "web.css"
check_file "web.html"
check_file "web.js"

echo ""
echo "Checking image folder..."

if [ -d "image" ]; then
    echo "✓ image/ exists"
else
    echo "✗ image/ MISSING"
fi

echo ""
echo "System check complete."
echo "system finally succesfull"
# complete a basic bash file now extrame level up
echo "i complete my target nect 1 hour i practice hard than clear my bugs m ok"

ls -la | echo "this porgress is complete i fatser control ssyets and learning"
touch about.html mission.html project.html structure.md web.css web.html web.js
printf "soomething" > about.html
