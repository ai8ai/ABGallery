import os
import shutil
import sys
from PIL import Image
import imagehash

def get_image_hash(image_path):
    """Compute the perceptual hash of an image."""
    try:
        with Image.open(image_path) as img:
            return imagehash.phash(img)
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

def find_similar_images(folder, threshold=5):
    """Find and group similar images in a folder."""
    images = {}
    for file in os.listdir(folder):
        file_path = os.path.join(folder, file)
        if os.path.isfile(file_path) and file.lower().endswith(('png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp')):
            img_hash = get_image_hash(file_path)
            if img_hash:
                images[file_path] = img_hash

    print('hash done')
    similar_pairs = []
    checked = set()
    
    for img1, hash1 in images.items():
        for img2, hash2 in images.items():
            if img1 != img2 and (img2, img1) not in checked:
                diff = hash1 - hash2
                if diff <= threshold:
                    similar_pairs.append((img1, img2, diff))
                    print(len(similar_pairs))
                    print(img1)
                    print(img2)
                    checked.add((img1, img2))
    
    return similar_pairs

def move_similar_images(folder, similar_pairs):
    """Move similar images to a subfolder named 'ss'."""
    ss_folder = os.path.join(folder, 'ss')
    os.makedirs(ss_folder, exist_ok=True)
    
    moved_files = set()
    for img1, img2, _ in similar_pairs:
        for img in (img1, img2):
            if img not in moved_files:
                shutil.move(img, os.path.join(ss_folder, os.path.basename(img)))
                moved_files.add(img)
    print(f"Moved {len(moved_files)} similar images to '{ss_folder}'.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python id.py <foldername>")
        sys.exit(1)
    
    folder_name = sys.argv[1]
    if not os.path.isdir(folder_name):
        print("Error: Folder does not exist.")
        sys.exit(1)
    
    print("Identifying similar images...")
    similar_images = find_similar_images(folder_name)
    
    if similar_images:
        print("Moving similar images...")
        move_similar_images(folder_name, similar_images)
    else:
        print("No similar images found.")
