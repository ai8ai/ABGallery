import os
import sys

def rename_largest_jpg_files(directory):
    # Get a list of all .jpg files in the directory
    jpg_files = [f for f in os.listdir(directory) if f.endswith('.jpg')]
    
    # Sort the files by size in descending order
    jpg_files.sort(key=lambda f: os.path.getsize(os.path.join(directory, f)), reverse=True)
    
    # Take the top 5 largest files
    largest_files = jpg_files[:5]
    
    # Rename the largest files to bb1.jpg, bb2.jpg, ..., bb5.jpg
    for i, filename in enumerate(largest_files, start=1):
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, f'bb{i}.jpg')
        
        # Check if the new filename already exists to avoid overwriting
        if os.path.exists(new_path):
            print(f"Error: {new_path} already exists. Skipping renaming of {filename}.")
        else:
            os.rename(old_path, new_path)
            print(f"Renamed {filename} to bb{i}.jpg")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python name.py <directory>")
    else:
        directory = sys.argv[1]
        if os.path.isdir(directory):
            rename_largest_jpg_files(directory)
        else:
            print(f"Error: {directory} is not a valid directory.")