# GitAdventure – Git Exercise Walkthrough

> **Student:** Dabe Chua  
> **Date Submitted:** May 16, 2025  
> **Project:** GitAdventure  
> **Purpose:** Practicing core Git commands for version control mastery

---

## ✅ Step-by-Step Git Commands Used

### 1. Initialize Git Repository
```bash
mkdir GitAdventure
cd GitAdventure
git init
```

### 2. Configure Git User Info
```bash
git config --global user.name "Dabe Chua"
git config --global user.email "dabewebdev@gmail.com"
```

### 3. Create and Commit `journey.txt`
```bash
echo "Embarking on my journey to master Git." > journey.txt
git add journey.txt
git commit -m "Add journey.txt with intro message"
```

### 4. Create and Commit `temp.txt`, then Delete
```bash
echo "This file is meant to be deleted." > temp.txt
git add temp.txt
git commit -m "Add temp.txt for deletion"

git rm temp.txt
git commit -m "Delete temp.txt"
```

### 5. Rename `journey.txt` to `adventure.txt` and Update Content
```bash
git mv journey.txt adventure.txt
echo "My journey evolves into an adventure with Git." > adventure.txt
git add adventure.txt
git commit -m "Rename journey.txt to adventure.txt and update content"
```

### 6. Create `.gitignore` to Ignore `.log` Files
```bash
echo "*.log" > .gitignore
git add .gitignore
git commit -m "Ignore .log files"

echo "This is a test log" > test.log
git status  # Confirm it's ignored
```

### 7. Add Final Line to `adventure.txt`
```bash
echo "Exploring the depths of Git commands and their powers." >> adventure.txt
git add adventure.txt
git commit -m "Add deeper insight to adventure.txt"
```

### 8. Revert `adventure.txt` to Original Version of `journey.txt`
```bash
git show a0319c6:journey.txt > adventure.txt
git add adventure.txt
git commit -m "Revert adventure.txt to original journey.txt content"
```

---

## 📜 Git Commit History Summary
```bash
git log --oneline
```

Expected output:
```
035939b - Add deeper insight to adventure.txt
6dfd33b - Ignore .log files
ee0bd06 - Rename journey.txt to adventure.txt and update content
8c682cf - Delete temp.txt
5d4ff00 - Add temp.txt for deletion
a0319c6 - Add journey.txt with intro message
```

---

## ✅ Exercise Complete
All steps in the GitAdventure exercise were completed, including history exploration and file restoration.

