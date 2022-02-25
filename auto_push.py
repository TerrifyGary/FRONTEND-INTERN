import os

print("What is your commit message? ")
os.system("git add ./")
os.system(f"git commit -m \"{input()}\"")
os.system("git push -u origin main")