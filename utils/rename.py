import os
import sys

def rename_largest_jpg_files_in_subfolders(directory):
    # Iterate over all subdirectories in the given directory
    for subdir in os.listdir(directory):
        subdir_path = os.path.join(directory, subdir)
        
        # Check if it's a directory
        if os.path.isdir(subdir_path):
            print(f"Processing subdirectory: {subdir}")
            
            # Get a list of all .jpg files in the subdirectory
            jpg_files = [f for f in os.listdir(subdir_path) if f.endswith('.jpg')]
            
            # Sort the files by size in descending order
            jpg_files.sort(key=lambda f: os.path.getsize(os.path.join(subdir_path, f)), reverse=True)
            
            # Take the top 5 largest files
            largest_files = jpg_files[:5]
            
            # Rename the largest files to bb1.jpg, bb2.jpg, ..., bb5.jpg
            for i, filename in enumerate(largest_files, start=1):
                old_path = os.path.join(subdir_path, filename)
                new_path = os.path.join(subdir_path, f'bb{i}.jpg')
                
                # Check if the new filename already exists to avoid overwriting
                if os.path.exists(new_path):
                    print(f"Error: {new_path} already exists. Skipping renaming of {filename}.")
                else:
                    os.rename(old_path, new_path)
                    print(f"Renamed {filename} to bb{i}.jpg in {subdir}")
        else:
            print(f"Skipping {subdir} (not a directory)")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python name.py <directory>")
    else:
        directory = sys.argv[1]
        if os.path.isdir(directory):
            rename_largest_jpg_files_in_subfolders(directory)
        else:
            print(f"Error: {directory} is not a valid directory.")