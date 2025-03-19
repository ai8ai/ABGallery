from PIL import Image
import glob
import os

for file in glob.glob("*.png"):
    image = Image.open(file).convert("RGB")
    new_file = os.path.splitext(file)[0] + ".jpg"
    image.save(new_file)
    print(f"Converted {file} to {new_file}")

for file in glob.glob("*.webp"):
    image = Image.open(file).convert("RGB")
    image.save(file.replace("webp", "jpg"))
    
